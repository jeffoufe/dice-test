import Featured from './Featured';
import { shallow } from 'enzyme';
import React from 'react';

describe('Featured', () => {
    const wrapper = shallow(
        <Featured />
    );

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})