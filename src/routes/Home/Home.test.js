import { PureHome } from './Home';
import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';


describe('Home', () => {
    const props = {
        history: {
            push: jest.fn()
        }
    };
    const wrapper = mount(<PureHome {...props} />);

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
})