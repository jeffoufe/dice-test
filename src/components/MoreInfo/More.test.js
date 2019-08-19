import MoreInfo from './MoreInfo';
import { shallow } from 'enzyme';
import React from 'react';

describe('MoreInfo', () => {
    const props = {
        lineup: [
            { details: 'artist', time: '8PM' },
            { details: 'artist2', time: '7AM' }

        ],
        ticket_types: [
            { name: 'general', price: { total: 746 }, sold_out: false },
            { name: 'backstage', price: { total: 764 }, sold_out: true },
        ],
        currency: 'GBP',
        description: 'description'
    }

    const wrapper = shallow(
        <MoreInfo {...props} />
    );

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})