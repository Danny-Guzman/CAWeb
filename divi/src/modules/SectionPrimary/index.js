
// Local dependencies.
import metadata from './module.json';
import { ModuleEdit } from './edit.jsx';
import { placeholderContent } from './placeholder-content.js';
import defaultAttrs from './module-default-render-attributes.json';
import { conversionOutline } from './conversion-outline.ts';
import { SettingsContent } from './Settings/content.jsx';
import { SettingsDesign } from './Settings/design.jsx';

export const CAWebModuleSectionPrimaryMetadata = metadata;

export const CAWebModuleSectionPrimary = {
  placeholderContent,
  conversionOutline,
  renderers: {
    edit: ModuleEdit,
  },
  defaultAttrs,
  settings: {
    content: SettingsContent,
    design: SettingsDesign,
  }

};
