import React from "react";
import './LoadingSpinner.scss';

interface LoadingSpinnerProps {
  active: boolean;
  size?: 'xxxl' | 'xxl' | 'xs' | 'xl';
  className?: string;
  invert?: boolean;
}

const LoadingSpinner = (props:LoadingSpinnerProps) => {
  const { active, size = 'xs', className, invert } = props;

  return <div className={`LoadingSpinner ${size} ${active ? 'active' : ''} ${invert ? 'invert' : ''} ${className}`} />;
};

export default LoadingSpinner;
