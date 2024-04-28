import React from 'react'

const Feature = ({ data }) => {
  return (
    <div className="bg-white py-12 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center lg:text-center">
          <h2 className="mb-4 rounded-lg bg-blue-600 px-3 text-base font-semibold uppercase leading-7 text-blue-100 lg:mb-8">
            {data.h2}
          </h2>
          <h3 className="text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-7xl">
            <span className="bg-gradient-to-r from-blue-500 from-blue-700 via-blue-600 via-blue-800 to-gray-700 to-gray-900 bg-clip-text text-transparent dark:bg-gradient-to-r">
              {data['h3-1']}
            </span>
          </h3>
          <p className="text-md mt-6 max-w-lg text-center text-gray-600 dark:text-gray-400">
            {data['h3-1-p']}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    ></path>
                  </svg>
                </div>
                <h3>{data['h3-2']}</h3>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                {data['h3-2-p1']}
              </dd>
              <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                {data['h3-2-p2']}
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    ></path>
                  </svg>
                </div>
                <h3>{data['h3-3']}</h3>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                {data['h3-3-p1']}
              </dd>
              <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                {data['h3-3-p2']}
              </dd>
            </div>
            {/* ... 其他列表项 ... */}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Feature
