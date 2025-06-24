'use client'
import ProjectData from './ProjectData'
import { projectsData } from '@/dummy/data'
import Heading from './Heading'
import {projectsArr} from '@/dummy/Type'
import Link from 'next/link'
const Project = () => {
  const projectsD:projectsArr = projectsData.slice(0,3)
  return <>
  <div className='scroll-mt-28 mb-[8rem]' id='projects'>
    <Heading>my Project</Heading>
    {projectsD.map((item,ind)=>(
      <ProjectData key={ind} {...item} />
  ))}
      <div className='mt-8 text-center'>
          <Link href={"/Projects"} className='hover:scale-105 inline-block bg-gray-900 text-white py-2 px-5 rounded-md'>See More</Link>
      </div>
  </div>
  </>
}
export default Project
