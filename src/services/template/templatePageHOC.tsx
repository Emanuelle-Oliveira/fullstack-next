import Head from 'next/head';
import type {TemplateConfig} from '@src/services/template/withTemplateConfig';
import {TemplateConfigProvider} from '@src/services/template/templateConfigContext';

interface TemplatePageHOCProps {
  title?: string;
}
// Para setar o title de todas as páginas
export default function templatePageHOC(
  // O componente vai ser do tipo de uma função com qualquer props
  // retornando um JSX
  Component: (props: any) => JSX.Element,
  templatePageHOCProps : TemplatePageHOCProps = {}
) {
  // HOC não pode devolver um jsx diretamente como <div>oi</div>
  return function WrappedComponent(props : {templateConfig: TemplateConfig}) {
    return (
      <>
        <Head>
          <title>
            {templatePageHOCProps?.title
              // Caso seja passado um title:
              ? `${templatePageHOCProps.title} | ${props.templateConfig.site.title}`
              // Caso não
              : props.templateConfig.site.title
            }
          </title>
        </Head>
        {/* Para que seja possível acessar o template config
            é necessário envolver o component com o provider
        */}
        <TemplateConfigProvider value={props.templateConfig}>
          <Component {...props}/>
        </TemplateConfigProvider>
      </>
    );
  };
}