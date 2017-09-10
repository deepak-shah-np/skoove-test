import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStores from './stores/configureStores';
import { View, Text } from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import Routes from './config/routes';



const Navigator = StackNavigator(Routes,{
	headerMode: 'screen'
});

const navReducer = (state,action) =>{
	const newState = Navigator.router.getStateForAction(action,state)
	return newState || state
}



class MainApp extends Component {
	render(){
		return(
			<Navigator
				navigation={addNavigationHelpers({
					dispatch: this.props.dispatch,
					state: this.props.nav
				})}
			/>
			)
	}
}






const store = configureStores(navReducer);
const AppIndex = connect(state=>({nav: state.nav}))(MainApp)



export default Root = ()=>{
	return(

		<Provider store={store}>
			<AppIndex/>
		</Provider>
	)
}

