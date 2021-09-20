"use strict"

import sha256 from "sha256"
class Blockchain {
    constructor() {
        this.chain = []
        this.pendingTransactions = []
    }

    /*======================================
    CREATE A NEW BLOCK
    ======================================*/
    createNewBlock(nonce, previousBlockHash, hash) {
        const newBlock = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.pendingTransactions,
            nonce: nonce,
            hash: hash,
            previousBlockHash: previousBlockHash,
        }

        this.chain.push(newBlock)

        return newBlock
    }

    /*======================================
    GET LAST BLOCK
    ======================================*/
    getLastBlock() {
        return this.chain[this.chain.length - 1]
    }

    /*======================================
    CREATE NEW TRANSACTION
    ======================================*/
    createNewTransaction(amount, sender, recipient) {
        const newTransaction = {
            amount: amount,
            sender: sender,
            recipient: recipient,
        }

        this.pendingTransactions.push(newTransaction)
        return this.getLastBlock()["index"] + 1
    }

    /*======================================
    HASH A BLOCK
    ======================================*/
    hashBlock(previousBlockHash, nonce, currentBlockData) {
        const hashStr = `${previousBlockHash}${nonce.toString()}${JSON.stringify(
            currentBlockData
        )}`

        const hash = sha256(hashStr)

        return hash
    }
}

export default Blockchain
