// Lib do node
import path from 'path';
import readYamlFile from 'read-yaml-file';

export interface TemplateConfig {
  site?: {
    title?: string;
    description?: string;
  }
  personal?: {
    name?: string;
    avatar?: string;
    socialNetworks?: {
      youtube?: string;
      github?: string;
    }
  }
}

// Adiciona o template config nas props recebidas
export async function withTemplateConfig(props = {}) {
  const PATH_TEMPLATE_CONFIG = path.resolve('.', 'template-config.yml');
  const templateConfig = await readYamlFile<TemplateConfig>(PATH_TEMPLATE_CONFIG);
  //console.log(templateConfig);
  return {
    templateConfig,
    ...props
  };
}