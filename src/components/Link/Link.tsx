import React from 'react';
import NextLink from 'next/link';
import Text from '@src/components/Text/Text';
import {StyleSheet} from '@src/theme/styleSheet';
import {ThemeTypographyVariants} from '@src/theme/theme';
import {useTheme} from '@src/theme/ThemeProvider';

/*
* O link do next faz com que a página funcione como uma SPA
* */

interface LinkProps {
  href: string;
  target?: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants;
  colorVariant?: 'primary' | 'accent' | 'neutral' | 'success' | 'warnig' | 'negative';
  colorVariantEnabled?: boolean;
}

// eslint-disable-next-line react/display-name
const Link = React.forwardRef(({ href, children, colorVariant, colorVariantEnabled, styleSheet, ...props } : LinkProps, ref)  => {
  const isExternalLink = href.startsWith('http');

  const theme = useTheme();
  const currentColorSet = {
    color: theme.colors[colorVariant].x500,
    hover: {
      color: theme.colors[colorVariant].x400,
    },
    focus: {
      color: theme.colors[colorVariant].x600,
    }
  };

  const linkProps = {
    tag: 'a',
    ref,
    href,
    children,
    styleSheet: {
      textDecoration: 'none',
      ...colorVariantEnabled && {
        color: currentColorSet.color,
      },
      hover: {
        ...styleSheet?.hover,
        ...colorVariantEnabled && {
          color: currentColorSet.hover.color,
        },
      },
      focus: {
        ...styleSheet?.focus,
        ...colorVariantEnabled && {
          color: currentColorSet.focus.color,
        },
      },
      ...styleSheet
    },
    ...props,
  };

  // Para links externos
  if(isExternalLink) {
    return (
      <Text {...linkProps}/>
    );
  }

  // Para links internos
  // Tentar usar Next Link
  return (
    <Text {...linkProps}/>
  );
});

Link.defaultProps = {
  colorVariant: 'primary',
  colorVariantEnabled: true
};

export default Link;