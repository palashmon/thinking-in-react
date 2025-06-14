import React from 'react';
import { useLocation } from 'react-router-dom';

const NoMatch = () => {
  const location = useLocation();
  return (
    <div>
      <h3>
        No match found for <code>{location.pathname}</code>
      </h3>
    </div>
  );
};

export default NoMatch;
