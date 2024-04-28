// components/BaseTable.js

import React, { useEffect, useState } from 'react'
import Link from '@/components/Link'
import ExportButton from '@/components/KeywordRoiCalculator/ExportButton'
import KdFilterButton from '@/components/KeywordRoiCalculator/KdFitlerButton'
import VolumeFilterButton from '@/components/KeywordRoiCalculator/VolumeFilterButton'
import { useReactTable } from '@tanstack/react-table'

interface IDataItem {
  keyword: string
  kd: number
  volume: number
  'CPC-USD': number
  allintitle: number
  // 定义其他必要的字段
}
interface IProcessedDataItem extends IDataItem {
  roi: number
  kgr: number
  url: string
  kgrStatus: string
}

const BaseTable = ({ data }: { data: IDataItem[] }) => {
  console.log('BaseTable data', data)

  //----------init
  // State variables

  const [originalData, setOriginalData] = useState<IDataItem[]>([])
  const [processedArr, setProcessedArr] = useState<IProcessedDataItem[]>([])

  // KD State
  const [kdVisible, setKdVisible] = useState(false)
  const [kdValues, setKdValues] = useState([])
  const [kdSelections] = useState([
    [85, 100],
    [70, 84],
    [50, 69],
    [30, 49],
    [15, 29],
    [0, 14],
  ])
  const [kdMin, setKdMin] = useState('')
  const [kdMax, setKdMax] = useState('')

  // Volume State
  const [volumeVisible, setVolumeVisible] = useState(false)
  const [volumeValues, setVolumeValues] = useState([])
  const [volumeSelections] = useState([
    [100001, 99999999],
    [10001, 100000],
    [1001, 10000],
    [101, 1000],
    [11, 100],
    [1, 10],
  ])
  const [volumeMin, setVolumeMin] = useState('')
  const [volumeMax, setVolumeMax] = useState('')

  // Update Functions for KD
  function updateKdVisible(visible) {
    setKdVisible(visible)
  }

  function updateKdValues(values) {
    setKdValues(values)
  }

  function updateKdRange(min, max) {
    setKdMin(min)
    setKdMax(max)
  }

  // Update Functions for Volume
  function updateVolumeVisible(visible) {
    setVolumeVisible(visible)
  }

  function updateVolumeValues(values) {
    setVolumeValues(values)
  }

  function updateVolumeRange(min, max) {
    setVolumeMin(min)
    setVolumeMax(max)
  }

  // ROI颜色映射
  const roiColorMap = {
    low: 'text-green-500', // Adjust the shade number as needed
    medium: 'text-yellow-500', // Adjust the shade number as needed
    high: 'text-orange', // Adjust the shade number as needed
    veryHigh: 'text-red-500', // Adjust the shade number as needed
  }

  // KGR颜色映射
  const kgrColorMap = {
    low: 'text-green-500', // Adjust the shade number as needed
    moderate: 'text-yellow-500', // Adjust the shade number as needed
    poor: 'text-red-500', // Adjust the shade number as needed
  }

  const getRoiColor = (roi) => {
    // 根据roi的值返回对应的颜色类
    if (roi >= 1000) return roiColorMap.veryHigh
    if (roi >= 500) return roiColorMap.high
    if (roi >= 100) return roiColorMap.medium
    return roiColorMap.low
  }

  const getKgrColor = (kgr) => {
    // 根据kgr的值返回对应的颜色类
    if (kgr < 0.25) return kgrColorMap.low
    if (kgr <= 1.0) return kgrColorMap.moderate
    return kgrColorMap.poor
  }
  // -----------hook

  useEffect(() => {
    console.log('BaseTable useEffect data')
    setOriginalData(data) // Set original data whenever 'data' prop changes
    renderProcessData(data) // Assuming "data" is the prop receiving mockData
  }, [data])

  // ------function

  // Data processing function
  const renderProcessData = (jsonData: IDataItem[], kdRange = [], volumeRange = []) => {
    console.log('renderProcessData -1', jsonData, kdRange, volumeRange)

    // 首先，根据KD和Volume的范围进行过滤
    const filteredData = jsonData.filter((item) => {
      const isKdInRange = kdRange.length > 0 ? item.kd >= kdRange[0] && item.kd <= kdRange[1] : true
      const isVolumeInRange =
        volumeRange.length > 0
          ? item.volume >= volumeRange[0] && item.volume <= volumeRange[1]
          : true
      return isKdInRange && isVolumeInRange
    })
    console.log('renderProcessData filteredData', filteredData, kdRange, volumeRange)
    // 然后，对过滤后的数据进行处理，计算ROI和KGR等值
    const processedData = filteredData.map((item) => {
      const roi = item.kd !== 0 ? (item.volume * item['CPC-USD']) / item.kd : 0
      const kgr = item.allintitle && item.volume > 0 ? item.allintitle / item.volume : 0
      return {
        ...item,
        roi: Number(roi.toFixed(2)),
        kgr: Number(kgr.toFixed(2)),
        url: `https://www.google.com/search?q=${item.keyword}`,
        // kgrStatus:
        //   kgr <= 0.25 ? 'High opportunity' : kgr <= 1.0 ? 'Medium opportunity' : 'Low opportunity',
      }
    })
    console.log('renderProcessData processedData', processedData, kdRange, volumeRange)
    // 最后，根据ROI对处理后的数据进行降序排序
    processedData.sort((a, b) => b.roi - a.roi)

    // @ts-ignore
    setProcessedArr(processedData)
  }

  // Filtering functions
  const updateKd = (rangeArr) => {
    const adjustedRange = adjustRangeArr(rangeArr, 0, 100)
    updateKdVisible(false)
    updateKdValues(adjustedRange)

    console.log('updateKd adjustedRange', adjustedRange)

    filterOriginalArr(adjustedRange, volumeValues)
  }

  const resetKd = (e) => {
    console.log('resetKd')

    updateKdVisible(false)
    updateKdValues([])
    setKdMin('')
    setKdMax('')
    renderProcessData(originalData, [], volumeValues)
    e.preventDefault()
    return false
  }

  // Update Volume based on selected range
  const updateVolume = (rangeArr) => {
    const adjustedRange = adjustRangeArr(rangeArr, 1, 99999999)
    updateVolumeVisible(false)
    updateVolumeValues(adjustedRange)

    console.log('updateVolume adjustedRange', adjustedRange)

    filterOriginalArr(kdValues, adjustedRange)
  }

  // Reset Volume to initial state
  const resetVolume = (e) => {
    console.log('resetVolume')
    updateVolumeVisible(false)
    updateVolumeValues([])
    setVolumeMin('')
    setVolumeMax('')
    renderProcessData(originalData, kdValues, [])
    e.preventDefault()
    return false
  }

  const adjustRangeArr = (rangeArr, minValue, maxValue) => {
    if (rangeArr.length) {
      rangeArr[0] = parseInt(rangeArr[0] || minValue)
      rangeArr[1] = parseInt(rangeArr[1] || maxValue)
      if (rangeArr[0] > rangeArr[1]) rangeArr = [rangeArr[1], rangeArr[0]]
    }
    return rangeArr
  }

  // Filtering functions use originalData
  // Filtering function that takes both KD and Volume filters as parameters
  const filterOriginalArr = (kdRange, volumeRange) => {
    // 使用提供的kdRange和volumeRange参数重新过滤原始数据
    renderProcessData(originalData, kdRange, volumeRange)
  }

  // 使用KdFilter组件
  const kdFilter = (
    <KdFilterButton
      visible={kdVisible}
      selections={kdSelections}
      values={kdValues}
      onToggle={() => setKdVisible(!kdVisible)}
      onReset={resetKd}
      onUpdate={updateKd}
      onCustomUpdate={(minMax) => updateKd(minMax)}
    />
  )
  // 使用VolumeFilter组件
  const volumeFilter = (
    <VolumeFilterButton
      visible={volumeVisible}
      selections={volumeSelections}
      values={volumeValues}
      onToggle={() => setVolumeVisible(!volumeVisible)}
      onReset={resetVolume}
      onUpdate={updateVolume}
      onCustomUpdate={(minMax) => updateVolume(minMax)}
    />
  )

  // Render the table
  return (
    <div className="mt-6 flex w-full flex-col space-y-8 px-4 sm:mt-12 sm:px-2 md:space-x-10 ">
      {/* Filter Buttons */}
      <div className="mb-2 flex justify-end space-x-4">
        {kdFilter}

        {volumeFilter}

        <ExportButton data={processedArr}></ExportButton>
      </div>
      <div className="mx-auto  w-full overflow-auto rounded-lg shadow-md">
        {/* Table with responsive design using Tailwind CSS */}
        <table className="min-w-full  divide-y divide-gray-200">
          <thead className="">
            <tr className="">
              <th className="sticky  left-0 top-0 z-10 block w-24 text-wrap px-6 py-3 text-left text-xl font-medium uppercase tracking-wider sm:w-16 md:w-24">
                Keyword
              </th>
              <th className="px-6 py-3 text-center text-xl font-medium uppercase tracking-wider">
                Search Volume
              </th>
              <th className="px-6 py-3 text-center text-xl font-medium uppercase tracking-wider ">
                Allintitle Volume
              </th>
              <th className="px-6 py-3 text-center text-xl font-medium uppercase tracking-wider ">
                KD
              </th>
              <th className="px-6 py-3 text-center text-xl font-medium uppercase tracking-wider ">
                CPC(USD)
              </th>
              <th className="px-6 py-3 text-center text-xl font-medium uppercase tracking-wider ">
                KEDR
              </th>
              <th className="px-6 py-3 text-center text-xl font-medium uppercase tracking-wider">
                kGROI
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-400 dark:text-gray-400">
            {processedArr.map((item, index) => (
              <tr key={index}>
                <td className=" sticky left-0 z-10  whitespace-nowrap  px-6 py-4 text-xl font-medium ">
                  <Link
                    href={item.url}
                    className=" block w-24 text-wrap text-primary-400 underline hover:text-primary-600  dark:hover:text-primary-400 sm:w-16 md:w-28 "
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Keyword Link"
                  >
                    {item.keyword}
                  </Link>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-center text-xl ">{item.volume}</td>
                <td className="whitespace-nowrap px-6 py-4 text-center text-xl ">
                  {item.allintitle}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-center text-xl ">{item.kd}</td>
                <td className="whitespace-nowrap px-6 py-4 text-center text-xl ">
                  {item['CPC-USD']}
                </td>
                <td
                  className={`whitespace-nowrap px-6 py-4 text-center text-xl ${getRoiColor(item.roi)}`}
                >
                  {item.roi}
                </td>
                <td
                  className={`whitespace-nowrap px-6 py-4 text-center text-xl ${getKgrColor(item.kgr)}`}
                >
                  {item.kgr}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BaseTable
