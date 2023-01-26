import React from 'react'
import styled from 'styled-components';


const LiveGoldPrice () => {
  return (
    <Wrapper>
          <div className='top'>
                
                       <span> Buy: </span> <span className='top-p'>$178.43/oz</span> <span>Sell: </span> $178.9
                      
                    </div>
    </Wrapper>
  )
}
export default LiveGoldPrice

const Wrapper = Styled
   .top{
        color: #fff;
        height: 100%;
        width: 6rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        /* padding: 1rem; */
    }
