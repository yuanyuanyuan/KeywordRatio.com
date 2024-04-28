import React from 'react'
import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver' // 假设您已经安装了 file-saver 库

// 辅助函数，用于将字符串转换为ArrayBuffer
const s2ab = (s) => {
  const buf = new ArrayBuffer(s.length)
  const view = new Uint8Array(buf)
  for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff
  return buf
}

// React组件
const ExportButton = ({ data }) => {
  // 导出处理数据的函数
  const exportProcessedData = () => {
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(data)
    XLSX.utils.book_append_sheet(wb, ws, 'Processed Data')
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' })
    saveAs(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), 'processed-data.xlsx')
  }

  return (
    <button
      type="button"
      onClick={exportProcessedData}
      className="text-md border-medium-blue button-primary z-10 mt-3 inline-flex   space-x-2 rounded-lg bg-red-900 px-4  py-2 text-center font-medium tracking-wide  text-white hover:animate-none focus:animate-none"
    >
      <span>Export Excel</span>
    </button>
  )
}

export default ExportButton
