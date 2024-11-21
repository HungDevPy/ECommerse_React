import styles from './styles.module.scss';
import { IoCloseOutline } from 'react-icons/io5';

function ItemsProduct() {
    const { container, boxContent, title, price,boxClose,size } = styles;
    return (
        <div className={container}>
            <img
                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg'
                alt=''
            />
            <div className={boxContent}>
                <div className={title}>10K Yellow Gold</div>
                <div className={size}>Size:M</div>
                <div className={price}>$99.99</div>
                <div className={price}>SKU:12345</div>
            </div>
            <div className={boxClose}>
                <IoCloseOutline style={{fontSize:'25px',color:'#a2a2a2'}} />
            </div>
        </div>
    );
}

export default ItemsProduct;
