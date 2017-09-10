import React, { Component } from 'react';
import { View, Text, StyleSheet,Button, Image, TouchableHighlight} from 'react-native';
import { NavigationActions } from 'react-navigation';
import * as urls from '../config/urls';

class Items extends Component{

navigateTo=(routeName: string) => {
	   const {navigation} = this.props;
	    navigation.navigate(routeName,{item:this.props.item})
  }

  checkIndexIsEven =  (n)=> {
      return n % 2 == 0
  }

	render(){
		const { item,i } = this.props;
  
		return (
			<TouchableHighlight onPress={()=>this.navigateTo('Detail')}  >		
			  <View style={[styles.container, ]}>
			    <Image source={{ uri: urls.BASE_IMAGE_URL+item.picturefilename}} style={styles.photo} />
			   	<View style={styles.text_container}>
			   		 <Text style={styles.name_text}>
			    		{item.name}
			    	</Text>
			    	<View style={[styles.free_button, item.isfree?styles.blue_backgound:styles.red_background]}>
			    		<Text style={styles.is_free_text}>{item.isfree?"Free":"Paid"} </Text>
			    	</View>
			   	</View>
			  </View>
			 </TouchableHighlight> 

		);
	}
}



const styles = StyleSheet.create({
  container: {
  	flex:1,
  	height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
 
  text_container:{
  	flex:1,
  	flexDirection:'column',
  	marginLeft: 10,
  },
   name_text: {
    fontSize: 18,
    color:'#060606'
  },
   free_button:{
  	width:50,
  	alignItems:'center',
  	borderRadius:20,
  	padding:4,
    marginTop:8,
  },
  red_background:{
  	backgroundColor:'#F55B46',
  },
  blue_backgound:{
  	backgroundColor:'#467BF5'
  },
  is_free_text:{
  	color:'white'
  },
  photo: {
    height: 50,
    width: 50,
    borderRadius: 100,
    paddingLeft:4
  
  },

});


export default Items;



  