import productsData from './products';

export default mock => {
    mock
        .onGet('https://mysite.ru/api/product/list')
        .reply(() => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve([200, productsData.productList]);
                }, 1000);
            });
        });
};
