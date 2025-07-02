import React from 'react'

const SimpleValuesProps = ({character , heroname , productionHouse}) => {
  //const SimpleValuesProps = (props) => {     [--rather using it we can able destructure 
                                               //directly in the arguments.--]
  
    
    // console.log(props)

    //const {character , heroname , productionHouse} = props   [--destructuring the props object--]
    return (
        <div>
            {/* character: {props.character} ||
            Hero Name: {props.HeroName} ||
             Production:{props.productionHouse}. */}  

             {/* rather using props.heroname , props.character we can destructure it */}

            character: {character} ||
            Hero Name: {heroname} ||
            Production:{productionHouse}. 
        </div>
  
    )
}

export default SimpleValuesProps




export const ArrayValueProps = ({names}) => {
    // export const ArrayValueProps = (props) => {  [--rather using this destruture in the props argument--]
   
    // console.log(props)
    // console.log(props.names)

   // const{names} = props //destructuring data
  return (
    <div>
        {/* {
            props.names.map((name , index)=>(         [--before destructure...!--]
                <p key={index}>{index+1}:{name}</p>   destructring happen and convert into below code
            ))
        } */}
        {
            names.map((name , index)=>(
                <p key={index}>{index+1}:{name}</p>
            ))
        }
    </div>
  )
}



export const ObjectValueProps = (props) => {
  

    //const{id,name,score}=props.student  [--we can destructure like this or below...!--]

    const id = props.student.id
    const name  = props.student.name
    const score = props.student.score
    return (
    <>
        {/* id:{props.student.id} ||
        name : {props.student.name}||        [--before destructuring--]
        score : {props.student.score}. */}

        id:{id} ||
        name : {name}||  
        score : {score}.

    </>
  
    )
}




export const ArrayofObjectsValueProps = (props) => {

const {studentObjects} = props;

    return (
        <>
            
        {
            studentObjects.map((student)=>(
                <p key={student.id}>
                    {student.id} : {student.name}--{student.score}
                </p>
            ))

        }
        
        </>

    )
}

