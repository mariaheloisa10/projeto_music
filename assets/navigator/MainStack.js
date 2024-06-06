import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import HomeScreen from '../pages/HomeScreen'
import AboutScreen from '../pages/AboutScreen'

const MainStack = createNativeStackNavigator()
export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Home' component={HomeScreen} options={{
        title: ' Misic HS',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#244d1d',
          height: 100
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 23,
          fontWeight: 'bold'
        }
      }}/>
      <MainStack.Screen name='About' component={AboutScreen} options={{
        title: 'Bem-Vindo ao Misic HS',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#244d1d',
          height: 100,
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 20,
          fontWeight: 'bold',
        }
      }}/>
       
    </MainStack.Navigator>
  )
}