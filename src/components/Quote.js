import React from 'react'
import hands from '../assets/hands.png'
const Quote = () => {
  return (
    <>
    <div className="quote-container">

        <img src={hands} alt="" />
        <p>Helping one person might not change the world, but it could change the world for one person</p>
        {/* <span> - author name</span> */}
    </div>
    </>
  )
}

export default Quote