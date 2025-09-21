import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Movies  from './components/Movies'
import Watchlist from './components/Watchlist'
import React, { useEffect } from 'react'
import Banner from './components/Banner'
import Pagination from './components/Pagination'
import {useState} from 'react'
import sound from './assets/k.mp3'
import Card from './components/Card'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'

import { MovieProvider } from './Context'
import Moviecard from './components/Moviecard'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmI0NGY1MWEyMTM0YmRhN2U4NWMwZmYxYTQxZGU2YiIsInN1YiI6IjY1NjZmMzY0ZDk1NDIwMDBlMThhM2U3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HCyRbwRfhj4-2hzR9FANXOsOQPtoWYhc6eZ3wLzdpkQ'
  }
};

function App() {

  return (
    <>
    <MovieProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<><Banner/> 
       <Movies /> </>}></Route>
      <Route path='/Watchlist' element={<Watchlist/>}></Route>
      <Route path='/movies/:id' element={<Card/>}></Route>
      <Route path='/Search/:search' element={<Searchbar/>}>
      </Route>

      
    </Routes>
    <Footer/>
    </BrowserRouter>
    </MovieProvider>
    </>
  )
}

export default App
