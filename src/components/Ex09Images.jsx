import React from 'react'
import reactlogo from '../assets/react.svg'
const Ex09Images = () => {
  return (
    <div>
        {/* Import immage from public folder */}
        <p>
            <img src="./public/vite.svg" />
        </p>

        {/* importing the image from assests folder */}
        <p>
            <img src={reactlogo}/>
        </p>
    </div>
  )
}

export default Ex09Images