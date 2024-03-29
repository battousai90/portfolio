'use client';
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        
        <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center'>
            {/* Social Icon */}
            <SocialIcon url="https://www.linkedin.com/in/courtotg/"
            fgColor='gray'
            bgColor='transparent'
            />
            <SocialIcon url="https://www.facebook.com/gilbert.courtot"
            fgColor='gray'
            bgColor='transparent'
            />
            <SocialIcon url="https://www.instagram.com/gilbertcourtot/"
            fgColor='gray'
            bgColor='transparent'
            />
        </motion.div>

        <motion.div
        initial={{ opacity: 0, x: 500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
            {/* Email */}
            <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-sm'>Get in touch</p>
        </motion.div>
    </header>
  )
}

export default Header