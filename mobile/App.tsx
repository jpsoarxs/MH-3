import React from 'react';
import * as eva from '@eva-design/eva';
import { AppLoading } from "expo";
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './navigation.component';
import { 
  Poppins_400Regular, 
  Poppins_100Thin, 
  Poppins_600SemiBold, 
  Poppins_500Medium, 
  Poppins_700Bold, 
  Poppins_900Black,
  Poppins_300Light,
  useFonts } from '@expo-google-fonts/poppins'

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_100Thin,
    Poppins_900Black,
    Poppins_300Light
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider {...eva} theme={eva.light}>
        <AppNavigator/>
      </ApplicationProvider>
    </>
  )

}