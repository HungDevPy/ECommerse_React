import { useContext, useState } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarprovider';
import { StoreContext } from '@/contexts/storeProvider';
import Cookies from 'js-cookie';

function Menu({ content, href}) {
    const { menu,subMenu } = styles;
    const { setIsOpen,setType} =useContext(SideBarContext);
    const {userInfor,handleLogout} =useContext(StoreContext);

    const [isShowSubMenu, setIsShowSubMenu] = useState(false);
    const handleClickShowLogin = () => {
        if(content === 'Sign In' && !userInfor){
            setType('login');
            setIsOpen(true);
        }
        // else if(content === 'compare'){
        //     setType('compare');
        //     setIsOpen(true);
        // }
    };

    const handleRenderText =(content) =>{
        if(content === 'Sign In' && userInfor){
            return `Hello: ${ userInfor?.username}`;
        }
        return content;
    }
    const handleHover =() =>{
        console.log(content);

        if(content ==='Sign In' && userInfor){
            setIsShowSubMenu(true);
        }
    }
    return (
        <div className={menu} onMouseEnter={handleHover} onClick={handleClickShowLogin}>
            {handleRenderText(content)}
            {isShowSubMenu && <div onMouseLeave={() => setIsShowSubMenu(false)} className={subMenu}>
                <ul>
                    <li>Profile</li>
                    <li onClick={handleLogout}>Log out</li>
                </ul>
            </div>
            }
        </div>
    );
}

export default Menu;
