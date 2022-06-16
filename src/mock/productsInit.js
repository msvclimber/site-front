import productsData from './products';
import shops from '../data/shops';

export default mock => {
    mock
        .onGet('https://mysite.ru/api/product/list')
        .reply(() => {
            return new Promise(resolve => {
                console.log('FETCH: PRODUCT_LIST');
                setTimeout(() => {
                    resolve([200, productsData.productList]);
                }, 1000);
            });
        });
    mock
        .onGet('https://mysite.ru/api/shop')
        .reply(({ params }) => {
            return new Promise(resolve => {
                const shopId = params?.shopId;
                console.log('FETCH: SHOP', shopId);
                const shop = shops.find(s => s.id === shopId) ?? null;
                setTimeout(() => {
                    resolve([200, { result: shop }]);
                }, 1000);
            });
        });
};
