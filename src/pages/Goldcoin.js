import React from 'react'
import {data} from '../Data/Goldcoindata'
import { Link } from 'react-router-dom'
const Goldcoin = () => {
  return (
    <main className='bg-[whitesmoke] min-h-[86vh]'>
        <div className='w-[90%] lg:w-[80%] mx-auto py-[3rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]'>
            {data.map(bar=>{
                return(
                    <Link to={`/goldcoins/${bar.id}`} className='bg-white rounded-md p-[2rem] drop-shadow-md' key={bar.id}>
                        <div className='grid gap-4'>
                            <img src={bar.image} alt={bar.title} className='w-full h-[16rem] object-contain'/>
                            <p>{bar.title}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
        {/* <div className='w-[80%] mx-auto py-[3rem]  grid sm:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
            {data.map(coin=>{
                return(
                    <Link to={`/goldcoins/${coin.id}`} className='bg-white rounded-md p-[2rem] drop-shadow-md'>
                        <img src={coin.image} alt={coin.title} />
                        <p>{coin.title}</p>
                    </Link>
                )
            })}
        </div> */}
    </main>
  )
}

export default Goldcoin