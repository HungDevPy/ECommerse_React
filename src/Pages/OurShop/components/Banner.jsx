import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import styles from '../styles.module.scss'
import MyButton from '@components/Button/Button';


function Banner() {
    const {containerBanner,boxContainer,title,boxTime} = styles;
    const targetDate = '2025-12-31T00:00:00';
    
  return (
    <div className={containerBanner}>
      <div className={boxContainer}>
          <div className={boxTime}>
          <CountdownTimer targetDate={targetDate} />
          </div>
          <div className={title}>The classics make a comeback</div>
            <MyButton content={'Buy Now'} />
      </div>
    </div>
  )
}

export default Banner