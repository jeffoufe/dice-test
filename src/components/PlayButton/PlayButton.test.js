import PlayButton from './PlayButton';
import { shallow } from 'enzyme';
import React from 'react';

describe('Featured', () => {
    const wrapper = shallow(
        <PlayButton />
    );

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})