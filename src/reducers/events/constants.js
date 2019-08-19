// @flow

export const ACTIONS_NAME = Object.freeze({
    'SET_LOADING': 'EVENTS/SET_LOADING',
    'SET_EVENTS': 'EVENTS/SET_EVENTS',
    'SET_ERROR': 'EVENTS/SET_ERROR',
    'TRIGGER_FETCH': 'EVENTS/TRIGGER_FETCH',
    'RESET': 'EVENTS/RESET'
})

export const INITIAL_STATE = Object.freeze({
    events: [],
    error: '',
    isLoading: true,
    willFetchEvents: true,
    page: 0
})