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
      productsToLoad: 16
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
      productsToLoad: this.state.productsToLoad += 16
    })
  }

  render() {
    return (
      <div>
        <div className="hero-image">
          <img src="./images/waves.png"/>
          <div className="hero-text"><h1>Technigo Bootcamp Shop</h1></div>
        </div>

        <Link to="/add-product">
          <button>Add Product</button>
        </Link>
        <div className="productsListContainer">
          {this.state.products.map(product => <Product
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
            category={product.category}
            changeRating={this.changeRating} />)}
          <div>
            <OneProduct data={this.state.products.slice(0, this.state.productsToLoad)} />

          </div>
          <div className="centered-button">
            <Button onClick={this.handleClickLoadMore}> Load More Products </Button>
          </div>
        </div>
        <div className="centered-button">
          <Button onClick={this.handleClickLoadMore}> Load More Products </Button>
        </div>

        <Footer />
      </div>
    )
  }

}

export default ProductList
