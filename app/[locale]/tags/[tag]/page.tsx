import { Metadata } from 'next'
import { POSTS_PER_PAGE } from '@/data/postsPerPage'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/[locale]/tag-data.json'
import { genPageMetadata } from 'app/[locale]/seo'
import { maintitle } from '@/data/localeMetadata'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import { capitalizeFirstLetter } from '@/components/util/capitalizeFirstLetter'
import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { allBlogs } from 'contentlayer/generated'

type TagsProps = {
  params: { tag: string; locale: LocaleTypes }
}
export const runtime = 'edge'
export async function generateMetadata({ params: { tag, locale } }: TagsProps): Promise<Metadata> {
  const dtag = decodeURI(tag)
  const capitalizedDtag = capitalizeFirstLetter(dtag)
  return genPageMetadata({
    title: capitalizedDtag,
    description: `${maintitle[locale]} ${dtag} tagged content`,
    locale: locale,
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/tags/${dtag}/feed.xml`,
      },
    },
    params: { locale: locale },
  })
}

export const generateStaticParams = async ({ params: { locale } }: TagsProps) => {
  const tagCounts = tagData[locale]
  const tagKeys = Object.keys(tagCounts)
  const paths = tagKeys.map((tag) => ({
    tag: encodeURI(tag),
  }))
  return paths
}

export default function TagPage({ params: { tag, locale } }: TagsProps) {
  const dtag = decodeURI(tag)
  const title = dtag[0].toUpperCase() + dtag.split(' ').join('-').slice(1)
  const filteredPosts = allCoreContent(
    sortPosts(
      allBlogs.filter((post) => {
        return post.language === locale
      })
    ).filter((post) => {
      return post.tags && post.tags.map((t) => slug(t)).includes(dtag)
    })
  )
  const pageNumber = 1
  const initialDisplayPosts = filteredPosts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(filteredPosts.length / POSTS_PER_PAGE),
    params: { locale: locale },
  }

  return (
    <ListLayout
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      posts={filteredPosts}
      title={title}
      params={{ locale: locale }}
    />
  )
}
