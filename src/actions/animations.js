import * as types from './types';

export function playHomeAnimation(bool){
	return {
		type: types.PLAY_ANIMATE,
		bool
	}
}
