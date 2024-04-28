'use client'
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
import FileInputUpload from './FileInputUpload'
import BaseTable from './BaseTable'
import Link from '@/components/Link' // Assuming you have this component

const DynamicFileInputUpload = dynamic(() => import('./FileInputUpload'), {
  loading: () => <p>Loading...</p>,
})
const DynamicBaseTable = dynamic(() => import('./BaseTable'), {
  loading: () => <p>Loading...</p>,
})

const KeywordRoiCalculator = () => {
  const mockData = [
    {
      keyword: 'The Website You Want Without The Dev Time',
      volume: 100001, // 随机选择的 volume 值
      kd: 85, // 随机选择的 kd 值
      'CPC-USD': 1.5,
      allintitle: 2000, // 假设值
    },
    {
      keyword: 'running shoes',
      volume: 25000,
      kd: 70,
      'CPC-USD': 2.2,
      allintitle: 4000,
    },
    {
      keyword: 'basketball shoes',
      volume: 8000,
      kd: 50,
      'CPC-USD': 1.8,
      allintitle: 1000,
    },
    // ... 添加更多数据项以覆盖不同的 kd 和 volume 范围
    {
      keyword: 'hiking boots',
      volume: 5000,
      kd: 30,
      'CPC-USD': 2.5,
      allintitle: 800,
    },
    {
      keyword: '22222kids shoes',
      volume: 18000,
      kd: 15,
      'CPC-USD': 3.2,
      allintitle: 3000,
    },
    {
      keyword: '11111kids shoes',
      volume: 28000,
      kd: 5,
      'CPC-USD': 0.2,
      allintitle: 6000,
    },
    {
      keyword: '434324342 shoes',
      volume: 38000,
      kd: 0,
      'CPC-USD': 0.3,
      allintitle: 2000,
    },
  ]

  const [jsonData, setJsonData] = useState()

  useEffect(() => {
    // @ts-ignore
    setJsonData(mockData)
  }, [])

  const handleFileUpload = (data: File) => {
    // 处理文件或文本输入
    console.log('Data uploaded:', data)
    // 假设这里将数据转换为JSON
    const res = convertExcelDataToMockData(data)
    // @ts-ignore
    setJsonData(res)
  }

  const convertExcelDataToMockData = (excelData) => {
    return excelData.map((item) => {
      return {
        keyword: item.Keyword,
        volume: item['Search Volume'],
        kd: item.KD,
        'CPC-USD': item['CPC-USD'],
        allintitle: item['allintitle'],
      }
    })
  }

  console.log('jsonData', jsonData)

  return (
    <div id="main" className="font-rubik flex h-full min-h-screen w-full flex-col">
      <main className="flex-grow">
        <div className="flex justify-between">
          <DynamicFileInputUpload onFileUpload={handleFileUpload} />
          <button
            type="button"
            className="text-md border-medium-blue button-primary z-10 mt-3 inline-flex   space-x-2 rounded-lg bg-blue-900 px-4  py-2 text-center font-medium tracking-wide  text-white hover:animate-none focus:animate-none"
          >
            <Link
              href="/files/Keyword Golden Ratio Calculator-Keyword Difficult Value Ratio Calculator-Demo.xlsx"
              className=""
            >
              Download a template
            </Link>
          </button>
        </div>

        {jsonData && <DynamicBaseTable data={jsonData} />}
      </main>
    </div>
  )
}

export default KeywordRoiCalculator
