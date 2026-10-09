import {
  getAttrByMode,
  getModuleOrderClassName,
  getCategoriesForPostType
} from '@divi/module-utils';
import { useSelect } from '@divi/data';

import { get_google_map_place_link } from '../../Utils/index.js';

const ExamView = ({attributes: exam, content}) => {
  let {
    id,
    class: examClass,
    status,
    published_date,
    published_date_custom_format,
    final_filing_date,
    final_filing_date_picker,
    final_filing_date_custom_format,
    type,
    url,
    address,
    city,
    state,
    zip
  } = getAttrByMode( exam?.innerContent );
  
  let {
    published_date_custom_format: enabledPublishedDateCustomFormat,
    date_chooser,
    final_filing_date_custom_format: enabledFinalFilingDateCustomFormat,
  } = getAttrByMode( exam?.advanced );

  let { postImageUrl } = useSelect(select => select('divi/page-settings')?.getSettings());
  
  let examInfo = [
    [ 
      examClass ? `Class Code: ${examClass}` : '', 
      id ? `Exam Code: ${id}` : ''
    ].filter(Boolean).join(' - '),
    published_date ? `Published Date: ${new Date(published_date).toLocaleDateString('en-US', {weekday: 'short', month: 'numeric', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'})}` : '',
    'off' === date_chooser ? `Final Filing Date: ${final_filing_date}` : `Final Filing Date: ${new Date(final_filing_date_picker).toLocaleDateString('en-US', {weekday: 'short', month: 'numeric', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'})}`,
    'web' === type ? 
      <>Exam Url: <a href={url}>{url}</a></> : 
      <>Exam Address: { get_google_map_place_link([address, city, state, zip]) }</>,
  ].filter(Boolean)
  
  return (
    <>
      {
        postImageUrl && <img src={ postImageUrl } className="me-3 mb-3" style={{width: '300px', height: '80px'}} />
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