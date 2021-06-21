import React from 'react';
import { Link } from 'react-router-dom';
import { APP_PAGE } from '../../../App';

const MaintenanceArea = () => {
  return (
    <div>
      <div>
        <Link to={APP_PAGE.HOME}>Home</Link>
      </div>
      Maintenance Area
    </div>
  );
}

export default MaintenanceArea;
