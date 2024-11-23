import axios from "axios";
import Cookies from "js-cookie";
const axiosClient = axios.create({
    baseURL: "https://be-project-reactjs.onrender.com/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
});
axiosClient.interceptors.request.use(
    async (config) => {
        const token = Cookies.get("token");
        if( token){
            config.headers.Authorization =`Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);
axiosClient.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;

        if(err.response.status ===401 && !originalConfig._retry){
            originalConfig._retry = true;
            const refreshToken = Cookies.get('refreshToken');

            if(!refreshToken){
                return Promise.reject(err);
            }
            try{
                const res =await axiosClient.post('/refresh-token', {token:refreshToken});
                const newToken = res.data.accessToken;
                Cookies.set('token', newToken);
                originalConfig.headers.Authorization = `Bearer ${newToken}`;
                return axiosClient(originalConfig);
            }catch(error){
                Cookies.remove('token');
                Cookies.remove('refreshToken');
                return Promise.reject(error);
            }
        }
    }
);
export default axiosClient;