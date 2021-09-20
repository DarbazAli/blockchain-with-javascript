"use strict"
const { log } = console

import express from "express"
import morgan from "morgan"
import blockchainRoutes from "./src/routes/blockchainRoutes.js"
import transactionRoutes from "./src/routes/transactionRoutes.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("tiny"))

const port = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("API is live")
})

app.use("/blockchain", blockchainRoutes)
app.use("/transaction", transactionRoutes)

app.listen(port, () => {
    log(`Server is listening on http://localhost:${port}`)
})
