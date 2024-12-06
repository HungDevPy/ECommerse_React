import LoadingTextCommon from "@components/LoadingTextCommon/LoadingTextCommon"
import style from "../styles.module.scss";
function LoadingCart() {

    const {containnerLoading} = style;
  return (
    <div className={containnerLoading}><LoadingTextCommon/></div>
  )
}

export default LoadingCart