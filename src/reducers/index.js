import { combineReducers } from 'redux';
import * as projectsReducer from './projects';
import * as animationsReducer from './animations';

export default combineReducers(Object.assign(
	projectsReducer,
	animationsReducer
));
