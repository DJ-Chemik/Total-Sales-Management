import React from 'react';
import { Link } from 'react-router-dom';
import { APP_PAGE } from '../../../App';

const FinancialSummaryArea = () => {
  return (
    <div>
      <div>
        <Link to={APP_PAGE.HOME}>Home</Link>
      </div>
      Financial Summary Area
    </div>
  );
}

export default FinancialSummaryArea;
