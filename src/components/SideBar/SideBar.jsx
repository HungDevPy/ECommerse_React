import { useContext } from 'react';
import style from './styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarprovider';
import classNames from 'classnames';
import { RiCloseLargeFill } from 'react-icons/ri';
import Login from '@components/ContentSideBar/Login/Login';
import Compare from '@components/ContentSideBar/Compare/Compare';
import WishList from '@components/ContentSideBar/WishList/WishList';
import Cart from '@components/ContentSideBar/Cart/Cart';

function SideBar() {
    const { container, overlay, sidebar, slideSideBar, boxIcon } = style;
    const { isOpen, setIsOpen,type } = useContext(SideBarContext);

    const heanderToggle = () => {
        setIsOpen(!isOpen);
    };
    const handleRenderContent = () => {
        switch (type) {
            case 'login':
                return <Login />;
            
            case 'compare':
                return <Compare />;
            case 'wishlist':
                return  <WishList />;
            case 'cart':
                return <Cart />;
            default:
                return <Login />;
        }
    };

    return (
        <div className={container}>
            <div
                className={classNames({
                    [overlay]: isOpen,
                })}
                onClick={heanderToggle}
            ></div>
            <div
                className={classNames(sidebar, {
                    [slideSideBar]: isOpen,
                })}
            >
                {isOpen && (
                    <div className={classNames({[boxIcon]:isOpen})} onClick={heanderToggle}>
                        <RiCloseLargeFill />
                    </div>
                )}
                {handleRenderContent()}
            </div>
        </div>
    );
}

export default SideBar;
