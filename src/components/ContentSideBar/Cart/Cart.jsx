import MyButton from '@components/Button/Button';
import styles from './style.module.scss';
import { PiShoppingCart } from 'react-icons/pi';
import HeaderSideBar from '@components/ContentSideBar/componets/HeaderSideBar/HeaderSideBar';
import ItemsProduct from '@components/ContentSideBar/componets/itemsProduct/itemsProduct';
import { useContext } from 'react';
import { SideBarContext } from '@contexts/SideBarprovider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import cls from 'classnames';
import { useNavigate } from 'react-router-dom';
function Cart() {
    const { container, boxContent, boxBtn, boxSub,isEmpty,boxEmpty,textEmpty,boxBtnEmpty } = styles;
    const { listProductCart, isLoading,setIsOpen} = useContext(SideBarContext);
    const navigate = useNavigate();

    const handleNavigateToShop=()=>{
        navigate('/shop')
        setIsOpen(false);
    };
    const handleNavigateToCart=()=>{
        navigate('/cart')
        setIsOpen(false);
    };
    const subTotal = listProductCart.reduce((acc, item) => {
        return acc + item.total;
    }, 0);
    return (
        <div className={cls(container,{
            [isEmpty] : !listProductCart.length
        })}>
            <HeaderSideBar
                icon={<PiShoppingCart style={{ fontSize: '30px' }} />}
                title='CART'
            />
            
                {
                    listProductCart.length ? <div className={boxContent}>
                        <div >
                            
                            {isLoading ? (<LoadingTextCommon />) : (listProductCart.map((item, index) => {
                                return <ItemsProduct key={item.index} src={item.images[0]} nameProduct={item.name}
                                    priceProduct={item.price} skuProduct={item.sku} sizeProduct={item.size} quantityProduct={item.quantity} productId={item.productId}
                                    userId={item.userId}
                                />
                            }))}
                            </div>
                            <div>
                                <div className={boxSub}>
                                    <p>Subtotal:</p>
                                    <p>${subTotal}</p>
                                </div>
                                <div className={boxBtn}>
                                    <MyButton content={'VIEW CART'} style={{ width: '100%' }} onClick={handleNavigateToCart} />
                                    <MyButton
                                        content={'CHECKOUT'}
                                        isPrimary={false}
                                        style={{ width: '100%' }}
                                    />
                                </div>
                            </div>
                        
                    </div> : (<div className={boxEmpty}>
                                <div className={textEmpty}>No products in the cart.</div>
                                <div className={boxBtnEmpty}>
                                    <MyButton content={' RETURN TO SHOP'} onClick={handleNavigateToShop} isPrimary={false} style={{border: '1px solid'}} />
                                </div>
                        </div>
                        
                    )
                }
            </div>
        
    );
}

export default Cart;
