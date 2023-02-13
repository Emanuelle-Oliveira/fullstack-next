import {withTemplateConfig} from '@src/services/template/withTemplateConfig';
export {default} from '@src/screens/HomeScreen/HomeScreen';

// Para importar as configurações do template-config
export async function getStaticProps() {
  return {
    // Para passar o template config via props para todas as páginas
    // Decorator
    // withTemplateConfig -> function
    props: await withTemplateConfig({})
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