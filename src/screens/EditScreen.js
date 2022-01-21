import React, { useState } from 'react';
import { NavigationActions } from 'react-navigation';

import {Edit} from '../components/Edit';

const EditScreen = ({navigation}) => {
  const [todo, setTodo] = useState('simon')

  const handleSubmit = () => {
    console.log("submitted", todo)
  }
  const handleChange = (value) => {
    setTodo(value); 
  };
  const goToScreen = (route) => {
    const navigationAction = NavigationActions.navigate({routeName: route})
    navigation.dispatch(navigationAction)
  }
  return (
    <Edit  
      goToScreen={goToScreen}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      value={todo}
      />
  );
};

export default EditScreen;
