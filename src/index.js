import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
//import { createLogger } from 'redux-logger';
import './assets/production/css/style.css';
import App from './App';
import reducer from './reducers';

//const loggerMiddleware = createLogger();

function configureStore(initialState, reducer) {
	const enhancer = compose(
		applyMiddleware(
			//thunkMiddleware,
			//loggerMiddleware,
			),
		);
	return createStore(reducer, initialState, enhancer);
}

const store = configureStore({}, reducer);

const AppContainer = () => (
	<Provider store={store}>
    <App className="App" />
  </Provider>
);

ReactDOM.render(<AppContainer />, document.getElementById('root'));


