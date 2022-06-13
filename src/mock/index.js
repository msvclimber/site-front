import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import productsInit from './productsInit';

export function startMock() {
    const mock = new MockAdapter(axios);
    productsInit(mock);
}

export default { startMock };