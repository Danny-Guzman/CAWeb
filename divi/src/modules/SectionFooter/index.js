
// Local dependencies.
import metadata from './module.json';
import { ModuleEdit } from './edit.jsx';
import { placeholderContent } from './placeholder-content.js';
import defaultAttrs from './module-default-render-attributes.json';
import { conversionOutline } from './conversion-outline.ts';

export const CAWebModuleSectionFooterMetadata = metadata;

export const CAWebModuleSectionFooter = {
  placeholderContent,
  conversionOutline,
  defaultAttrs,
  renderers: {
    edit: ModuleEdit,
  }
};
