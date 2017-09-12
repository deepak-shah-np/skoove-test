import { requestData, receiveData } from '../redux/actions/FetchData'
import * as urls from '../config/urls';


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