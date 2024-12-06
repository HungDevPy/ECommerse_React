import { createContext, useEffect, useState } from 'react';
import { getCart } from '@/apis/cartService';
import Cookies from 'js-cookie';


export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {  
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState('');
    const [listProductCart, setListProductCart] = useState([]);
    const [isLoading, setisLoading] = useState(false)
    const userId = Cookies.get('userId');


    const handleGetListProductCart = (userId,type) => {
        if(userId &&  type === 'cart'){
            setisLoading(true);
            getCart(userId)
                .then((res) => {
                setListProductCart(res.data.data);
                setisLoading(false)
            }).catch((error) => {
                setListProductCart([]);
                setisLoading(false)
            });
                
    }};
    useEffect(() => {
        handleGetListProductCart(userId,'cart');
    }, []);
    return (
        <SideBarContext.Provider value={{ isOpen, setIsOpen,type, setType,handleGetListProductCart,listProductCart,isLoading,setisLoading,userId }}>
            {children}  
        </SideBarContext.Provider>
    );
};
