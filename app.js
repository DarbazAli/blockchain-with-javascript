"use strict"
const { log } = console

import express from "express"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("API is live")
})

app.listen(port, () => {
    log(`Server is listening on http://localhost:${port}`)
})
