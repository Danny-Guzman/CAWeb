// WordPress dependencies.
// import { __ } from '@wordpress/i18n';


// Local dependencies.
import metadata from './module.json';
import { ModuleEdit } from './edit.jsx';
import { placeholderContent } from './placeholder-content.js';
import { conversionOutline } from './conversion-outline.ts';
import defaultAttrs from './module-default-render-attributes.json';
import { SettingsContent } from './Settings/content.jsx';

export const CAWebModuleGithubMetadata = metadata;

export const CAWebModuleGithub = {
  placeholderContent,
  conversionOutline,
  defaultAttrs,
  renderers: {
    edit: ModuleEdit,
  },
  settings: {
    content: SettingsContent
  }
};
