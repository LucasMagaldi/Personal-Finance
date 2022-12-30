import React, { useEffect, useState } from 'react';
import { Container, Header, HeaderText, Body } from './App.styles';

import InputArea from './components/InputArea/InputArea';
  

function App() {
  return (
    <Container>
      <Header>
        <HeaderText>Here</HeaderText>
      </Header>
      <Body>
        <InputArea/>
      </Body>
    </Container>
  );
}

export default App;
