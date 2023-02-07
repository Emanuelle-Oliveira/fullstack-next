import {typography} from '@src/theme/defaults/typography';
import { colors } from '@src/theme/defaults/colors';

const theme = {
  typography,
  colors,
};

export type Theme = typeof theme;
export type ThemeTypographyVariants = keyof typeof typography.variants;

export default theme;