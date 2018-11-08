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

  // changeRating(newRating, name) {
  //   this.setState({
  //     rating: newRating
  //   })
  // }


  changeRating = event => {
    event.preventDefault()   //prevents the default behavior of submit

    fetch("http://localhost:8080/products", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })


      .then(response => {
        if (response.status === 201) {
          this.setState({
            rating: ""
          })
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

  render() {
    return (
      <div>
        <div className="hero-container">
          <div className="hero-image"><img src="./images/waves.png"/></div>
          <div className="logo-image"><img src="./images/logo-circle.png"/></div>
          <div className="hero-text"><h1>Technigo Bootcamp Shop</h1></div>
        </div>



            <OneProduct data={this.state.products.slice(0, this.state.productsToLoad)} />

        <div className="button-container">
          <div className="centered-button">
            <Button onClick={this.handleClickLoadMore}> Load More Products </Button>
            <Link to="/add-product">
              <button>Add Product</button>
            </Link>
          </div>
        </div>


        <Footer />
      </div>
    )
  }

}

export default ProductList
