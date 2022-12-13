import React from 'react'
import {Routes,Route } from 'react-router-dom'
import { Analytics } from '../Pages/Analytics'
import { Overview } from '../Pages/Overview'
import { Payout } from '../Pages/Payout'
import { Product } from '../Pages/Product'
import { Schedules } from '../Pages/Schedules'
export const AllRoutes = () => {
  return (
      <div>
          <Routes>
              <Route path='/' element={<Overview/>} ></Route>
              <Route path='/product' element={<Product/>} ></Route>
              <Route path='/analytics' element={<Analytics/>} ></Route>
              <Route path='/schedule' element={<Schedules/>} ></Route>
              <Route path='/payout' element={<Payout/>} ></Route>
              <Route path='/statement' element={<Overview/>} ></Route>
              <Route path='/help' element={<Overview/>} ></Route>
              <Route path='/community' element={<Overview/>} ></Route>
              <Route path='/settings' element={<Overview/>} ></Route>
              <Route path='/logout' element={<Overview/>} ></Route>
        </Routes>
      </div>
  )
}
