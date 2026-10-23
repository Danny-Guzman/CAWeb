import {
  getAttrByMode,
  getModuleOrderClassName,
  getCategoriesForPostType
} from '@divi/module-utils';
import { useSelect } from '@divi/data';

import { get_google_map_place_link } from '../../Utils/Module.jsx';

const ExamView = ({attributes: exam, content, elements, showFeaturedImage }) => {
  let {
    id,
    class: examClass,
    status,
    published,
    filing,
    type,
    url,
    address,
  } = getAttrByMode( exam?.innerContent );

  let { postImageUrl } = useSelect(select => select('divi/page-settings')?.getSettings());
  
  let examInfo = [
    [ 
      examClass ? `Class Code: ${examClass}` : '', 
      id ? `Exam Code: ${id}` : ''
    ].filter(Boolean).join(' - '),
    published.date ? `Published Date: ${new Date(published.date).toLocaleDateString('en-US', {weekday: 'short', month: 'numeric', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'})}` : '',
    'off' === filing.chooser ? `Final Filing Date: ${filing.date}` : `Final Filing Date: ${new Date(filing.picker).toLocaleDateString('en-US', {weekday: 'short', month: 'numeric', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'})}`,
    'web' === type ? 
      <>Exam Url: <a href={url}>{url}</a></> : 
      <>Exam Address: { get_google_map_place_link(address) }</>,
  ].filter(Boolean)
  
  return (
    <>
      {
        showFeaturedImage && postImageUrl && <img src={ postImageUrl } className="me-3 mb-3" style={{width: '300px', height: '80px'}} />
      }
      {
        0 < examInfo.length && (
          <p>{ examInfo.map((item, i) => <span key={i} className="d-block">{item}</span>) }</p>
        )
      }
      <div className="clearfix" dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
};  

export default ExamView;