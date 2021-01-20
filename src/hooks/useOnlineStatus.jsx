import { useState, useEffect } from 'react';

const updateOnlineStatus = () => {
  const status =
    typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
      ? navigator.onLine
      : true;
  return status;
};

const useOnlineStatus = () => {
  const [isOnline, setOnlineStatus] = useState(updateOnlineStatus);

  useEffect(() => {
    window.addEventListener('online', setOnlineStatus(updateOnlineStatus()));
    window.addEventListener('offline', setOnlineStatus(updateOnlineStatus()));

    return () => {
      window.removeEventListener(
        'online',
        setOnlineStatus(updateOnlineStatus()),
      );
      window.removeEventListener(
        'offline',
        setOnlineStatus(updateOnlineStatus()),
      );
    };
  }, []);

  return isOnline;
};

export default useOnlineStatus;
