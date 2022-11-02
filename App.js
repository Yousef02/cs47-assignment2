import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import * as React from 'react';
import Comment from './comment';
import themes from './assets/Themes/themes';
import Center from './Center';
import Footer from './bottom';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <View style={styles.container} >
      {/* <View style={styles.container}> */}
      <Comment/>
      <Center/>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    paddingTop: '9%',
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
    
  },
});

