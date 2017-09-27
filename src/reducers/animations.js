import * as types from '../actions/types';

export function animations(state, action) {
    switch (action.type) {
        case 'PLAY_ANIMATE':
        	return Object.assign({}, state, { bool: action.bool, viewAnimationDelay: 2000 });
            // return {
            // 	bool: action.bool,
            // 	viewAnimationDelay: 2000,
            // }
        case 'GET_ANIMATION_TARGET' :
        	return Object.assign({}, state, { animationTarget: action.target });
        default:
            return {
            	bool: false,
            	viewAnimationDelay: 1000,
            }
    }
}
