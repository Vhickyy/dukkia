import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import {data} from '../Data/Goldcoindata'
const Singlegoldcoin = () => {
    const {id} = useParams()
    const filtered =data.find(coin=>coin.id==id)
    console.log(filtered);
  return (
    <div className='bg-[whitesmoke] min-h-[86vh] py-[3rem]'>
        <div className='w-[80%] mx-auto '>
            <p>{filtered.name}</p>
            <div className='grid md:grid-cols-2 gap-5'>
                <div>
                    <div className='py-[1rem] bg-white rounded-md drop-shadow-md w-full'>
                        <img src={filtered.img} alt="" className='w-[90%] mx-auto'/>
                    </div>
                    <div className='flex'>
                        <button className=''><FaMinus/></button>
                        <button>1</button>
                        <button><FaPlus/></button>
                        <button className='uppercase bg-[#244D91] text-white py-[.5rem] px-[.3rem] flex items-center justify-around w-[9rem] rounded-sm'><AiOutlineShoppingCart/>Add to cart</button>
                    </div>
                </div>
              
                <div className='md:ml-10'>
                    <h4>Specification</h4>
                    <p><span>Manufacturer: </span>{filtered.Manufacturer}</p>
                    <p><span>Country of origin: </span>{filtered.Country}</p>
                    <p><span>Fine weight: </span>{filtered.FineWeight}</p>
                    <p><span>Weight:</span>{filtered.Weight}</p>
                    <p><span>Fineness: </span>{filtered.Fineness}</p>
                    <p><span>Grade: </span>{filtered.Grade}</p>
                    {/* <p><span>Certificate: </span>Numbered</p>
                    <p><span>Packaging: </span>Tamper-evident packaging</p> */}
                </div>
            </div>
          
            <div>
                <h4>Product Description</h4>
                <p>{filtered.desc}</p>
                <p>The gold coin is VAT free if the secure storage option with Brink's is opted for. Storage fee is free for the first 12 months of storage. Your specific numbered gold bar will be fully allocated to you in your name and segregated within the vault.</p>
                <p>All shipping costs is inclusive of handling, protective packaging, insurance, and VAT. The cost of shipping to your preferred location will be advised upon request.</p>
            </div>
            
        </div>

    </div>
  )
}

export default Singlegoldcoin