import axiosClient from "./axiosClient";

const register = async (body) => {
    return await axiosClient.post('/register', body);
};
const signIn = async (body) => {
    return await axiosClient.post('/login', body);
};

const getInfor = async (userId) => {
    return await axiosClient.get(`/user/info/${userId}`);
};

export { register, signIn,getInfor};