// WordPress dependencies.
import { __ } from '@wordpress/i18n';

// Local dependencies.
import standardMetadata from '../SectionPrimary/module.json';
import fullwidthMetadata from './module.json';

// Fullwidth Modules use everything from the standard modules
import { ModuleEdit } from '../SectionPrimary/edit.jsx';
import { placeholderContent } from '../SectionPrimary/placeholder-content.js';
import { conversionOutline } from '../SectionPrimary/conversion-outline.ts';
import { SettingsContent } from '../SectionPrimary/Settings/content.jsx';

// Merged metadata 
export const CAWebModuleFullwidthSectionPrimaryMetadata = {
  ...standardMetadata, 
  ...fullwidthMetadata
};

export const CAWebModuleFullwidthSectionPrimary = {
  placeholderContent,
  conversionOutline,
  renderers: {
    edit: ModuleEdit,
  },
  settings: {
    content: SettingsContent,
  }

};
