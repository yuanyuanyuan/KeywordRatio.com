'use client'
import React, { useEffect, useState } from 'react'
import { hasCookie, setCookie } from 'cookies-next'
import Link from '@/components/Link'

const CookieConsent = (props) => {
  const [showConsent, setShowConsent] = React.useState(true)

  React.useEffect(() => {
    setShowConsent(hasCookie('localConsent'))
  }, [])

  const acceptCookie = () => {
    setShowConsent(true)
    setCookie('localConsent', 'true', {})
  }

  if (showConsent) {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-20 bg-gray-400 dark:bg-slate-700">
      <div className={`flex items-center justify-between px-4 py-4`}>
        <p className="text-base">
          This website uses cookies to improve user experience. By using our website you consent to
          all cookies in accordance with our Cookie
          <Link
            href="/privacy-policy"
            className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600  text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500"
          >
            {' '}
            Policy
          </Link>
          .
        </p>
        <button
          className={`rounded bg-green-500 px-8  py-2 text-white dark:bg-green-400`}
          onClick={acceptCookie}
        >
          Accept
        </button>
      </div>
    </div>
  )
}

export default CookieConsent
