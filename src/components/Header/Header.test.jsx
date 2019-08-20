import { shallow } from 'enzyme';
import { Header }  from './Header';
import React from 'react';
import { act } from 'react-dom/test-utils';

describe('Header', () => {
    const props = {
        history: { push: jest.fn() },
        reset: jest.fn(),
        fetchEvents: jest.fn(),
        location: { search: '?venue' }
    }

    const wrapper = shallow(<Header {...props} />);

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('right callbacks', () => {
        const inputProps = wrapper.find('input').props();
        inputProps.onKeyDown({ keyCode: 44 });
        expect(props.history.push).not.toHaveBeenCalled();

        wrapper.find('img').props().onClick();
        expect(props.history.push).toHaveBeenCalledWith('/');

        inputProps.onChange({ target: { value: 'xoyo' }});
        setTimeout(() => {
            inputProps.onKeyDown({ keyCode: 13 });
            expect(props.history.push).toHaveBeenCalledWith('/events?venue=xoyo');  
        }, 1000)      
    })
})