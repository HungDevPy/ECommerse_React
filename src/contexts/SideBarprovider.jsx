import { createContext, useState } from 'react';
import { getCart } from '@/apis/cartService';


export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {  
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState('');
    const [listProductCart, setListProductCart] = useState([]);



    const handleGetListProductCart = (userId,type) => {
        if(userId &&  type === 'cart'){
            getCart(userId)
                .then((res) => {
                setListProductCart(res.data.data);
            }).catch((error) => {
                setListProductCart([]);
            });
                
    }};
    return (
        <SideBarContext.Provider value={{ isOpen, setIsOpen,type, setType,handleGetListProductCart,listProductCart }}>
            {children}  
        </SideBarContext.Provider>
    );
};
