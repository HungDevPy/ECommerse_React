import { useContext } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarprovider';

function Menu({ content, href}) {
    const { menu } = styles;
    const { setIsOpen,setType} =useContext(SideBarContext);
    const handleClickShowLogin = () => {
        if(content === 'Sign In'){
            setType('login');
            setIsOpen(true);
        }
        
        // else if(content === 'compare'){
        //     setType('compare');
        //     setIsOpen(true);
        // }
    };
    return (
        <div className={menu} onClick={handleClickShowLogin}>
            {content}
        </div>
    );
}

export default Menu;
