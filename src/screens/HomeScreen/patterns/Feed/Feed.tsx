import Text from '@src/components/Text/Text';
import Box from '@src/components/Box/Box';
import React from 'react';
import Icon from '@src/components/Icon/Icon';
import Image from '@src/components/Image/Image';

interface FeedProps {
  children: React.ReactNode
}

export default function Feed({ children } : FeedProps) {
  return(
    <Box>
      <Text>
        Feed base
      </Text>
      {children}
    </Box>
  );
}

Feed.Header = Header;

function Header() {
  return (
    <Box>
      <Image
        styleSheet={{
          width: '128px',
          height: '128px',
          borderRadius: '100%'
        }}
        src="https://github.com/Emanuelle-Oliveira.png"
        alt="Imagem de Perfil"
      />
      <Icon name="youtube"/>
      <Icon name="twitter"/>
      <Icon name="instagram"/>
      <Icon name="github"/>
      <Text>
        Feed Header
      </Text>
    </Box>
  );
}

Feed.Posts = Posts;

function Posts() {
  return (
    <Box>
      <Text>
        Feed Posts
      </Text>
    </Box>
  );
}