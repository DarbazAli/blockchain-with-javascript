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

log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce))
