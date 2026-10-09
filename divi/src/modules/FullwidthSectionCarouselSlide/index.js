// Local dependencies.
import { CAWebModuleSectionCarouselSlide, CAWebModuleSectionCarouselSlideMetadata } from '../SectionCarouselSlide/index.js';

import metadata from './module.json';

export const CAWebModuleFullwidthSectionCarouselSlideMetadata = {
  ...CAWebModuleSectionCarouselSlideMetadata,
  ...metadata,
};

export const CAWebModuleFullwidthSectionCarouselSlide = CAWebModuleSectionCarouselSlide;
