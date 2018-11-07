import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
const productsAPI = "http://localhost:8080/products"

class AddProduct extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: "",
      price: "",
      category: "",
      image: ""
    }
  }

    handleTitle = event => {
      this.setState({ title: event.target.value })
    }

    handlePrice = event => {
      this.setState({ price: event.target.value })
    }

    handleCategory = event => {
      this.setState({ category: event.target.value })
    }

    handleImage = event => {
      this.setState({ image: event.target.value })
    }

    handleSubmit = event => {
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
              title: "",
              price: "",
              category: "",
              image: ""
            })
          }
        })
        .catch(err => {
          console.log(err, "ERROR")
        })
    }

    render() {
      return (
        <div className="wrapper">
          <h1>Add product</h1>
          <form id="addproduct" className="addproduct" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              name="title"
              onChange={this.handleTitle}
              value={this.state.title}
              required />
            <input
              type="number"
              placeholder="Price"
              name="price"
              onChange={this.handlePrice}
              value={this.state.price}
              required />
            <input
              type="text"
              placeholder="Category"
              name="category"
              onChange={this.handleCategory}
              value={this.state.category}
              required />
            <input
              type="text"
              placeholder="Image URL"
              name="image"
              onChange={this.handleImage}
              value={this.state.image}
              required />
            <input
              type="submit" />
          </form>
          <Link to="/product-list">
            <button>Back to Product List</button>
          </Link>
        </div>
      )
    }
}
export default AddProduct
