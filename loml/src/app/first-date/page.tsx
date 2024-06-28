'use client'
import { useEffect } from 'react';
import { CarouselDefault } from '../components/CarouselDefault';

const FirstDate = () => {
    useEffect(() => {
        const audio = new Audio('/inout.mp3');
        audio.loop = true;
        audio.play();
        audio.volume = 0.3;
      }, []);
  return (
    <div className='w-screen h-screen bg-gradient-to-t from-light-palette to-green-palette flex justify-center items-center px-2 py-20'>
        <div className='w-full h-full space-y-8'>
            <h1 className='text-center text-slate-50 montserrat text-3xl 2xl:text-5xl 3xl:text-6xl font-semibold'>Our first date! 🤍</h1>
            <CarouselDefault/>
            <a href='/main' className='w-max py-3 px-8 rounded-xl bg-gray-palette hover:bg-gray-700 text-white-palette montserrat text-center mx-auto block'>Back</a>
        </div>
    </div>
  ) 
}

export default FirstDate