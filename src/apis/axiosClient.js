import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://be-project-reactjs.onrender.com/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
});
export default axiosClient;