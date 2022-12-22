import express from "express";
import fetchThreads from "../utils/fetchThreads.js";
const router = express.Router();

export const getThreads = async (req, res) => {
  try {
    const threads = await fetchThreads();
    res.status(200).json(threads);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default router;
