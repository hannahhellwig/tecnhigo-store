import React from "react"
import ReactDOM from "react-dom"
import App from "./components/app"
import ProductList from "./components/product-list/product-list"
import "./index.scss"
import "./components/product-list/product-list.scss"
import "./components/add-product/add-product.scss"

ReactDOM.render(<ProductList />, document.getElementById("root"))
