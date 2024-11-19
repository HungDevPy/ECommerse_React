import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import Productitems from '@components/Productitems/Productitems';

function HeadingListProduct({ data }) {
    const { container, containerItems } = styles;

    return (
        <MainLayout>
            <div className={container}>
                <CountdownBanner />
                <div className={containerItems}>
                    {data.map((item) => {
                        // Ensure the item has the required properties
                        return (
                            <Productitems
                                key={item.id}
                                src={item.images[0]}  // Correctly access item.images
                                preSrc={item.images[1]} // Correctly access item.images
                                name={item.name} // Correctly access item.name
                                price={item.price} // Correctly access item.price
                            />
                        );
                    })}
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProduct;