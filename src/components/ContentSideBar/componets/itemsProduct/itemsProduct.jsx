import styles from './styles.module.scss';
import { IoCloseOutline } from 'react-icons/io5';

function ItemsProduct({
    src,nameProduct,priceProduct,skuProduct,sizeProduct,quantityProduct
}) {
    const { container, boxContent, title, price,boxClose,size } = styles;
    return (
        <div className={container}>
            <img
                src={src}
                alt=''
            />
            <div className={boxContent}>
                <div className={title}>{nameProduct}</div>
                <div className={size}>Size:{sizeProduct}</div>
                <div className={price}>{quantityProduct} x ${priceProduct}</div>
                <div className={price}>SKU:{skuProduct}</div>
            </div>
            <div className={boxClose}>
                <IoCloseOutline style={{fontSize:'25px',color:'#a2a2a2'}} />
            </div>
        </div>
    );
}

export default ItemsProduct;
