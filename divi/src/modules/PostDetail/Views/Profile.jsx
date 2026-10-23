import {
  getAttrByMode,
  getModuleOrderClassName,
  getCategoriesForPostType
} from '@divi/module-utils';
import { useSelect } from '@divi/data';
import { get_google_map_place_link } from '../../Utils/Module.jsx';

const ProfileView = ({attributes: profile, content, showFeaturedImage, featuredImageAlignment}) => {
  let {
    prefix,
    name,
    career,
    fields
  } = getAttrByMode( profile?.innerContent );

  let { postImageUrl } = useSelect(select => select('divi/page-settings')?.getSettings());

  let title = [
    prefix ? `${prefix} ` : '',
    name,
    career?.title ? `, ${career.title}` : '',
  ].filter(Boolean).join('');

  return (
    <>
      { title && <h1>{ title }</h1> }
      {
        postImageUrl && showFeaturedImage && <img src={ postImageUrl } className={`mb-3 ${ featuredImageAlignment }`} style={{width: '150px', height: '100px'}} />
      }
      <div className="clearfix" dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
};  

export default ProfileView;