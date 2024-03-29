export const theme = {
  colors: {
    white: '#fafafa',
    black: '#212112',
    accent: 'blue',
    red: 'red',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  transition: (prop = '') => `${prop} 250ms linear`,
  spacing: value => `${value * 4}px`,
};
