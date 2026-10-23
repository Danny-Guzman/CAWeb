import {
  getAttrByMode,
  getModuleOrderClassName,
  getCategoriesForPostType
} from '@divi/module-utils';
import { get_google_map_place_link } from '../../Utils/Module.jsx';

const CourseView = ({attributes: course, content, elements}) => {

  let {
    presenter,
    start,
    end,
    address,
    registration_type,
    cost,
    show_map
  } = getAttrByMode(course?.innerContent);

  let presenterElement = 'on' === presenter?.show ? 
    <div className="presenter">
      <p>
        <strong>Presenter:</strong><br />
        <strong className="presenter-name">{presenter?.name}</strong>
      </p>
      <p>
        { presenter?.image?.src && <img src={presenter?.image?.src} className="me-3" style={{height: '75px',width: '75px'}} /> }
        { presenter?.bio }
      </p>
    </div>
   : '';

  let organizer = <>
    <strong>Organizer</strong><br />
    <p className="date-time">
      {
        [
          start.date && new Date(start.date).toLocaleDateString('en-US', {weekday: 'short', month: 'numeric', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'}),
          end.date && new Date(end.date).toLocaleDateString('en-US', {weekday: 'short', month: 'numeric', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'})
        ].filter(Boolean).join(' - ') 
      }
      <br />
      {
        'on' === address.show && (
          <>
          <span className="ca-gov-icon-road-pin"></span>
          { get_google_map_place_link(address) }
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
      {presenterElement}
      <div className="row">
        <div className="col-9">
          { organizer }
        </div>
        {
          'on' === show_map && (
            <div className="col-3">
              {
                get_google_map_place_link(address, true)
              }
            </div>
          )
        }
      </div>
    </>
  );
};  

export default CourseView;