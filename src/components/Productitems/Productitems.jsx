import style from './styles.module.scss';
import cart from '@icons/svg/cart.svg';
import heart from '@icons/svg/heart.svg';
import reload from '@icons/svg/reload.svg';

function Productitems({ src, preSrc, name, price }) {
    const { boxItems, showImgWhenHover, showImgButton, boxIcon,title,prices } = style;
    return (
        <div>
            <div className={boxItems}>
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
            <div className={title}>{name}</div>
            <div className={prices}>${price}</div>
        </div>
    );
}

export default Productitems;
