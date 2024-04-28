import React, { useState } from 'react'
import * as XLSX from 'xlsx'

interface FileUploadProps {
  onFileUpload: (file: File | string) => void
}

const FileInputUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e.target.files', e.target.files)
    if (e.target.files) {
      const file = e.target.files[0]
      if (
        file &&
        file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      ) {
        const reader = new FileReader()
        reader.onload = (e: ProgressEvent<FileReader>) => {
          const data = e.target?.result as ArrayBuffer
          if (data) {
            const workbook = XLSX.read(data, { type: 'array' })
            const firstSheetName = workbook.SheetNames[0]
            const worksheet = workbook.Sheets[firstSheetName]
            const json = XLSX.utils.sheet_to_json(worksheet)
            // @ts-ignore
            onFileUpload(json)
          }
        }
        reader.readAsArrayBuffer(file)
      }
    } else {
      setInputValue(e.target.value)
    }
  }

  const handleSubmit = () => {
    console.log('handleSubmit', inputValue)
    onFileUpload(inputValue)
  }

  return (
    <div className="space-y-4 mt-2">
      <div className="max-w-sm">
        <form>
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input
              type="file"
              accept=".xlsx"
              onChange={handleInputChange}
              className="block w-full text-sm text-gray-500
        file:me-4 file:rounded-lg file:border-0
        file:bg-blue-700 file:px-4
        file:py-2 file:text-sm
        file:font-semibold file:text-white
        hover:file:bg-blue-400
        file:disabled:pointer-events-none file:disabled:opacity-50
        dark:text-neutral-500
        dark:file:bg-blue-800
        dark:hover:file:bg-blue-400
      "
            />
          </label>
        </form>
      </div>

      {/*<button onClick={handleSubmit} className="btn btn-primary">*/}
      {/*  Submit*/}
      {/*</button>*/}
    </div>
  )
}

export default FileInputUpload
