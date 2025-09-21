import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom';
import Context from '../Context';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmI0NGY1MWEyMTM0YmRhN2U4NWMwZmYxYTQxZGU2YiIsInN1YiI6IjY1NjZmMzY0ZDk1NDIwMDBlMThhM2U3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HCyRbwRfhj4-2hzR9FANXOsOQPtoWYhc6eZ3wLzdpkQ'

  }
};
function Card() {
  const { id } = useParams()
  const { detail, setDetail, cast, setCast, genre, setGenre, video, setVideo, watch, setWatch } = useContext(Context)




  useEffect(() => {
    fetch(` https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(data => setVideo(data.results))
      .then(error => error)



  }, [])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers`, options)
      .then(res => res.json())
      .then(data => setWatch(data.results.AD.flatrate[0]))
      .then(error => error)
  }, [])
  console.log(watch)

  useEffect(() => {
    fetch(` https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
      .then(res => res.json())
      .then(data => setCast(data.cast))
      .then(error => error)



  }, [])



  useEffect(() => {
    fetch(` https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then(res => res.json())
      .then(data => setDetail(data))
      .then(error => error)



  }, [])



  useEffect(() => {
    fetch(` https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then(res => res.json())
      .then(data => setGenre(data.genres))
      .then(error => error)



  }, [])
  let poster = detail.poster_path
  let title = detail.title
  let overview = detail.overview
  let release = detail.release_date
  let r = detail.vote_average


  // console.log(ch.cast.forEach(ele => {
  //   console.log(ele.name)
  // }))



  // console.log(genres[1].name)

  return (
    <>
      <div className='bg-black space-x-8  flex items-center justify-center py-6 flex-col   h-full overflow-hidden bg-cover font-mono mb-4' >
        <div className='w-[300px]  h-[400px] rounded-xl flex items-end justify-between flex-col bg-cover hover:shadow-2xl  hover:shadow-blue-500  duration-300 hover:scale-105 border-2 border-blue-500 z-40 flex-wrap p-2' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster})` }}>
          <div className='text-blue-500 border-2 px-3 py-1 text-right mx-4 text-xl rounded-3xl border-blue-500 bg-gray-900/80 hover:cursor-pointer shadow-2xl hover:shadow-blue-500 hover:scale-105 duration-300'><i className="fa-regular fa-star mx-2" ></i>{detail.vote_average}</div>
          <h1 className='text-2xl text-center  text-blue-500 bg-gray-900/80 w-full rounded-xl items-center justify-center'>{title}<span className='ml-2'></span></h1>
        </div>
        <div className='h-30  w-full mt-6 flex items-center justify-center'>
          <h1 className='text-white text-center pt-3 px-3 md:px-60 font-Roboto text-[20px]  '>{overview}</h1>
        </div>
        <div className='mt-8 bg-blue-900 py-4 px-6 rounded-3xl border-2 border-blue-500 '>
          <span className='text-[18px] text-white font-bold -tracking-2 font-mono hover:scale-105 duration-300'>Release-Date:{release}</span>
        </div>
        <div className='mt-8 bg-blue-900 py-4 px-6 rounded-3xl border-2 border-blue-500 '>
          <span className='text-[18px] text-white font-bold -tracking-2 font-mono hover:scale-105 duration-300'>Budget:{parseInt(detail.budget / 100000)}Cr</span>
        </div>
        <div className='mt-8 bg-blue-900 py-4 px-6 rounded-3xl border-2 border-blue-500 '>
          <span className='text-[18px] text-white font-bold -tracking-2 font-mono hover:scale-105 duration-300'>Box-Office:{parseInt(detail.revenue / 100000)}Cr</span>
        </div>
        <div className='flex flex-wrap items-center mt-6 w-full justify-center'>
          {genre.map((tag) => (
            <>
              <div key={tag.id} className='text-white border-2 border-white font-semibold rounded-full px-6 py-3 m-2 hover:scale-105 duration-300 hover:shadow-xl hover:shadow-white hover:cursor-pointer'>{tag.name}</div>
            </>
          ))}
        </div>
        <div className='flex justify-center flex-wrap  mt-8 mb-6 bg-blue-500 border-2 border-blue-500 text-white px-5 py-3 rounded-3xl hover:scale-105 duration-300 hover:shadow-2xl hover:shadow-blue-500 hover:cursor-pointer text-2xl'>
          cast
        </div>
        <div className="md:px-5 flex flex-row my-5 max-w-full flex-start overflow-x-auto relative
              scrollbar-thin scrollbar-thumb-gray-500/20 scrollbar-track-gray-900/90 md:pb-3">
          {cast.map((ch) => (
            <>
              {ch.profile_path !== null ?
                <>
                  <div className='flex min-w-[9rem] md:min-w-[10rem] max-w-[9rem] md:max-w-[10rem] h-full items-center text-center flex-col mx-2'>
                    <img src={`https://image.tmdb.org/t/p/original/${ch.profile_path}`} alt="" className='w-full h-full roundex-xl' />
                    <p className="text-blue-500">{ch.name}</p>
                    <p className="text-white">{ch.character === '' ? null : (ch.character)

                    }</p>

                  </div>
                </> : null
              }

            </>
          ))}


        </div>
        <h1 className='text-2xl text-white bg-blue-500 rounded-3xl px-6 py-3 text-center  duration-300   '>Videos</h1>
        <div className='w-full h-[100px]  flex items-center justify-center flex-wrap '>
          {video.map((v) => (


            <>
              <div className=' h-[100px] p-6 flex items-center justify-between flex-col hover:cursor-pointer'>
                <i className="fa-brands fa-youtube text-red-500 text-5xl p-2 text-center hover:scale-105 duration-300 shadow-xl hover:shadow-red-500"></i>
                <a href={`https://www.youtube.com/watch?v=${v.key}`} target='_blank'>
                  <p className='text-2xl text-blue-500 hover:underline duration-300 text-center'>{v.name}</p>
                </a>
              </div>

              
            </>

          ))}
        </div>
        
       
               
              
       

      </div>
      
    </>
  )
}

export default Card
