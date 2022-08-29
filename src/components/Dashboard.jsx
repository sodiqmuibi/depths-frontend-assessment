import React from 'react'
import { MdOutlineAttachMoney, MdBookmarkBorder } from "react-icons/md"
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineUsergroupAdd } from "react-icons/ai"


const Dashboard = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
        <div className='text-white ml-[120px] grid grid-cols-3 gap-4'>
            <div className='col-span-2 mt-7'>
                <div className='flex flex-col'>
                    <div className='flex flex-col border-b border-gray-700 pb-3 w-full'>
                        <p className='text-2xl'>Dashboard</p>
                        <p className='text-sm text-gray-500'>{date}</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center mt-5'>
                    <div className='flex flex-col bg-[rgba(31,29,43,1.00)] rounded-md pl-5 pr-16 py-4'>
                        <div className='flex items-center gap-2 mb-3'>
                            <div className='p-2 text-blue-800 bg-[rgba(37,40,54,1.00)] rounded-md'>
                                <MdOutlineAttachMoney size={15}/>
                            </div>
                            <p className='text-[10px] text-green-400'>+32.40%</p>
                            <div className='p-1 text-green-400 bg-[rgba(37,40,54,1.00)] rounded-full'>
                                <AiOutlineArrowUp size={10}/>
                            </div>
                        </div>
                        <div className='text-xl mb-2'>$10,243.00</div>
                        <div className='text-md text-gray-400'>Total Revenue</div>
                    </div>
                    <div className='flex flex-col bg-[rgba(31,29,43,1.00)] rounded-md pl-5 pr-16 py-4'>
                        <div className='flex items-center gap-2 mb-3'>
                            <div className='p-2 text-orange-400 bg-[rgba(37,40,54,1.00)] rounded-md'>
                                <MdBookmarkBorder size={15}/>
                            </div>
                            <p className='text-[10px] text-red-400'>-12.80%</p>
                            <div className='p-1 text-red-300 bg-[rgba(37,40,54,1.00)] rounded-full'>
                                <AiOutlineArrowDown size={10}/>
                            </div>
                        </div>
                        <div className='text-xl mb-2'>23,456</div>
                        <div className='text-md text-gray-400'>Total Dish Ordered</div>
                    </div>
                    <div className='flex flex-col bg-[rgba(31,29,43,1.00)] rounded-md pl-5 pr-16 py-4'>
                        <div className='flex items-center gap-2 mb-3'>
                            <div className='p-2 text-cyan-500 bg-[rgba(37,40,54,1.00)] rounded-md'>
                                <AiOutlineUsergroupAdd size={15}/>
                            </div>
                            <p className='text-[10px] text-green-400'>+2.40%</p>
                            <div className='p-1 text-green-400 bg-[rgba(37,40,54,1.00)] rounded-full'>
                                <AiOutlineArrowUp size={10}/>
                            </div>
                        </div>
                        <div className='text-xl mb-2'>1,234</div>
                        <div className='text-md text-gray-400'>Total Customer</div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Dashboard
