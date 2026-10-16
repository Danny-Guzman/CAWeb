
// Local dependencies.
import metadata from './module.json';
import { ModuleEdit } from './edit.jsx';
import { placeholderContent } from './placeholder-content.js';
import defaultAttrs from './module-default-render-attributes.json';
import { conversionOutline } from './conversion-outline.ts';
import { SettingsContent } from './Settings/content.jsx';

export const CAWebModuleFullwidthServiceTilesMetadata = metadata;

export const CAWebModuleFullwidthServiceTiles = {
  placeholderContent,
  conversionOutline,
  defaultAttrs,
  renderers: {
    edit: ModuleEdit,
  },
  settings: {
    content: SettingsContent,
  },
};
