import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import { CREATE_SCREEN } from '../../constants/routeNames';
import { Button } from '../Button';
import styles from './styles';
import { Card } from '../Card';

const Dashboard = ({goToScreen, onDelete, onEdit, data}) => {
  return (
    <ScrollView style={styles.container}>
      {data.map((item, i) => (
        <Card 
        key={i}
        onDelete={() =>onDelete(item.id)} 
        onEdit={() => onEdit(item.id)} 
        title={item.id} 
        body={item.title}
        />
      ))}
      <Button title={"Create"} onPress={() => goToScreen(CREATE_SCREEN)}/>
    </ScrollView>
  );
};

export default Dashboard;
