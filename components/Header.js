import React from 'react';
import { 
  StyleSheet, 
  Text,
  View,
} from 'react-native';

import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';

const Header = () => {
    
  const [fontLoaded] = useFonts ({
    'Quicksand-Medium': require ('./assets/fonts/Quicksand-Medium.ttf'),
  });
  
  if (!fontLoaded) {
    return <AppLoading />
  } else {
  return (
      <View style={styles.header}>
        <Text style={styles.titulo}>Nutricionista Katherine</Text>
      </View>
    )
}
};

const styles = StyleSheet.create({
  header: {
    height: 130,
    backgroundColor: '#f1afbb',
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 85,
    color: 'white',
    fontFamily: 'Quicksand-Medium',
  },
})

export default Header