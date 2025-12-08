import {createFetchMock} from './fetch/createFetchMock';

global.fetch = createFetchMock();
