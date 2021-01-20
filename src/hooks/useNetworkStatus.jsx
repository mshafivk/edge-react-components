import { useState, useEffect } from 'react';

const updateOnlineStatus = () => {
  const status =
    typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
      ? navigator.onLine
      : true;
  return status;
};

const useNetworkStatus = () => {
  const [isOnline, setOnlineStatus] = useState(() => updateOnlineStatus());

  const onNetworkStatusChange = () => setOnlineStatus(updateOnlineStatus());

  useEffect(() => {
    window.addEventListener('online', onNetworkStatusChange);
    window.addEventListener('offline', onNetworkStatusChange);

    return () => {
      window.removeEventListener('online', onNetworkStatusChange);
      window.removeEventListener('offline', onNetworkStatusChange);
    };
  }, []);

  return isOnline;
};

export default useNetworkStatus;
