// @flow

import qs from 'qs';
import axios from 'axios';

const fetchAPI = async (url: string, method: string, params: Object) => {
    if (method === 'GET') {
        url += `?${qs.stringify(params)}`;
    }
    const data = method === 'GET' ? {} : { data: params }
    const response = await axios({
        method,
        url,
        data,
        headers: {
            "x-api-key": "dHmvC0ZXzF4h1mWldfur13c6s4Ix6wCF4OTzozXC"
        }
    })
    return response;
}

export default fetchAPI;