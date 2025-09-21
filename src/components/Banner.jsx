import React, { useState,useEffect ,useContext} from 'react'

import Context from '../Context';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmI0NGY1MWEyMTM0YmRhN2U4NWMwZmYxYTQxZGU2YiIsInN1YiI6IjY1NjZmMzY0ZDk1NDIwMDBlMThhM2U3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HCyRbwRfhj4-2hzR9FANXOsOQPtoWYhc6eZ3wLzdpkQ'
  }
};

function Banner() {

const{genre,setGenre,activegenre,setactiveGenre}=useContext(Context)

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`,options)
 .then(res=>res.json())
 .then(data=>setGenre(data.genres))
},[])



  return (
    <>
    <div className='md:hidden   text-red-500 bg-black py-8'>
    <ul className=' flex items-center justify-evenly    md:justify-between md:items-center md:bg-none md:flex-row '>
   <li> <Link to='/' className='text-red-500 px-4 py-2 md:text-xl font-bold ring  hover:ring-blue-500 md:px-4 rounded  md:m-2 md:py-1 ' >Movies</Link></li>
   <li>
    <Link to='/Watchlist' className='text-red-500 px-4 py-2 font-bold md:text-xl  antialiased	hover:subpixel-antialiased ring hover:ring-blue-500 md:px-4 rounded md:m-2	md:py-1 '>Watchlist</Link>

    </li>
    </ul>
   
    </div>
    <h1 className='text-center  p-4 text-2xl font-bold text-blue-500 font-mono bg-black shadow  '>Genres</h1>
    <div className=" flex justify-center flex-wrap w-full   p-4 font-semibold font-mono text-xl bg-black text-blue-500 ">{
       genre.map((g)=>{
        
         return(
          <>
         
           <button className={`px-4 py-2 hover:bg-blue-500 border-2 hover:text-white border-blue-500 rounded-3xl m-1 active text-sm md:text-xl md:px-6`} onClick={(e)=>{
            setactiveGenre(g.id)
           }}>{g.name}</button>
           
          </>
         )
       })

    }
   
    </div>
    
    </>
  )
}

export default Banner
