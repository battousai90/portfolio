'use client';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './backgroundCircle';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Welcome, bienvenue, ยินดีต้อนรับครับ, bienvenido",
            "Mastering the art of untangling digital spaghetti as an EAI Tech Lead"
        ],
        loop: true,
        delaySpeed: 2000,
      });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircle />
        <h1>
            <span>
                {text}
            </span>
            <Cursor cursorColor="#F7AB0A"/>
        </h1>
        
    </div>
  )
}