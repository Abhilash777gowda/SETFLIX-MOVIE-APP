
import React from 'react'
import logo from './react.svg'
import {Link} from 'react-router-dom'
import {useState,useEffect,useContext} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import Context from '../Context'


function Navbar() {
  let{search,setSearch,handlechange}=useContext(Context)
  const navigate=useNavigate()
  const [typingTimeout, setTypingTimeout] = useState(null);
let handleok=(search)=>{


  if (typingTimeout) {
    clearTimeout(typingTimeout);
}

// Set a new timeout
const newTimeout = setTimeout(() => {
    onKeyUp(search);
}, 500); // Adjust the timeout duration as needed (in milliseconds)

setTypingTimeout(newTimeout);

}

const onKeyUp = (search) => {
  // console.log(query)
  

  if (search!== "") {
    search= search.trim();

  if (search=== "") {
    navigate("/");
  } else {
    navigate(`/search/${search}`)
  }
}
  }


  console.log(search)

let handlemenu=()=>{
  let bars=document.querySelector('.fa-bars')
  let display=document.querySelector('.absolute')
  display.classList.remove('opacity-0')
  bars.classList.add('fa-xmark')
  
  
  
 
}


  
  return (
    <>
    <div className='flex items-center space-x-8 px-6 md:py-2 py-1  font-mono  bg-white shadow-sm shadow-white
       dark:bg-black flex-wrap sticky top-0 z-50 justify-between md:justify-normal ' >
      <img src={logo} alt="" className='w-[40px] md:w-[50px]  hover:scale-105 duration-300 shadow-xl ' />
      <div className='hidden  md:block    text-red-500'>
    <ul className=' flex items-center justify-evenly    md:justify-between md:items-center md:bg-none md:flex-row '>
   <li> <Link to='/' className='text-red-500 px-4 py-2 md:text-xl font-bold ring  hover:ring-blue-500 md:px-4 rounded  md:m-2 md:py-1 ' >Movies</Link></li>
   <li>
    <Link to='/Watchlist' className='text-red-500 px-4 py-2 font-bold md:text-xl  antialiased	hover:subpixel-antialiased ring hover:ring-blue-500 md:px-4  md:m-2	md:py-1 '>Watchlist</Link>

    </li>
    </ul>
   
    </div>
    <input className='px-4 py-1 md:py-2  w-[200px] md:w-[400px] ring flex shrink  hover:ring-blue-500 outline-none  bg-black text-red-500 text-xl  placeholder:text-white  my-2 ' placeholder='Search' value={search} onChange={(e)=>{
     setSearch(e.target.value)
    }} onKeyUp={()=>handleok(search)}/>

    
    
  
    </div>
    
    </>
  )
}

export default Navbar
