"use strict"

import sha256 from "sha256"

class Blockchain {
    constructor() {
        this.chain = []
        this.pendingTransactions = []
    }

    // this method will create a new block
    createNewBlock(nonce, previousBlockHash, hash) {
        // block
        const newBlock = {
            index: this.chain.length + 1,
            thimestamp: Date.now(),
            transactions: this.pendingTransactions,
            nonce: nonce,
            hash: hash,
            previousBlockHash: previousBlockHash,
        }

        this.chain.push(newBlock)

        return newBlock
    }

    // get last block

    getLastBlock() {
        return this.chain[this.chain.length - 1]
    }

    // create new transactoin
    createNewTransaction(amount, sender, recipient) {
        const newTransaction = {
            amount: amount,
            sender: sender,
            recipient: recipient,
        }

        this.pendingTransactions.push(newTransaction)
        return this.getLastBlock()["index"] + 1
    }

    // hash a block
    hashBlock(previousBlockHash, nonce, currentBlockData) {
        const hashStr = `${previousBlockHash}${nonce.toString()}${JSON.stringify(
            currentBlockData
        )}`

        const hash = sha256(hashStr)

        return hash
    }
}

export default Blockchain
