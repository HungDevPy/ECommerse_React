import { useContext, useState } from "react";
import { SideBarContext } from "@/contexts/SideBarprovider";
import style from './styles.module.scss';
import SliderCommon from "@components/SliderCommon/SliderCommon";
import SelectBox from "@pages/OurShop/components/SelectBox";
import MyButton from "@components/Button/Button";
import { GrCart } from "react-icons/gr";
import { TfiReload } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { BiLogoVk } from "react-icons/bi";
import { TfiPinterest } from "react-icons/tfi";
import { TfiEmail } from "react-icons/tfi";
import { BiLogoLinkedin } from "react-icons/bi";
import { TbBrandWhatsapp } from "react-icons/tb";
import { PiSkypeLogoFill } from "react-icons/pi";
import cls from 'classnames';
import { addProductToCart } from "@/apis/cartService";
import { ToastContext } from '@/contexts/ToastProvider';
function DetailProduct() {
    const {container,title,price,des,boxSize,
        size,lable,boxAddToCart,boxOr,line,or,
        boxAddToOther,boxFooter,isActive}=style;
    const {detailProduct,userId,setIsOpen,setisLoading,setType,handleGetListProductCart,isLoading}= useContext(SideBarContext);

    const showOptions = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' }
      ];
    const { toast } = useContext(ToastContext);
    const [choseSize, setChoseSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const handleGetSize =(value) =>{
        setChoseSize(value);
    }
    const handleCleanSize = () =>{
        setChoseSize('');
    }
    const handleGetQuantity = (value) =>{
        setQuantity(value);
    }
    const handleAddToCart = () =>{
        const data={
            userId: userId,
            productId: detailProduct._id,
            quantity,
            size: choseSize,
            isMultiple:true
        }
        setIsOpen(false);
        setisLoading(true);
        addProductToCart(data)
        .then((res) =>{
            toast.success('Add to cart success');
            setIsOpen(true);
            setType('cart');
            handleGetListProductCart(userId,'cart');
        })
        .catch((err) =>{
            console.log(err);
            toast.error('Add to cart fail');
        })
        console.log(data);
    }
    return (
        <div className={container}>
            <SliderCommon data={detailProduct.images}/>
            <div className={title}>{detailProduct.name}</div>
            <div className={price}>${detailProduct.price}</div>
            <div className={des}>{detailProduct.description}</div>

            <div className={lable}>Size {}</div>
            <div className={boxSize}>
                {detailProduct.size.map((item,index) =>{
                   return <div className={cls(size,{[isActive]: item.name === choseSize})} key={index} onClick={() => handleGetSize(item.name)}>{item.name}</div>
                })}
            </div>
            {choseSize && <div className={lable}>You chose: {choseSize}</div>}
            {choseSize && <div className={lable} style={{
                fontSize:'12px',
                marginTop: '3px',
                cursor:'pointer'
            }} onClick={handleCleanSize}>Clean</div>}
            <div className={boxAddToCart}>
                <SelectBox options={showOptions} type='show' defaulValues={quantity} getvalue={handleGetQuantity}/>

                <div>
                    <MyButton content={
                        <div><GrCart /> ADD TO CART</div>
                    } onClick={handleAddToCart}/>
                </div>
            </div>


            <div className={boxOr}>
                <div className={line}/>
                <div className={or}>OR</div>
                <div className={line}/>
            </div>


            <MyButton content={
                <div><GrCart/> SELECT OPTIONS</div>
            } style={{width:'100%'}}/>

            <div className={boxAddToOther}>
                <TfiReload/> ADD TO COMPARE
            </div>
            <div className={boxAddToOther}>
                <CiHeart style={{fontSize:'18px'}}/> ADD TO WISHLIST
            </div>

            <div className={boxFooter}>
                SKU: <span>1234567</span>
            </div>
            <div className={boxFooter}>
                Category: <span>Men</span>
            </div>
            <div className={boxFooter}>
                Estimated delivery:<span>3 - 7 days</span>
            </div>
            <div className={boxFooter}>
                share: <span>
                        <RiTwitterXLine/>
                        <TiSocialFacebook/>
                        <BiLogoVk/>
                        <TfiPinterest/>
                        <TfiEmail/>
                        <BiLogoLinkedin/>
                        <TbBrandWhatsapp/>
                        <PiSkypeLogoFill/>
                </span>
            </div>
        </div>

    )
}

export default DetailProduct;