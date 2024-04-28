// 'use client'

import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

import SocialIcon from '@/components/social-icons'

import { useParams } from 'next/navigation'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import { useTranslation } from 'app/[locale]/i18n/client'

// import { useContactModal } from './formspree/store'
import { ContactModal } from './formspree'
import { createTranslation } from '../app/[locale]/i18n/server'
import Logo from '@/data/logo.svg'
import { slug } from 'github-slugger'

export default async function Footer({ locale = 'en' }) {
  // const locale = useParams()?.locale as LocaleTypes
  // @ts-ignore
  const { t } = await createTranslation(locale, 'footer')
  // const { t } = useTranslation(locale, 'footer')
  // const contactModal = useContactModal()

  // const handleContactClick = (): void => {
  //   contactModal.onOpen()
  // }

  // function ContactClick(): void {
  //   handleContactClick()
  // }

  return (
    <footer>
      <div className="bg-gray-800 py-4 text-gray-400">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="my-4 w-full px-4 xl:w-1/5">
              <a href="/" className="mb-10 block w-10">
                <Logo />
              </a>
              <p className="text-justify">{t('title')}</p>
            </div>

            <div className="my-4 w-full px-4 sm:w-auto">
              <div>
                <p className="mb-4 inline-block border-b-4 border-blue-600 pb-4 text-2xl">
                  {t('company')}
                </p>
              </div>
              <ul className="leading-8">
                <li>
                  <Link
                    href={`/${locale}/about`}
                    target="_blank"
                    className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                    aria-label={`About Us`}
                  >
                    About Us
                  </Link>
                </li>
                {/*<li>*/}
                {/*  <a href="#" className="hover:text-blue-400">*/}
                {/*    Terms &amp; Conditions*/}
                {/*  </a>*/}
                {/*</li>*/}
                <li>
                  <Link
                    href={`/${locale}/privacy-policy`}
                    target="_blank"
                    className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                    aria-label={t('privacy-policy')}
                  >
                    {t('privacy-policy')}
                  </Link>
                </li>
                {/*<li>*/}
                {/*  <a href="#" className="hover:text-blue-400">*/}
                {/*    Contact Us*/}
                {/*  </a>*/}
                {/*</li>*/}
              </ul>
            </div>
            {/*<div className="my-4 w-full px-4 sm:w-auto">*/}
            {/*  <div>*/}
            {/*    <h3 className="mb-4 inline-block border-b-4 border-blue-600 pb-4 text-2xl">Blog</h3>*/}
            {/*  </div>*/}
            {/*  <ul className="leading-8">*/}
            {/*    <li>*/}
            {/*      <a href="#" className="hover:text-blue-400">*/}
            {/*        Getting Started With HTML and CSS*/}
            {/*      </a>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <a href="#" className="hover:text-blue-400">*/}
            {/*        What Is Flex And When to Use It?*/}
            {/*      </a>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <a href="#" className="hover:text-blue-400">*/}
            {/*        How TailwindCSS Can Help Your Productivity?*/}
            {/*      </a>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <a href="#" className="hover:text-blue-400">*/}
            {/*        5 Tips to Make Responsive Website*/}
            {/*      </a>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <a href="#" className="hover:text-blue-400">*/}
            {/*        See More*/}
            {/*      </a>*/}
            {/*    </li>*/}
            {/*  </ul>*/}
            {/*</div>*/}
            <div className="my-4 w-full px-4 sm:w-auto xl:w-1/4">
              <div>
                <p className="mb-4 inline-block border-b-4 border-blue-600 pb-4 text-2xl">
                  {t('contact')}
                </p>
              </div>
              <div className="flex">
                <div className="flex items-center">
                  <SocialIcon kind="github" href={siteMetadata.github} size={6} />
                </div>
                {/*<div className="flex items-center">*/}
                {/*  <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />*/}
                {/*</div>*/}
                {/*<div className="flex items-center">*/}
                {/*  <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />*/}
                {/*</div>*/}
                {/*<div className="flex items-center">*/}
                {/*  <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />*/}
                {/*</div>*/}
                <div className="flex items-center">
                  <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
                </div>
              </div>
              <div className="flex flex-col">
                Email:
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#">{siteMetadata['email']}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-indigo-700 py-4 text-gray-100">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="flex w-full px-4 text-center sm:w-auto sm:text-left">
              <div>{siteMetadata.author}</div>
              <div>{` • `}</div>
              <div>{`© ${new Date().getFullYear()}`}</div>
              <div>{` • `}</div>
              <Link href="/">{siteMetadata['siteName']}</Link>
            </div>
            <div className="w-full px-4 text-center sm:w-auto sm:text-left">
              Made with ❤️ by
              <Link href="https://github.com/PxlSyl/tailwind-nextjs-starter-blog-i18n">
                tailwind-nextjs-starter-blog-i18n
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*<div className="mt-16 flex flex-col items-center">*/}
      {/*  <div className="mb-3 flex space-x-4">*/}
      {/*    <div className="flex items-center">*/}
      {/*      {*/}
      {/*        siteMetadata.formspree === false ? (*/}
      {/*            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6}/>*/}
      {/*        ) : null*/}
      {/*        // <button className="flex items-center focus:outline-none" onClick={ContactClick}>*/}
      {/*        //   <SocialIcon kind="mail" size={6} />*/}
      {/*        // </button>*/}
      {/*      }*/}
      {/*    </div>*/}
      {/*    <div className="flex items-center">*/}
      {/*      <SocialIcon kind="github" href={siteMetadata.github} size={6}/>*/}
      {/*    </div>*/}
      {/*    /!*<div className="flex items-center">*!/*/}
      {/*    /!*  <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />*!/*/}
      {/*    /!*</div>*!/*/}
      {/*    /!*<div className="flex items-center">*!/*/}
      {/*    /!*  <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />*!/*/}
      {/*    /!*</div>*!/*/}
      {/*    /!*<div className="flex items-center">*!/*/}
      {/*    /!*  <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />*!/*/}
      {/*    /!*</div>*!/*/}
      {/*    <div className="flex items-center">*/}
      {/*      <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6}/>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">*/}
      {/*    <div>{siteMetadata.author}</div>*/}
      {/*    <div>{` • `}</div>*/}
      {/*    <div>{`© ${new Date().getFullYear()}`}</div>*/}
      {/*    <div>{` • `}</div>*/}
      {/*    <Link href="/">{maintitle[locale]}</Link>*/}
      {/*  </div>*/}
      {/*  <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">*/}
      {/*    Thanks by*/}
      {/*    <Link href="https://github.com/PxlSyl/tailwind-nextjs-starter-blog-i18n">*/}
      {/*      {t('theme')}*/}
      {/*    </Link>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </footer>
    // <ContactModal />
  )
}
