// @flow

import { ACTIONS_NAME } from './constants';
import fetchAPI from '../../utils/fetchAPI';
import api from '../../constants/api';

import type { Dispatch } from 'redux';

export const setLoading = (isLoading: boolean) => ({
    type: ACTIONS_NAME.SET_LOADING,
    isLoading
});

export const setEvents = (events: Array<Object>) => ({
    type: ACTIONS_NAME.SET_EVENTS,
    events
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
    async (dispatch: Dispatch) => {
        dispatch(setLoading(true));
        const response = await fetchAPI(
            api.events, 
            'GET',
            {
                'filter[venues]': venue,
                'page[size]': 12
            }
        );
        dispatch(setEvents(response.data.data));
    }