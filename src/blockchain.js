"use strict"

class Blockchain {
    constructor() {
        this.chain = []
        this.newTransactoins = []
    }

    // this method will create a new block
    createNewBlock(nonce, previousBlockHash, hash) {
        // block
        const newBlock = {
            index: this.chain.length + 1,
            thimestamp: Date.now(),
            transactions: this.newTransactoins,
            nonce: nonce,
            hash: hash,
            previousBlockHash: previousBlockHash,
        }

        this.newTransactoin = []

        this.chain.push(newBlock)

        return newBlock
    }
}

export default Blockchain
