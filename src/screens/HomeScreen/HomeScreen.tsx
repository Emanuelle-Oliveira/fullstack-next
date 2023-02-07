import Box from '@src/components/Box/Box';
import Background from '@src/screens/HomeScreen/patterns/Background/Background';
import Menu from '@src/screens/HomeScreen/patterns/Menu/Menu';
import Feed from '@src/screens/HomeScreen/patterns/Feed/Feed';
import Text from '@src/components/Text/Text';
import Footer from '@src/screens/HomeScreen/patterns/Footer/Footer';
import {useTheme} from '@src/theme/ThemeProvider';

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.positive.x100,
        flex: 1,
        alignItems: 'center'
      }}
    >
      <Background/>
      <Menu/>
      <Feed>
        <Feed.Header/>
        <Text tag="h2" variant="display1">
          Últimas Atualizações
        </Text>
        <Feed.Posts/>
      </Feed>
      <Footer/>
    </Box>
  );
}