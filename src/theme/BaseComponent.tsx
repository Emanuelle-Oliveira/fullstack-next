import React from 'react';
import styled from 'styled-components';
import {StyleSheet} from '@src/theme/styleSheet';
import {parseStyleSheet} from '@displaykit/responsive_styles';

// Para aplicar o style sheet com objects
// Recebe e repassa
interface StyledBaseComponent {
  styleSheet?: StyleSheet
}

const StyledBaseComponent = styled.div<StyledBaseComponent>`
  ${ ({ styleSheet }) => parseStyleSheet(styleSheet) }
`;

export const BaseComponent = (props) => {
  return (
    <StyledBaseComponent {...props} />
  );
};

BaseComponent.defaultProps = {
  styleSheet: {}
};