import React, { Component } from 'react'
import {TextInput,Text} from 'react-native'
import styles from './style/buttonStyle'
export default class TextField extends Component {
  render() {
    return (
     <TextInput
     	style={{borderBottomWidth:1,fontSize:25,width:260}}
     />	
    )
  }
}
