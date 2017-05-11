import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import items from './items';
import quote from './quote';

const rootReducer = combineReducers({ items, quote, routing: routerReducer });

export default rootReducer;
