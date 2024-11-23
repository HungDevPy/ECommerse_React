import axiosClient from "./axiosClient";

const register = async (body) => {
    return await axiosClient.post('/register', body);
};
const signIn = async (body) => {
    return await axiosClient.post('/login', body);
};

export { register, signIn };