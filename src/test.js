import Blockchain from "./blockchain.js"

const { log, clear } = console
clear()

const bitcoin = new Blockchain()

const previousBlockHash = "01"
const currentBlockData = [
    {
        amount: 20,
        sender: "me",
        recipient: "him",
    },
]
const nonce = 10

bitcoin.createNewBlock(100, "00", "00")

bitcoin.createNewTransaction(100, "me", "you")

bitcoin.createNewBlock(100, "00", "01")

log(bitcoin)

log(bitcon.hashBlock(previousBlockHash))
