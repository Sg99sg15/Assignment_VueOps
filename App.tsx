import { View, Text, SafeAreaView, LogBox } from 'react-native'
import React, { useEffect } from 'react'
import AppNavigator from './src/navigations/AppNavigator'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs(true);
  }, [])
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App