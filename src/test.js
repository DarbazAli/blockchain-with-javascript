import Blockchain from "./blockchain.js"

const { log, clear } = console
clear()

const bitcoin = new Blockchain()

// create a new block
bitcoin.createNewBlock(0, "00", "00")

// create a new transaction
bitcoin.createNewTransaction(20, "me", "you")
bitcoin.createNewTransaction(30, "me", "you")

bitcoin.createNewBlock(0, "00", "01")

bitcoin.createNewTransaction(20, "me", "you")
bitcoin.createNewTransaction(30, "me", "you")

bitcoin.createNewBlock(0, "01", "02")
log(bitcoin.chain[2])
