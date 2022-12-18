import React from 'react'

const Specification = ({amount}) => {
  return (
    <>
        <h3>Specification</h3>
        <p><span>Manufacturer: </span>Valcambi S.A.</p>
        <p><span>Country of origin: </span>Switzerland</p>
        <p><span>Fine weight: </span>{amount}.00g</p>
        <p><span>Fineness: </span> 999.9</p>
        <p><span>Grade: </span>New</p>
        <p><span>Certificate: </span>Numbered</p>
        <p><span>Packaging: </span>Tamper-evident packaging</p>
    </>
  )
}

export default Specification