import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';


const LiveGoldPrice = () => {
  const [bid,setBid] = useState(0);
  const [ask,setAsk] = useState(0);
  const price = async()=>{
    try {
      const response = await axios('https://outlets.goldline.co.uk/outlets/GetSpringFountPricesXML.asp?Key=foUntAinS!71x')
      const data = response.text()
      console.log(data);
      const parser = new DOMParser()
      const doc = parser.parseFromString(data,"application/xml")
      const bidPrice = doc.getElementsByTagName('USD')[0].getElementsByTagName('Au')[0].getElementsByTagName('Ask')[0].textContent;
      const askPrice = doc.getElementsByTagName('USD')[0].getElementsByTagName('Au')[0].getElementsByTagName('Ask')[0].textContent;
      setAsk(data)
      setBid(bidPrice)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    price()
  },[])
  return (
    <Wrapper>
      {ask}
          {/* <div className='top'> */}
            <span className='label'> Buy: </span> <span className='top-p'>$178.43/oz</span> <span>  Sell: </span> $178.9
        {/* </div> */}
    </Wrapper>
  )
}
export default LiveGoldPrice

const Wrapper = styled.div`
        /* color: #fff;
        height: 100%;
        width: 6rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center; */
        /* padding: 1rem; */
        /* background-color: black; */
    color: blue;
    height: 100%;
    parring: 8px;
    
    /* width: 5.5rem; */
    background-color: yellow;
    display: flex;
    /* flex-direction: column; */
    justify-content: space-evenly;
    align-items: center;
    `
