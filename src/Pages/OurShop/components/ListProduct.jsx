import MainLayout from "@components/Layout/Layout"
import { useContext } from "react"
import { OurShopContext } from "@contexts/ourshopProvider"
import styles from "../styles.module.scss"
import Productitems from "@components/Productitems/Productitems";

function ListProduct() {

    const {products,isShow} =useContext(OurShopContext);
    const {containerProduct} = styles;
  return (
    <MainLayout>
        <div className={isShow?containerProduct:''}>
        {products.map((item) => {
                    return (
                        <Productitems
                            src={item.images[0]}
                            preSrc={item.images[1]}
                            name={item.name}
                            price={item.price}
                            detail={item}
                            isHomepage={false}
                        />
                    );
                })}
        </div>
    </MainLayout>
  )
}

export default ListProduct