import React from 'react';
import infoIcon from './svg-icons/information.svg'
import maintenanceIcon from './svg-icons/maintenance.svg';
import salesIcon from './svg-icons/line-chart-mono.svg';
import financialIcon from './svg-icons/money-mono.svg';
import { AppContainer, Button, IconWrapper, Menu, MenuRow, Title } from './App.styled';

function App() {
  return (
    <AppContainer>
        <Menu>
          <MenuRow>
            <Button>
              <IconWrapper src={salesIcon} alt='Sales Icon'/>
              <Title>Sales Area</Title>
            </Button>
            <Button>
              <IconWrapper src={financialIcon} alt='Financial Icon'/>
              <Title>Financial Summary</Title>
            </Button>
          </MenuRow>
          <MenuRow>
            <Button>
              <IconWrapper src={maintenanceIcon} alt='Maintenance Icon'/>
              <Title> Maintenance </Title>
            </Button>
            <Button>
              <IconWrapper src={infoIcon} alt='Information Icon'/>
              <Title>Informations</Title>
            </Button>
          </MenuRow>
        </Menu>
    </AppContainer>
  );
}

export default App;
