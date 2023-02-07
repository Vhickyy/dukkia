import React from 'react'
import { Link } from 'react-router-dom'
import {data} from '../Data/Goldbardata'
const Goldbar = () => {
  return (
    <main className='bg-[whitesmoke] min-h-[86vh]'>
        <div className='w-[90%] lg:w-[80%] mx-auto py-[3rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]'>
            {data.map(bar=>{
                return(
                    <Link to={`/goldbars/${bar.id}`} className='bg-white rounded-md p-[2rem] drop-shadow-md' key={bar.id}>
                        <div className='grid gap-4'>
                            {/* <div className='w-full h-[23rem]'> */}
                            <img src={bar.image} alt={bar.title} className='w-full h-[23rem] object-contain'/>
                            {/* </div> */}
                            <p>{bar.title}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    </main>
  )
}

export default Goldbar