'use client';
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function about({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    className='h-screen flex flex-col text-center relative md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        src="/images/moi3.jpeg"
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
        />
        <div className=' text-center space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font-semibold'>
            Here a {""}
            <span className='underline decoration-[#F7AB0A]/50'>quick</span>{""} overview of me
          </h4>
          <p className='text-base'>
            I'm Gilbert, a seasoned Data and EAI Integration Technical Leader with over 12 years of experience in the field.
            Holding a degree in Computer Science, specializing in software development and honored for academic excellence, 
            I've built a robust foundation in technology. My journey with computers began at the age of 4, alongside my father, 
            tinkering on a Spectrum Sinclair. From that moment on, I've always had a keyboard in hand, navigating the ever-evolving 
            landscape of technology. While some children found solace in the perfect sound of Guns N' Roses or Iron Maiden, for me, 
            it was the rhythmic melody of my modem connecting to the digital world. Throughout my career, I've led projects such as 
            implementing omnichannel distribution systems for renowned organizations in the cosmetic and luxury industries. 
            Proficient in SAP,  I thrive on solving complex problems and fostering effective 
            communication between applications. Beyond work, I'm passionate about promoting Thai culture alongside my Thai wife, 
            engaging in activities such as Thai music and dance performances.
          </p>
        </div>
    </motion.div>
  );
}