'use client';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './backgroundCircle';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Welcome, bienvenue, ยินดีต้อนรับครับ, bienvenido",
            "Mastering the art of untangling digital spaghetti"
        ],
        loop: true,
        delaySpeed: 2000,
      });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircle />
        <img src='https://media.licdn.com/dms/image/D5603AQE-fu7aExfDsg/profile-displayphoto-shrink_200_200/0/1666167645237?e=1715212800&v=beta&t=do54Ftt8ZCJpi33kvE5A1ym0US0ycGQB1ag5Sua0vho' alt='hero' className='relative h-32 w-32 rounded-full mx-auto'/>
        <div>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Integration Technical Lead</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span>
                {text}
            </span>
            <Cursor cursorColor="#F7AB0A"/>
        </h1>
        </div>       
    </div>
  )
}