import { combineReducers } from 'redux';
import * as types from '../actions/types';

const initialState = {
	isFetching:false,
	data:[]
};

const reqData=(state=initialState,action)=>{

	switch(action.type){
		case types.REQUEST_DATA:
			return Object.assign({},state,{
				isFetching:true
			})

		case types.RECEIVE_DATA:
			return Object.assign({},state,{
				isFetching:false,
				data: action.data
			})

		default:
			return state	
	}

}


const  rootReducer=(navReducer)=>{
	return combineReducers({
		nav:navReducer,
		reqData
	})
}


export default rootReducer;