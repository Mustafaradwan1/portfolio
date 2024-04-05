import { experiencesTs } from '@/dummy/Type'
import {motion} from 'framer-motion'
const ExperienceData = (ele:experiencesTs) => {
  return <>
  <div className='item mb-2 flex gap-3 justify-between items-center'>
    <motion.div
          initial={{x:-100,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:1}}
          viewport={{
            once: true,
          }}

     className='md:flex-1 date text-right hidden sm:block'>{ele.date}</motion.div>
    <motion.div
          initial={{y:100,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:1}}
          viewport={{
            once: true,
          }}
    className='h-[300px] gap-2  flex flex-col items-center justify-center '>
      <div className='line w-[3px] bg-gray-500 h-24 py-2'></div>
      <div className='w-10 h-10 flex justify-center items-center text-gray-200 text-2xl  rounded-full bg-gray-800'>{ele.icon}</div>
      <div className='line w-[3px] bg-gray-500 h-24 py-2'></div>
    </motion.div>
    <motion.div
          initial={{x:100,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:1}}
          viewport={{
            once: true,
          }}
   
    className='flex-1'>
      <h2 className='bg-teal-500 text-center py-1 text-gray-100 rounded-sm'>{ele.cardTitle}</h2>
      <div className='md:flex-1 date mt-3 block sm:hidden '>{ele.date}</div>
      <p className='text-gray-950 dark:text-gray-100 my-2 font-bold'>{ele.location}</p>
      <p>{ele.description}</p>
    </motion.div>
  </div>

  </>
}

export default ExperienceData