import React from 'react'
import {data} from '../Data/Goldcoindata'
const Goldcoin = () => {
  return (
    <main className='bg-[whitesmoke] min-h-[86vh]'>
        <div className='w-[80%] mx-auto py-[3rem]  grid sm:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
            {data.map(bar=>{
                return(
                    <div className='bg-white rounded-md p-[2rem] drop-shadow-md'>
                        <img src={bar.img} alt="" />
                        <p>{bar.name}</p>
                    </div>
                )
            })}
        </div>
    </main>
  )
}

export default Goldcoin