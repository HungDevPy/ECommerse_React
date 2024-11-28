import BoxIcon from './BoxIcons/BoxIcon.jsx';
import { dataBoxicons, dataMenus } from './constants';
import Menu from './Menu/Menu.jsx';
import styles from './styles.module.scss';
import logo from '@icons/image/logo.png';
import { TfiReload } from "react-icons/tfi";
import { BsHeart } from "react-icons/bs";;
import { PiShoppingCartLight } from "react-icons/pi";
import useScrollHeading from '@/Hook/useScrollHeading';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SideBarprovider';
function MyHeader() {
    const {
        containerBoxicon,
        containerMenu,
        containerHeader,
        containerBox,
        container,
        fixedHeader,
        topHeader,
        boxCart,
        quantity,
    } = styles;

    const  {scrollPosition} = useScrollHeading();
    const [fixedPostion, setFixedPostion] = useState(false);

    const {setIsOpen,setType,listProductCart} =useContext(SideBarContext); 
   
    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };


    useEffect(() => {
        setFixedPostion(scrollPosition> 80? true : false);
    }, [scrollPosition]);

    return (
        <div className={classNames(container,topHeader,{
            [fixedHeader]: fixedPostion 
        })}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxicon}>
                        {dataBoxicons.slice(0, 3).map((item) => {
                            return (
                                <BoxIcon type={item.type} href={item.href} />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenus.slice(0, 3).map((item) => {
                            return (
                                <Menu content={item.content} href={item.href}/>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <img
                        src={logo}
                        alt='logo'
                        style={{
                            with: '153px',
                            height: '53px',
                        }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenus.slice(3, dataMenus.length).map((item) => {
                            return (
                                <Menu content={item.content} href={item.href} setIsOpen={setIsOpen}  />
                            );
                        })}
                    </div>
                    <div className={containerBoxicon}>
                        <TfiReload style={{
                            fontSize: '19px',
                        }}
                            onClick={() => handleOpenSideBar('compare')}
                        />
                        <BsHeart style={{
                            fontSize: '20px',
                        }} 
                            onClick={() => handleOpenSideBar('wishlist')}
                        />
                        <div className={boxCart}>
                        <PiShoppingCartLight style={{
                            fontSize: '20px',
                        }}
                            onClick={() => handleOpenSideBar('cart')}
                        />
                        <div className={quantity}>
                            {listProductCart.length}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
