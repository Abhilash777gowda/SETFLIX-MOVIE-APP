import React from 'react'
import Context from '../Context'
import{useContext,useEffect} from 'react'
import Moviecard from './Moviecard';
import Pagination from './Pagination';
import { useParams } from 'react-router-dom';
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmI0NGY1MWEyMTM0YmRhN2U4NWMwZmYxYTQxZGU2YiIsInN1YiI6IjY1NjZmMzY0ZDk1NDIwMDBlMThhM2U3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HCyRbwRfhj4-2hzR9FANXOsOQPtoWYhc6eZ3wLzdpkQ'
    }
  };


function Searchbar() {

    const{setMain,main,pageno,previousPage,nextPage}=useContext(Context)
  const{search}=useParams()
   useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&with_origin_country=IN&language=en-US&page=${pageno}`,options)
  .then(res=>res.json())
 .then(data=>setMain(data.results))


   },[search])

console.log(main)

  return (
   <>
    <div className=' flex flex-row flex-wrap   justify-around gap-y-2 dark:bg-black p-4 overflow-hidden font-mono' >
    
    {main.map((movie,index)=>(
        
            
            <Moviecard key={index} title={movie.title} poster={movie.poster_path}  movie={movie}/>
        
        
      ))}
             

         
         

        
</div>
<Pagination pageno={pageno} previousPage={previousPage} nextPage={nextPage} />
   </>
  )
}

export default Searchbar
