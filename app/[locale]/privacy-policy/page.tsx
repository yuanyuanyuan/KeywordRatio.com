import { Metadata } from 'next'
import { Others, allOthers } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/[locale]/seo'
import { createTranslation } from '../i18n/server'
import { LocaleTypes } from '../i18n/settings'

type MyProps = {
  params: { locale: LocaleTypes }
}
export const runtime = 'edge'
export async function generateMetadata({ params: { locale } }: MyProps): Promise<Metadata> {
  const { t } = await createTranslation(locale, 'privacy-policy')
  return genPageMetadata({
    title: t('title'),
    params: { locale: locale },
  })
}

export default async function Page({ params: { locale } }: MyProps) {
  const author = allOthers.find(
    (a) => a.slug.includes('default') && a.language === locale
  ) as Others
  const mainContent = coreContent(author)

  return (
    <>
      {/*// @ts-ignore*/}
      <AuthorLayout params={{ locale: locale }} content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  )
}
