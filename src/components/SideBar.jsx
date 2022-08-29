import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiHomeSmile2Fill } from "react-icons/ri"
import {  FiSettings } from "react-icons/fi"
import { IoIosSettings, IoIosTimer, IoIosNotificationsOutline } from "react-icons/io"
import { BiEnvelope } from "react-icons/bi"
import { BsBoxArrowRight } from "react-icons/bs"
import { AiOutlineHome } from "react-icons/ai"


const SideBar = () => {
  return (
    <div className='w-20 h-screen bg-[rgba(31,29,43,1.00)] flex flex-col justify-between  text-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)] box-border rounded fixed'>
      <div className='p-5 pb-1'>
        <RiHomeSmile2Fill size={30}/>
      </div>
      <NavLink to="/" className={(navData) => navData.isActive ? 'bg-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)] text-white p-5 rounded ml-3' : "px-5"}>
        <div>
          <AiOutlineHome size={20}/>
        </div>
      </NavLink>
      <div className='px-5'>
        <FiSettings size={20}/>
      </div>
      <NavLink to="/dashboard" className={(navData) => navData.isActive ? 'bg-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)] text-white p-5 rounded ml-3' : "px-5"}>
        <div>
          <IoIosTimer size={20}/>
        </div>
      </NavLink>
      <div className='px-5'>
        <BiEnvelope size={20}/>
      </div>
      <div className='px-5'>
        <IoIosNotificationsOutline size={20}/>
      </div>
      <NavLink to="/settings" className={(navData) => navData.isActive ? 'bg-[rgba(234.00000125169754,124.00000020861626,105.00000134110451,1)] text-white p-5 rounded ml-3' : "px-5"}>
        <div>
          <IoIosSettings size={20}/>
        </div>
      </NavLink>
      <div className='p-5 pt-1'>
        <BsBoxArrowRight size={20}/>
      </div>
    </div>
  )
}

export default SideBar
