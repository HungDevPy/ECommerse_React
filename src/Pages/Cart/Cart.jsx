import MyFooter from "@components/Footer/Footer"
import MyHeader from "@components/Header/Header"
import Contents from "@pages/Cart/components/Contents/Contents"
import Steps from "@pages/Cart/components/Steps/Steps"
import style from "./styles.module.scss";
function Cart() {
  const { container } = style;
  return (
    <>
      <MyHeader />
      <div className={container}>
        <Steps />
        <Contents />
      </div>
      <MyFooter />
    </>
  )
}

export default Cart