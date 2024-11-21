import HeaderSideBar from '@components/ContentSideBar/componets/HeaderSideBar/HeaderSideBar';
import { CiHeart } from 'react-icons/ci';
import styles from './style.module.scss';
import ItemsProduct from '@components/ContentSideBar/componets/itemsProduct/itemsProduct';
import MyButton from '@components/Button/Button';

function WishList() {
    const { container, boxBtn ,boxContent} = styles;

    return (
        <div className={container}>
            <div className={boxContent}>
                <HeaderSideBar
                    icon={<CiHeart style={{ fontSize: '30px' }} />}
                    title='WISHLIST'
                />
                <ItemsProduct />
            </div>
            <div className={boxBtn}>
                <MyButton content={'VIEW WISHLIST'} style={{ width: '100%' }} />
                <MyButton
                    content={'ADD ALL TO CART'}
                    isPrimary={false}
                    style={{ width: '100%' }}
                />
            </div>
        </div>
    );
}

export default WishList;
