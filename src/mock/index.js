import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import authInit from './authInit';
import productsInit from './productsInit';

export function startMock() {
    const mock = new MockAdapter(axios);
    authInit(mock);
    productsInit(mock);
}

export default { startMock };