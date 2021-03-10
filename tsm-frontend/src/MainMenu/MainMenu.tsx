import React from 'react';
import { Menu, MenuRow, Button, IconWrapper, Title } from './MainMenu.styled';
import infoIcon from './../svg-icons/information.svg'
import maintenanceIcon from './../svg-icons/maintenance.svg';
import salesIcon from './../svg-icons/line-chart-mono.svg';
import financialIcon from './../svg-icons/money-mono.svg';

const MainMenu = () => {
  return (
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
  );
}

export default MainMenu;
