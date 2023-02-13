import Box from '@src/components/Box/Box';
import Background from '@src/screens/HomeScreen/patterns/Background/Background';
import Menu from '@src/screens/HomeScreen/patterns/Menu/Menu';
import Feed from '@src/screens/HomeScreen/patterns/Feed/Feed';
import Text from '@src/components/Text/Text';
import Footer from '@src/screens/HomeScreen/patterns/Footer/Footer';
import {useTheme} from '@src/theme/ThemeProvider';
import Link from '@src/components/Link/Link';
import templatePageHOC from '@src/services/template/templatePageHOC';
// É necessário uma lib para importar arquivos yml
//import templateConfig from '@src/template-config.yml';

function HomeScreen(props) {
  const theme = useTheme();
  //console.log(props);
  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        flex: 1,
        alignItems: 'center'
      }}
    >

      {/*<Link href="https://google.com">
        Vá para o google
      </Link>

      <Link href="/about">
        Vá para o sobre
      </Link>*/}

      <Background/>
      <Menu/>
      <Feed>
        <Feed.Header/>
      </Feed>
      {/*
      <Feed>
        <Feed.Header/>
        <Text tag="h2" variant="display1">
          Últimas Atualizações
        </Text>
        <Feed.Posts/>
      </Feed>*/}
      <Footer/>
    </Box>
  );
}

// High Order Component
// "Decora" um component
export default templatePageHOC(HomeScreen, {
  title: 'Home'
});