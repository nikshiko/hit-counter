'use client';

import React from 'react';

function Censored({ children }) {
  const [isCensored, setIsCensored] =
    React.useState(true);
    function onClick() {
        setIsCensored(!isCensored);
      }
  return (
    <button
      className={
        isCensored ? 'censored' : undefined
      }
      onClick={onClick  }
    >
      {children}
    </button>
  );
}

export default Censored;