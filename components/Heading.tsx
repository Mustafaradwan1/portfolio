import React from 'react'
import { ReactNode } from 'react'
const Heading = (props:{children:ReactNode}) => {
  return <>
  <h2 className='mb-8 capitalize text-center text-2xl'>{props.children}</h2>
  </>
}

export default Heading