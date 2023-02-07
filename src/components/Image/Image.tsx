import {BaseComponent} from '@src/theme/BaseComponent';
import {StyleSheet} from '@src/theme/styleSheet';

interface ImageProps {
  styleSheet: StyleSheet
  src: string,
  alt: string
}

export default function Image({ src, alt, ...props } : ImageProps) {
  return(
    <BaseComponent
      as="img"
      src={src}
      alt={alt}
      {...props}
    />
  );
}