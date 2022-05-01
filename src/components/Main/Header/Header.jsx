import React from 'react';
import Container from '@material-ui/core/Container';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

const Header = () => (
  <>
    <Navigation />
    <MobileNavigation />
  </>
);

export default Header;
