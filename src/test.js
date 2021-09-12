console.clear()

import Blockchain from "./blockchain.js"

const bitcoin = new Blockchain()

bitcoin.createNewBlock(2389, "abcd", "b8cd")
bitcoin.createNewBlock(2389, "qwer", "w2e3")
bitcoin.createNewBlock(2389, "poiu", "p0o9")
