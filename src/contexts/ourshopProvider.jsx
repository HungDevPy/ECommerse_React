import { createContext, useEffect, useState } from 'react';
import { getProductOutShop } from '@/apis/productsService';

export const OurShopContext = createContext();

export const OurShopProvider = ({ children }) => { 

    const sortOptions = [
        { value: '0', label: 'Default sorting' },
        { value: '1', label: 'Sort by popularity' },
        { value: '2', label: 'Sort by average rating' },
        { value: '3', label: 'Sort by latest' },
        { value: '4', label: 'Sort by price: low to high' },
        { value: '5', label: 'Sort by price: high to low' },

    ];
    const showOptions = [
        { value: '8', label: '8' },
        { value: '12', label: '12' },
        { value: 'all', label: 'All' },
    ];
    const [sort, setSort] = useState('0');
    const [show, setShow] = useState('8');
    const [isShow, setIsShow] = useState(true);
    const [products, setProducts] = useState([]);

    const value = {
        sortOptions,
        showOptions,
        setSort,
        setShow,
        setIsShow,
        isShow,
        products,
    };

    useEffect(() => {
        const query = {
            sortType: sort,
            page: 1,
            limit: show,
        };
        getProductOutShop(query).then(res =>{
            console.log(res);
            setProducts(res.contents);
        }).catch(err =>{
            console.log(err);
        });
    }, [sort, show]);

    return (
        <OurShopContext.Provider value={value}>
            {children}  
        </OurShopContext.Provider>
    );
};
