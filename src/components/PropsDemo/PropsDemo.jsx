import React from 'react'
import SimpleValuesProps, { ArrayofObjectsValueProps, ArrayValueProps, ObjectValueProps } from './PropsChildComponents'

const PropsDemo = () => {

    const namesArray=["Abi","jai","sai"]
    const studentObj = {id : 1 , name : "abishek", score : 85}

    const StudentArrayOfObjects = [
      {id : 1 , name : "abishek", score : 85},
      {id : 2 , name : "Roopesh", score : 85},
      {id : 3 , name : "Dharsh", score : 85}
    ]

  return (
    <div>
        <h2>Array of Objects</h2>
        <ArrayofObjectsValueProps studentObjects = {StudentArrayOfObjects}/>
        <hr />
        
        <h2>Object Value Props</h2>
        <ObjectValueProps student={studentObj}/>
        <hr />

        <h2>Array Value Props</h2>
        <ArrayValueProps names={namesArray}/>
        <hr />

        <h2>Simple Value Props</h2>
        <SimpleValuesProps character = "Tony Stark" heroname = "Iron man" productionHouse ="Marvel"/>
        <SimpleValuesProps character = "Steve Roger" heroname = "Cap" productionHouse ="Marvel Cinematic"/>
    </div>
  )
}

export default PropsDemo