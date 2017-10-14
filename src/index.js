import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
//import './index.css';
import './assets/production/css/style.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';

const loggerMiddleware = createLogger();

function configureStore(initialState, reducer) {
	const enhancer = compose(
		applyMiddleware(
			//thunkMiddleware,
			loggerMiddleware,
			),
		);
	return createStore(reducer, initialState, enhancer);
}

const store = configureStore({}, reducer); // no initial state for now;

const AppContainer = () => (
	<Provider store={store}>
    <App className="App" />
  </Provider>
);

ReactDOM.render(<AppContainer />, document.getElementById('root'));
//registerServiceWorker();

