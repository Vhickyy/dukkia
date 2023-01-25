import React from 'react'
import { useDukia } from '../context/DukiaContext'

const Verfication = () => {
  const {closeSidebar} = useDukia()
  return (
    <div style={{height:"76.27vh"}} onClick={closeSidebar}>
        <p>Verification message has been sent to your email.
        </p>
    </div>
  )
}

export default Verfication