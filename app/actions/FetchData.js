import * as types from './types';
import * as urls from '../config/urls';



const requestData = ()=> ({
	type:types.REQUEST_DATA
})

 const receiveData=(json)=>(
	 {
		type: types.RECEIVE_DATA,
		data: json
	}
 )

export default fetchData=()=>{
	return (dispatch,getState)=>{
		dispatch(requestData())
		return  fetch(urls.BASE_URL)
			.then(response=>response.json())
			.then(json=>{
				dispatch(receiveData(json))
			})
			.catch((error)=>{
				console.log("error:"+ error.message);
				throw error;
			})
	}
}

