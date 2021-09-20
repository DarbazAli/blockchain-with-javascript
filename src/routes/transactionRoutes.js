"use strict"

import express from "express"
import { getAllTransactions } from "../controllers/transactionControllers.js"

const router = express.Router()

router.route("/").get(getAllTransactions)

export default router
