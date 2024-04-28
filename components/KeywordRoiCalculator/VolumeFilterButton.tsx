// components/VolumeFilter.js
import React, { useState } from 'react'

const formatNumber = (value) => {
  if (!value) return '0'
  return parseInt(value).toLocaleString('en-US')
}

const VolumeFilterButton = ({
  visible,
  selections,
  values,
  onToggle,
  onReset,
  onUpdate,
  onCustomUpdate,
}) => {
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')

  return (
    <div className="relative flex text-xl">
      <button
        type="button"
        className="text-md border-medium-blue z-10 mt-3 inline-flex space-x-2  rounded-lg bg-indigo-900  px-4 py-2  text-center font-medium  tracking-wide text-white "
        onClick={onToggle}
      >
        {values.length > 0 ? (
          <div className="flex">
            <span className="mr-2">
              Volume:{' '}
              {values[1] === 99999999
                ? formatNumber(values[0]) + '+'
                : `${formatNumber(values[0])}-${formatNumber(values[1])}`}
            </span>
            <img
              src="/icons/close.svg"
              width="14"
              onClick={(e) => {
                e.stopPropagation()
                onReset(e)
              }}
              alt="Close icon"
            />
          </div>
        ) : (
          <div className="flex">
            <span className="mr-14">Volume</span>
            <img className="" src="/icons/dropdown.svg" width="12" alt="Dropdown icon" />
          </div>
        )}
      </button>
      {visible && (
        <div className="absolute left-0 top-full z-20 mt-2 w-full rounded-lg bg-gray-400 py-2 text-white shadow-lg">
          {selections.map((item, index) => (
            <div
              key={index}
              className="flex cursor-pointer px-4 py-2"
              onClick={() => onUpdate(item)}
            >
              {item[1] === 99999999 ? (
                <span>{formatNumber(item[0])}+</span>
              ) : (
                <span>
                  {formatNumber(item[0])}-{formatNumber(item[1])}
                </span>
              )}
            </div>
          ))}
          <div className="border-gray m-2 border-t"></div>
          <div className="space-y-2 px-2 py-1.5">
            <span>Custom Range</span>
            <input
              value={min}
              onChange={(e) => setMin(e.target.value)}
              type="number"
              className="w-full rounded-lg px-4 py-2 text-sm text-white focus:outline-none dark:text-black"
              placeholder="From"
            />
            <input
              value={max}
              onChange={(e) => setMax(e.target.value)}
              type="number"
              className="w-full rounded-lg px-4 py-2 text-sm text-white focus:outline-none dark:text-black"
              placeholder="To"
            />
            <button
              className="w-full items-center justify-center rounded-lg bg-orange py-1.5 text-sm font-medium shadow-button-primary transition-all duration-100 hover:bg-orangeHover active:bg-orange"
              onClick={() => onCustomUpdate([parseInt(min, 10), parseInt(max, 10)])}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default VolumeFilterButton
