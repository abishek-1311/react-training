import React from 'react'

const Ex05ConditionalRendering = () => {

    const students = [
        {id : 1 , name :"Abishek T", age : 21,ispresent: true,score :99},
        {id : 2 ,name :"roopesh", age : 21,ispresent: false,score :99},
        {id : 3 ,name :"dharsh", age : 21,ispresent: true,score : 50},
        {id : 4 ,name :"tharsini", age : 21,ispresent: false,score : 85},
        {id : 5 ,name :"prthiba", age : 21,ispresent: true,score : 40}
    ];

    const result = students.find((student)=> student.score>100)
    console.log(`Result : ${result}`)

  return (
    <>
        <p>{result ? <Comp1/>:<Comp2/>}</p>  
        <p></p>

    </>
  )
};

const Comp1 = ()=> {
    return(
        <>
            <p>Student present</p>
        </>
    )
}

const Comp2 = ()=> {
    return(
        <>
            <p>No Student</p>
        </>
    )
}

export default Ex05ConditionalRendering