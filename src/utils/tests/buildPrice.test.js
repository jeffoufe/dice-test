import buildPrice from '../buildPrice';

describe('buildPrice', () => {
    it('decimals', () => {
        expect(buildPrice('GBP', 800, 2)).toEqual('£8.00')
    })

    it('no decimals', () => {
        expect(buildPrice('USD', 800)).toEqual('$8')
    })
})