import React from 'react'
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import s from './assets/voice2.wav'
const Context = createContext();
export function MovieProvider({ children }) {
    const [watchList, setwatchList] = useState([])
    const [movie, setMovie] = useState([])
    const [activegenre, setactiveGenre] = useState(28)
    const [movies, setMovies] = useState([])
    const [pageno, setPageno] = useState(1)
    const [detail, setDetail] = useState([])
    const [cast, setCast] = useState([])
    const [genre, setGenre] = useState([])
    const [video, setVideo] = useState([])
    const [Search, setValue] = useState('')
    const [search,setSearch]=useState()
    const [watch,setWatch]=useState([])
    const [main,setMain]=useState([])
    

    let removeWatchList = (watch) => {
        // console.log(movie)
        let del = watchList.filter((mo) => {
            return mo.id != watch.id
        })
        setwatchList(del)
         new Audio(s).play()
    }
    const previousPage = () => {
        if (pageno == 1) {
            setPageno(1)
        }
        else {
            setPageno(pageno - 1)
        }
    }
    const nextPage = () => {
        setPageno(pageno + 1)
    }
    
let handleChange=(e)=>{setValue(e.target.value)}
let handlechange=(e)=>{if(search==''){
    return false
}
else{
    setSearch(e.target.value)
}
}
    
let toprating=()=>{
 let top= watchList.sort((a,b)=>{
    return b.vote_average-a.vote_average
  })
  setwatchList([...top])
}
let lowrating=()=>{
 let down= watchList.sort((a,b)=>{
    return a.vote_average-b.vote_average
  })
  setwatchList([...down])
}



    return (<Context.Provider value={{
        watchList,
        setwatchList, movie, setMovie, activegenre, setactiveGenre, movies, setMovies, pageno, setPageno, detail, setDetail, cast, setCast, genre, setGenre, video, setVideo, search, setValue, removeWatchList, previousPage, nextPage,lowrating,toprating,handleChange,Search,setSearch,handlechange,watch,setWatch,main,setMain
    }}>
        {children}
    </Context.Provider>)

}
export default Context

