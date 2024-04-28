// FaqsComponent.js
import React from 'react'
import AnswerSvg from './answer.svg'
import QuestionSvg from './question.svg'

const Faqs = ({ data }) => {
  return (
    <div className="bg-white py-4 dark:bg-black dark:text-white">
      <div className="mx-auto flex max-w-screen-md flex-col justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-regular mt-4 text-sm leading-7 text-gray-500">F.A.Q</p>
          <h2 className="text-3xl font-extrabold leading-normal tracking-tight  sm:text-4xl">
            {data.h2} <span className="text-indigo-600">Questions</span>
          </h2>
        </div>
        <div className="mt-20">
          <ul>
            <li className="mb-10 text-left">
              <div className="mb-5 flex flex-row items-start">
                {/* SVG 图标，使用 dark 模式类 */}
                <div className="mr-3 hidden items-center justify-center rounded-full border-4 border-white bg-indigo-500 p-3 text-xl font-semibold text-white dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 sm:flex">
                  <QuestionSvg />
                </div>
                <div className="flex w-full items-center bg-gray-100 p-5 px-10 dark:bg-gray-900 dark:text-white">
                  <h3 className="text-md font-medium leading-6 text-gray-900 dark:text-white">
                    {data['h3-1']}
                  </h3>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <div className="flex w-full items-center bg-indigo-100 p-5 px-10 dark:bg-indigo-700 dark:text-white">
                  <p className="text-sm text-gray-700 dark:text-white">{data['h3-1-p1']}</p>
                </div>
                {/* 响应式和暗色模式兼容的 SVG */}
                <div className="ml-2 mr-1 hidden items-center justify-center rounded-full border-4 border-white bg-indigo-500 p-3 text-xl font-semibold text-white dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 sm:flex">
                  <AnswerSvg />
                </div>
              </div>
            </li>
            <li className="mb-10 text-left">
              <div className="mb-5 flex flex-row items-start">
                {/* SVG 图标，使用 dark 模式类 */}
                <div className="mr-3 hidden items-center justify-center rounded-full border-4 border-white bg-indigo-500 p-3 text-xl font-semibold text-white dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 sm:flex">
                  <QuestionSvg />
                </div>
                <div className="flex w-full items-center bg-gray-100 p-5 px-10 dark:bg-gray-900 dark:text-white">
                  <h3 className="text-md font-medium leading-6 text-gray-900 dark:text-white">
                    {data['h3-2']}
                  </h3>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <div className="flex w-full items-center bg-indigo-100 p-5 px-10 dark:bg-indigo-700 dark:text-white">
                  <p className="text-sm text-gray-700 dark:text-white">{data['h3-2-p1']}</p>
                </div>
                {/* 响应式和暗色模式兼容的 SVG */}
                <div className="ml-2 mr-1 hidden items-center justify-center rounded-full border-4 border-white bg-indigo-500 p-3 text-xl font-semibold text-white dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 sm:flex">
                  <AnswerSvg />
                </div>
              </div>
            </li>
            <li className="mb-10 text-left">
              <div className="mb-5 flex flex-row items-start">
                {/* SVG 图标，使用 dark 模式类 */}
                <div className="mr-3 hidden items-center justify-center rounded-full border-4 border-white bg-indigo-500 p-3 text-xl font-semibold text-white dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 sm:flex">
                  <QuestionSvg />
                </div>
                <div className="flex w-full items-center bg-gray-100 p-5 px-10 dark:bg-gray-900 dark:text-white">
                  <h3 className="text-md font-medium leading-6 text-gray-900 dark:text-white">
                    {data['h3-3']}
                  </h3>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <div className="flex w-full items-center bg-indigo-100 p-5 px-10 dark:bg-indigo-700 dark:text-white">
                  <p className="text-sm text-gray-700 dark:text-white">{data['h3-3-p1']}</p>
                </div>
                {/* 响应式和暗色模式兼容的 SVG */}
                <div className="ml-2 mr-1 hidden items-center justify-center rounded-full border-4 border-white bg-indigo-500 p-3 text-xl font-semibold text-white dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 sm:flex">
                  <AnswerSvg />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Faqs
