import React from 'react'
import Image from 'next/image'

const HowItWorks = ({ data }) => {
  return (
    <section id="works" className="relative bg-gray-900 py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mx-auto text-4xl font-extrabold text-white md:text-6xl lg:text-5xl">
            {data.h2}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-400 md:text-2xl">
            {data.h3}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-400 md:text-2xl">
            {data['h3-p']}
          </p>
        </div>
        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 top-2 hidden md:block md:px-20 lg:px-28 xl:px-44">
            <Image
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
              width={1000}
              height={500}
              className="w-full"
            />
          </div>
          <div className="relative grid grid-cols-1 gap-x-12 gap-y-12 text-center md:grid-cols-3">
            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow">
                <span className="text-xl font-semibold text-gray-700">1</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-white md:mt-10">
                {data['h3-1']}
              </h3>
              <p className="mt-4 text-base text-gray-400 md:text-lg">{data['h3-1-p']}</p>
            </div>
            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow">
                <span className="text-xl font-semibold text-gray-700">2</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-white md:mt-10">
                {data['h3-2']}
              </h3>
              <p className="mt-4 text-base text-gray-400 md:text-lg">{data['h3-2-p']}</p>
            </div>
            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow">
                <span className="text-xl font-semibold text-gray-700">3</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-white md:mt-10">
                {data['h3-3']}
              </h3>
              <p className="mt-4 text-base text-gray-400 md:text-lg">{data['h3-3-p']}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 m-auto h-[357px] max-w-xs blur-[118px] sm:max-w-md md:max-w-lg"
        style={{
          background:
            'radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)',
        }}
      />
    </section>
  )
}

export default HowItWorks
