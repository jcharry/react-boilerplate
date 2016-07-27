import * as redux from 'redux';
import thunk from 'redux-thunk';

import { } from 'app/reducers/reducers';

const configure = (initialState = {}) => {
    var reducer = redux.combineReducers({
        //Reducers to here
        //stateName: stateNameReducer
    });

    var store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};

export default configure;
