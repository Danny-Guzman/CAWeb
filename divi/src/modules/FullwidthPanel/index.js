// Local dependencies.
import { CAWebModulePanel, CAWebModulePanelMetadata } from '../Panel/index.js';

import metadata from './module.json';

export const CAWebModuleFullwidthPanelMetadata = {
  ...CAWebModulePanelMetadata,
  ...metadata,
};

export const CAWebModuleFullwidthPanel = CAWebModulePanel;
