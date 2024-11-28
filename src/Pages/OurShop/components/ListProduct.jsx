import MainLayout from "@components/Layout/Layout"
import { useContext } from "react"
import { OurShopContext } from "@contexts/ourshopProvider"
import styles from "../styles.module.scss"
import Productitems from "@components/Productitems/Productitems";
import MyButton from "@components/Button/Button";
import LoadingTextCommon from "@components/LoadingTextCommon/LoadingTextCommon";

function ListProduct() {

  const { products, isShow, isLoading, handleLoadMore, total,isLoadMore } = useContext(OurShopContext);
  const { containerProduct,sessionListProduct,loading } = styles;
  return (
    <div className={sessionListProduct}>
      <MainLayout>
        {isLoading ? <div>Loading...</div> : (<>
          <div className={isShow ? containerProduct : ''}>
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
          {
            products.length < total && (<>
              <div style={{ width: '180px', margin: '50px auto' }}>
                <MyButton content={isLoadMore ? <LoadingTextCommon/> :'LOAD MORE PRODUCT'} onClick={handleLoadMore} />
              </div>
            </>)
          }
        </>)}
      </MainLayout>
    </div>
  )
}

export default ListProduct