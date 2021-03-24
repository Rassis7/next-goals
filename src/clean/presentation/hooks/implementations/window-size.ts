import { useEffect, useState } from 'react';
import { WindowSize } from '../types/window-size';

const getCssSize = (width: number) => {
  switch (true) {
    case width <= 540:
      return 'SM';
    case width > 540 && width <= 720:
      return 'MD';
    case width > 720 && width <= 960:
      return 'LG';
    case width > 960:
      return 'XLG';
    default:
      return 'ESM'
  }
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({ width: 0, height: 0, cssSize: 'ESM' });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        cssSize: getCssSize(window.innerWidth),
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
