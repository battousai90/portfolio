'use client';
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function skills({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex relative overflow-hidden flex-col text-left md:text-left max-w-[2000px] xl:px-10
    min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills 
        </h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>hover over a skill for profienciency details</h3>
    </motion.div>
  )
}

export default skills