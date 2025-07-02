import React from 'react'

const A01ArrayMethods = () => {

    const products = [
        {id :1 , name:"Laptop" , price:50000 , rating : 4.5},
        {id :2 , name:"Phone" , price:25000 , rating : 4.0},
        {id :3 , name:"Tablet" , price:30000 , rating : 3.8},
        {id :4 , name:"Monitor" , price:15000 , rating : 4.2}
    ]

  return (
    <>
    <table border={2} bgcolor=''>
        <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Price</th>
            <th>Rating</th>
        </tr>

        {
            products.map((product,index)=>(
                <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.rating}</td>
                </tr>
            ))
        }

    </table>
    
    </>
  )
}

export default A01ArrayMethods