import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import { getInfor } from "@/apis/authService";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [userInfor, setUserInfor] = useState(null);
    const [userId, setUserId] = useState(Cookies.get('userId'));
    

    const handleLogout = () => {
        Cookies.remove('token');
        Cookies.remove('userId');
        Cookies.remove('refreshToken');
        setUserInfor(null);
        window.location.reload();
    };

    useEffect(() => {
        // Call API Infor User
        if (userId) {
            // Call API getInfor
            getInfor(userId)
                .then((res) => {
                    setUserInfor(res.data.data);
                })
                .catch((err) => { // Fixed the typo here
                    console.error('Get info error:', err);
                });
        }
    }, [userId,Cookies]);

    return (
        <StoreContext.Provider value={{ userInfor,handleLogout,setUserId }}> {/* Provide userInfor to the context */}
            {children}
        </StoreContext.Provider>
    );
};