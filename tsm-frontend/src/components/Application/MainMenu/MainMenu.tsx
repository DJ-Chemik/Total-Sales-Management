import React from 'react';
import { Menu, MenuRow, Button, IconWrapper, Title, ButtonWrapper } from './MainMenu.styled';
import infoIcon from './../../../svg-icons/information.svg'
import maintenanceIcon from './../../../svg-icons/maintenance.svg';
import salesIcon from './../../../svg-icons/line-chart-mono.svg';
import financialIcon from './../../../svg-icons/money-mono.svg';
import { Link } from 'react-router-dom';
import { APP_PAGE } from '../../../App';

const MainMenu = () => {
  return (
    <Menu>
      <MenuRow>
        <Link to={APP_PAGE.SALES}>
          <ButtonWrapper>
            <Button>
              <IconWrapper src={salesIcon} alt='Sales Icon' />
              <Title>Sprzedaż</Title>
            </Button>
          </ButtonWrapper>
        </Link>
        <Link to={APP_PAGE.FINANCIAL}>
          <ButtonWrapper>
            <Button>
              <IconWrapper src={financialIcon} alt='Financial Icon' />
              <Title>Finanse</Title>
            </Button>
          </ButtonWrapper>
        </Link>
      </MenuRow>
      <MenuRow>
        <Link to={APP_PAGE.MAINTENANCE}>
          <ButtonWrapper>
            <Button>
              <IconWrapper src={maintenanceIcon} alt='Maintenance Icon' />
              <Title>Zarządzanie</Title>
            </Button>
          </ButtonWrapper>
        </Link>
        <Link to={APP_PAGE.INFO}>
          <ButtonWrapper>
            <Button>
              <IconWrapper src={infoIcon} alt='Information Icon' />
              <Title>Informacje</Title>
            </Button>
          </ButtonWrapper>
        </Link>
      </MenuRow>
    </Menu>
  );
}

export default MainMenu;
