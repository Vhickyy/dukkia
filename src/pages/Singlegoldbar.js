import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import {data} from '../Data/Goldbardata'
const Singlegoldbar = () => {
  const {id} = useParams()
  const filtered =data.find(coin=>coin.id==id)
  return (
    <div className='bg-[whitesmoke] min-h-[86vh] py-[3rem]'>
      <div className='w-[80%] mx-auto '>
        <h3>Philoro Gold Minted Bar of 999.9 fineness</h3>
        <div className='grid md:grid-cols-2 gap-5'>
        <div>
          <div className='py-[1rem] bg-white rounded-md drop-shadow-md w-full h-[23rem]'>
            <img src={filtered.img} alt="" className='w-[80%] mx-auto h-full object-contain'/>
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
        <p><span>Manufacturer: </span>Valcambi S.A</p>
        <p><span>Country of origin: </span>Switzerland</p>
        <p><span>Fine weight: </span>{filtered.amount}.00g</p>
        <p><span>Fineness: </span>999.9</p>
        <p><span>Grade: </span>New</p>
        <p><span>Certificate: </span>Numbered</p>
        <p><span>Packaging: </span>Tamper-evident packaging</p>
        </div>
      </div>
      <p>The {filtered.amount} Grams minted gold bar from Philoro is a 999.9 fine gold with a high-lustre finish and rounded edges</p>
      <h3>Product description</h3>
        <p> The front surface is imprinted with the Valcambi S.A. refinery mark of the letters 'CHI ESSAYEUR FONDEUR' on the gold bar. The front face also shows the bar's weight of 10 Grams, fine gold content of 999.9, and a unique serial number imprinted on it.</p>
        <p>The gold bar is VAT free if the secure storage option with Brink's is opted for. Storage fee is free for the first 12 months of storage. Your specific numbered gold bar will be fully allocated to your name and segregated within the vault.</p>
        <p>All shipping costs is inclusive of handling, protective packaging, insurance, and VAT. The cost of shipping to your preferred location will be advised upon request</p>
    </div>
  </div>
  )
}

export default Singlegoldbar