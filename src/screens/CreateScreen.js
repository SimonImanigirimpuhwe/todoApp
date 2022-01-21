import React, {useState} from 'react';

import {Create} from '../components/Create';

const CreateScreen = () => {
  const [todo, setTodo] = useState('')
  
  const handleSubmit = () => {
    console.log("submitted", todo)
  }
  const handleChange = (value) => {
    setTodo(value); 
  };
  return <Create handleSubmit={handleSubmit} handleChange={handleChange}/>;
};

export default CreateScreen;
