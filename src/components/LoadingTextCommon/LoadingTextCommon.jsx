import style from './styles.module.scss';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
function LoadingTextCommon() {
    const { loading } = style;
  return (
    <AiOutlineLoading3Quarters className={loading}/>
  )
}

export default LoadingTextCommon