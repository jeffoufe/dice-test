// @flow

import { INITIAL_STATE, ACTIONS_NAME } from './constants';

export type EventsState = {
    isLoading: boolean,
    willFetchEvents: boolean,
    error: string,
    events: Object
}

export default (state: EventsState = INITIAL_STATE, action: Object) => {
    switch(action.type) {
        case ACTIONS_NAME.TRIGGER_FETCH:
            return {
                ...state,
                willFetchEvents: true
            }
        case ACTIONS_NAME.SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
                willFetchEvents: false,
            };
        case ACTIONS_NAME.SET_EVENTS:
            return {
                ...state,
                events: [...state.events, ...action.events],
                isLoading: false,
            }
        case ACTIONS_NAME.SET_ERROR:
                return {
                    ...state,
                    error: action.error
                }
        case ACTIONS_NAME.RESET:
            return INITIAL_STATE;
        default:
            return state;
    }
}