import React, { Component } from 'react';
import {View,Text} from 'react-native'
import {connect} from 'react-redux'
import ResultScreen from  './ResultScreen'
import MakananScreen from './MakananScreen'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
class Home extends Component {
	static navigationOptions = {
        title: 'Home',
        
      };
	
}
const TabNavigator = createBottomTabNavigator({
  Result: ResultScreen,
  Makanan: MakananScreen,
});
// mapStateToProps=state=>({
// 	imt:state.gizi.imt,
// 	keb_kalori:state.gizi.keb_kalori,
// 	lemak:state.gizi.lemak,
// 	protein:state.gizi.protein,
// 	karbohidrat:state.gizi.karbohidrat
// })
// export default connect(mapStateToProps,null)(Home)
export default createAppContainer(TabNavigator);
