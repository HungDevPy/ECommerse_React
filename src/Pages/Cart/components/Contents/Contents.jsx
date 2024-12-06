import CartTable from "@pages/Cart/components/contents/CartTable";
import style from "../../styles.module.scss";
import MyButton from "@components/Button/Button";
import CartSummary from "@pages/Cart/components/contents/CartSummary";
import { useContext } from "react";
import { SideBarContext } from "@contexts/SideBarprovider";
import { addProductToCart,deleteAll,deleteCart } from "@/apis/cartService";
import { toast } from "react-toastify";
import { PiShoppingCartLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
function Contents() {
  const { containerContent, containerFooter,containerContentRight,boxEmtyCart,boxEmtyTitle,boxEmtyContent } = style;
  const {listProductCart,handleGetListProductCart,isLoading,setisLoading,userId} =useContext(SideBarContext);
  const navigate=useNavigate();
  const handleNavigate = () =>{
    navigate('/shop');
  };
  const handleReplace =data =>{
    setisLoading(true)
    addProductToCart(data)
      .then((res) =>{
        handleGetListProductCart(data.userId,'cart');
    }).catch((err) =>{
      console.log(err);
    });
  }
  const handleDeleteItemsCart = (data) =>{
    setisLoading(true);
    deleteCart(data).then((res) =>{
      handleGetListProductCart(data.userId,'cart');
      toast.success("Delete item success");
    }).catch((err) =>{
      setisLoading(false);
      toast.error("Delete item fail"); 
    });
  };
  const handleDelete = () =>{
     setisLoading(true);
     deleteAll({userId}).then((res) =>{
       handleGetListProductCart(userId,'cart');
       toast.success("Delete all item success");
     }).catch((err) =>{
       setisLoading(false);
       toast.error("Delete all item fail");
     }); 
  };
  console.log(listProductCart);
  return (
    <>
    {listProductCart.length > 0 && userId ? (<div className={containerContent}>
      <div><CartTable listProductCart={listProductCart} getData={handleReplace} isLoading={isLoading} getDataDelete={handleDeleteItemsCart} />
        <div className={containerFooter}>
          <div className={containerContentRight}>
            <input type="text" placeholder="Coupon code"  />
            <MyButton content={"OK"} isPrimary={false} style={{width:"35px" ,height:"100%",border:"1px solid "}} />
          </div>
            <MyButton
              content={`🗑️ CLEAR SHOPPING CART`}
              style={{ width: "217px", height: "35px",border:"1px solid " }}
              isPrimary={false}
              onClick={handleDelete}
            />
        </div>
      </div>
      <CartSummary />
    </div>) :(
        <div className={boxEmtyCart}>
          <div><PiShoppingCartLight style={{fontSize: '50px'}}/></div>
          <div className={boxEmtyTitle}>YOUR SHOPPING CART IS EMPTY</div>
          <div className={boxEmtyContent}>We invite you to get acquainted with an assortment of our shop. Surely you can find something for yourself!</div>
          <MyButton content={'Return To Shop'} onClick={handleNavigate}/>
        </div>
      )}
    </>
  )
}

export default Contents