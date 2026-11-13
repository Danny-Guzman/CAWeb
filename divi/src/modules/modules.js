// WordPress dependencies
import { addAction, addFilter } from '@wordpress/hooks';

// Divi dependencies
import { registerModule } from '@divi/module-library';
import { select } from '@divi/data';

// standard modules
import { CAWebModuleGithub, CAWebModuleGithubMetadata } from './Github/index.js';
import { CAWebModuleLocation, CAWebModuleLocationMetadata } from './Location/index.js';
import { CAWebModuleProfileBanner, CAWebModuleProfileBannerMetadata } from './ProfileBanner/index.js';
import { CAWebModuleSectionPrimary, CAWebModuleSectionPrimaryMetadata } from './SectionPrimary/index.js';
import { CAWebModuleCard, CAWebModuleCardMetadata } from './Card/index.js';
import { CAWebModulePanel, CAWebModulePanelMetadata } from './Panel/index.js';
import { CAWebModuleSectionFooter, CAWebModuleSectionFooterMetadata } from './SectionFooter/index.js';
import { CAWebModuleSectionFooterGroup, CAWebModuleSectionFooterGroupMetadata } from './SectionFooterGroup/index.js'; 
import { CAWebModuleSectionCarousel, CAWebModuleSectionCarouselMetadata } from './SectionCarousel/index.js';
import { CAWebModuleSectionCarouselSlide, CAWebModuleSectionCarouselSlideMetadata } from './SectionCarouselSlide/index.js';
import { CAWebModulePostList, CAWebModulePostListMetadata } from './PostList/index.js';
import { CAWebModulePostDetail, CAWebModulePostDetailMetadata } from './PostDetail/index.js';

//fullwidth modules
import { CAWebModuleFullwidthSectionPrimary, CAWebModuleFullwidthSectionPrimaryMetadata } from './FullwidthSectionPrimary/index.js';
import { CAWebModuleFullwidthPanel, CAWebModuleFullwidthPanelMetadata } from './FullwidthPanel/index.js';
import { CAWebModuleFullwidthSectionFooter, CAWebModuleFullwidthSectionFooterMetadata } from './FullwidthSectionFooter/index.js';
import { CAWebModuleFullwidthSectionFooterGroup, CAWebModuleFullwidthSectionFooterGroupMetadata } from './FullwidthSectionFooterGroup/index.js';
import { CAWebModuleFullwidthSectionCarousel, CAWebModuleFullwidthSectionCarouselMetadata } from './FullwidthSectionCarousel/index.js';
import { CAWebModuleFullwidthSectionCarouselSlide, CAWebModuleFullwidthSectionCarouselSlideMetadata } from './FullwidthSectionCarouselSlide/index.js';
import { CAWebModuleServiceTiles, CAWebModuleServiceTilesMetadata } from './ServiceTiles/index.js';
import { CAWebModuleServiceTilesItem, CAWebModuleServiceTilesItemMetadata } from './ServiceTilesItem/index.js';

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
  registerModule(CAWebModuleSectionCarouselMetadata, CAWebModuleSectionCarousel);
  registerModule(CAWebModuleSectionCarouselSlideMetadata, CAWebModuleSectionCarouselSlide);
  registerModule(CAWebModulePostListMetadata, CAWebModulePostList);
  registerModule(CAWebModulePostDetailMetadata, CAWebModulePostDetail);
  
  // Fullwidth modules
  registerModule(CAWebModuleFullwidthSectionPrimaryMetadata, CAWebModuleFullwidthSectionPrimary);
  registerModule(CAWebModuleFullwidthPanelMetadata, CAWebModuleFullwidthPanel);
  registerModule(CAWebModuleFullwidthSectionFooterMetadata, CAWebModuleFullwidthSectionFooter);
  registerModule(CAWebModuleFullwidthSectionFooterGroupMetadata, CAWebModuleFullwidthSectionFooterGroup);
  registerModule(CAWebModuleFullwidthSectionCarouselMetadata, CAWebModuleFullwidthSectionCarousel);
  registerModule(CAWebModuleFullwidthSectionCarouselSlideMetadata, CAWebModuleFullwidthSectionCarouselSlide);
  registerModule(CAWebModuleServiceTilesMetadata, CAWebModuleServiceTiles);
  registerModule(CAWebModuleServiceTilesItemMetadata, CAWebModuleServiceTilesItem);
});


// Post Only Module
addFilter('divi.modalLibrary.addModule.moduleList', 'cawebDiviExtension', (moduleList) => {
  const postType = select('divi/settings').getSetting(['post', 'type']);

  if( 'post' !== postType ) {
    delete moduleList['caweb/post-detail']
  }

  return moduleList;
});