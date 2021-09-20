"use strict"
const { log } = console

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

    /*======================================
    PROOF OF WORK
    ======================================*/
    proofOfWork(previousBlockHash, currentBlockData) {
        let nonce = 0
        let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce)

        // run the hashing func untill we get a hash that starts with '0000'
        while (hash.substring(0, 4) !== "0000") {
            nonce++
            hash = this.hashBlock(previousBlockHash, currentBlockData, nonce)
            log(hash)
        }

        return nonce
    }
}

export default Blockchain
