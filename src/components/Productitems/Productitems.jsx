import MyButton from '@components/Button/Button';
import style from './styles.module.scss';
import cart from '@icons/svg/cart.svg';
import heart from '@icons/svg/heart.svg';
import reload from '@icons/svg/reload.svg';
import cls from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@contexts/ourshopProvider';

function Productitems({ src, preSrc, name, price,detail,isHomepage= true }) {
    const ourShopStore =useContext(OurShopContext);
    const [isShow, setIsShow] = useState(ourShopStore?.isShow);
    // console.log(a);
    const { boxItems, showImgWhenHover, showImgButton, boxIcon,title,prices,boxSize,size,textCenter,boxBtn,boxContent,containerItem,leftBtn,largImg } = style;
    useEffect(() => {
        if(isHomepage){
            setIsShow(true);
        }
        else{
            setIsShow(ourShopStore?.isShow);
        }
    },[ourShopStore?.isShow, isHomepage]);
    return (    
        <div className={isShow ? '': containerItem}>
            <div className={cls(boxItems,{ [largImg] : !isShow  })}>
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
            <div className={isShow ? '' :boxContent}>
            {!isHomepage &&
            <div className={boxSize}>
            {
                detail.size.map((items,index) => {
                    return (
                        <div key={index} className={size}>
                            {items.name}
                        </div>
                    );
                })
            
            }
            </div>}
            
            <div className={cls(title,{
                [textCenter]: !isHomepage
            })}>{name}</div>

            {!isHomepage && <div className={textCenter} style={{color:'#5555'}}>Brand 01</div>}
            <div className={cls({prices},{
                [textCenter]: !isHomepage
            })} style={{
                color: !isHomepage ? '#5555' : '#888'
            }}>${price}</div>

            {!isHomepage &&
            <div className={cls(boxBtn, { [leftBtn] : !isShow})}>
                <MyButton content={'ADD TO CART'} style={{width: '100%'}} />
            </div>
            }
            </div>
        </div>
    );
}

export default Productitems;
