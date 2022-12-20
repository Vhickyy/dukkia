import styled from "styled-components"
import gold from '../Images/gold.jpg'
import Poolinfo from "./Poolinfo"
const Poolallocated = () => {
  return (
    <Wrapper>
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
            <form>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" />
              </div>
              <div>
                <label htmlFor="goldaccount">Gold account number:</label>
                <input type="text" name="goldaccount" id="goldaccount" />
              </div>
              <div>
                <label htmlFor="product">product:</label>
                <input type="text" name="product" id="product" />
              </div>
              <div>
                <label htmlFor="Quantity">Quantity:</label>
                <input type="text" name="Quantity" id="Quantity" />
              </div>
              <div>
                <label htmlFor="Quantity">Quantity:</label>
                <input type="text" name="Quantity" id="Quantity" />
              </div>
              <div>
                <label htmlFor="Quantity">Quantity:</label>
                <input type="text" name="Quantity" id="Quantity" />
              </div>
            </form>
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
}

@media (min-width: 800px){
  .content{
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}
`