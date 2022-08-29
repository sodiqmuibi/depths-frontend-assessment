import React from 'react'
import { MdOutlineAttachMoney, MdBookmarkBorder } from "react-icons/md"
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineUsergroupAdd } from "react-icons/ai"
import userA from "../assets/user.png"
import userB from "../assets/user3.png"
import userC from "../assets/user4.jpg"
import userD from "../assets/user5.jpg"
import userF from "../assets/user6.jpg"
import userG from "../assets/user7.jpg"
import userH from "../assets/user8.png"
import { useResultContext } from '../context/ResultContextProvider'


const Dashboard = () => {
    const {results} = useResultContext();
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
        <div className='text-white ml-[120px] grid grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
            <div className='lg:col-span-2 mt-7'>
                <div className='flex flex-col'>
                    <div className='flex flex-col border-b border-gray-700 pb-3 w-full'>
                        <p className='text-2xl font-bold'>Dashboard</p>
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
                <div className="mt-4 bg-[rgba(31,29,43,1.00)] rounded-md py-3 px-5 flex flex-col justify-center">
                    <div className='flex justify-between items-center mb-4'>
                        <div>Order Report</div>
                        <div className='p-2 border border-gray-700 rounded text-sm text-gray-300'>Filter Order</div>
                    </div>
                    <div className='flex justify-between text-sm items-center'>
                        <p>Customer</p>
                        <p>Menu</p>
                        <p>Total Payment</p>
                        <p>Status</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center mt-6 gap-2'>
                            <img src={userA} alt="user" className='w-10 rounded-full'/>
                            <p className='text-sm text-gray-500'>Eren Jaegar</p>
                        </div>
                        <div className='text-sm text-gray-500 pt-5 pr-3'>
                            {results?.results?.[0].title.length > 20 ? results?.results?.[0].title.substring(0,30) : results?.results?.[0].title }
                        </div>
                        <div className='text-sm text-gray-500 pr-5 pt-5'>$125</div>
                        <div className='text-green-400 p-1 bg-[rgba(37,40,54,1.00)] text-sm rounded-lg'>Completed</div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center mt-6 gap-2'>
                            <img src={userB} alt="user" className='w-10 rounded-full'/>
                            <p className='text-sm text-gray-500'>Reinner Braun</p>
                        </div>
                        <div className='text-sm text-gray-500 pt-5 pr-3'>
                            {results?.results?.[1].title.length > 20 ? results?.results?.[1].title.substring(0,30) : results?.results?.[1].title}
                        </div>
                        <div className='text-sm text-gray-500 pr-5 pt-5'>$145</div>
                        <div className='text-blue-800 p-1 bg-[rgba(37,40,54,1.00)] text-sm rounded-lg'>Preparing</div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center mt-6 gap-2'>
                            <img src={userC} alt="user" className='w-10 rounded-full'/>
                            <p className='text-sm text-gray-500'>Levi Ackerman</p>
                        </div>
                        <div className='text-sm text-gray-500 pt-5 pr-3'>
                            {results?.results?.[2].title.length > 20 ? results?.results?.[2].title.substring(0,30) : results?.results?.[2].title}
                        </div>
                        <div className='text-sm text-gray-500 pt-5 pr-5'>$25</div>
                        <div className='text-orange-400 p-1 bg-[rgba(37,40,54,1.00)] text-sm rounded-lg'>Pending</div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center mt-6 gap-2'>
                            <img src={userD} alt="user" className='w-10 rounded-full'/>
                            <p className='text-sm text-gray-500'>Historia Reiss</p>
                        </div>
                        <div className='text-sm text-gray-500 pt-5 pr-3'>
                            {results?.results?.[3].title.length > 20 ? results?.results?.[3].title.substring(0,30) : results?.results?.[3].title}
                        </div>
                        <div className='text-sm text-gray-500 pt-5 pr-5'>$425</div>
                        <div className='text-green-400 p-1 bg-[rgba(37,40,54,1.00)] text-sm rounded-lg'>Completed</div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center mt-6 gap-2'>
                            <img src={userF} alt="user" className='w-10 rounded-full'/>
                            <p className='text-sm text-gray-500'>Mikasa Ackerman</p>
                        </div>
                        <div className='text-sm text-gray-500 pt-5 pr-3'>
                            {results?.results?.[4].title.length > 20 ? results?.results?.[4].title.substring(0,30) : results?.results?.[4].title}
                        </div>
                        <div className='text-sm text-gray-500 pt-5 pr-5'>$75</div>
                        <div className='text-green-400 p-1 bg-[rgba(37,40,54,1.00)] text-sm rounded-lg'>Completed</div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center mt-6 gap-2'>
                            <img src={userG} alt="user" className='w-10 rounded-full'/>
                            <p className='text-sm text-gray-500'>Anthony Gordon</p>
                        </div>
                        <div className='text-sm text-gray-500 pt-5 pr-3'>
                            {results?.results?.[5].title.length > 20 ? results?.results?.[5].title.substring(0,30) : results?.results?.[5].title}
                        </div>
                        <div className='text-sm text-gray-500 pt-5 pr-5'>$425</div>
                        <div className='text-green-400 p-1 bg-[rgba(37,40,54,1.00)] text-sm rounded-lg'>Completed</div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center mt-6 gap-2'>
                            <img src={userH} alt="user" className='w-10 rounded-full'/>
                            <p className='text-sm text-gray-500'>Reece James</p>
                        </div>
                        <div className='text-sm text-gray-500 pt-5 pr-3'>
                            {results?.results?.[6].title.length > 20 ? results?.results?.[6].title.substring(0,30) : results?.results?.[6].title}
                        </div>
                        <div className='text-sm text-gray-500 pt-5 pr-5'>$25</div>
                        <div className='text-green-400 p-1 bg-[rgba(37,40,54,1.00)] text-sm rounded-lg'>Completed</div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <div className='bg-[rgba(31,29,43,1.00)] flex flex-col rounded-md p-5'>
                    <div className='flex justify-between items-center border-b border-gray-700 pb-4'>
                        <p className='font-bold'>Most Ordered</p>
                        <select className='bg-[rgba(37,40,54,1.00)] text-white w-30 rounded-md shadow-lg p-2 border border-gray-700'>
                            <option value="Today">Today</option>
                            <option value="Yesterday">Yesterday</option>
                            <option value="Last Week">Last Week</option>
                        </select>
                    </div>
                    <div className='flex items-center gap-4 mt-5'>
                        <img src={results?.results?.[0]?.image} className="w-10 rounded-full"/>
                        <div className='flex flex-col'>
                            <p className='text-sm text-gray-300'>{results?.results?.[0].title.length > 20 ? results?.results?.[0].title.substring(0,30) : results?.results?.[0].title }</p>
                            <p className='text-sm text-gray-500'>200 dishes ordered</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 mt-6'>
                        <img src={results?.results?.[1]?.image} className="w-10 rounded-full"/>
                        <div className='flex flex-col'>
                            <p className='text-sm text-gray-300'>{results?.results?.[1].title.length > 20 ? results?.results?.[1].title.substring(0,30) : results?.results?.[1].title }</p>
                            <p className='text-sm text-gray-500'>120 dishes ordered</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 mt-6'>
                        <img src={results?.results?.[2]?.image} className="w-10 rounded-full"/>
                        <div className='flex flex-col'>
                            <p className='text-sm text-gray-300'>{results?.results?.[2].title.length > 20 ? results?.results?.[2].title.substring(0,30) : results?.results?.[2].title }</p>
                            <p className='text-sm text-gray-500'>80 dishes ordered</p>
                        </div>
                    </div>
                    <button className="mt-5 bg-inherit border-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)] rounded-md text-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)] p-2 border">View All</button>
                </div>
                <div className="mt-5 bg-[rgba(31,29,43,1.00)] rounded-md flex flex-col p-5">
                    <div className='flex justify-between items-center border-b border-gray-700 pb-4'>
                        <p className='font-bold'>Most Type of Order</p>
                        <select className='bg-[rgba(37,40,54,1.00)] text-white w-30 rounded-md shadow-lg p-2 border border-gray-700'>
                            <option value="Today">Today</option>
                            <option value="Yesterday">Yesterday</option>
                            <option value="Last Week">Last Week</option>
                        </select>
                    </div>
                    <div className='mt-5'>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default Dashboard
