import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from '../redux-modules';


export default function configureStore(preloadedState) {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	return createStore(
		createRootReducer(),
		preloadedState,
		composeEnhancers(applyMiddleware(thunk))
	);
}
