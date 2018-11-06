import mongoose from "mongoose"
import bodyParser from "body-parser"
import express from "express"
import cors from "cors"

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

const mongoServer = "mongodb://localhost/myFyndiqDb"

mongoose.connect(mongoServer, { useMongoClient: true })
mongoose.Promise = Promise

mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("Connected to mongodb"))

const Product = mongoose.model("Product", {
  itemID: Number,
  title: String,
  price: Number,
  image: String,
  category: String,
  rating: Number
})

app.get("/", (req, res) => {
  res.send("Team 4 API")
})

app.get("/products", (req, res) => {
  Product.find().then(products => {
    console.log("products: ", products)
    res.json(products)
  })
})

app.post("/products", (req, res) => {
 const product = new Product(req.body)

 product.save()
   .then(() => { res.status(201).redirect('http://localhost:3000/#/add-product') })
   .catch(err => { res.status(400).send(err) })
})


app.post("/products", (req, res) => {
  const product = new Product(req.body)
  console.log(req.body)

  product.save()
    .then(() => {
      console.log("save")
      res.status(201).json({created: true})
    })
    .catch(err => {
      console.log("error")
      res.status(400).send(err)
    })
})

app.listen(8080, () => console.log("Team 4 API listening on port 8080!"))
