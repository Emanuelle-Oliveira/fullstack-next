import ButtonBase, {ButtonBaseProps} from '@src/components/Button/ButtonBase';
import React from 'react';
import {ColorVariant, colorVariantBy, Variant} from '@src/components/Button/colorVariantBy';
import {useTheme} from '@src/theme/ThemeProvider';
import {ButtonSize, buttonSize} from '@src/components/Button/buttonSize';

interface ButtonProps extends ButtonBaseProps{
  fullWidth?: boolean;
  children: React.ReactNode;
  colorVariant?: ColorVariant;
  variant?: Variant;
  size?: ButtonSize;
}

export default function Button({ styleSheet, fullWidth, children, colorVariant, variant, size } : ButtonProps) {
  const theme = useTheme();
  return (
    <ButtonBase
      styleSheet={{
        alignSelf: 'flex-start',
        ...colorVariantBy(theme, colorVariant, variant),
        ...buttonSize[size],
        ...(fullWidth && {
          alignSelf: 'initial',
        }),
        ...styleSheet
      }}
    >
      {children}
    </ButtonBase>
  );
}

Button.defaultProps = {
  fullWidth: false,
  size: 'md',
  variant: 'contained',
  colorVariant: 'primary',
};

Button.Base = ButtonBase;