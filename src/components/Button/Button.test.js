import Button from './Button';
import { shallow } from 'enzyme';
import React from 'react';

describe('Button', () => {
    const props = {
        onClick: jest.fn()
    };
    const wrapper = shallow(
        <Button {...props}>test</Button>
    );

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('onClick', () => {
        const button = wrapper.find('button');
        button.props().onClick();
        expect(props.onClick).toHaveBeenCalled();
    })
})