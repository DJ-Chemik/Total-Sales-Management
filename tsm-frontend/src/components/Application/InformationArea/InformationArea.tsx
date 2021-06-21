import React from 'react';
import { Link } from 'react-router-dom';
import { APP_PAGE } from '../../../App';

const InformationArea = () => {
  return (
    <div>
      <div>
        <Link to={APP_PAGE.HOME}>Home</Link>
      </div>
      Information Area
    </div>
  );
}

export default InformationArea;
