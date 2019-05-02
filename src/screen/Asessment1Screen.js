import React, { Component } from 'react';
import {View,Text,TextInput,Picker,ScrollView,ActivityIndicator} from 'react-native'
import styles from './Styles/Asessment1ScreenStyle'
import Button from '../component/button'
import {kirim} from '../action/giziAction'
import {connect} from 'react-redux'
class Asessment1Screen extends Component {
	 static navigationOptions = {
        title: 'Biodata',
        
      };
      constructor (props) {
        super(props)
        this.state = {
          nama:'',
          pekerjaan:'',
          jk:'',
          usia:'',
          tb:'',
          bb:'',
          
          loading:false
        }
      }
      onPress=()=>{
      	const data={
      		nama:this.state.nama,
      		pekerjaan:this.state.pekerjaan,
      		jk:this.state.jk,
      		usia:this.state.usia,
      		tb:this.state.tb,
      		bb:this.state.bb
      	}
      	
      	this.props.kirim(data)
      	this.props.navigation.navigate('Home')
      }
	render() {
		if (this.state.loading) {
			return(
				<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
		        <ActivityIndicator size="large" color="#00796b" />
		        </View>
			)
		} else {
		return (
		<View style={styles.mainContainer}>
		<ScrollView>
			<Text style={{fontSize:24}}>Nama</Text>
			<TextInput
              style={{borderBottomWidth:1,fontSize:25,width:250}}
              type="text" 
              autoCapitalize="none"
              onChangeText={(nama)=>{this.setState({nama})}}
            />
            <View style={{marginTop:10}}>
				<Text style={{fontSize:24}}>Pekerjaan</Text>
				<TextInput
	              style={{borderBottomWidth:1,fontSize:25,width:250}}
	              type="text" 
	              autoCapitalize="none"
	              onChangeText={(pekerjaan)=>{this.setState({pekerjaan})}}
	            />
            </View>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginTop:10,marginRight:30}}>
            	<View>
	            	<Text style={{fontSize:24}}>Usia</Text>
					<TextInput
		              style={{borderBottomWidth:1,fontSize:25,width:110}}
		              type="text" 
		              autoCapitalize="none"
		              keyboardType="numeric"
		              onChangeText={(usia)=>{this.setState({usia})}}
		            />    
	            </View>
	            <View>
	            	<Text style={{fontSize:24}}>Jk</Text>
					<Picker
                      selectedValue={this.state.jk}
                      style={{ width: 110}}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({jk: itemValue})
                      }>
                      <Picker.Item label="pilih" value="" />
                      <Picker.Item label="L" value="L" />
                      <Picker.Item label="P" value="P" />
                    </Picker> 
	            </View>
				              
            </View>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginTop:10,marginRight:30}}>
            	<View>
	            	<Text style={{fontSize:24}}>Tb</Text>
					<TextInput
		              style={{borderBottomWidth:1,fontSize:25,width:110}}
		              type="text" 
		              autoCapitalize="none"
		              keyboardType="numeric"
		              onChangeText={(tb)=>{this.setState({tb})}}
		            />    
	            </View>
	            <View>
	            	<Text style={{fontSize:24}}>Bb</Text>
					<TextInput
		              style={{borderBottomWidth:1,fontSize:25,width:110}}
		              type="text" 
		              autoCapitalize="none"
		              keyboardType="numeric"
		              onChangeText={(bb)=>{this.setState({bb})}}
		            />    
	            </View>
				     
            </View>
            <View style={{alignItems:'center'}}>
            	<Button text="Submit" onPress={this.onPress}/> 
            </View>
            </ScrollView>
		</View>
		);
		}
	}
}
mapStateToProps=state=>({
	gizi:state.gizi
})
export default connect(mapStateToProps,{kirim})(Asessment1Screen)