import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from '@/components/NewsletterForm'
import { createTranslation } from './i18n/server'
import { LocaleTypes } from './i18n/settings'
import KeywordRoiCalculator from '@/components/KeywordRoiCalculator'
import Hero from '@/components/KeywordRoiCalculator/Hero'
import Feature from '@/components/KeywordRoiCalculator/Feature'
import HowToGuide from '@/components/KeywordRoiCalculator/HowToGuide'
import Faqs from '@/components/KeywordRoiCalculator/Faqs'

interface Post {
  slug: string
  date: string
  title: string
  summary?: string | undefined
  tags: string[]
  language: string
  draft?: boolean
}

interface HomeProps {
  posts: Post[]
  params: { locale: LocaleTypes }
}

const MAX_DISPLAY = 5

export default async function Home({ posts, params: { locale } }: HomeProps) {
  // const { t } = await createTranslation(locale, 'home')

  const { t } = await createTranslation(locale, 'projects')
  const heroData = {
    h1: t('hero.h1'),
    h2: t('hero.h2'),
    button: t('hero.button'),
  }
  const featureData = {
    h2: t('feature.h2'),
    'h3-1': t('feature.h3-1'),
    'h3-1-p1': t('feature.h3-1-p1'),
    'h3-2': t('feature.h3-2'),
    'h3-2-p1': t('feature.h3-2-p1'),
    'h3-2-p2': t('feature.h3-2-p2'),
    'h3-3': t('feature.h3-3'),
    'h3-3-p1': t('feature.h3-3-p1'),
    'h3-3-p2': t('feature.h3-3-p2'),
  }
  const howToGuideData = {
    h2: t('howTo.h2'),
    h3: t('howTo.h3'),
    'h3-p': t('howTo.h3-p'),
    'h3-1': t('howTo.h3-1'),
    'h3-1-p': t('howTo.h3-1-p'),
    'h3-2': t('howTo.h3-2'),
    'h3-2-p': t('howTo.h3-2-p'),
    'h3-3': t('howTo.h3-3'),
    'h3-3-p': t('howTo.h3-3-p'),
  }
  const faqsData = {
    h2: t('faqs.h2'),
    'h3-1': t('faqs.h3-1'),
    'h3-1-p1': t('faqs.h3-1-p1'),
    'h3-2': t('faqs.h3-2'),
    'h3-2-p1': t('faqs.h3-2-p1'),
    'h3-3': t('faqs.h3-3'),
    'h3-3-p1': t('faqs.h3-3-p1'),
  }

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <Hero data={heroData}></Hero>

        <KeywordRoiCalculator></KeywordRoiCalculator>

        <Feature data={featureData}></Feature>
        <HowToGuide data={howToGuideData}></HowToGuide>
        <Faqs data={faqsData}></Faqs>

        {/*<div className="space-y-2 pb-8 pt-6 md:space-y-5">*/}
        {/*  <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">*/}
        {/*    {t('greeting')}*/}
        {/*  </h1>*/}
        {/*  /!*  <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{t('description')}</p>*!/*/}
        {/*</div>*/}
        {/*<ul className="divide-y divide-gray-200 dark:divide-gray-700">*/}
        {/*  {!posts.length && t('noposts')}*/}
        {/*  {posts*/}
        {/*    .filter((p) => p.language === locale)*/}
        {/*    .slice(0, MAX_DISPLAY)*/}
        {/*    .map((post) => {*/}
        {/*      const { slug, date, title, summary, tags, language } = post*/}
        {/*      if (language === locale) {*/}
        {/*        return (*/}
        {/*          <li key={slug} className="py-12">*/}
        {/*            <article>*/}
        {/*              <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">*/}
        {/*                <dl>*/}
        {/*                  <dt className="sr-only">{t('pub')}</dt>*/}
        {/*                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">*/}
        {/*                    <time dateTime={date}>{formatDate(date, locale)}</time>*/}
        {/*                  </dd>*/}
        {/*                </dl>*/}
        {/*                <div className="space-y-5 xl:col-span-3">*/}
        {/*                  <div className="space-y-6">*/}
        {/*                    <div>*/}
        {/*                      <h2 className="text-2xl font-bold leading-8 tracking-tight">*/}
        {/*                        <Link*/}
        {/*                          href={`/${locale}/blog/${slug}`}*/}
        {/*                          className="text-gray-900 dark:text-gray-100"*/}
        {/*                        >*/}
        {/*                          {title}*/}
        {/*                        </Link>*/}
        {/*                      </h2>*/}
        {/*                      <div className="flex flex-wrap">*/}
        {/*                        {tags.map((tag: string) => (*/}
        {/*                          <Tag key={tag} text={tag} params={{ locale: locale }} />*/}
        {/*                        ))}*/}
        {/*                      </div>*/}
        {/*                    </div>*/}
        {/*                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">*/}
        {/*                      {summary!.length > 149 ? `${summary!.substring(0, 149)}...` : summary}*/}
        {/*                    </div>*/}
        {/*                  </div>*/}
        {/*                  <div className="text-base font-medium leading-6">*/}
        {/*                    <Link*/}
        {/*                      href={`/${locale}/blog/${slug}`}*/}
        {/*                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"*/}
        {/*                      aria-label={`${t('more')}"${title}"`}*/}
        {/*                    >*/}
        {/*                      {t('more')} &rarr;*/}
        {/*                    </Link>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*            </article>*/}
        {/*          </li>*/}
        {/*        )*/}
        {/*      }*/}
        {/*    })}*/}
        {/*</ul>*/}
      </div>
      {/*{posts.length > MAX_DISPLAY && (*/}
      {/*  <div className="flex justify-end text-base font-medium leading-6">*/}
      {/*    <Link*/}
      {/*      href={`/${locale}/blog`}*/}
      {/*      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"*/}
      {/*      aria-label={t('all')}*/}
      {/*    >*/}
      {/*      {t('all')} &rarr;*/}
      {/*    </Link>*/}
      {/*  </div>*/}
      {/*)}*/}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
