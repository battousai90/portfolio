import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-l items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[6600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true}}       
            className='relative h-32 w-32 rounded-full object-center object-fill xl:w-[200px] xl:h-[200px] mx-auto'
            src='/images/occitane2.png'
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>
            Senior IT Integration Platforms & ESB Specialist
            </h4>
            <p className='font-bold text-2xl mt-1'>
                {"L'Occitane en Provence"}
            </p>
            <div className='flex space-x-2 my-2'>
                {/* Tech used */}
                <Image
                className='h-15 w-15 rounded-full object-fill'
                src='/images/tech/sap.png' alt='sap'
                width={64} height={64}/>
            </div>
            <p className='uppercase py-5 text-gray-300'>
            December 2017 - September 2021
            </p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Points</li>
                <li>Points</li>
                <li>Points</li>
                <li>Points</li>
                <li>Points</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard