import React from 'react'
import { BackgroundBlogCard } from '../components/BackgroundBlogCard'

const NewDate = () => {
  return (
    <div className='w-screen h-auto bg-gradient-to-t from-light-palette to-green-palette flex justify-center items-center px-4 py-20 md:py-32'>
        <div className='space-y-5 md:w-11/12 2xl:w-4/5 3xl:w-5/6 mx-auto xl:space-y-10'>
            <h1 className='text-center montserrat text-white-palette text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl'>Select a type of date 🙈</h1>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-5 justify-center'> 
              <BackgroundBlogCard title={'Movie Date'} image={'./movie_date.jpg'}/>
              <BackgroundBlogCard title={'Walk Date'} image={'./walk_date.jpg'}/>
              <BackgroundBlogCard title={'Arcade Date'} image={'./arcade_date.jpg'}/>
              <BackgroundBlogCard title={'Museum Date'} image={'./museum_date.jpg'}/>
              <BackgroundBlogCard title={'Lunch Date'} image={'./lunch_date.jpg'}/>
              <BackgroundBlogCard title={'Zoo Date'} image={'./zoo_date.jpg'}/>
              <BackgroundBlogCard title={'Amusement Park Date'} image={'./amusement_park_date.jpg'}/>
              <BackgroundBlogCard title={'Coffee Date'} image={'./coffee_date.jpg'}/>
              <BackgroundBlogCard title={'Dinner Date'} image={'./dinner_date.jpg'}/>
            </div>
        </div>
    </div>
  )
}

export default NewDate