import React from 'react'

const A03StudentMarks = () => {

    const students = [
        {name :"Abishek T", age : 21,ispresent: true},
        {name :"roopesh", age : 21,ispresent: false},
        {name :"dharsh", age : 21,ispresent: true},
        {name :"tharsini", age : 21,ispresent: false},
        {name :"prthiba", age : 21,ispresent: true}
    ]


  return (
    <>
    <h1>Students Marks</h1>

    <table border={1} bgcolor='blue'>
        <tr> 
            <th>S.No</th>
            <th>name</th>
            <th>age</th>
            <th>attendance</th>
        </tr>

        
            {students.map((student,index)=>{
                return(
                    <tr>
                    <td>{index+1}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.ispresent ? "present" : "absent"}</td>
                    </tr>
                )
            })}
    </table>
    
    </>
  )
}

export default A03StudentMarks