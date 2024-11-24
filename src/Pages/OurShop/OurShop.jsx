import MyHeader from "@components/Header/Header"
import MainLayout from "@components/Layout/Layout"
import style from "./styles.module.scss"
import { useNavigate } from "react-router-dom";
import Banner from "@pages/OurShop/components/Banner";


function OurShop() {
    const {container,functionBox,special,outbanner} = style;
    const navigate =useNavigate();
    const handleBackPreviousPage =() =>{
        navigate(-1);
    };
  return <>
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
        </div>
    </MainLayout>
  </>
}

export default OurShop