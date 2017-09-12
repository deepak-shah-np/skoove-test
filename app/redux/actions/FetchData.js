import * as types from './types';


export const requestData = ()=> ({
	type:types.REQUEST_DATA
})

 export const receiveData=(json)=>(
	 {
		type: types.RECEIVE_DATA,
		data: json
	}
 )



