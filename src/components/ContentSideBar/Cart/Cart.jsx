import MyButton from '@components/Button/Button';
import styles from './style.module.scss';
import { PiShoppingCart } from 'react-icons/pi';
import HeaderSideBar from '@components/ContentSideBar/componets/HeaderSideBar/HeaderSideBar';
import ItemsProduct from '@components/ContentSideBar/componets/itemsProduct/itemsProduct';
import { useContext } from 'react';
import { SideBarContext } from '@contexts/SideBarprovider';
function Cart() {
    const { container, boxContent, boxBtn,boxSub } = styles;
    const {listProductCart} =useContext(SideBarContext);
    return (
        <div className={container}>
            <div className={boxContent}>
                <HeaderSideBar
                    icon={<PiShoppingCart style={{ fontSize: '30px' }} />}
                    title='CART'
                />
                {listProductCart.map((item,index) => {
                    return <ItemsProduct key={item.index} src={item.images[0]} nameProduct={item.name}
                    priceProduct={item.price}  skuProduct={item.sku} sizeProduct={item.size} quantityProduct={item.quantity}/>
                })}
            </div>
            <div>
                <div className={boxSub}>
                    <p>Subtotal:</p>
                    <p>$434.20</p>
                </div>
                <div className={boxBtn}>
                    <MyButton content={'VIEW CART'} style={{ width: '100%' }} />
                    <MyButton
                        content={'CHECKOUT'}
                        isPrimary={false}
                        style={{ width: '100%' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Cart;
