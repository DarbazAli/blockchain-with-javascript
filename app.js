"use strict"
const { log } = console

import express from "express"
import morgan from "morgan"
import { uuid } from "uuidv4"

import Blockchain from "./src/blockchain.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("tiny"))

const port = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("API is live")
})

/* ==========================================
API
=========================================== */
const bitcoin = new Blockchain()

app.get("/blockchain", (req, res) => res.send(bitcoin))

app.post("/transaction", (req, res) => {
    const { amount, sender, recipient } = req.body

    const blockIndex = bitcoin.createNewTransaction(amount, sender, recipient)

    res.json({
        note: `transaction will be added in block ${blockIndex}.`,
    })
})

app.get("/mine", (req, res) => {
    const lastBlock = bitcoin.getLastBlock()
    const previousBlockHash = lastBlock["hash"]

    const currentBlockData = {
        transactions: bitcoin.pendingTransactions,
        index: lastBlock["index"] + 1,
    }
    const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData)
    const newBlock = bitcoin.createNewBlock(
        nonce,
        previousBlockHash,
        currentBlockData
    )

    const nodeAddress = uuid().split("-").join("")

    bitcoin.createNewTransaction(12.5, "00", nodeAddress)

    res.json({
        note: "New block mined successfully",
        block: newBlock,
    })
})

app.listen(port, () => {
    log(`Server is listening on http://localhost:${port}`)
})
