"use strict"

import Blockchain from "../blockchain.js"

const bitcoin = new Blockchain()

export const getAllBlocks = async (req, res) => {
    res.send(bitcoin)
}
