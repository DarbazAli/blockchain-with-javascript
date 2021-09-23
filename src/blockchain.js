"use strict"

import sha256 from "sha256"
// Blockchian Class
class Blockchain {
    constructor() {
        this.chain = []
        this.pendingTransactions = []
    }

    /* 
    ====================================================
    CREATE NEW BLOCK
    ====================================================
    */
    createNewBlock = (nonce = 100, previousBlockHash = "", hash = "") => {
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

    /* 
    ====================================================
    GET LAST BLOCK
    ====================================================
    */
    getLastBlock = () => this.chain[this.chain.length - 1]

    /* 
    ====================================================
    CREATE NEW TRANSACTION
    ====================================================
    */
    createNewTransaction = (amount = 0, sender = "", recipient = "") => {
        const newTransaction = {
            amount,
            sender,
            recipient,
        }

        this.pendingTransactions.push(newTransaction)
        return this.getLastBlock()["index"]
    }

    /* 
    ====================================================
    HASH A BLOCK
    ====================================================
    */
    hashBlock = (previousBlockHash = "", currentBlockData = {}, nonce = 0) => {
        const dataAsString = `
        ${previousBlockHash}
        ${JSON.stringify(currentBlockData)}
        ${nonce.toString()}
       `

        const hash = sha256(dataAsString)

        return hash
    }
}

export default Blockchain
