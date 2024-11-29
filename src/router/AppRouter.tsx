import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BeersPage from '../pages/BeersPage'
import BeerPage from '../pages/BeerPage'
import HomePage from '../pages/HomePage'

const AppRouter:React.FC = () => {
  return (
    <div>
    <Routes>
        <Route path='/beers'>
            <Route index element={<BeersPage/>}/>
            <Route path=':id' element={<BeerPage/>}/>
        </Route>

        <Route path='/' element={<HomePage/>}/>
    </Routes>
    </div>
  )
}

export default AppRouter