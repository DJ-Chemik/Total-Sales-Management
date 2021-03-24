import React from 'react';
import { AppContainer } from './App.styled';
import MainMenu from './MainMenu/MainMenu';
import Title from './Title/Title';

function App() {
  return (
    <AppContainer>
      <Title />
      <MainMenu/>
    </AppContainer>
  );
}

export default App;
