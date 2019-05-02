import React, { Component } from 'react'
import {TouchableOpacity,Text} from 'react-native'
import styles from './style/buttonStyle'
export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
          <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}
