import React from 'react'
import Moviecard from './Moviecard'
import { useEffect } from 'react'
import { useState,useContext } from 'react'
import Pagination from '../components/Pagination'
import Banner from './Banner'
import Context from '../Context'
import { useParams } from 'react-router-dom'
import action from './action'


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer 92b44f51a2134bda7e85c0ff1a41de6b'
  }
};

function Movies() {
  const{addWatchList,watchList,removeWatchList,setWatchList,activegenre,movies,setMovies,pageno,setPageno,nextPage,previousPage}=useContext(Context)

  useEffect(() => {
    fetch(` https://api.themoviedb.org/3/discover/movie?with_genres=${activegenre}&api_key=92b44f51a2134bda7e85c0ff1a41de6b&with_origin_country=IN&page=${pageno}`, options)
    .then(res => res.json())
    .then(data => setMovies( data.results))
    .then(error=>error)
   


  }, [pageno,activegenre])

 
  

  return (
    <>
      <div className=''>
        <h1 className='capitalize text-center text-2xl font-bold  font-mono text-blue-500 py-2 	dark:bg-black'>{action[activegenre]}-Movies</h1>
      </div>
      <div className=' flex flex-row flex-wrap   justify-around gap-y-2 dark:bg-black p-4 overflow-hidden font-mono' >
        
        {
          
            
          
          movies .map((movie, index) => {
              
              return <><Moviecard key={index} title={movie.title} poster={movie.poster_path}  movie={movie} 
               />  </>
            })
             

         
         

        }


      </div>
      <Pagination pageno={pageno} previousPage={previousPage} nextPage={nextPage} />
    </>
  )
}

export default Movies
// 92b44f51a2134bda7e85c0ff1a41de6b   api key
// https://api.themoviedb.org/3/movie/popular?api_key=92b44f51a2134bda7e85c0ff1a41de6b&language=en-US&page=1