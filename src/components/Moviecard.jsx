import React from 'react'
import Watchlist from './Watchlist'
import { useState,useContext } from 'react'
import Context from '../Context'
import sound from '../assets/voice.wav'
import {Link,useParams} from 'react-router-dom'
import Card from './Card'

function Moviecard({ title, poster, movie  }) {

const{watchList,removeWatchList,setwatchList}=useContext(Context)

let addWatchList=(movie)=> {
  if (!watchList.includes(movie)) {
      new Audio(sound).play()
      // localStorage.setItem('app',JSON.stringify([ ...watchList,movie]))
      
      setwatchList([...watchList, movie])

      
  }
  else {
      alert('already added')
  }
}


  return (
    <>

      <div className='h-[250px] w-[160px] md:h-[300px] md:w-[200px]  bg-cover mx-2 my-4 rounded-xl flex flex-col items-end justify-between border border-white hover:cursor-pointer hover:scale-110 duration-300 moviecard hover:shadow-2xl	hover:shadow-blue-500 'style={{ backgroundImage: `url( https://image.tmdb.org/t/p/original/${poster})` }} loading='lazy'>
   

      <div className="flex items-center justify-center m-4 p-2  rounded-3xl border-2  bg-white hover:scale-110 duration-300 	" onClick={() => (addWatchList(movie))}>
      <i class="fa-regular fa-heart"></i>
        </div>
       


        <Link to={`/movies/${movie.id}`} className='w-full'  >
        <div className='py-1 text-blue-500 text-sm text-center bg-gray-900/80 w-full rounded-xl hover:underline hover:cursor-pointer'   >
          {title}
        </div>
        
        </Link>
      </div>
      
      
      
    </>
  )
}

export default Moviecard
