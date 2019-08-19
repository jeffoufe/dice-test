// @flow

import currencies from '../constants/currencies';

const buildPrice = (currency: string, value: number, decimals?: number ) => {
    const oneHundredthValue = value / 100;
    return `${currencies[currency]}${decimals ? oneHundredthValue.toFixed(decimals) : oneHundredthValue}`;
}

export default buildPrice;