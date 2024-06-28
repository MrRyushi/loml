'use client'
import { useEffect } from 'react';
import { CarouselDefault } from '../components/CarouselDefault';
import VideoDefault from '../components/VideoDefault';

const Roblox = () => {
    useEffect(() => {
        const audio = new Audio('/roblox.mp3');
        audio.loop = true;
        audio.play();
        audio.volume = 0.3;
      }, []);
  return (
    <div className='w-screen h-auto bg-gradient-to-t from-light-palette to-green-palette flex justify-center items-center px-4 py-20 md:py-32'>
        <div className='space-y-10'>
            <h1 className='text-center text-slate-50 montserrat text-3xl 2xl:text-5xl 3xl:text-6xl font-semibold'>Our Roblox Dates! 😎</h1>
            <div className='md:flex justify-center md:space-x-10 space-y-3 md:space-y-0 xl:h-1/2'>
                <VideoDefault video={'/roblox1.mp4'}/>
                <VideoDefault video={'/roblox2.mp4'}/>
            </div>
            <a href='/main' className='w-max py-3 px-8 rounded-xl bg-gray-palette hover:bg-gray-700 text-white-palette montserrat text-center mx-auto block'>Back</a>
        </div>
    </div>
  ) 
}

export default Roblox