import { useLocation } from 'react-router-dom';

export const usePathname = (): string => {
  const currentLocation = useLocation();
  return currentLocation.pathname;
};
