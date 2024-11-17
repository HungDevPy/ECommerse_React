import BoxIcon from './BoxIcons/BoxIcon.jsx';
import { dataBoxicons, dataMenus } from './constants';
import Menu from './Menu/Menu.jsx';
import styles from './styles.module.scss';
import logo from '@icons/image/logo.png';
import raload from '@icons/svg/reload.svg';
import heart from '@icons/svg/heart.svg';
import cart from '@icons/svg/cart.svg';
function MyHeader() {
    const { containerBoxicon, containerMenu, containerHeader, containerBox,container } =
        styles;
    return (
        <div className={container}>
            <div className={containerHeader}>
            <div className={containerBox}>
                <div className={containerBoxicon}>
                    {dataBoxicons.slice(0, 3).map((item) => {
                        return <BoxIcon type={item.type} href={item.href} />;
                    })}
                </div>
                <div className={containerMenu}>
                    {dataMenus.slice(0, 3).map((item) => {
                        return <Menu content={item.content} href={item.href} />;
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
                        return <Menu content={item.content} href={item.href} />;
                    })}
                </div>
                <div className={containerBoxicon}>
                    <img width={26} height={26} src={raload} alt='' />
                    <img width={26} height={26} src={heart} alt='' />
                    <img width={26} height={26} src={cart} alt='' />
                </div>
            </div>
        </div>
        </div>
    );
}

export default MyHeader;
