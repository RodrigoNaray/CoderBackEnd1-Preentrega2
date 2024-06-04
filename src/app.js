import express from "express";
import routes from "./router/index.js";
import handlebars from "express-handlebars";

const PORT = 8080
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use("/api", routes)


app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto ${PORT}`)
})