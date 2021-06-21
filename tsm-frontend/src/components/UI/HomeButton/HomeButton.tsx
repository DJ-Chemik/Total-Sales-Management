import React from 'react'
import { Link } from 'react-router-dom'
import { APP_PAGE } from '../../../App'
import homeIcon from './../../../svg-icons/diamond-mono.svg';
import { Button, HomeIconWrapper } from './HomeButton.styled';

const HomeButton = () => {
  return (
    <div>
      <Link to={APP_PAGE.HOME}>
        <Button>
          <HomeIconWrapper src={homeIcon} alt='Strona Główna' />
        </Button>
      </Link>
    </div>
  )
}

export default HomeButton
