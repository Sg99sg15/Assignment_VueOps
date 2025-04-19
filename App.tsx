import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import AppNavigator from './src/navigations/AppNavigator'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App