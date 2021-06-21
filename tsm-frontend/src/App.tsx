import React from 'react';
import { AppContainer } from './App.styled';
import MainMenu from './components/Application/MainMenu/MainMenu';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import FinancialSummaryArea from './components/Application/FinancialSummaryArea/FinancialSummaryArea';
import MaintenanceArea from './components/Application/MaintenanceArea/MaintenanceArea';
import SalesArea from './components/Application/SalesArea/SalesArea';
import InformationArea from './components/Application/InformationArea/InformationArea';

export enum APP_PAGE {
  HOME = '/',
  FINANCIAL = '/financial',
  MAINTENANCE = '/maintenance',
  SALES = '/sales',
  INFO = '/info',
}

function App() {
  return (
    <Router>
      <AppContainer>
        <Route exact path={APP_PAGE.HOME} component={MainMenu} />
        <Route path={APP_PAGE.FINANCIAL} component={FinancialSummaryArea} />
        <Route path={APP_PAGE.MAINTENANCE} component={MaintenanceArea} />
        <Route path={APP_PAGE.SALES} component={SalesArea} />
        <Route path={APP_PAGE.INFO} component={InformationArea} />
      </AppContainer>
    </Router>
  );
}

export default App;
