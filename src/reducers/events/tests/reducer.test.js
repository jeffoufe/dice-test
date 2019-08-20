import eventsReducer from '../reducer';
import { setLoading, triggerFetch, setEvents, reset } from '../actions';
import { INITIAL_STATE } from '../constants';

describe('Events reducer', () => {
    it('setLoading', () => {
        expect(eventsReducer(INITIAL_STATE, setLoading(true))).toEqual({
            ...INITIAL_STATE,
            isLoading: true,
            willFetchEvents: false
        })
    });

    it('triggerFetch', () => {
        expect(eventsReducer(INITIAL_STATE, triggerFetch())).toEqual({
            ...INITIAL_STATE,
            willFetchEvents: true
        })
    });

    it('setEvents', () => {
        expect(eventsReducer(INITIAL_STATE, setEvents(['events'], 'link'))).toEqual({
            ...INITIAL_STATE,
            events: ['events'],
            links: 'link',
            isLoading: false
        })
    });

    it('setEvents', () => {
        expect(eventsReducer({ ...INITIAL_STATE, events: ['events'] }, reset())).toEqual(INITIAL_STATE)
    });
})