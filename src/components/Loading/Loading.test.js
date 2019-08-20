import Loading from './Loading';
import React from 'react';
import { shallow } from 'enzyme';

describe('Loading', () => {
    const wrapper = shallow(<Loading />);

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})