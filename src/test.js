import Blockchain from "./blockchain.js"

const { clear, log } = console

// clear console with each run
clear()

const bitcoin = new Blockchain()

bitcoin.createNewBlock(100, "00", "00")

log(bitcoin)
