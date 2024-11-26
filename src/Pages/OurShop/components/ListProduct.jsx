import MainLayout from "@components/Layout/Layout"
import { useContext } from "react"
import { OurShopContext } from "@contexts/ourshopProvider"
import styles from "../styles.module.scss"
import Productitems from "@components/Productitems/Productitems";

function ListProduct() {

    const {products} =useContext(OurShopContext);
    const {containerProduct} = styles;
    console.log(products);
  return (
    <MainLayout>
        <div className={containerProduct}>
        {products.map((item) => {
                    return (
                        <Productitems
                            src={item.images[0]}
                            preSrc={item.images[1]}
                            name={item.name}
                            price={item.price}
                        />
                    );
                })}
        </div>
    </MainLayout>
  )
}

export default ListProduct