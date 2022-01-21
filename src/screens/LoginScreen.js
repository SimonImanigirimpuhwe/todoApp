import React, {useState} from 'react';
import { NavigationActions } from 'react-navigation';

import {Login} from '../components/Login';
import { DASHBOARD_SCREEN, HOME_SCREEN } from '../constants/routeNames';

const LoginScreen = ({navigation}) => {
  const [formErr, setFormErr] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(null);


  const onChangeText = ({name, value}) => {
    name === 'email' ? setEmail(value) : setPassword(value);
  };


  const goToScreen = (route) => {
    const navigateAction = NavigationActions.navigate({routeName: route})
    navigation.dispatch(navigateAction)
}

const handleSubmit = () => {
  if (email === '') {
    setFormErr({
      email: 'Email is required',
    });
  } else if (password === '') {
    setFormErr({
      password: 'Password is required',
    });
  } else {
    console.log('credentials', {
      email,
      password,
    });
    if (email === "test@gmail.com" && password === "Test123") {
      goToScreen(DASHBOARD_SCREEN)
      // goToScreen(HOME_SCREEN)
    } else {
      setErr("Invalid credentials")
    }
  }
};
  return <Login 
            errors={formErr}
            onSubmit={handleSubmit}
            onChangeText={onChangeText}
            error={err}
          />;
};
export default LoginScreen;

// album-photos-search-api
