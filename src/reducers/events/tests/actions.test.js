import { setLoading, setEvents, setError, reset, fetchEvents, triggerFetch } from '../actions';
import { ACTIONS_NAME } from '../constants';

jest.mock('axios', () => jest.fn().mockImplementation(() => ({
    data: { data: ['events'] }
})));

describe('Events actions / thunks', () => {
    it('setLoading', () => {
        expect(setLoading(true)).toEqual({
            type: ACTIONS_NAME.SET_LOADING,
            isLoading: true
        })
    })

    it('setEvents', () => {
        expect(setEvents(['events'], 'link')).toEqual({
            type: ACTIONS_NAME.SET_EVENTS,
            payload: { 
                events: ['events'],
                links: 'link' 
            }
        })
    })

    it('setError', () => {
        expect(setError('error')).toEqual({
            type: ACTIONS_NAME.SET_ERROR,
            error: 'error'
        })
    })

    it('triggerFetch', () => {
        expect(triggerFetch()).toEqual({
            type: ACTIONS_NAME.TRIGGER_FETCH
        });
    })

    it('reset', () => {
        expect(reset()).toEqual({
            type: ACTIONS_NAME.RESET
        });
    })

    it('fetchEvents', async () => {
        const dispatch = jest.fn();
        await fetchEvents('xoyo')(dispatch, () => ({ events: { links: { next: 'url' }}}));
        expect(dispatch).toBeCalledWith({ type: ACTIONS_NAME.SET_LOADING, isLoading: true });
        expect(dispatch).toBeCalledWith({ type: ACTIONS_NAME.SET_EVENTS, payload: { events: ['events'] } });
    })
})