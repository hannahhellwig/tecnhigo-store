import mongoose from "mongoose"
import bodyParser from "body-parser"
import express from "express"
import cors from "cors"

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

const mongoServer = "mongo://localhost/myNewDB"

mongoose.connect(mongoServer, { useNewUrlParser: true })
mongoose.Promise = Promise

mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("Connected to mongodb"))

const Product = mongoose.model("Product", {
  itemID: Number,
  sellerID: String,
  title: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  rating: Number
})

app.get("/", (req, res) => {
  res.send("Team 1 API")
})

app.listen(8080, () => console.log("Team 1 API listening on port 8080!"))
