import React from 'react'
import {Routes,Route } from 'react-router-dom'
import { Analytics } from '../Pages/Analytics'
import { Community } from '../Pages/Community'
import { Help } from '../Pages/Help'
import { Logout } from '../Pages/Logout'
import { Overview } from '../Pages/Overview'
import { Payout } from '../Pages/Payout'
import { RiskReward } from '../Pages/RiskReward'
import { Schedules } from '../Pages/Schedules'
import { Setting } from '../Pages/Setting'
import { Statements } from '../Pages/Statements'
export const AllRoutes = () => {
  return (
      <div>
          <Routes>
              <Route path='/' element={<Overview/>} ></Route>
              <Route path='/riskReward' element={<RiskReward/>} ></Route>
              <Route path='/analytics' element={<Analytics/>} ></Route>
              <Route path='/schedule' element={<Schedules/>} ></Route>
              <Route path='/payout' element={<Payout/>} ></Route>
              <Route path='/statement' element={<Statements/>} ></Route>
              <Route path='/help' element={<Help/>} ></Route>
              <Route path='/community' element={<Community/>} ></Route>
              <Route path='/settings' element={<Setting/>} ></Route>
              <Route path='/logout' element={<Logout/>} ></Route>
        </Routes>
      </div>
  )
}
