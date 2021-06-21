import React from 'react';
import { Link } from 'react-router-dom';
import { APP_PAGE } from '../App';

const SalesArea = () => {
  return (
    <div>
      <div>
        <Link to={APP_PAGE.HOME}>Home</Link>
      </div>
      Sales Area
    </div>
  );
}

export default SalesArea;
