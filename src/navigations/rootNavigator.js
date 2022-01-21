import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
// import { BottomTab } from '../components/CustomTab';

import { DrawerContent } from '../components/DrawerContent';
import { Navbar } from '../components/Navbar';
import CreateScreen from '../screens/CreateScreen';
import DashboardScreen from '../screens/DashboardScreen';
import EditScreen from '../screens/EditScreen';
import LandingScreen from '../screens/LandingScreen';
import LoginScreen from '../screens/LoginScreen';




const HomeStack = createStackNavigator({
  DashboardScreen: {
    screen: DashboardScreen,
    navigationOptions: ({navigation}) => {
      return {
        header: () => <Navbar navigation={navigation} />,
      //   gestureEnabled: false,
      };
    }
  }
})
const EditStack = createStackNavigator({
  EditScreen: {
    screen: EditScreen,
    navigationOptions: ({navigation}) => {
      return {
        header: () => <Navbar navigation={navigation} />,
      //   gestureEnabled: false,
      };
    }
  }
})
const CreateStack = createStackNavigator({
  CreateScreen: {
    screen: CreateScreen,
    navigationOptions: ({navigation}) => {
      return {
        header: () => <Navbar navigation={navigation} />,
      //   gestureEnabled: false,
      };
    }
  }
})
// const ProfileNavigator = createStackNavigator({
//   ProfileScreen: {
//     screen: ProfileScreen,
//     navigationOptions: ({navigation}) => {
//       return {
//         header: () => <Navbar navigation={navigation} />,
//       //   gestureEnabled: false,
//       };
//     }
//   }
// })
const TabNavigator = createMaterialTopTabNavigator(
  {
    Home: HomeStack,
    Edit: EditStack,
    Create: CreateStack,
    // Me: ProfileNavigator,
  },
  {
    // tabBarComponent: CustomTab,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: '#777',
      showLabel: false,
    },
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigator,
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: <DrawerContent />,
    drawerWidth: 300,
  },
);

const MainNavigator = createStackNavigator({
    LandingScreen: {
      screen: LandingScreen,
      navigationOptions: ({navigation}) => {
        return {
          header: () => null
        }
      }
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: ({navigation}) => {
        return {
          header: () => <Navbar navigation={navigation} />
        //   gestureEnabled: false,
        };
      },
    },
    DashboardScreen: {
      screen: DashboardScreen,
      navigationOptions: ({navigation}) => {
        return {
          header: () => <Navbar navigation={navigation} />,
        //   gestureEnabled: false,
        };
      },
    },
    CreateScreen: {
      screen: CreateScreen,
      navigationOptions: ({navigation}) => {
        return {
          header: () => <Navbar navigation={navigation} />,
        //   gestureEnabled: false,
        };
      },
    },
    EditScreen: {
      screen: EditScreen,
      navigationOptions: ({navigation}) => {
        return {
          header: () => <Navbar navigation={navigation} />,
        //   gestureEnabled: false,
        };
      },
    },
    HomeScreen: {
      screen: DrawerNavigator,
      navigationOptions: ({navigation}) => {
        return {
          header: () => null,
        };
      },
    },
  }, {initialRouteName: 'LandingScreen'});


  const RootNavigator = createAppContainer(MainNavigator);

export default RootNavigator;