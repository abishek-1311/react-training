import React from 'react'

const student = {id : 1 , name : "Abishek T" , score :100}

const StudentIdComponent = () => {
  return (
    <div>Student id : {student.id}</div>
  )
}

const StudentNameComponent = () => {
    return (
      <div>Student Name: {student.name} </div>
    )
}

const StudentScoreComponent = () => {
    return (
      <div>Student Score :{student.score} </div>
    )
  }

export default StudentIdComponent

export  {StudentNameComponent , StudentScoreComponent}