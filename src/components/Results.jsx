import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom"
import { useResultContext } from '../context/ResultContextProvider'

const Results = () => {
    const {results, isLoading, getResult} = useResultContext()
    const location = useLocation()

    useEffect(() => {
        getResult(location.pathname)
    }, [location.pathname])

    if(isLoading) return "Loading....."
    switch (location.pathname) {
        case "/pasta":
            return (
                <div className='grid md:grid-cols-3 gap-4'>
                    {results?.results?.map(({id, title, image}) => (
                        <div key={id} className="bg-[rgba(31,29,43,1.00)] rounded-lg flex flex-col justify-center items-center mt-[50px] px-10 pb-5">
                            <img src={image} alt="food" className="w-32 rounded-full mt-[-3rem]"/>
                            <p className='my-4 text-center'>{title}</p>
                            <p className='text-sm text-gray-500 mb-4'>{`$${id}`}</p>
                            <p className='text-sm text-gray-500'>20 Bowls available</p>
                        </div>
                    ))}
                </div>
            );
        case "/rice":
            return (
                <div className='grid md:grid-cols-3 gap-4'>
                    {results?.results?.map(({id, title, image}) => (
                        <div key={id} className="bg-[rgba(31,29,43,1.00)] rounded-lg flex flex-col justify-center items-center mt-[50px] px-10 pb-5">
                            <img src={image} alt="food" className="w-32 rounded-full mt-[-3rem]"/>
                            <p className='my-4 text-center'>{title}</p>
                            <p className='text-sm text-gray-500 mb-4'>{`$${id}`}</p>
                            <p className='text-sm text-gray-500'>20 Bowls available</p>
                        </div>
                    ))}
                </div>
            );
        case "/chicken":
            return (
                <div className='grid md:grid-cols-3 gap-4'>
                    {results?.results?.map(({id, title, image}) => (
                        <div key={id} className="bg-[rgba(31,29,43,1.00)] rounded-lg flex flex-col justify-center items-center mt-[50px] px-10 pb-5">
                            <img src={image} alt="food" className="w-32 rounded-full mt-[-3rem]"/>
                            <p className='my-4 text-center'>{title}</p>
                            <p className='text-sm text-gray-500 mb-4'>{`$${id}`}</p>
                            <p className='text-sm text-gray-500'>20 Bowls available</p>
                        </div>
                    ))}
                </div>
            );
        case "/cottage":
            return (
                <div className='grid md:grid-cols-3 gap-4'>
                    {results?.results?.map(({id, title, image}) => (
                        <div key={id} className="bg-[rgba(31,29,43,1.00)] rounded-lg flex flex-col justify-center items-center mt-[50px] px-10 pb-5">
                            <img src={image} alt="food" className="w-32 rounded-full mt-[-3rem]"/>
                            <p className='text-center my-4'>{title}</p>
                            <p className='text-sm text-gray-500 mb-4'>{`$${id}`}</p>
                            <p className='text-sm text-gray-500'>20 Bowls available</p>
                        </div>
                    ))}
                </div>
            );
        default:
            return "ERROR"
    }
}

export default Results
