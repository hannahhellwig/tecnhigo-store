import React from "react"
import Rating from "./rating"

class Product extends React.Component {

  render() {
    return (
      <div className="productContainer">
        <img className="productImage" src={this.props.image} alt="" />
        <h2>{this.props.title}</h2>
        <p>Price {this.props.price} kr</p>
        <Rating rating={this.props.rating}/>
        <button>Buy</button>
      </div>
    )
  }

}

export default Product
