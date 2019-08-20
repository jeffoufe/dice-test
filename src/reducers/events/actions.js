// @flow

import { ACTIONS_NAME } from './constants';
import fetchAPI from '../../utils/fetchAPI';
import api from '../../constants/api';

import type { Dispatch } from 'redux';
import type { EventsState } from './reducer';

type Links = {
    next: string
}

export const setLoading = (isLoading: boolean) => ({
    type: ACTIONS_NAME.SET_LOADING,
    isLoading
});

export const setEvents = (events: Array<Object>, links: Links) => ({
    type: ACTIONS_NAME.SET_EVENTS,
    payload: { links, events }
});

export const setError = (error: string) => ({
    type: ACTIONS_NAME.SET_ERROR,
    error
})

export const triggerFetch = () => ({
    type: ACTIONS_NAME.TRIGGER_FETCH
});

export const reset = () => ({
    type: ACTIONS_NAME.RESET
});

export const fetchEvents = (venue: string) => 
    async (dispatch: Dispatch, getState: () => EventsState) => {
        dispatch(setLoading(true));
        const { events: { links: { next } } } = getState();
        const response = await fetchAPI(
            next || api.events, 
            'GET',
            next ? {} : {
                'filter[venues]': venue,
                'page[size]': 12
            }
        );
        dispatch(setEvents(response.data.data, response.data.links));
    }