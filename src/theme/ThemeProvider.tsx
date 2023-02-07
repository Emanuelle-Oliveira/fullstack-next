import {
  ThemeProvider as StyleThemeProvider,
  useTheme as useThemeStyled
} from 'styled-components';
import theme, { Theme } from '@src/theme/theme';

// Provê o tema
export function useTheme() : Theme {
  return useThemeStyled() as unknown as any;
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export default function ThemeProvider({ children } : ThemeProviderProps){
  return (
    <StyleThemeProvider theme={theme}>
      {children}
    </StyleThemeProvider>
  );
}