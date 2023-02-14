import Box from '@src/components/Box/Box';
import Background from '@src/screens/HomeScreen/patterns/Background/Background';
import Menu from '@src/screens/HomeScreen/patterns/Menu/Menu';
import Feed from '@src/screens/HomeScreen/patterns/Feed/Feed';
import Footer from '@src/screens/HomeScreen/patterns/Footer/Footer';
import {useTheme} from '@src/theme/ThemeProvider';
import templatePageHOC from '@src/services/template/templatePageHOC';
import type {Post} from '@src/services/posts/postsService';
// É necessário uma lib para importar arquivos yml
//import templateConfig from '@src/template-config.yml';

interface HomeScreenProps {
  posts: Post[];
}

function HomeScreen(props: HomeScreenProps) {
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
        {/* Passa os posts para o feed que vieram do index.tsx */}
        <Feed.Posts posts={props.posts}/>
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