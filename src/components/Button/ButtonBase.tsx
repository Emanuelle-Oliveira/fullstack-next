import {ThemeTypographyVariants} from '@src/theme/theme';
import styled from 'styled-components';
import Text from '@src/components/Text/Text';
import React, {useRef} from 'react';
import {useRipple} from 'react-use-ripple';
import {StyleSheet} from '@src/theme/styleSheet';
import {useRouter} from 'next/router';

const StyledButton = styled(Text)<any>`
`;

export interface ButtonBaseProps {
  href?: string;
  children: React.ReactNode;
  textVariant?: ThemeTypographyVariants;
  styleSheet?: StyleSheet;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonBase({ href, children, textVariant, styleSheet, ...props } : ButtonBaseProps) {
  // Efeito ripple no botão
  const ref = React.useRef();
  useRipple(ref, {
    animationLength: 600,
    rippleColor: 'rgba(255,255,255,0.7)'
  });

  const router = useRouter();

  const isLink = Boolean(href);
  const Tag = isLink ? 'a' : 'button';

  return (
    <StyledButton
      ref={ref}
      tag={Tag}
      href={href}
      styleSheet={{
        backgroundColor: 'transparent',
        clor: 'inherit',
        outline: '0',
        cursor: 'pointer',
        textDecoration: 'none',
        border: '0',
        ...styleSheet
      }}
      onClick={(event) => {
        isLink && event.preventDefault();
        isLink && router.push(href);
        !isLink && props.onClick && props.onClick(event);
      }}
      {...props}
    >
      {children}
    </StyledButton>
  );
}