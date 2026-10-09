// Local dependencies.
import { CAWebModuleSectionFooter, CAWebModuleSectionFooterMetadata } from '../SectionFooter/index.js';

import metadata from './module.json';

export const CAWebModuleFullwidthSectionFooterMetadata = {
  ...CAWebModuleSectionFooterMetadata,
  ...metadata,
};

export const CAWebModuleFullwidthSectionFooter = CAWebModuleSectionFooter;
