const express = require("express")
const mongoose = require("mongoose")

const app = express();
app.use(express.json())


app.get("/", (requiere, response) => {
    response.json({
        "message": "Hola Mundo"
    })
})


app.listen(8080, (request, response) => {
    console.log("Esta vivoooo")
})