import {withTemplateConfig} from '@src/services/template/withTemplateConfig';
import PostsService from '@src/services/posts/postsService';

export {default} from '@src/screens/HomeScreen/HomeScreen';

// Para importar as configurações do template-config
export async function getStaticProps() {
  // Buscar todoas os posts do arquivo markdown
  const posts = await PostsService().getAll();
  //console.log(posts);

  return {
    // Para passar o template config via props para todas as páginas
    // Decorator
    // withTemplateConfig -> function
    props: await withTemplateConfig({
      posts
    })
  };
}

/*import Box from '@src/components/Box';
import theme from '@src/theme/theme';

export default function HomeScreen() {
  return (
    <Box
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        backgroundColor: {
          xs: 'red',
          sm: 'yellow',
          md: 'blue',
        }
      }}
      tag="main"
    >
      Oi
    </Box>
  );
}*/