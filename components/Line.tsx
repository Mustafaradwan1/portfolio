import React from 'react'
import {motion} from 'framer-motion'
const Line = () => {
  return <>
  <motion.div
  initial={{opacity:0,y:100}}
  animate={{opacity:1,y:0}}
  transition={{delay:0.125}}
   className=' justify-center hidden sm:flex  mb-[4rem] items-center py-[4rem]'>
    <div className='bg-gray-300 h-[4rem] w-1  '></div>
  </motion.div>
  </>
}

export default Line