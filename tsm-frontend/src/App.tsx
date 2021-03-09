import React from 'react';
import infoIcon from './svg-icons/information.svg'
import maintenanceIcon from './svg-icons/maintenance.svg';
import salesIcon from './svg-icons/line-chart-mono.svg';
import financialIcon from './svg-icons/money-mono.svg';
import './App.css';
import { Button, Menu, MenuRow, Title } from './App.styled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Menu>
        <MenuRow>
          <Button>
            <img src={salesIcon} className="App-logo" alt="logo" />
            <Title>Sales Area</Title>
          </Button>
          <Button>
            <img src={financialIcon} className="App-logo" alt="logo" />
            <Title>Financial Summary</Title>
          </Button>
        </MenuRow>
        <MenuRow>
          <Button>
            <img src={maintenanceIcon} className="App-logo" alt="logo" />
            <Title> Maintenance </Title>
          </Button>
          <Button>
            <img src={infoIcon} className="App-logo" alt="logo" />
            <Title>Informations</Title>
          </Button>
        </MenuRow>
      </Menu>
      </header>
    </div>
  );
}

export default App;
