// Local dependencies.
import { CAWebModuleSectionPrimary, CAWebModuleSectionPrimaryMetadata } from '../SectionPrimary/index.js';

import metadata from './module.json';

export const CAWebModuleFullwidthSectionPrimaryMetadata = {
  ...CAWebModuleSectionPrimaryMetadata,
  ...metadata,
};

export const CAWebModuleFullwidthSectionPrimary = CAWebModuleSectionPrimary;
