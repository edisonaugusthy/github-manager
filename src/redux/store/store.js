import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import libraryReducer from '../reducers/libraryReducer';
import reposeReducer from '../reducers/reposeReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        library: libraryReducer,
        repose: reposeReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
);

export default store;