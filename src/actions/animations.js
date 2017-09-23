import * as types from './types';

export function playHomeAnimation(bool){
	return {
		type: types.PLAY_ANIMATE,
		bool
	}
}


// const duration = 1;
// const backgroundMainLeft = document.querySelector(".background-piece-left-main");
// const backgroundColorLeft = document.querySelector(".background-piece-left-main");
// const backgroundColorRight = document.querySelector(".background-piece-right-color");


// export default {
// 	show(target, cb){
// 		return TimelineMax({
// 			.to(backgroundColorLeft, 1.2, {
// 				scaleX: 1,
// 				ease: Expo.easeInOut
// 			}, 0).to(backgroundColorRight)
// 			onComplete: function e(){
// 				cb();
// 			}
// 		})
// 	}
// }
