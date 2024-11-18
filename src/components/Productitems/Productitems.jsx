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
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg'
                    alt=''
                />
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min.jpg'
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
            <div className={title}>10K Yellow Gold</div>
            <div className={prices}>$99.99</div>
        </div>
    );
}

export default Productitems;
