import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import Productitems from '@components/Productitems/Productitems';

function HeadingListProduct() {
    const { container, containerItems } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <CountdownBanner />
                <div className={containerItems}>
                    <Productitems />
                    <Productitems />
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProduct;
