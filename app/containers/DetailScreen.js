import React, { Component } from 'react';
import { View, Text ,Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Orientation from 'react-native-orientation';
import * as urls from '../config/urls';

class DetailScreen extends Component{

	constructor(props) {
	  super(props);
	  this.state={
		  deviceWidth: Dimensions.get('window').width,
		  deviceHeight: Dimensions.get('window').height,
	  }
	}

	static navigationOptions=({navigation})=>({
		title:`${navigation.state.params.item.name}`,
	});

	onLayoutChaange=()=>{
		Orientation.addOrientationListener(orientation => {
			if (orientation==="LANDSCAPE") {
				this.setState={
					deviceWidth:Dimensions.get('window').width,
					deviceHeight:Dimensions.get('window').height,
				}
			}
		});
	}


	render(){
		const {item} = this.props.navigation.state.params;
		
		return (
			<ScrollView>
			<View style={styles.detail_container} onLayout={()=>this.onLayoutChaange}>
			   <View style={[styles.photo_container]} >
			   	 <Image resizeMode="contain" source={{ uri: urls.BASE_IMAGE_URL+item.picturefilename}} style={[styles.photo,{width:this.state.deviceWidth/2,height:this.state.deviceWidth/2}]} />
			   </View>
			   	<View style={[styles.meta_container,item.isfree?styles.blue_backgound:styles.red_background]}>
			    	<Text style={styles.metadata}>{item.isfree?"Free":"Paid"}</Text>
			   	</View>
			   	<View style={styles.description_container}>
			   		<Text style={styles.description}>{item.description}</Text>
			   	</View>
			</View>
			</ScrollView>
			);
	}

}

const styles = StyleSheet.create({
	detail_container:{
		flex:1,
		flexDirection:'column',
		margin:10,
	},
	photo_container:{
		
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'white',
		padding:20,
	},
	photo:{
		flexWrap:'wrap',
   		marginBottom:20,
   		alignItems: "center",
   		justifyContent:'center',
	},
	meta_container:{
		width:100,
		height:40,
		padding:5,
		backgroundColor:'#8C919B',
		justifyContent:'center',
		alignItems:'center',
		borderRadius:20,
		marginTop:-20,
		marginBottom:5,
		alignSelf: 'flex-end',  
	},
	metadata:{
		fontSize:15,
		color:'white'
	},
	description_container:{
		minHeight:150,
		backgroundColor:'white',
		padding:20,
		marginTop:8,
	},
	description:{
		color:'#333',
		fontSize:15,
	},

	red_background:{
  		backgroundColor:'#F55B46',
    },
    blue_backgound:{
  		backgroundColor:'#467BF5'
  	},
});


export default DetailScreen;

