import React, { Profiler } from 'react'

const Ex03JsxDemo = () => {
    const companyName = "Hexaware" ;
    const NumberOfTeams = 10;
    const isLoggedIn = true;

    const cities = ["chennai","mumbai","pune","tindivanam"]

    const profile = {
        name :"Abishek T",
        age : 21,
        ispresent: true
    }

    const students = [
        {name :"Abishek T", age : 21,ispresent: true},
        {name :"roopesh", age : 21,ispresent: false},
        {name :"dharsh", age : 21,ispresent: true},
        {name :"tharsini", age : 21,ispresent: false},
        {name :"prthiba", age : 21,ispresent: true}
    ]
  
    return (
    <>

        {students.map((student,index)=>{
                return(
                    <p key={index}>
                    name :{student.name} , Age :{student.age} , Attendance : {student.ispresent ? "present" : "Absent"}
                    </p>
                );
            })
        }
        <div>                 
            <p>Name : {profile.name}</p>
            <p>Age : {profile.age}</p>
            <p>Is present : {profile.ispresent ? "present" : "not present"}</p>
        </div>

        <h1>Company Name:{companyName}</h1>
        <p>No.of.Teams: {NumberOfTeams}</p>
        <p>{isLoggedIn ? "Welcome user":"Login"}</p>
        <ul>
            <li>{cities[0]}</li>
            <li>{cities[1]}</li>
            <li>{cities[2]}</li>
            <li>{cities[3]}</li>
        </ul>
        <hr />
        <ol>
            {
                cities.map((city,index)=>{
                    return <li key={index}>{city}</li>
                })
            }
        </ol>
        
    </>
  )
}

export default Ex03JsxDemo

//rafce