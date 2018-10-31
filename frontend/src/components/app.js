import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"

import ProductList from "./product-list/product-list"
import AddProduct from "./add-product/add-product"

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact="true" component={ProductList} />
          <Route path="/product-list" exact="true" component={ProductList} />
          <Route path="/add-product" exact="true" component={AddProduct} />
        </div>
      </Router>
    )
  }

}

export default App
