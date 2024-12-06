import MyButton from "@components/Button/Button";
import style from "../../styles.module.scss";
import cls from "classnames";
import { useContext } from "react";
import { SideBarContext } from "@/contexts/SideBarprovider";
import LoadingCart from "@pages/Cart/components/Loading";
function CartSummary() {
    const {containerRight, containerSummary,boxTotal,title,subTotal,price,total,space,containerMethods,boxImgMethods,imgMethods,footer}=style;
    const Methods=[
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg',
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg",
    ]
    const {listProductCart,isLoading} =useContext(SideBarContext);
    const totalCart = listProductCart.reduce((total,item) => {
        return total +item.total;
    },0); 
    return (
    <div className={containerRight}>
        <div className={containerSummary}>
            <div className={title}>Cart totals</div>
            <div className={cls(boxTotal,subTotal)}>
                <div>Subtotal</div>
                <div className={price}>{totalCart}</div>
            </div>
            <div className={cls(boxTotal,total)}>
                <div>Total</div>
                <div>{totalCart}</div>
            </div>
            <MyButton content={"Proceed to checkout"} style={{width:"100%"}} />
            <div className={space}></div>
            <MyButton content={"Continue shopping"} style={{width:"100%",border:"1px solid "}} isPrimary={false} />
            {isLoading && <LoadingCart isLoading={isLoading}/>}
        </div>
        
        <div className={containerMethods}>
            <div className={title}>Guaranteed <span>safe</span> checkout</div>
            <div className={boxImgMethods}>
                {
                    Methods.map((item,index)=><img key={index} src={item} alt={item} className={imgMethods}/>)
                }
            </div>
        </div>
        <div className={footer}><span>Your Payment is </span>100% Secure</div>
    </div>
  )
}

export default CartSummary