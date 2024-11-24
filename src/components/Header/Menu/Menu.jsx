import { useContext, useState } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarprovider';
import { StoreContext } from '@/contexts/storeProvider';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function Menu({ content, href}) {
    const { menu,subMenu,listSub,itemsSub } = styles;
    const { setIsOpen,setType} =useContext(SideBarContext);
    const {userInfor,handleLogout} =useContext(StoreContext);
    const navigate =useNavigate();
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);
    const handleClickShowLogin = () => {
        if(content === 'Sign In' && !userInfor){
            setType('login');
            setIsOpen(true);
        }
        if(content ==='Our Shop'){
            navigate('/shop');
        }
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
                <div className={listSub}>
                    <div className={itemsSub}>Profile</div>
                    <div className={itemsSub} onClick={handleLogout}>Log out</div>
                </div>
            </div>
            }
        </div>
    );
}

export default Menu;
