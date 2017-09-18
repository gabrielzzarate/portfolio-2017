import * as types from '../actions/types';

export function animations(state, action) {
    switch (action.type) {
        case 'PLAY_ANIMATE':
            return {
            	bool: action.bool,
            }
        default:
            return false;
    }
}
