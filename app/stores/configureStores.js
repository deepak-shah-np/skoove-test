import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducers from '../reducers';


const loggerMiddleware = createLogger();

export default configureStores=(navReducer)=>{

	return createStore(
		rootReducers(navReducer),
		undefined,
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
			)
		)

}