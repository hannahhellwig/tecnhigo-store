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

app.post("/products", (req, res) => {
  console.log("update")
  Product.findOneAndUpdate({_id:req.body.id}, {'$set': {rating: req.body.rating}}, {upsert:true}, (err, doc) =>{
      if (err){
        res.status(500).send()
        console.log("error", err, req.body);
      }else {
        res.status(201).send()
        console.log("succesfully saved");
      }
  })
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

app.post("/products/add", (req, res) => {
  const product = new Product(req.body)
  console.log("hej")

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
