import MyHeader from "@components/Header/Header"
import MainLayout from "@components/Layout/Layout"
import style from "./styles.module.scss"
import { useNavigate } from "react-router-dom";
import Banner from "@pages/OurShop/components/Banner";
import { OurShopProvider } from "@contexts/ourshopProvider";
import Fillter from "@pages/OurShop/components/Fillter";
import ListProduct from "@pages/OurShop/components/ListProduct";
import MyFooter from "@components/Footer/Footer";



function OurShop() {
    const {container,functionBox,special,outbanner} = style;
    const navigate =useNavigate();
    const handleBackPreviousPage =() =>{
        navigate(-1);
    };

    

  return <OurShopProvider>
    <MyHeader />
    <MainLayout>
        <div className={container}>
            <div className={functionBox}>
            <div>
                Home &gt; <span className={special}>Shop</span>
            </div>
            <div className={outbanner} onClick={()=> handleBackPreviousPage()}>
                &lt;Return to previous page
            </div>
            </div>
            <Banner />
            <div>
                <Fillter/>
                <ListProduct/>
            </div>
        </div>
    </MainLayout>
    <MyFooter/>
  </OurShopProvider>
}

export default OurShop