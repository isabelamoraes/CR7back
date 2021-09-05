import React from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';
import { Inter_500Medium, Inter_900Black } from '@expo-google-fonts/inter';
import { Raleway_500Medium, Raleway_900Black } from '@expo-google-fonts/raleway';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

import theme from './src/styles/theme';

import { Home } from './src/screens/Home';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_900Black,
    Raleway_500Medium,
    Raleway_900Black
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Home />
    </ThemeProvider>
  );
}