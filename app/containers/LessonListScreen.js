import React, { Component } from 'react';
import { View, Text, Picker, ListView , StyleSheet, ActivityIndicator} from 'react-native';

import { connect } from 'react-redux';
import fetchData from '../actions/FetchData';
import Items from '../components/Items';


class LessonListScreen extends Component {
	constructor(props) {
	  super(props);
	  this.state={
		animating: true 
	  }
	}

	static navigationOptions={
     title:'Lessons',
	   };
	   
	closeActivityIndicator=()=>setTimeout(()=>{
		this.setState={
			animating:false
		}
	},6000)  
	componentDidMount=()=>{
		this.props.dispatch(fetchData())
		this.closeActivityIndicator()
	}

	showItems=(data)=>{
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		const datasourc = ds.cloneWithRows(
			this.props.data
      	)
		const itemView=[];
		if (this.props.data.length>0) {
			return (
				<ListView
		        dataSource={datasourc}
		        renderRow={(rowData, sectionID, rowID) => <Items {...this.props} item={rowData} i={rowID}  />}
		        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
		        style={styles.list_container}	
		      />

			);

		}
	}

	render(){
		const { isFetching, data } =this.props;
		return(
			<View style={styles.container}>
				{isFetching && data.length===0 && 
				<ActivityIndicator
					color = '#bc2b78'
					size = "large"
					style = {styles.activity_indicator}/>

					}
				{!isFetching && data.length===0 && <Text>Empty</Text>}
				{data.length>0 &&
					<View style={{opacity:isFetching?0.5:1}}>
						{this.showItems()}
					</View>
				}
			</View>
			)
	}
}


const styles = StyleSheet.create({
	container:{
		flex:1
	},
	list_container: {
  		margin:10,
  		backgroundColor:'white',
  	},
   separator: {
    	height: 10,
    	backgroundColor: '#eae8e8',
   },
   activity_indicator:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 80
  }
});


function mapStateToProps(state,navigation){
	const { isFetching, data } = state.reqData
	return {
		isFetching,
		data,
		navigation:navigation.navigation
	}
}

export default connect(mapStateToProps)(LessonListScreen)