import React from "react"
import Rating from "./rating"

class Product extends React.Component {

  render() {
    return (
      <div className="productContainer">
        <div className="imageContainer">
          <img className="productImage" src={this.props.image} alt="" />
        </div>
        <Rating
          rating={this.props.rating}
          id={this.props.id}
          changeRating={this.props.changeRating}/>
        <h2>{this.props.title}</h2>
          <p>{this.props.price} kr</p>
          <button>Buy</button>
      </div>
    )
  }

}

export default Product
