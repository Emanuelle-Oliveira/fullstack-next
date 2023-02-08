import Text from '@src/components/Text/Text';
import Box from '@src/components/Box/Box';
import React from 'react';
import Icon from '@src/components/Icon/Icon';
import Image from '@src/components/Image/Image';
import Link from '@src/components/Link/Link';
import ButtonBase from '@src/components/Button/ButtonBase';
import Button from '@src/components/Button/Button';
import {useTheme} from '@src/theme/ThemeProvider';

interface FeedProps {
  children: React.ReactNode
}

export default function Feed({ children } : FeedProps) {
  const theme = useTheme();
  return(
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        marginTop: '-228px',
        width: '100%',
        maxWidth: '683px',
        borderRadius: '8px',
        paddingVertical: '40px',
        paddingHorizontal: '32px',
      }}
    >
      {children}
    </Box>
  );
}

Feed.Header = Header;

function Header() {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        paddingBottom: '24px',
        marginBottom: '24px',
      }}
    >
      {/*<Button>
        Olá .....
      </Button>*/}
      <Box
        styleSheet={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '16px'
        }}
      >
        <Image
          styleSheet={{
            width: {xs: '100px', md: '128px'},
            height: {xs: '100px', md: '128px'},
            borderRadius: '100%'
          }}
          src="https://github.com/Emanuelle-Oliveira.png"
          alt="Imagem de Perfil"
        />

        <Box
          styleSheet={{
            justifyContent: 'space-between'
          }}
        >
          {/* Para desktop */}
          <Box
            styleSheet={{
              flex: '1',
              justifyContent: 'space-between',
              display: {xs: 'none', md: 'flex'}
            }}
          >
            <Button fullWidth colorVariant="primary" size="xl" href="/"> Olá pessoas </Button>
            <Button fullWidth colorVariant="neutral" size="xl" href="/"> Oi galera </Button>
          </Box>
          {/* Para mobile*/}
          <Box
            styleSheet={{
              flex: '1',
              justifyContent: 'space-between',
              display: {xs: 'flex', md: 'none'}
            }}
          >
            <Button fullWidth colorVariant="primary" size="xs" href="/"> Olá pessoas </Button>
            <Button fullWidth colorVariant="neutral" size="xs" href="/"> Oi galera </Button>
          </Box>
        </Box>
      </Box>

      <ButtonBase> {/*href="https://google.com">*/}
        <Text tag="h1" variant="heading4">
          Emanuelle Oliveira
        </Text>
      </ButtonBase>

      {/*}  <Link href="https://youtube.com">
        <Icon name="youtube"/>
      </Link>

      <Icon name="twitter"/>
      <Icon name="instagram"/>
      <Icon name="github"/>
      <Text>
        Feed Header
      </Text>*/}
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