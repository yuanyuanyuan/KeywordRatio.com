'use client'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { LocaleTypes } from '../i18n/settings'
import { useParams } from 'next/navigation'
import KeywordRoiCalculator from '@/components/KeywordRoiCalculator'

const Project = () => {
  // const locale = useParams()?.locale as LocaleTypes
  // const projectLocalData = projectsData[locale]
  return (
    <>
      {/*<KeywordRoiCalculator></KeywordRoiCalculator>*/}
      {/*<KGRCalculator></KGRCalculator>*/}
      {/*{projectArray.map((project) => (*/}
      {/*  <Card*/}
      {/*    key={project.title}*/}
      {/*    title={project.title}*/}
      {/*    description={project.description}*/}
      {/*    imgSrc={project.imgSrc}*/}
      {/*    href={project.href}*/}
      {/*  />*/}
      {/*))}*/}
    </>
  )
}

export default Project
