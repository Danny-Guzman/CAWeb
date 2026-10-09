
// Local dependencies.
import { CAWebModuleSectionFooterGroup, CAWebModuleSectionFooterGroupMetadata } from '../SectionFooterGroup/index.js';

import metadata from './module.json';

export const CAWebModuleFullwidthSectionFooterGroupMetadata = {
  ...CAWebModuleSectionFooterGroupMetadata,
  ...metadata,
};

export const CAWebModuleFullwidthSectionFooterGroup = CAWebModuleSectionFooterGroup;
