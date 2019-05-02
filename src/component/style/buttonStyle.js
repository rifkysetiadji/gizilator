import { StyleSheet ,Dimensions} from 'react-native'
const { width, height } = Dimensions.get('window')
export default StyleSheet.create({
    button:{
        height: 45,
        backgroundColor:'#00796b',
        width:width/2,
        borderRadius: 5,
        justifyContent:'center',
        marginTop:20
    },
    buttonText:{
        color:'white',
    textAlign:'center',
    fontWeight:'bold',
    fontSize:20
    }
})