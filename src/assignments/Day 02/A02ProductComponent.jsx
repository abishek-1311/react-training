import React from 'react'

const product = {id : 101, name : "Smartphone", price : 29999, instock : true}

const ProductInfo = () => {
  return (
    <div>
        <h2>Product Info</h2>
        Product Id : {product.id}
        Product Name : {product.name}
        <hr />
    </div>
  )
}

const ProductPrice = () => {
    return (
      <div>
            <h2>Product Price</h2>
            Product Price : $ {product.price}
            <hr />
      </div>
    )
}

const ProductStock = () => {
    return (
      <div>
        <h2>Product in stock</h2>
        {product.instock ? "Available" : "Not Available"}
      </div>
    )
}
export default ProductInfo
export {ProductPrice,ProductStock}