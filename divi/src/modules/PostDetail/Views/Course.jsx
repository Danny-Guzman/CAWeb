import {
  getAttrByMode,
  getModuleOrderClassName,
  getCategoriesForPostType
} from '@divi/module-utils';
import { get_google_map_place_link } from '../../Utils/index.js';

const CourseView = ({attributes: course, content}) => {

  let {
    presenter_name,
    presenter_image,
    presenter_bio,
    start_date,
    start_date_custom_format,
    end_date,
    end_date_custom_format,
    address,
    city,
    state,
    zip,
    registration_type,
    cost
  } = getAttrByMode(course?.innerContent);

  let {
    show_presenter,
    start_date_custom_format: start_date_custom_format_enabled,
    end_date_custom_format: end_date_custom_format_enabled,
    show_address,
    show_map
  } = getAttrByMode(course?.advanced);

  let presenter = 'on' === show_presenter ? 
    <div className="presenter">
      <p>
        <strong>Presenter:</strong><br />
        <strong className="presenter-name">{presenter_name}</strong>
      </p>
      <p>
        { presenter_image && <img src={presenter_image} className="me-3" style={{height: '75px',width: '75px'}} /> }
        { presenter_bio }
      </p>
    </div>
   : '';

  let organizer = <>
    <strong>Organizer</strong><br />
    <p className="date-time">
      {
        [
          start_date && new Date(start_date).toLocaleDateString('en-US', {weekday: 'short', month: 'numeric', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'}),
          end_date && new Date(end_date).toLocaleDateString('en-US', {weekday: 'short', month: 'numeric', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'})
        ].filter(Boolean).join(' - ') 
      }
      <br />
      {
        'on' === show_address && (
          <>
          <span className="ca-gov-icon-road-pin"></span>
          { get_google_map_place_link([address, city, state, zip]) }
          </>
        )
      }
    </p>
    {
      0 < [ registration_type, cost ].filter(Boolean).length && (
        <p>
          { [ registration_type, cost ].map((item, i ) => item ? `Registration ${i ? 'Cost' : 'Type'}: ${item}` : '').filter(Boolean).join('<br />') }
        </p>
      )
    }
  </>
  
  return (
    <>
      <div className="description" dangerouslySetInnerHTML={{ __html: content }}></div>
      {presenter}
      <div className="row">
        <div className="col-9">
          { organizer }
        </div>
        {
          'on' === show_map && (
            <div className="col-3">
              {
                get_google_map_place_link([address, city, state, zip], true)
              }
            </div>
          )
        }
      </div>
    </>
  );
};  

export default CourseView;