import * as types from '../actions/types';

export function animations(state, action) {
    switch (action.type) {
        case 'PLAY_ANIMATE':
            return {
            	bool: action.bool,
            	viewAnimationDelay: 2000,
            }
        default:
            return {
            	bool: false,
            	viewAnimationDelay: 1000,
            }
    }
}
