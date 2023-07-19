import React from 'react'
import SignUp from '../Pages/SignUp'
import Login from '../Pages/Login'
import Oems from '../Pages/Oems'
import Alldeals from '../Pages/Alldeals'
import AddDeals from '../Pages/AddDeals'
import {Routes,Route} from 'react-router-dom';
import { PrivateRoute } from '../Pages/PrivateRoutes'

const MainRoutes = () => {
  return (
    <div>
            <Routes>
                <Route path="/sign" element={<SignUp />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/oems" element={<Oems/>} />
                <Route path="/" element={<Alldeals/>} />
                <Route path="/add" element={
                  <PrivateRoute>
                     <AddDeals/>
                </PrivateRoute>
                } />
            </Routes>
        </div>
  )
}

export default MainRoutes
