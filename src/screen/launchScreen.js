import React, { Component } from 'react'
import { ScrollView, Text, Image, View,TouchableOpacity } from 'react-native'
// Styles
import styles from './Styles/launchScreenStyle'
import Button from '../component/button'

export default class LaunchScreen extends Component {
  static navigationOptions = {
    header: null,
  };
 
  render () {
    return (
      <View style={styles.mainContainer}>
       	<View >
        	<Text style={{fontSize:50,color:'white'}}>GIZILATOR</Text>
      	</View>
        <Button text="Mulai" onPress={()=>this.props.navigation.navigate('Asessment1Screen')}/>
      </View>
    )
  }
}
