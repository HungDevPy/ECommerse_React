import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://phim.nguonc.com/api/",
    headers: {
        "Content-Type": "application/json",
    },
});
export default axiosClient;