import MainLayout from '@components/Layout/Layout';
import style from './styles.module.scss';
import Productitems from '@components/Productitems/Productitems';
function PopulerProduct({ data }) {
    const { container } = style;
    return (
        <MainLayout>
            <div className={container}>
                {data.map((item) => {
                    return (
                        <Productitems
                            src={item.images[0]}
                            preSrc={item.images[1]}
                            name={item.name}
                            price={item.price}
                        />
                    );
                })}
            </div>
        </MainLayout>
    );
}

export default PopulerProduct;
