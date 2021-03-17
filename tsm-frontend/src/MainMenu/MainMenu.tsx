import React from 'react';
import { Menu, MenuRow, Button, IconWrapper, Title, ButtonWrapper } from './MainMenu.styled';
import infoIcon from './../svg-icons/information.svg'
import maintenanceIcon from './../svg-icons/maintenance.svg';
import salesIcon from './../svg-icons/line-chart-mono.svg';
import financialIcon from './../svg-icons/money-mono.svg';

const MainMenu = () => {
  return (
    <Menu>
      <MenuRow>
        <ButtonWrapper>
          <Button>
            <IconWrapper src={salesIcon} alt='Sales Icon'/>
            <Title>Sales Area</Title>
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button>
            <IconWrapper src={financialIcon} alt='Financial Icon'/>
            <Title>Financial Summary</Title>
          </Button>
        </ButtonWrapper>
      </MenuRow>
      <MenuRow>
        <ButtonWrapper>
          <Button>
            <IconWrapper src={maintenanceIcon} alt='Maintenance Icon'/>
            <Title> Maintenance </Title>
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button>
            <IconWrapper src={infoIcon} alt='Information Icon'/>
            <Title>Informations</Title>
          </Button>
        </ButtonWrapper>
      </MenuRow>
    </Menu>
  );
}

export default MainMenu;
