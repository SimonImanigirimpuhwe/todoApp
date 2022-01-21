import React, { useEffect, useState } from 'react';
import { NavigationActions } from 'react-navigation';
import axios from 'axios';

import {Dashboard} from '../components/Dashboard';
import { EDIT_SCREEN } from '../constants/routeNames';

const url = 'https://jsonplaceholder.typicode.com/todos'

const DashboardScreen = ({navigation}) => {
  const [data, setData] = useState([])

  useEffect(async() => {
    const res  = await axios.get(url)
    const result = res.data
    setData(result)
  },[])
  const goToScreen = (route) => {
    const navigateAction = NavigationActions.navigate({routeName: route})
    navigation.dispatch(navigateAction)
  }

  const onDelete = (index) => {
    console.log('deleting', index)
    navigation.setParams('DeleteIndex', index)
    console.log("___________",navigation.setParams('DeleteIndex', index))
    
  }
  const onEdit = (index) => {
    console.log('editing', index)
    // navigation.setParams({EditIndex: index})
    const navigateAction = NavigationActions.navigate({routeName: EDIT_SCREEN, editIndex: index})
    navigation.dispatch(navigateAction)
  }
  
  return (
    <Dashboard 
      goToScreen={goToScreen}
      onDelete={onDelete}
      onEdit={onEdit}
      data={data}
      />
  );
};

export default DashboardScreen;
