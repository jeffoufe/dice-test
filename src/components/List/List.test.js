import List from './List';
import { shallow } from 'enzyme';
import React from 'react';

describe('List', () => {
    const props = {
        title: 'test',
        list: [
            { primary: 'primary' },
            { primary: 'primary', secondary: 'secondary' },
            { primary: 'primary', secondary: 'secondary', tertiary: 'tertiary' },
        ]
    }

    const wrapper = shallow(
        <List {...props} />
    );

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('conditional rendering', () => {
        expect(wrapper.find('Text').length).toEqual(3);
        expect(wrapper.find('ImportantText').length).toEqual(2);
        expect(wrapper.find('GreyHeader').length).toEqual(1);
    })
})