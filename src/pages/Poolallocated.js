import styled from "styled-components"
import Poolform from "../Components/Poolform"
import Poolinfo from "../Components/Poolinfo"
import { useDukia } from "../context/DukiaContext"
import gold from '../Images/gold.jpg'
const Poolallocated = () => {
  const {closeSidebar} = useDukia()
  return (
    <Wrapper onClick={closeSidebar}>
      <h3>About Our Pool Allocated Gold Product</h3>
        <div className="content">
            <Poolinfo/>
            <div>
             <h4>Pool allocated calculator</h4>
            <ul>
              <li>Calculate the weight of gold you can get per specific budget</li>
              <li>Calculate the budget required to purchase a specified amount of gold</li>
            </ul>
            <div>
              <img src={gold} alt="" />
            </div>
           <Poolform/>
           </div>
        </div>
    </Wrapper>
  )
}

export default Poolallocated
const Wrapper = styled.main`
padding: 3rem 0;
width: 85%;
margin: 0 auto;
.content{
  background-color: whitesmoke;
  margin-top: 1rem;
  display: grid;
  gap: 1rem;
  line-height: 1.5rem;
  word-spacing: .1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 7px gray;
}
li{
  margin-left: 1rem;
}

@media (min-width: 800px){
  .content{
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
}
`