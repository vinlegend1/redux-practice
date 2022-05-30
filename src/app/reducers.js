import { combineReducers } from '@reduxjs/toolkit';
import listReducer from '../features/List/slice'
import detailReducer from '../features/Detail/slice'

export default combineReducers({
    listReducer
});

