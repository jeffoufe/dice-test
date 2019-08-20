import { PureHome } from './Home';
import { shallow } from 'enzyme';
import React from 'react';

describe('Home', () => {
    const props = {
        history: {
            push: jest.fn()
        }
    };
    const wrapper = shallow(<PureHome {...props} />);

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('right callbacks', () => {
        const inputProps = wrapper.find('input').props();
        inputProps.onChange({ target: { value: 'xoyo' }});
        setTimeout(() => {
            inputProps.onKeyDown({ keyCode: 48 });
            expect(props.history.push).not.toHaveBeenCalled();

            wrapper.find('Button').props().onClick();
            expect(props.history.push).toHaveBeenCalledWith('/events?venue=xoyo')

            inputProps.onChange({ target: { value: 'xoyo2' }});
            setTimeout(() => {
                inputProps.onKeyDown({ keyCode: 13 });
                expect(props.history.push).toHaveBeenCalledWith('/events?venue=xoyo2')
            }, 1000)
        }, 1000)
    })
})