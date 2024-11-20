import MyButton from '@components/Button/Button';
import styles from './styles.module.scss';
import usetranslateXIamge from '@/Hook/useTranslateXimage';

function SaleHomePage() {
    const { container, title, des, button, boxImg,box } = styles;
    const { translateXPosition } = usetranslateXIamge();

    return (
        <div className={container}>
            <div
                className={boxImg}
                style={{
                    transform: `translateX(${translateXPosition}px)`,
                    transition: 'transform 0.6s ease',
                }}
            >
                <img
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
                    alt=''
                />
            </div>
            <div className={box} >
                <h2 className={title}>Sale of the year</h2>
                <p className={des}>
                    Libero sed faucibus facilisis fermentum. Est nibh sed massa
                    sodales.
                </p>
                <div className={button}>
                    <MyButton content={'Read more'} isPrimary={false} />
                </div>
            </div>
            <div
                className={boxImg}
                style={{
                    transform: `translateX(-${translateXPosition}px)`,
                    transition: 'transform 0.6s ease',
                }}
            >
            
                <img
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg'
                    alt=''
                />
            </div>
        </div>
    );
}

export default SaleHomePage;
