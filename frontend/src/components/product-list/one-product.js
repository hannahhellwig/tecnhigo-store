import React from "react"
import Product from "./product.js"
import ProductList from './product-list.js'

const OneProduct = props => {

  const results = props.data;
  const products = results.map(product => <Product
    id={product._id}
    title={product.title}
    image={product.image}
    price={product.price}
    rating={product.rating}
    category={product.category}
    />)

  return (
    <div className="productsListContainer">
      {products}
    </div>
  )
}

export default OneProduct
