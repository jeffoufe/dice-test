// @flow

import thunk from 'redux-thunk';
import eventReducer from './reducers/events/reducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const rootReducer = combineReducers({
    events: eventReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
