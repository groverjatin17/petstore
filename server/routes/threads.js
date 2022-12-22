import express from "express";

import { getThreads } from "../controllers/threads.js";

const router = express.Router();

router.get("/", getThreads);

export default router;
