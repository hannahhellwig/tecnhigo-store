import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Product from "./product.js"
import OneProduct from "./one-product.js"

const productsApi = "http://localhost:8080/products"

class ProductList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [],
      productsToLoad: 10
    }
  }

  componentDidMount() {
    fetch(productsApi).then(response => response.json()).then(json => {
      this.setState({
        products: json
      })
    })
  }

  handleClickLoadMore = () => {
    this.setState({
      productsToLoad: this.state.productsToLoad += 10
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
          <OneProduct data={this.state.products.slice(0, this.state.productsToLoad)} />
         </div>
        <div className="centered-button">
          <Button onClick={this.handleClickLoadMore}> Load More Products </Button>
        </div>

      </div>
    )
  }

}

export default ProductList
