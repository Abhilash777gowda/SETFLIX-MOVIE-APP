import React from 'react'
import{useContext} from 'react'
import Context from '../Context'
function Pagination() {

const{pageno,previousPage,nextPage}=useContext(Context)

    return (

        <div className='bg-black p-4 m-4 flex items-center justify-center rounded-xl '>
            <div className='flex items-center justify-around flex-row w-80 '>
                <div className='hover:cursor-pointer hover:scale-110 duration-200 w-25 text-xl ring px-4 active:ring-blue-900 text-white' onClick={previousPage} >
                    <i className="fa-solid fa-arrow-left " ></i>
                </div>
                <div className=' w-25 text-xl text-white '>{pageno}</div>
                <div className=' w-25 text-xl hover:cursor-pointer hover:scale-110 duration-200 ring px-4 active:ring-blue-900 text-white' onClick={nextPage}>
                    <i className="fa-solid fa-arrow-right " ></i>
                </div>
            </div>
        </div>
    )
}

export default Pagination
