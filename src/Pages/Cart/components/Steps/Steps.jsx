import MainLayout from "@components/Layout/Layout";
import style from "../../styles.module.scss";
import Stepper from "@pages/Cart/components/Steps/Stepper";
function Steps() {
  const { containerSteps, contentSteps, titleSteps, line } = style;
  const dataSteps = [
    { number: 1, content: 'Shopping cart' },
    { number: 2, content: 'check out' },
    { number: 3, content: 'order status' },
  ]
  return (
    <div className={containerSteps}>
      <div className={contentSteps}>
        {
          dataSteps.map((items, index) => {
            return (
              <>
                <Stepper key={items.index} number={items.number} textContent={items.content} isDisable={index != 0} />
                {
                  index != dataSteps.length - 1 && (
                    <div className={line} />
                  )
                }
              </>
            );
          })
        }
      </div>
      <div className={titleSteps}>
        You are out of time! Checkout now to avoid losing your order!
      </div>
    </div>
  )
}

export default Steps