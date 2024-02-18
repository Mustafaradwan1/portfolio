"use client"
import Heading from './Heading'
import { FaPaperPlane } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef,useState } from 'react';
import {motion} from 'framer-motion'
import { useSectionInView } from "@/dummy/Hooks";
const Contact = () => {
  const { ref } = useSectionInView("Contact",0.5);
  const form = useRef<string | any>();
  const [value,setvalue] = useState("")
  const [text,settext] = useState("")
  const sendEmail = (e:any) => {
    e.preventDefault();
    emailjs.sendForm('service_ow4w8pj', 'template_f6spvsh', form.current, 'u269Zxj9-kIlNiiK2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return <>
  <div ref={ref} id='contact' className='mb-[8rem] scroll-mt-28 w-full sm:w-[80%]  m-auto'>
    <Heading>Contact</Heading>
    <motion.div
          initial={{scale:0,opacity:0}}
          whileInView={{scale:1,opacity:1}}
          transition={{duration:0.5}}
          viewport={{
            once: true,
          }}
     className='-mt-7'>
        <p className='text-center mb-5 dark:text-gray-300'>please contact me directly at <a href='mailto:Mustafaradwan1098@gmail.com' className='underline dark:text-gray-100'>Mustafaradwan1098@gmail.com</a></p>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-3'>
            <input className='py-2 px-5 rounded-md' type='email' required placeholder='Your Email' name='user_email' onChange={(e)=>setvalue(e.target.value)} value={value} />
            <textarea className='h-32 sm:h-36 rounded-md px-5 py-2 dark:text-gray-950' name='message' onChange={(e)=>settext(e.target.value)} value={text} required placeholder='Your Message' />
            <button className='flex gap-3 w-28 bg-gray-800 text-white justify-center items-center h-10 rounded-full' type='submit' value='Send'>submit <FaPaperPlane/></button>
        </form>
    </motion.div>
  </div>
  </>
}

export default Contact