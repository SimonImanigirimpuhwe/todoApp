import React from 'react';
import { View , StatusBar} from 'react-native';
import {NavigationActions} from 'react-navigation';

import {Landing} from '../components/Landing';

const LandingScreen = ({navigation}) => {
    const gotoScreen = (route) => {
        const navigateAction = NavigationActions.navigate({routeName: route})
        navigation.dispatch(navigateAction)
    }
  return (
      <View>
          <StatusBar barStyle="dark-content" backgroundColor="white" /> 
          <Landing gotoScreen={gotoScreen}/>
      </View>
  )
};

export default LandingScreen;




