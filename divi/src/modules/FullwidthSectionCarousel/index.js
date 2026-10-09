// Local dependencies.
import { CAWebModuleSectionCarousel, CAWebModuleSectionCarouselMetadata } from '../SectionCarousel/index.js';

import metadata from './module.json';

export const CAWebModuleFullwidthSectionCarouselMetadata = {
  ...CAWebModuleSectionCarouselMetadata,
  ...metadata,
};

export const CAWebModuleFullwidthSectionCarousel = CAWebModuleSectionCarousel;
