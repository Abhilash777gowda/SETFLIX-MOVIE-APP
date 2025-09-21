import React from 'react'
import { useState, useEffect, useContext } from 'react'
import Context from '../Context'
import { Link } from 'react-router-dom'
import Moviecard from './Moviecard'
import Movies from './Movies'
import Pagination from './Pagination'
import action from './action'






function Watchlist({ movie }) {

  const { Search, setValue, watchList, removeWatchList, toprating, lowrating, handleChange, addWatchList, setwatchList, movies } = useContext(Context)
  console.log(watchList)
  return (
    <>
      <div className='flex fex-wrap mt-4 justify-center items-center bg-black  py-4 mx-4 rounded-xl'>
        <input className='px-8 py-2 ring outline-none hover:ring-blue-500 bg-black text-red-500 placeholder:text-red-500 rounded-xl text-xl capitalize' placeholder='Search' value={Search} type='text' onChange={handleChange} />
      </div>
      <div className='lg:hidden flex items-center  bg-black mt-2 text-blue-500 justify-between flex-col'>
        {
          watchList.filter((watch) => {
            return watch.title.toLowerCase().includes(Search.toLowerCase())
          }).map((watch) => {
            return <>
              <div className='flex items-center justify-center'>
              <div className='h-[300px] w-[200px]  bg-cover mx-2 my-4 rounded-xl flex flex-col items-end justify-between border border-blue-500 hover:cursor-pointer hover:scale-110 duration-300 moviecard ' style={{ backgroundImage: `url( https://image.tmdb.org/t/p/original/${watch.poster_path})` }} ></div>
              </div>
              <div className='w-full flex items-center justify-between flex-col gap-2'>
                <div>
                <Link to={`/movies/${watch.id}`}>
                  <div className='text-center text-xl hover:underline hover:text-blue-500 duration-300'>Name-{watch.title}</div>
                </Link>
                </div>
                <div >
                  <h1 className='text-center'>Rating -<i className="fa-regular fa-star mx-2" ></i>{watch.vote_average}</h1>
               <h1 className='text-center'> Genre-{action[watch.genre_ids[0]]}</h1>
               <h1 className='text-red-600 hover:cursor-pointer text-center hover:underline m-2' onClick={() => removeWatchList(watch)}><i class="fa-solid fa-trash" style={{ color: "red" }}></i> </h1>
                </div>
              </div>
              <h1 className='border-t-2 border-blue-500'></h1>
            </>
          })


        }

      </div>


      <div className='hidden lg:block text-white p-4 font-mono'>
        {<table className='w-full text-white text-center capitalize bg-black rounded-xl '>
          <thead className='border border-blue-200'>
            <tr className='border border-blue-200 text-2xl '>
              <th></th>
              <th className='text-center text-2xl '>name</th>
              <th className='text-center py-2'>
                popularity</th>
              <th className='text-center'>

                <div onClick={toprating} className='bg-red-500 mt-2 active:opacity-80 '>
                  <i className="fa-solid fa-arrow-up mx-2 " ></i>
                </div>
                rating
                <div onClick={lowrating} className='bg-red-500 mb-2 active:opacity-80 '>
                  <i className="fa-solid fa-arrow-down mx-2 " ></i>
                </div>


              </th>
              <th className='text-center'>genre</th>

            </tr>
          </thead>
          <tbody>
            {

              watchList.filter((watch) => {
                return watch.title.toLowerCase().includes(Search.toLowerCase())
              }).map((watch) => {

                return <tr className=' border  border-b-blue-200 text-xl'>
                  <td className='p-2 flex w-[150px]  items-center justify-center text-center'>
                    <div className='h-[100px] w-[100px]  bg-cover mx-2 my-4 rounded-xl flex flex-col items-end justify-between border border-blue-500 hover:cursor-pointer hover:scale-110 duration-300 moviecard ' style={{ backgroundImage: `url( https://image.tmdb.org/t/p/original/${watch.poster_path})` }} ></div>

                  </td>
                  <td className='text-center'>
                    <Link to={`/movies/${watch.id}`}>
                      <div className='text-center text-xl hover:underline hover:text-blue-500 duration-300'>{watch.title}</div>
                    </Link>
                  </td>
                  <td className='text-center'>{watch.popularity}</td>
                  <td className='text-center'><i className="fa-regular fa-star mx-2" ></i>{watch.vote_average}</td>
                  <td className='text-center'>{action[watch.genre_ids[0]]}</td>
                  <td className='text-red-600 hover:cursor-pointer text-center hover:underline' onClick={() => removeWatchList(watch)}><i class="fa-solid fa-trash" style={{ color: "red" }}></i></td>
                </tr>

              })}


          </tbody>
        </table>}

      </div>

    </>
  )
}

export default Watchlist
