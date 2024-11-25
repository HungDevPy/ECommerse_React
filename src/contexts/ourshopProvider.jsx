import { createContext, useState } from 'react';

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
        { value: '0', label: '8' },
        { value: '1', label: '12' },
        { value: '2', label: 'All' },
    ];
    const [sort, setSort] = useState('0');
    const [show, setShow] = useState('8');
    const [isShow, setIsShow] = useState(true);

    const value = {
        sortOptions,
        showOptions,
        setSort,
        setShow,
        setIsShow,
    };

    console.log(sort,'sort');
    console.log(show,'show');
    console.log(isShow,'isShow');

    return (
        <OurShopContext.Provider value={value}>
            {children}  
        </OurShopContext.Provider>
    );
};
