// components/KdFilter.js
import React, { useState } from 'react'

const KdFilterButton = ({
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
    <div className="relative text-xl">
      <button
        type="button"
        className="text-md border-medium-blue button-primary z-10 mt-3 inline-flex   space-x-2 rounded-lg bg-indigo-900 px-4  py-2 text-center font-medium tracking-wide  text-white hover:animate-none focus:animate-none"
        aria-label="Toggle KD Filter"
        onClick={onToggle}
      >
        {values.length ? (
          <div className="flex">
            <span className="mr-2">
              KD: {values[0]}-{values[1]}%
            </span>
            {/* eslint-disable-next-line  */}
            <img
              src="/icons/close.svg"
              width="14"
              alt="Close filter"
              onClick={(e) => {
                e.stopPropagation()
                onReset(e)
              }}
            />
          </div>
        ) : (
          <div className="flex">
            <span className="text-gray mr-6">KD %</span>
            <img className="" src="/icons/dropdown.svg" width="12" alt="Open filter" />
          </div>
        )}
      </button>
      {visible && (
        <div className="absolute left-0 top-full z-20 mt-2 w-full rounded-lg bg-gray-400 py-2 text-white shadow-lg">
          {selections.map((item, index) => (
            // eslint-disable-next-line
            <div
              key={index}
              className="flex-center cursor-pointer px-4 py-2"
              onClick={() => onUpdate(item)}
            >
              <span className="text-gray">
                {item[0]}-{item[1]}%
              </span>
            </div>
          ))}
          <div className="border-gray m-2 border-t"></div>
          <div className="flex-column px-2 py-1.5">
            <span>Custom Range</span>
            <input
              value={min}
              onChange={(e) => setMin(e.target.value)}
              type="number"
              className="w-full text-white dark:text-black"
              placeholder="Min"
            />
            <input
              value={max}
              onChange={(e) => setMax(e.target.value)}
              type="number"
              className="button-base w-full text-white dark:text-black"
              placeholder="Max"
            />
            <button
              className="button-base button-shadow w-full bg-orange"
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

export default KdFilterButton
