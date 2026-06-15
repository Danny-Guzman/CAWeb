// Local dependencies.
import metadata from './module.json';
import { ModuleEdit } from './edit.jsx';
import { placeholderContent } from './placeholder-content.js';
import { conversionOutline } from './conversion-outline.ts';
// import { SettingsContent } from './Settings/content';

export const CAWebModuleCardMetadata = metadata;

export const CAWebModuleCard = {
  placeholderContent,
  conversionOutline,
  renderers: {
    edit: ModuleEdit,
  },
  settings: {
  }

};
