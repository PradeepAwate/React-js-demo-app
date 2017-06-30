import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
    switch(action.type) {
        case types.LOAD_AUTHORS_SUCCESS: 
            // state.push(action.course);
            // return state;
            //debugger;
            //return [...state, Object.assign({}, action.course)];
            return action.authors;
        default:   
            return state; 
    }
}
