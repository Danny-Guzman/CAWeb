
import { addAction } from '@wordpress/hooks';

import { registerModule, getPossibleModuleConversionOutline } from '@divi/module-library';

/**
 * Internal dependencies
 */
// Styles
import './styles/_builder.scss';

// standard modules
import { CAWebModuleGithub, CAWebModuleGithubMetadata } from './modules/Github/index.js';
import { CAWebModuleLocation, CAWebModuleLocationMetadata } from './modules/Location/index.js';
import { CAWebModuleProfileBanner, CAWebModuleProfileBannerMetadata } from './modules/ProfileBanner/index.js';
import { CAWebModuleSectionPrimary, CAWebModuleSectionPrimaryMetadata } from './modules/SectionPrimary/index.js';
import { CAWebModuleCard, CAWebModuleCardMetadata } from './modules/Card/index.js';
import { CAWebModulePanel, CAWebModulePanelMetadata } from './modules/Panel/index.js';
import { CAWebModuleSectionFooter, CAWebModuleSectionFooterMetadata } from './modules/SectionFooter/index.js';
import { CAWebModuleSectionFooterGroup, CAWebModuleSectionFooterGroupMetadata } from './modules/SectionFooterGroup/index.js'; 

//fullwidth modules
import { CAWebModuleFullwidthSectionPrimary, CAWebModuleFullwidthSectionPrimaryMetadata } from './modules/FullwidthSectionPrimary/index.js';
import { CAWebModuleFullwidthPanel, CAWebModuleFullwidthPanelMetadata } from './modules/FullwidthPanel/index.js';

//
// import icon-library integration
// import './icons';

// Register modules.
addAction('divi.moduleLibrary.registerModuleLibraryStore.after', 'cawebDiviExtension', () => {
  // Standard modules
  registerModule(CAWebModuleGithubMetadata, CAWebModuleGithub);
  registerModule( CAWebModuleLocationMetadata, CAWebModuleLocation );
  registerModule(CAWebModuleProfileBannerMetadata, CAWebModuleProfileBanner);
  registerModule(CAWebModuleSectionPrimaryMetadata, CAWebModuleSectionPrimary);
  registerModule(CAWebModuleCardMetadata, CAWebModuleCard);
  registerModule(CAWebModulePanelMetadata, CAWebModulePanel);
  registerModule(CAWebModuleSectionFooterMetadata, CAWebModuleSectionFooter);
  registerModule(CAWebModuleSectionFooterGroupMetadata, CAWebModuleSectionFooterGroup);
  
  // Fullwidth modules
  registerModule(CAWebModuleFullwidthSectionPrimaryMetadata, CAWebModuleFullwidthSectionPrimary);
  registerModule(CAWebModuleFullwidthPanelMetadata, CAWebModuleFullwidthPanel);
});
