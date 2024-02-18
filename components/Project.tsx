'use client'
import ProjectData from './ProjectData'
import { projectsData } from '@/dummy/data'
import Heading from './Heading'
import {projectsArr} from '@/dummy/Type'
const Project = () => {
  const projectsD:projectsArr = projectsData
  return <>
  <div className='scroll-mt-28 mb-[8rem]' id='projects'>
    <Heading>my Project</Heading>
    {projectsD.map((item,ind)=>(
      <ProjectData key={ind} {...item} />
  ))}
  </div>
  </>
}
export default Project
