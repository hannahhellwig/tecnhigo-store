import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"

class AddProduct extends React.Component {

  render() {
    return (
      <div>
        <div className="addProductForm">
          <h1>Add Product</h1>
          <form href="#" method="post" action="http://localhost:8080/products">
            <input type="text" placeholder="Title" name="title" required />
            <input type="number" placeholder="25" name="price" required />
            <input type="text" placeholder="Ornaments" name="category" required />
            <input type="text" placeholder="url" name="image" required />
            <input type="submit" />
          </form>
        </div>
        <Link to="/">
          <button>Back to Product Page</button>
        </Link>
      </div>
    )
  }

}

export default AddProduct
