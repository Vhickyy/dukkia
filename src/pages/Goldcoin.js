import React from 'react'
import {data} from '../Data/Goldcoindata'
import { Link } from 'react-router-dom'
const Goldcoin = () => {
  return (
    <main className='bg-[whitesmoke] min-h-[86vh]'>
        <div className='w-[80%] mx-auto py-[3rem]  grid sm:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
            {data.map(coin=>{
                return(
                    <Link to={`/goldcoins/${coin.id}`} className='bg-white rounded-md p-[2rem] drop-shadow-md'>
                        <img src={coin.img} alt="" />
                        <p>{coin.name}</p>
                    </Link>
                )
            })}
        </div>
    </main>
  )
}

export default Goldcoin