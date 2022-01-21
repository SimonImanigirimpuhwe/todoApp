import React, {useState, useEffect} from 'react';
import {DrawerContentScrollView, DrawerItem} from 'react-navigation-drawer';
import {TouchableOpacity, SafeAreaView, View} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {Avatar, Caption, Drawer, Paragraph} from 'react-native-paper';

import {Icon} from '../Icon';
import styles from './styles';
import {appColors} from '../../assets/theme/Colors';
// import {get_storage} from '../../utils/storage';
import { CREATE_SCREEN, DASHBOARD_SCREEN, EDIT_SCREEN } from '../../constants/routeNames';


const data=[
  {name: 'md-home-outline', type: 'ionicon', title: 'Home'},
  {name: 'attach-money', type: 'material', title: 'Revenue'},
  {name: 'money-off', type: 'material', title: 'Expense'},
  {name: 'balance-scale', type: 'fa', title: 'Balance'},
  {name: 'user', type: 'feather', title: 'Me'},
]
const DrawerContent = ({navigation}) => {
  // const [profile, setProfile] = useState({});

  // const get_data = async () => {
  //   const storage = await get_storage();
  //   setProfile(storage);
  // };

  // useEffect(() => {
  //   get_data();
  // }, []);

  const navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    navigation.dispatch(navigateAction);
  };

  const handlePress = routeName => {
    switch (routeName.toLowerCase()) {
      case 'home':
        return navigateToScreen(DASHBOARD_SCREEN);
      case 'create':
        return navigateToScreen(CREATE_SCREEN);
      case 'edit':
        return navigateToScreen(EDIT_SCREEN);
      case 'me':
        return navigateToScreen(PROFILE_SCREEN);
      default:
        break;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView>
        <View>
          <TouchableOpacity
            style={styles.profile}
            onPress={() => handlePress('me')}>
            <Avatar.Image source={{uri: profile.photo_url}} size={60} />
            <View style={styles.profile_info}>
              <Paragraph
                style={{
                  textTransform: 'capitalize',
                }}>{`${'profile.last_name'} ${'profile.first_name'}`}</Paragraph>
              <Caption>{'profile.email'}</Caption>
            </View>
          </TouchableOpacity>
          <Drawer.Section style={styles.linkItems}>
            {data.map((item, index) => (
              <DrawerItem
                key={index}
                icon={() => (
                  <Icon
                    type={item.type}
                    name={item.name}
                    size={20}
                    style={{color: appColors.black}}
                  />
                )}
                label={item.title}
                onPress={() => handlePress(item.title)}
              />
            ))}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.logout}>
        <DrawerItem
          label="logout"
          icon={() => (
            <Icon type="materialCommunity" name="exit-to-app" size={20} />
          )}
          onPress={() => handlePress('logout')}
        />
      </Drawer.Section>
    </SafeAreaView>
  );
};

export default DrawerContent;