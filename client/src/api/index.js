import axios from "axios";

const url = "http://localhost:5000/threads";

export const fetchThreads = () => axios.get(url);
