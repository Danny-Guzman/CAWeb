import {
  getAttrByMode,
  getModuleOrderClassName,
  getCategoriesForPostType
} from '@divi/module-utils';
import { useSelect } from '@divi/data';
import { get_google_map_place_link } from '../../Utils/Module.jsx';

const NewsView = ({attributes: news, content, showFeaturedImage}) => {
  let {
    author,
    published,
    location
  } = getAttrByMode( news?.innerContent );

  let { postImageUrl } = useSelect(select => select('divi/page-settings')?.getSettings());

  let header = [
    author && <> Author: { author }</>,
    published.date && <>Published: { new Date(published.date).toLocaleDateString('en-US', {month: 'short', day: '2-digit', year: 'numeric', timeZone: 'UTC'}) }</>,
    location && <>{ location }</>
  ].filter(Boolean);

  return (
    <>
      { 0 < header.length && <div className="header"><div className="published"><p>{ header.map((item, i) => <span key={i} className="d-block">{ item }</span>) }</p></div></div> }
      {
        postImageUrl && showFeaturedImage && <img src={ postImageUrl } className="float-start mb-3 me-3" style={{width: '150px', height: '100px'}} />
      }
      <div className="clearfix" dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
};  

export default NewsView;