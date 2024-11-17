import styles from './styles.module.scss';

function Button({content}) {
  const {btn} = styles;
  return (
    <div className={btn}>
        <Button>{content}</Button>
    </div>
  )
}

export default Button;