import express from "express"
import { getAllBlocks } from "../controllers/blockchainControllers.js"
const router = express.Router()

router.route("/").get(getAllBlocks)

export default router
