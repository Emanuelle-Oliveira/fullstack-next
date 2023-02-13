import React from 'react';
import type {TemplateConfig} from '@src/services/template/withTemplateConfig';

// Cria um contexto
const TemplateConfigContext = React.createContext<TemplateConfig>({});

// Interface para as props
interface TemplateConfigProviderProps {
  children: React.ReactNode;
  value: TemplateConfig;
}

// Provedor
export function TemplateConfigProvider({ value, children } : TemplateConfigProviderProps) {
  return (
    // Passa o children e o value (template config)
    // para o provider do contexto
    <TemplateConfigContext.Provider value={value}>
      {children}
    </TemplateConfigContext.Provider>
  );
}

// Para exportar o template config
// Utilizando contexto
export const useTemplateConfig = () => {
  return React.useContext(TemplateConfigContext);
};