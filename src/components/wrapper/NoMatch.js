import React from 'react';

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match found for <code>{location.pathname}</code>
    </h3>
  </div>
);

export default NoMatch;
