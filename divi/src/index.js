
import { addAction } from '@wordpress/hooks';

import { registerModule, getPossibleModuleConversionOutline } from '@divi/module-library';

/**
 * Internal dependencies
 */

// standard modules
import { CAWebModuleGithub, CAWebModuleGithubMetadata } from './modules/Github/index.js';
import { CAWebModuleLocation, CAWebModuleLocationMetadata } from './modules/Location/index.js';
import { CAWebModuleProfileBanner, CAWebModuleProfileBannerMetadata } from './modules/ProfileBanner/index.js';
import { CAWebModuleSectionPrimary, CAWebModuleSectionPrimaryMetadata } from './modules/SectionPrimary/index.js';
import { CAWebModuleCard, CAWebModuleCardMetadata } from './modules/Card/index.js';

//fullwidth modules
import { CAWebModuleFullwidthSectionPrimary, CAWebModuleFullwidthSectionPrimaryMetadata } from './modules/FullwidthSectionPrimary/index.js';

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
  
  // Fullwidth modules
  registerModule(CAWebModuleFullwidthSectionPrimaryMetadata, CAWebModuleFullwidthSectionPrimary);

});
