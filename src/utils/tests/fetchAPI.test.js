import fetchAPI from '../fetchAPI';
import axios from 'axios';

jest.mock('axios', () => jest.fn())
jest.mock('qs', () => ({
    stringify: jest.fn().mockImplementation((value) => value)
}))

describe('fetchAPI', () => {
    it('right parameters', () => {
        fetchAPI('url', 'GET', 'params');
        expect(axios).toHaveBeenCalledWith({
            method: 'GET',
            url: 'url?params',
            data: {},
            headers: {
                "x-api-key": "dHmvC0ZXzF4h1mWldfur13c6s4Ix6wCF4OTzozXC"
            }
        });
    })
})