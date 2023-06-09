import React, { useState } from 'react';

const UseAppBadge = () => {
  const [counter, setCounter] = useState(1);
  const setbadge = () => {
    setCounter(counter + 1);
    if (navigator.setAppBadge) {
      navigator.setAppBadge(counter);
    } else if (navigator.setClientBadge) {
      navigator.setClientBadge();
    }
  };

  const clearBadge = () => {
    setCounter(1);
    if (navigator.clearAppBadge) {
      navigator.clearAppBadge();
    } else if (navigator.clearClientBadge) {
      navigator.clearClientBadge();
    }
  };

  return [setbadge, clearBadge];
};

export default UseAppBadge;
