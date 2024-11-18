import axiosClient from "./axiosClient";

const getProduct = async () => {
    const res = await axiosClient.get("films/phim-moi-cap-nhat?page=1");
    console.log(res);
};
export {getProduct}