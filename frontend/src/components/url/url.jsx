import axios from "axios";
const basepath = axios.create({
	baseURL: "http://localhost:5000/api",
});

export default basepath;
