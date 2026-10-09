import {
  getAttrByMode,
  getModuleOrderClassName,
  getCategoriesForPostType
} from '@divi/module-utils';
import { useSelect } from '@divi/data';
import { get_address, get_google_map_place_link } from '../../Utils/index.js';

const FaqView = ({attributes: faq, content, showFeaturedImage, featuredImageAlignLeft}) => {
  
  return (
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
  );
};  

export default FaqView;