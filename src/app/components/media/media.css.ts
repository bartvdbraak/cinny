import { style } from '@vanilla-extract/css';
import { DefaultReset } from 'folds';

export const Image = style([
  DefaultReset,
  {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
]);
