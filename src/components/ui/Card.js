import React from 'react';

export const Card = ({ children, className }) => (
  <div className={`bg-white shadow-sm rounded-lg border border-stone-200 ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);