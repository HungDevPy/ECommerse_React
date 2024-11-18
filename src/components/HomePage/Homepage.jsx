import MyHeader from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import Infor from "@components/Infor/Infor";
import AdvanceHeading from "@components/AdvanceHeading/AdvanceHeading";
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { useEffect } from 'react';
import { getProduct } from '@/apis/productsService';
function Homepage() {
    useEffect(() => {
        getProduct();
    }, []);
    return (
        <div>
            <div>
                <MyHeader />
                <Banner />
                <Infor />
                <AdvanceHeading />
                <HeadingListProduct />
            </div>
        </div>
    );
}

export default Homepage;
