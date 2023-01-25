import styled from "styled-components"

function Poolinfo() {
  return (
    <Wrapper>
      <div>
      <p>Pool Allocated Gold offers an offer an ultra-low-cost alternative to buying physical bullion bars and coins. It allows co-ownership of a gold bar or a pool of gold bars based on budget and Naira value and accumulate holdings over time.</p>
      <p className="endp"> The pool allocated gold is fully backed by pool of gold bars fully segregated within our Brink's vault. Holdings can be converted to physical gold bars or coins at any time subject to terms and conditions.</p>
      </div>
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
      </Wrapper>
  )
}

export default Poolinfo
const Wrapper = styled.section`
display: grid;
  justify-content: space-between;
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
`