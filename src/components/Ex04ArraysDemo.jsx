import React from 'react'

const Ex04ArraysDemo = () => {
    const students = [
        {id : 1 , name :"Abishek T", age : 21,ispresent: true,score :99},
        {id : 2 ,name :"roopesh", age : 21,ispresent: false,score :99},
        {id : 3 ,name :"dharsh", age : 21,ispresent: true,score : 50},
        {id : 4 ,name :"tharsini", age : 21,ispresent: false,score : 85},
        {id : 5 ,name :"prthiba", age : 21,ispresent: true,score : 40}
    ];

    //filter() demo...!

    console.log("Total students",students)
   // const passedStudent = students.filter(student => student.score>=50)   return 
//    const passedStudent = students.filter(
//         (student) => student.score>=50 && student.score<=90
//     );
//     console.log("Passed students:",passedStudent)


    //find() demo...! ->return the single student value whose score greater than 90...!
    const student = students.find((student)=> student.score >90)
    console.log(`student score more than 90 : ${student.name}`)

    //reduce() demo...!  ->  get totalmarks of all the students..!
    const totalmarks= students.reduce((sum , student)=>{
        return sum + student.score ;
    },0);

    console.log(`Total marks : ${totalmarks}`)

    const averagemark = totalmarks / students.length;
    console.log(`average marks : ${averagemark}`)

    const scores = students.map((student) => student.score);
    console.log(`scores : ${scores}`)

    const maxScore = Math.max(...scores)
    console.log(`max ${maxScore}`)

    const topper = students.filter((s)=>s.score==maxScore)
    console.log(`Topper student : ${topper}`)

    // topper.map((student)=>{
    //     console.log(student.name)
    // })


  return (
    <>
        {/* map() demo */}

        <h2>Student List</h2>

        {students.map((student)=>(
                <p key={student.id}>
                {student.id},{student.name}-{student.score}
                </p>
            ))
        }

        <hr />

        {/* <ul>
        {
            passedStudent.map((student)=>(
                <li>{student.id}-{student.name}-{student.score}</li>
            ))
        }
        </ul> */}

        <h2>pass Student</h2>
        <ul>
            {
                students.filter((student)=>student.score>=50)
                .map((p)=>(
                    <li>{p.name} - {p.score}</li>
                ))
            }
        </ul>
        <hr />


        <h2>Topper list</h2>

        {
            topper.map((topper)=>(
                <p>
                    {topper.name} : {topper.score}
                </p>
            ))
        }
    </>
  )
}

export default Ex04ArraysDemo 