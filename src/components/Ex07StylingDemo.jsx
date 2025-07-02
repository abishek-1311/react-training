import React from 'react'
import '../styles/style.css'
import styles from '../styles/Ex07StylingDemo.module.css'

const Ex07StylingDemo = () => {
const headingstyle = {
    border : "1px solid black",
    backgroundColor : 'green', 
    color : 'blue'
}

  return (
    <div>
        {/* Inline Style */}
        <h1 style={{backgroundColor : 'blue', color : 'violet'}}>
            Styled with Inline Style Object
        </h1>

        {/* Internal Style */}
        <h1 style={headingstyle}>
            Styled with Internal Style Object
        </h1>

        {/* External Style */}
        <h1 className='external-class'>
            Styled with External Style Object
        </h1>
        <hr />

        <h1 className={styles.moduleStyle}> 
            Styled with CSS module
        </h1>

    </div>
  )
}

export default Ex07StylingDemo