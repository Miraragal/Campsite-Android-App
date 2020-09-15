import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { campsitesReducer, commentsReducer, partnersReducer, promotionsReducer } from './reducer';


export const Store = () => {
    const store = createStore(
        combineReducers({
            campsites: campsitesReducer,
            comments: commentsReducer,
            partners: partnersReducer,
            promotions: promotionsReducer
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}