import React, { useEffect, useState } from 'react';
import { Container, InputLabel, InputText, Input, Select } from './styles';

import { category } from '../../data/category';


function InputArea() {

  
  let categoriesKeys = Object.keys(category);

  useEffect(()=> {
    console.log(Object.keys(category))
    console.log(category)
  }, [])

  return (
    <Container>
        <InputLabel>
          <InputText>Data</InputText>
          <Input type="date"/>
        </InputLabel>
        <InputLabel>
          <InputText>Category</InputText>
          <Select>
            {categoriesKeys.map((key, index) =>(
              <option key={index} value={key}>{category[key].title}</option>
            ))}
          </Select>
        </InputLabel>
        <InputLabel>
          <InputText>Title</InputText>
          <Input type="text"/>
        </InputLabel>
        <InputLabel>
          <InputText>Cost</InputText>
          <Input type="text"/>
        </InputLabel>
    </Container>
  )
}

export default InputArea