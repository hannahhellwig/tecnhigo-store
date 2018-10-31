import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Product from "./product.js"

const productsApi = "http://localhost:8080/products"

class ProductList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch(productsApi).then(response => response.json()).then(json => {
      this.setState({
        products: json
      })
    })
  }

  render() {
    return (
      <div>
        <header><h1>Christmas</h1></header>
        <Link to="/add-product">
          <button>Add Product</button>
        </Link>
        <div className="productsListContainer">
          {this.state.products.map(product => <Product
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
            category={product.category} />)}
        </div>
      </div>
    )
  }

}

export default ProductList
