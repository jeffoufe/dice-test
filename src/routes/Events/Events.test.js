import { shallow } from 'enzyme';
import React from 'react';
import { PureEvents } from './Events';

jest.mock('qs', () => ({ parse: () => ({ venue: 'venue' })}));

describe('Events', () => {
    const event = {
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

    const props = {
        location: {
            search: 'search'
        },
        triggerFetch: jest.fn(),
        reset: jest.fn(),
        fetchEvents: jest.fn(),
        events: {
            events: [event, event], 
            willFetchEvents: false, 
            isLoading: false, 
            links: {}, 
            error: ''
        }
    }

    const wrapper = shallow(<PureEvents {...props} />);

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot(); 
    })

    it('good elements', () => {
        expect(wrapper.find('EventCard').length).toEqual(2);
        wrapper.setProps({
            events: {
                ...props.events,
                events: [],
                isLoading: true
            }
        });
        expect(wrapper.find('Loading').length).toEqual(1);
        wrapper.setProps({
            events: {
                ...props.events,
                events: [],
                error: 'error',
            }
        });
        expect(wrapper.find('#error').length).toEqual(1);
    })
})