import React from 'react'
import { AreaInterest, skills } from '../skills'
import Navbar from '../components/Navbar'
import Resume from '../components/Resume'
const About = () => {

  return (
    <section className='max-container'>
    <Navbar/>
    <h1 className='head-text'>Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Abishek M S</span></h1>
    <div className='mt-5 flex flex-col gap-3 text-slate-500'>
    <p>
    Hello! A passionate Electrical and Computer Engineer with a keen interest in both the digital realm and electrical applications. 
    My journey in the tech world has led me to explore the intricate balance between hardware and software. From designing circuits to delving into web development,
     I thrive on the dynamic intersection of these fields. 
    </p>
    </div>
    <div className='py-10 flex flex-col'> <h3 className='subhead-text'>My Skills</h3>
    <div className='mt-16 flex flex-wrap gap-12' >  
     {skills.map((e)=>(
      <div className='block-container w-20 h-20'>
      <div className='btn-back rounded-xl'/>
      <div className='btn-front rounded-xl flex justify-center items-center'>
      <img src={e.imageUrl} alt={e.name} className='w-1/2 h-1/2 object-contain'></img>
      </div>
      </div>
     ))}
    </div>
    </div>
    <div className='py-20  flex flex-col '> <h3 className='subhead-text'>Area of Interest</h3>
    <div className='mt-10 relative '>
     {
      AreaInterest.map((e)=>(
        <ul>
       <li>{e.name}</li>
       </ul>
      ))
     }
    </div>
    </div>
    <hr className='border-slate-200' />
     <Resume/>
    
   
    </section>

  )
}

export default About