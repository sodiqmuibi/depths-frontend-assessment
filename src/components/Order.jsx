import React from 'react'
import { useResultContext } from '../context/ResultContextProvider'
import { RiDeleteBin7Line } from "react-icons/ri"


const Order = () => {
    const {results} = useResultContext();
  return (
    <div className='m-4 flex flex-col gap-2'>
      <div className='text-2xl'>Orders #34562</div>
      <div className='mt-3 flex items-center gap-3'>
        <button className='text-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)] rounded-md border-gray-700 border p-2 hover:text-white hover:bg-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)]'>Dine In</button>
        <button className='text-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)] rounded-md border-gray-700 border p-2 hover:text-white hover:bg-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)]'>To Go</button>
        <button className='text-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)] rounded-md border-gray-700 border p-2 hover:text-white hover:bg-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)]'>Delivery</button>
      </div>
      <div className='mt-3 flex justify-between items-center border-b border-gray-700 pb-3'>
        <div>
            Item
        </div>
        <div className='flex gap-4'>
            <p>Qty</p>
            <p>Price</p>
        </div>
      </div>
      <div className='mt-3 flex flex-col'>
        <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
                <img src={results?.results?.[0]?.image} alt="img" className="w-10 rounded-full"/>
                <div className='flex flex-col'>
                    <p className='text-sm'>{results?.results?.[0]?.title.length > 20 ? results?.results?.[0]?.title.substring(0, 20) : results?.results?.[0].title}</p>
                    <p className='text-sm text-gray-500'>{`$${results?.results?.[0]?.id}`}</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div className='p-2 bg-[rgba(37,40,54,1.00)] text-gray-400 rounded-md'>2</div>
                <p>$4.58</p>
            </div>
        </div>
        <div className='mt-2 justify-between flex items-center'>
            <input placeholder='Order Note..' className='p-3 rounded-md border-gray-700 border shadow-lg bg-[rgba(37,40,54,1.00)] w-[85%]'/>
            <div className='text-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)] rounded-md p-2 border-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)] border hover:text-white hover:bg-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)]'>
                <RiDeleteBin7Line />
            </div>
        </div>
      </div>
      <div className='mt-3 flex flex-col'>
        <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
                <img src={results?.results?.[1]?.image} alt="img" className="w-10 rounded-full"/>
                <div className='flex flex-col'>
                    <p className='text-sm'>{results?.results?.[1]?.title.length > 20 ? results?.results?.[1]?.title.substring(0, 20) : results?.results?.[1].title}</p>
                    <p className='text-sm text-gray-500'>{`$${results?.results?.[1]?.id}`}</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div className='p-2 bg-[rgba(37,40,54,1.00)] text-gray-400 rounded-md'>2</div>
                <p>$4.58</p>
            </div>
        </div>
        <div className='mt-2 justify-between flex items-center'>
            <input placeholder='Order Note..' className='p-3 rounded-md border-gray-700 border shadow-lg bg-[rgba(37,40,54,1.00)] w-[85%]'/>
            <div className='text-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)] rounded-md p-2 border-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)] border hover:text-white hover:bg-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)]'>
                <RiDeleteBin7Line />
            </div>
        </div>
      </div>
      <div className='mt-3 flex flex-col'>
        <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
                <img src={results?.results?.[2]?.image} alt="img" className="w-10 rounded-full"/>
                <div className='flex flex-col'>
                    <p className='text-sm'>{results?.results?.[2]?.title.length > 20 ? results?.results?.[2]?.title.substring(0, 20) : results?.results?.[2].title}</p>
                    <p className='text-sm text-gray-500'>{`$${results?.results?.[2]?.id}`}</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div className='p-2 bg-[rgba(37,40,54,1.00)] text-gray-400 rounded-md'>2</div>
                <p>$4.58</p>
            </div>
        </div>
        <div className='mt-2 justify-between flex items-center'>
            <input placeholder='Order Note..' className='p-3 rounded-md border-gray-700 border shadow-lg bg-[rgba(37,40,54,1.00)] w-[85%]'/>
            <div className='text-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)] rounded-md p-2 border-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)] border hover:text-white hover:bg-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)]'>
                <RiDeleteBin7Line />
            </div>
        </div>
      </div>
      <div className='mt-3 flex flex-col'>
        <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
                <img src={results?.results?.[3]?.image} alt="img" className="w-10 rounded-full"/>
                <div className='flex flex-col'>
                    <p className='text-sm'>{results?.results?.[3]?.title.length > 20 ? results?.results?.[3]?.title.substring(0, 20) : results?.results?.[3].title}</p>
                    <p className='text-sm text-gray-500'>{`$${results?.results?.[3]?.id}`}</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div className='p-2 bg-[rgba(37,40,54,1.00)] text-gray-400 rounded-md'>2</div>
                <p>$4.58</p>
            </div>
        </div>
        <div className='mt-2 justify-between flex items-center'>
            <input placeholder='Order Note..' className='p-3 rounded-md border-gray-700 border shadow-lg bg-[rgba(37,40,54,1.00)] w-[85%]'/>
            <div className='text-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)] rounded-md p-2 border-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)] border hover:text-white hover:bg-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)]'>
                <RiDeleteBin7Line />
            </div>
        </div>
      </div>
      <div className='mt-3 flex flex-col'>
        <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
                <img src={results?.results?.[4]?.image} alt="img" className="w-10 rounded-full"/>
                <div className='flex flex-col'>
                    <p className='text-sm'>{results?.results?.[4]?.title.length > 20 ? results?.results?.[4]?.title.substring(0, 20) : results?.results?.[4].title}</p>
                    <p className='text-sm text-gray-500'>{`$${results?.results?.[4]?.id}`}</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div className='p-2 bg-[rgba(37,40,54,1.00)] text-gray-400 rounded-md'>2</div>
                <p>$4.58</p>
            </div>
        </div>
        <div className='mt-2 justify-between flex items-center'>
            <input placeholder='Order Note..' className='p-3 rounded-md border-gray-700 border shadow-lg bg-[rgba(37,40,54,1.00)] w-[85%]'/>
            <div className='text-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)] rounded-md p-2 border-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)] border hover:text-white hover:bg-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)]'>
                <RiDeleteBin7Line />
            </div>
        </div>
      </div>
      <div className='mt-5 flex justify-between items-center'>
        <p className='text-md text-gray-500'>Discount</p>
        <p className='text-sm'>$0</p>
      </div>
      <div className='mt-3 flex justify-between items-center'>
        <p className='text-md text-gray-500'>Sub total</p>
        <p className='text-sm'>$21.03</p>
      </div>
      <button className="mt-5 bg-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)] rounded-md text-white p-2">Continue to Payment</button>
    </div>
  )
}

export default Order
