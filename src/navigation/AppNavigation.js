import { createStackNavigator,createAppContainer} from 'react-navigation'
import LaunchScreen from '../screen/launchScreen'
import Asessment1Screen from '../screen/Asessment1Screen'
import Home from '../screen/Home'
const PrimaryNav = createStackNavigator({
    LaunchScreen:{screen:LaunchScreen},
    Asessment1Screen:{screen:Asessment1Screen},
    Home:{screen:Home},
  }, {
    // Default config for all screens
    
    initialRouteName: 'LaunchScreen',
    
  })
  
  export default createAppContainer(PrimaryNav)