import { BsGrid3X3Gap } from "react-icons/bs";
import { CiCircleList } from "react-icons/ci";
import styles from "../styles.module.scss";
import { useContext } from "react";
import { OurShopContext } from "@contexts/ourshopProvider";
import SelectBox from "@pages/OurShop/components/selectBox";
function Fillter() {
    const {containerFillter,fillterLeft,boxLeft,selectBox,show,sort} = styles;
    const {sortOptions,showOptions,setSort,setShow,setIsShow} =useContext(OurShopContext);
    const getValueSelect = (value,type) => {
        console.log(value);
        console.log(type);

        if(type === 'sort'){
            setSort(value);
        }else{
            setShow(value);
        }
    };

    const handleGetShowgrid = (type) => {
        console.log(type);
        setIsShow(type==='grid');
    };

    return (
    <div className={containerFillter}>
        <div className={fillterLeft}>
            <SelectBox options={sortOptions} getvalue={getValueSelect} type='sort'/>
            <div className={boxLeft}>
            <BsGrid3X3Gap  style={{fontSize: '20px', cursor: 'pointer'}} onClick={() => handleGetShowgrid('grid')}/>
            <div style={{height: '20px', width: '1px', backgroundColor: '#e1e1e1'}}/>
            <CiCircleList style={{fontSize: '20px',cursor: 'pointer'}} onClick={()=>handleGetShowgrid('list')} />
            </div>
        </div>
        <div className={fillterLeft}>
            <div>Show</div>
            <SelectBox options={showOptions} getvalue={getValueSelect} type='show'/>
        </div>
    </div>
  )
}

export default Fillter