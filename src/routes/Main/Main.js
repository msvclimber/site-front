import React, { useRef, useState, useEffect, useMemo } from 'react';
import { throttle } from 'lodash-es';
import PropTypes from 'prop-types';
import SimpleImageSlider from "react-simple-image-slider";

import AppHeader from '../../modules/AppHeader';
import AppFooter from '../../modules/AppFooter';
import ProductList from '../../modules/ProductList';
import img1 from '../../assets/images/mainslider/1.jpg';
import img2 from '../../assets/images/mainslider/2.jpg';
import img3 from '../../assets/images/mainslider/3.jpg';
import img4 from '../../assets/images/mainslider/4.jpg';
import img5 from '../../assets/images/mainslider/5.jpg';

import './styles.scss';

const images = [
    { url: img1 },
    { url: img2 },
    { url: img3 },
    { url: img4 },
    { url: img5 },
];

const Main = ({ products, isProductsLoading }) => {
    const container = useRef(null);
    const [width, setWidth] = useState(1000);

    useEffect(() => {
        const handleResize = () => setWidth(container.current?.offsetWidth - 160 ?? 0);
        const throttledHandler = throttle(handleResize, 100);
        window.addEventListener('resize', throttledHandler);
        setWidth(container.current?.offsetWidth - 160 ?? 0);

        return () => {
            window.removeEventListener('resize', throttledHandler);
        };
    }, []);

    const clothingShoes = useMemo(() => products.filter(product => product.category === 'clothingShoes'), [products]);
    const jewelryAccessories = useMemo(() => products.filter(product => product.category === 'jewelryAccessories'), [products]);

    return (<div ref={container}>
        <AppHeader />
        <SimpleImageSlider
            width={width}
            height={width / 2.385}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay
            style={{ position: 'relative', margin: '40px 80px 14px 80px', borderRadius: 23 }}
        />
        <ProductList title="Одежда и обувь" products={clothingShoes} />
        <ProductList title="Украшения и аксессуары" products={jewelryAccessories} />
        <AppFooter />
    </div>)
}

Main.propTypes = {
    products: PropTypes.instanceOf(Array).isRequired,
    isProductsLoading: PropTypes.bool.isRequired,
};

export default Main;
