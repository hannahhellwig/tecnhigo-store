import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Product from "./product.js"
import Button from "../button/button.js"
import OneProduct from "./one-product.js"
import Footer from "../footer/footer.js"
import './product-list.scss'

const productsApi = "http://localhost:8080/products"

class ProductList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [],
      productsToLoad: 8
    }
  }

  componentDidMount() {
    fetch(productsApi).then(response => response.json()).then(json => {
      this.setState({
        products: json

      })
    })
  }

  changeRating = (rating, id) => {
    fetch("http://localhost:8080/products", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, rating })
    })

      .then(response => {
        if (response.status === 201) {
          console.log(this)
          const newProductState = this.state.products.map(product => {
            if (product._id === id) {
              product.rating = rating
              console.log(rating, id)
            }
            return product
          })
          this.setState({
            products: newProductState
          })
          console.log(newProductState)
        }
      })
      .catch(err => {
        console.log(err, "ERROR")
      })
  }

  handleClickLoadMore = () => {
    this.setState({
      productsToLoad: this.state.productsToLoad += 8
    })
  }

  handleArraySort = () => {
    this.setState({
      products: this.state.products.sort((a, b) => {
        if (a.rating > b.rating) {
          return -1
        }
        if (a.rating < b.rating) {
          return 1
        }
      })
    })
  }

  render() {
    return (
      <div>
        <div className="hero-container">
          <div className="hero-image"><img src="./images/waves.png"/></div>
          <div className="logo-image"><img src="./images/logo-circle.png"/></div>
          <div className="hero-text"><h1>Technigo Bootcamp Shop</h1></div>
        </div>
        <div className="best-rating-container">
        <div className="best-rating-header">
          <p>Sort by<img src="./images/icon.png" /></p>
        <button className="Handle" onClick={this.handleArraySort}>Best Rating</button>
        </div>
        <Link to="/add-product">
          <button className="addButton">Add product</button>
        </Link>
        </div>


        <div className="productsListContainer">
          {this.state.products.map((product, index) => <Product
            key={index}
            id={product._id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
            category={product.category}
            changeRating={this.changeRating} />)}
        </div>

        <OneProduct data={this.state.products.slice(0, this.state.productsToLoad)} />

          <div className="centered-button">
            <Button onClick={this.handleClickLoadMore}><p><span>+</span> Load More Products </p> </Button>
            </div>


        <Footer />
      </div>
    )
  }

}

export default ProductList
