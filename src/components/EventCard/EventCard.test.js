import EventCard from './EventCard';
import { shallow } from 'enzyme';
import React from 'react';

describe('EventCard', () => {
    const props = {
        event_images: {
            landscape: 'landscape',
            square: 'square'
        },
        apple_music_tracks: [],
        spotify_tracks: [],
        ticket_types: [{ price: { total: 800 } }, { price: { total: 400 } }],
        featured: false,
        sale_start_date: '2019-08-19',
        date: 'date',
        name: 'name',
        venue: 'venue',
        description: 'description',
        sold_out: false,
        url: 'url',
        lineup: [],
        currency: 'GBP',
        location: {
            city: 'city',
            country: 'country'
        }
    }

    it('Not sold out, not featured', () => {
        const wrapper = shallow(<EventCard {...props} />);
        expect(wrapper).toMatchSnapshot();
    })

    it('sold out, not featured', () => {
        const newProps = { ...props, sold_out: true }
        const wrapper = shallow(<EventCard {...newProps} />);
        expect(wrapper).toMatchSnapshot();
    })

    it('not sold out, featured', () => {
        const newProps = { ...props, featured: true }
        const wrapper = shallow(<EventCard {...newProps} />);
        expect(wrapper).toMatchSnapshot();
    })

    it('not on sale yet', () => {
        const newProps = { ...props, sale_start_date: '2089-08-19' };
        const wrapper = shallow(<EventCard {...newProps} />);
        expect(wrapper).toMatchSnapshot();
    })
})