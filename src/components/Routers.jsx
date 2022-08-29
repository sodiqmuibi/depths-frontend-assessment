import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Results from './Results'

const Routers = () => {
  return (
    <div className='p-4'>
      <Routes>
        <Route exact path='/' element={<Navigate replace to="/pasta"/>}></Route>
        {["/pasta", "/rice", "/chicken", "/cottage"].map((path, index) => {
            return (
                <Route path={path} key={index} element={<Results />} />
            )
        })}
      </Routes>
    </div>
  )
}

export default Routers
