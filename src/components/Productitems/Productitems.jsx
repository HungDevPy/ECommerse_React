import MyButton from '@components/Button/Button';
import style from './styles.module.scss';
import cart from '@icons/svg/cart.svg';
import heart from '@icons/svg/heart.svg';
import reload from '@icons/svg/reload.svg';
import cls from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@contexts/ourshopProvider';
import Cookies from 'js-cookie';
import { SideBarContext } from '@contexts/SideBarprovider';
import { ToastContext } from '@contexts/ToastProvider';
import { addProductToCart } from '@/apis/cartService';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

function Productitems({ src, preSrc, name, price, detail, isHomepage = true }) {
    const ourShopStore = useContext(OurShopContext);
    const [isShow, setIsShow] = useState(ourShopStore?.isShow);
    const [sizeChose, setSizeChose] = useState('');
    const userId = Cookies.get('userId');
    const { setIsOpen, setType, handleGetListProductCart } = useContext(SideBarContext);
    const { toast } = useContext(ToastContext);
    const [isLoading, setisLoading] = useState(false);
    const { boxItems, showImgWhenHover, showImgButton,
        boxIcon, title, prices, boxSize, size, textCenter, boxBtn,
        boxContent, containerItem, leftBtn, largImg, isActiveSize
        , btnClear } = style;
    const handleChoseSize = (size) => {
        console.log(size);
        setSizeChose(size);
    };
    const handleAddToCart = () => {
        console.log(userId);
        if (!userId) {
            setIsOpen(true);
            setType('login');
            toast.warning('Please login to continue');
            return;
        }
        if (!sizeChose) {
            toast.warning('Please chose size');
            return;
        }
        const data = {
            userId,
            productId: detail._id,
            size: sizeChose,
            quantity: 1
        };
        setisLoading(true);
        addProductToCart(data)
            .then(res => {
                console.log(res);
                setIsOpen(true);
                setType('cart');
                toast.success('Add Product to cart success');
                setisLoading(false);
                handleGetListProductCart(userId, 'cart');
            })
            .catch(err => {
                toast.error('Add Product to cart fail');
                setisLoading(false);
            });

    };
    const handleClearSize = () => {
        setSizeChose('');
    };
    useEffect(() => {
        if (isHomepage) {
            setIsShow(true);
        }
        else {
            setIsShow(ourShopStore?.isShow);
        }
    }, [ourShopStore?.isShow, isHomepage]);
    return (
        <div className={isShow ? '' : containerItem}>
            <div className={cls(boxItems, { [largImg]: !isShow })}>
                <img
                    src={src}
                    alt=''
                />
                <img
                    src={preSrc}
                    alt=''
                    className={showImgWhenHover}
                />
                <div className={showImgButton}>
                    <div className={boxIcon}>
                        <img src={cart} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heart} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reload} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={cart} alt='' />
                    </div>
                </div>
            </div>
            <div className={isShow ? '' : boxContent}>
                {!isHomepage &&
                    <div className={boxSize}>
                        {
                            detail.size.map((items, index) => {
                                return (
                                    <div key={index} className={cls(size, {
                                        [isActiveSize]: sizeChose === items.name
                                    })} onClick={() => handleChoseSize(items.name)}>
                                        {items.name}
                                    </div>
                                );
                            })

                        }
                    </div>}
                {sizeChose && <div className={btnClear} onClick={() => handleClearSize()}>Clear</div>}

                <div className={cls(title, {
                    [textCenter]: !isHomepage
                })}>{name}</div>

                {!isHomepage && <div className={textCenter} style={{ color: '#5555' }}>Brand 01</div>}
                <div className={cls({ prices }, {
                    [textCenter]: !isHomepage
                })} style={{
                    color: !isHomepage ? '#5555' : '#888'
                }}>${price}</div>

                {!isHomepage &&
                    <div className={cls(boxBtn, { [leftBtn]: !isShow })}>
                        <MyButton content={isLoading ? <LoadingTextCommon/> :'ADD TO CART'} style={{ width: '100%' }} onClick={handleAddToCart} />
                    </div>
                }
            </div>
        </div>
    );
}

export default Productitems;
