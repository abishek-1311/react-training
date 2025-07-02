import React from 'react'

const A02DeveloperInfo = () => {
    const developerName = "Abishek T";
    const experience = 2;
    const isAvailable = true;
    
  return (
    <>  
    <h3>Developer Name:{developerName}</h3>
    <h3>Experience : {experience}</h3>
    <h3>{isAvailable ? "Available" : "Not Available"}</h3>
    </>
  )
}

export default A02DeveloperInfo