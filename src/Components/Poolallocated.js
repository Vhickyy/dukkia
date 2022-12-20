import styled from "styled-components"
import gold from '../Images/gold.jpg'
const Poolallocated = () => {
  return (
    <Wrapper>
      <h3>About Our Pool Allocated Gold Product</h3>
        <div className="content">
            <div>
               <p>Pool Allocated Gold offers an offer an ultra-low-cost alternative to buying physical bullion bars and coins. It allows co-ownership of a gold bar or a pool of gold bars based on budget and Naira value and accumulate holdings over time.</p>
              <p className="endp"> The pool allocated gold is fully backed by pool of gold bars fully segregated within our Brink's vault. Holdings can be converted to physical gold bars or coins at any time subject to terms and conditions.</p>
              <div className="desc">
                <div>
                  <p className="bold">Minimum purchase amount:</p>
                  <p>N5,000</p>
                </div>
                <div>
                  <p className="bold">Weight range:</p>
                  <p> 0.1g - 999.99g</p>
                </div>
                <div>
                  <p className="bold">Fineness:</p>
                  <p>999.9</p>
                </div>
                <div>
                  <p className="bold">Manufacturer:</p>
                  <p>LBMA Good Delivery Refiner</p>
                </div>
              </div>
            </div>
           <div>
            <h4>Pool allocated calculator</h4>
            <ul>
              <li>Calculate the weight of gold you can get per specific budget</li>
              <li>Calculate the budget required to purchase a specified amount of gold</li>
            </ul>
            <div>
              <img src={gold} alt="" />
            </div>
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
}
.bold{
  font-weight: bold;
}
.desc{
  margin-top: 1rem;
  display: grid;
  gap: .5rem;
}
.endp{
  margin-top: 1rem;
}
@media (min-width: 800px){
  .content{
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}
`