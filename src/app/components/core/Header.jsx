import React from 'react';
import { routes } from '../../routes';
import CustomLink from '../utils/CustomLink';

const Footer = () => {
  return (
    <div>
      {routes.map((route => <CustomLink path={route.path} exact={route.exact} label={route.label} />))}
    </div>
  );
}

export default Footer;