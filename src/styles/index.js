import draper from 'Draper';

export const colors = {
  silver: '#F3F3F3',
  gray: '#5a5a5a',
  grayLight: '#dbdbdb',
  grayBorder: '#DBDBDB',
  grayDark: '#24292e',
  black: '#000000',
  yellow: '#FFC000',
  orange: '#FB8134',
  opBlack: 'rgba(0, 0, 0, 0.6)',
  opWhite: 'rgba(255, 255, 255, 0.9)',
  transparent: 'rgba(255, 255, 255, 0)',
  opGray: 'rgba(0,0,0,0.4)',
  lightGray: '#B5B5B5',
  redError: '#d0021b',
};

export default {
  ...draper({
    clrs: colors,
    borderWidth: 1,
  }),
};