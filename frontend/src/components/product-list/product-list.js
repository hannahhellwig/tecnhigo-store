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
            category={product.category}
            changeRating={this.changeRating}
           />)}
        </div>
      </div>
    )
  }

}

export default ProductList
