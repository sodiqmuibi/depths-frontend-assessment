import React from 'react'
import Links from './Links';
import Order from './Order';
import Routers from './Routers';

const HomePage = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
      <div className='text-white grid grid-cols-2 lg:grid-cols-3 ml-[120px] gap-4'>
        <div className='lg:col-span-2 mt-7'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                    <p className='text-2xl'>Jaegar Restaurant</p>
                    <p className='text-md text-gray-500'>{date}</p>
                </div>
                <div className='relative block'>
                    <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                        <svg class="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                            height="30" viewBox="0 0 30 30">
                        <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971  23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                        </path>
                        </svg>
                    </span>
                    <input placeholder='Search for food, coffee etc' className='p-3 rounded-md  w-[300px] border shadow-lg border-gray-700 bg-inherit pl-10'/>
                </div>      
            </div>
            <Links />
            <div className='flex justify-between mt-6'>
                <div className='text-2xl'>
                    Choose Dishes
                </div>
                <select className='bg-[rgba(31,29,43,1.00)] text-white w-30 rounded-md shadow-lg p-3'>
                    <option value="Dine In">Dine In</option>
                    <option value="To go">To go</option>
                    <option value="Delivery">Delivery</option>
                </select>
            </div>
            <Routers />
        </div>
        <div className='bg-[rgba(31,29,43,1.00)]'>
            <Order />
        </div>
      </div>
  )
}

export default HomePage
