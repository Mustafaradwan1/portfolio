'use client'
import Intro from "@/components/Intro";
import Line from "@/components/Line";
import About from "@/components/About";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { useState } from "react";
import Experience from "@/components/Experience";

export default function Home() {
  const [active,setactive] = useState(true)
  return (
    <main className="">
      {active ? null 
      : <div className="z-[99999] h-[60%] fixed bg-red-300 w-[60%] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
        <button className="" onClick={()=>setactive(true)}>close</button>
      </div>}
      {active ?
      <div>
      <Intro/> 
       <Line/>
       <About/>
       <Project/>
       <Skills/>
       <Experience/>
       <Contact/>
      </div>
      : null}
    </main>
  );
}
