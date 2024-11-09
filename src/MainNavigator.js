import {createStackNavigator} from "@react-navigation/stack"
import Splash from './screens/splash/Splash'
import Home from './screens/Home/Home'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'

const Stack = createStackNavigator()

const MainNavigator = () => {

  return (
    <NavigationContainer>
     <StatusBar barStyle={'light-content'} />
      <Stack.Navigator>
        <Stack.Screen name="Splash" options={{headerShown:false}} component={Splash} />
        <Stack.Screen name="HomeScreen" options={{headerShown:false}} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator