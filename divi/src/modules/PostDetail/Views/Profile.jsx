import {
  getAttrByMode,
  getModuleOrderClassName,
  getCategoriesForPostType
} from '@divi/module-utils';
import { useSelect } from '@divi/data';
import { get_google_map_place_link } from '../../Utils/Module.jsx';

const ProfileView = ({attributes: profile, content, showFeaturedImage, featuredImageAlignLeft}) => {
  let {
    prefix,
    name,
    career_title,
    career_position,
    career_line_1,
    career_line_2,
    career_line_3
  } = getAttrByMode( profile?.innerContent );

  let {
     career,
     additional_fields
  } = getAttrByMode( profile?.advanced );
  
  let { postImageUrl } = useSelect(select => select('divi/page-settings')?.getSettings());

  let title = [
    prefix ? `${prefix} ` : '',
    name,
    career_title ? `, ${career_title}` : '',
  ].filter(Boolean).join('');

  return (
    <>
      { title && <h1>{ title }</h1> }
      {
        postImageUrl && showFeaturedImage && <img src={ postImageUrl } className={`mb-3 ${ featuredImageAlignLeft ? 'float-start me-3' : 'float-end ms-3'}`} style={{width: '150px', height: '100px'}} />
      }
      <div className="clearfix" dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
};  

export default ProfileView;