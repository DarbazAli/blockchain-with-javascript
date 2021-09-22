"use strict"

// Blockchain Class
class Blockchain {
    constructor() {
        this.chain = []
        this.pendingTransactions = []
    }

    // create new block
    createNewBlock(nonce, previousBlockHash, hash) {
        const newBlock = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.pendingTransactions,
            nonce,
            hash,
            previousBlockHash,
        }

        this.pendingTransactions = []

        this.chain.push(newBlock)

        return newBlock
    }

    // get last block
    getLastBlock() {
        return this.chain[this.chain.length - 1]
    }

    // create new transaction
    createNewTransaction(amount, sender, recipient) {
        const newTransaction = {
            amount,
            sender,
            recipient,
        }

        this.pendingTransactions.push(newTransaction)

        return this.getLastBlock()["index"]
    }
}

export default Blockchain
