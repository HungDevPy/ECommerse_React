
import styles from "../styles.module.scss";

function SelectBox({options, getvalue,type,defaulValues}) {;
  const {selectBox} = styles;
  return <select className={selectBox} onChange={(e) => getvalue(e.target.value,type)} value={defaulValues}>
    {
        options.map((option)=>{
            return <option key={option.value} value={option.value}>{option.label}</option>
        })
    }
  </select>
}

export default SelectBox