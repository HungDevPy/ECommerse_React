import { deleteCart } from '@/apis/cartService';
import styles from './styles.module.scss';
import { IoCloseOutline } from 'react-icons/io5';
import { useContext, useState } from 'react';
import { ToastContext } from '@/contexts/ToastProvider';
import { SideBarContext } from '@contexts/SideBarprovider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

function ItemsProduct({
    src,nameProduct,priceProduct,skuProduct,sizeProduct,quantityProduct,
    productId, userId

}) {
    const { container, boxContent, title, price,boxClose,size,overlayLoading } = styles;
    const [isDelete, setIsDelete] = useState(false);
    const { handleGetListProductCart} = useContext(SideBarContext);
    const { toast } = useContext(ToastContext);
    const handleRemoveItems = () => {
        setIsDelete(true);
        deleteCart({userId,productId}).then((res) => {
            console.log(res);
            toast.success('Delete product success');
            setIsDelete(false);
            handleGetListProductCart(userId,'cart');
        }).catch((err) => {
            console.log(err);
            toast.error('Delete product failed');
            setIsDelete(false);
        });
    };
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
                <IoCloseOutline style={{fontSize:'25px',color:'#a2a2a2'}}  onClick={handleRemoveItems}/>
            </div>
            {isDelete && <div className={overlayLoading}>
                <LoadingTextCommon/>
            </div>}
        </div>
    );
}

export default ItemsProduct;
