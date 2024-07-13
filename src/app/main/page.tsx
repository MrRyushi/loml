import { BlogCard } from '../components/BlogCard';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;


const MainPage = () => {
  return (
    <div className='w-screen h-auto py-10 2xl:py-16 bg-gradient-to-t from-light-palette to-green-palette flex justify-center items-center overflow-x-hidden'>
      <div className='space-y-10'>
        <div>
          <h1 className='text-center montserrat text-slate-50 text-4xl sm:text-5xl font-bold'>Our dates 💘</h1>
        </div>
        <div className='px-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 grid-flow-col space-y-10 md:space-y-0 gap-x-6'>
          <BlogCard 
            image={'1.jpg'} 
            title={'Our First Date 🤍'} 
            description={'Our first date was a whole day together! We watched Inside Out 2 and explored ATC. I cherish every moment spent with you 💕.'}
            date={'June 17, 2024'}
            link={'/first-date'}
          />
          <BlogCard 
            image={'robloxcard.png'}
            title={'Roblox Dates 😎'}
            description={'Cherished moments of us together in Roblox. Most games were obby games and a few horror games. I wish we could add more clips 😉.'}
            date={'No date'}
            link={'/roblox'}
          />
          <div className='flex justify-center items-center'>
            <a className='text-2xl text-gray-palette hover:text-slate-600 object-center flex items-center justify-center gap-2 text-center' href='/new-date'>More dates? (Click me hehe)</a>
          </div>
        </div>
        <a href='/' className='w-max py-3 px-8 rounded-xl bg-gray-palette hover:bg-gray-700 text-white-palette montserrat text-center mx-auto block'>Back</a>
      </div>
    </div>
  );
}

export default MainPage;
