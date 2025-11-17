import React from 'react';
import { CVData, TemplateConfig } from '../../types/cv';
import { ModernTemplate } from './ModernTemplate';
import { ClassicTemplate } from './ClassicTemplate';

interface Props {
  data: CVData;
  config: TemplateConfig;
}

export const CVTemplate: React.FC<Props> = ({ data, config }) => {
  switch (config.type) {
    case 'modern':
    case 'creative':
    case 'minimal':
    case 'professional':
      return <ModernTemplate data={data} config={config} />;
    case 'classic':
      return <ClassicTemplate data={data} config={config} />;
    default:
      return <ModernTemplate data={data} config={config} />;
  }
};
