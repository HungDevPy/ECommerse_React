import HeaderSideBar from "@components/ContentSideBar/componets/HeaderSideBar/HeaderSideBar"
import { TfiReload } from "react-icons/tfi";
import style from './styles.module.scss';
import ItemsProduct from "@components/ContentSideBar/componets/itemsProduct/itemsProduct";
import MyButton from "@components/Button/Button";
function Compare() {
  const { container,boxConten } = style;
  return (
    <div className={container}>
      <div className={boxConten}>
      <HeaderSideBar icon={<TfiReload style={{fontSize: '30px'}} />} title="COMPARE" />
      <ItemsProduct />
      </div>
      <div>
        <MyButton content={'VIEW COMPARE'} style={{width:'100%'}} />
      </div>
    </div>
  )
}

export default Compare