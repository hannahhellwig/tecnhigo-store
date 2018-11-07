import React from "react"
import Product from "./product.js"

const OneProduct = props => {

  const results = props.data;
  const products = results.map(product => <Product
    title={product.title}
    image={product.image}
    price={product.price}
    rating={product.rating}
    category={product.category} />)

  return (
    <div className="products-list">
      {products}
    </div>
  )
}

export default OneProduct
