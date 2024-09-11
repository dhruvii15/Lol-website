import React from 'react';
import { useLoading } from './LoadingContext';
import Loading from '../Component/Loading';

const LoadingIndicator = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return <Loading />;
};

export default LoadingIndicator;