import style from "../../styles.module.scss";
import cls from "classnames";
function Stepper({
  number,
  textContent,
  isDisable
}) {
  const {stepper,numberStep,textStep,isDisableNumber,isDisableText} =style;
  return (
    <div className={stepper}>
      <div className={cls(numberStep,{[isDisableNumber]: isDisable} )}>{number}</div>
      <div className={cls(textStep,{[isDisableText] : isDisable})}>{textContent}</div>
    </div>
  )
}

export default Stepper