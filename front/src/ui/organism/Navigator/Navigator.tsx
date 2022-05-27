import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import NavigatorProps from './Navigator.types';

const Navigator = ({ to }: NavigatorProps) => {
  const location = useLocation();
  return <Navigate to={to} replace state={{ location }} />;
};

export default Navigator;
