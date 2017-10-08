import * as types from '../actions/types';
import * as Content from '../content.js';

export function content(state, action) {
    switch (action.type) {
        case types.GET_EVENTS:
            return {
            	id: action.id,
            	bool: action.bool,
            }
        default:
            return Content;
    }
}
