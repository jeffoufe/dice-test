import OnSaleDate from './OnSaleDate';
import { shallow } from 'enzyme';
import React from 'react';

describe('OnSaleDate', () => {
    const props = {
        date: 'Mon Aug 19 2019 21:54:38'
    };

    const wrapper = shallow(
        <OnSaleDate {...props} />
    );

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})