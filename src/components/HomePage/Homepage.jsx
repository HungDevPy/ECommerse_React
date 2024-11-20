import MyHeader from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import Infor from "@components/Infor/Infor";
import AdvanceHeading from "@components/AdvanceHeading/AdvanceHeading";
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { useEffect,useState } from 'react';
import { getProduct } from '@/apis/productsService';
import PopulerProduct from '@components/PopulerProduct/PopulerProduct';import SaleHomePage from '@components/SaleHomePage/SaleHomePage';
import MyFooter from '@components/Footer/Footer';
;
function Homepage() {
    const [listProduct, setlistProduct] = useState([]);
    useEffect(() => {
        getProduct().then((res) => {
            setlistProduct(res.contents);
        });
    }, []);
    console.log(listProduct, "listProduct");
    return (
        <div>
            <div>
                <MyHeader />
                <Banner />
                <Infor />
                <AdvanceHeading  />
                <HeadingListProduct data={listProduct.slice(0,2)}/>
                <PopulerProduct data={listProduct.slice(2, 10)}/>
                <SaleHomePage />
                <MyFooter />
            </div>
        </div>
    );
}

export default Homepage;
