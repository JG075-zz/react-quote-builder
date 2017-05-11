import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import items from './items';
import editMode from './editMode';

const rootReducer = combineReducers({ items, editMode, routing: routerReducer });

export default rootReducer;
