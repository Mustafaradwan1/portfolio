"use server"

import { Resend } from "resend"
const resend = new Resend(process.env.GET_API)
export const sentEmail = async (formData : FormData)=>{
    const theEmail = formData.get("theEmail")
    const message = formData.get("message")
    resend.emails.send({
        from:"mustafa@gmail.com",
        to:"mustafaradwan1098@gmail.com",
        subject:'hello d;fdf',
        text:'hello word'
    })   
}