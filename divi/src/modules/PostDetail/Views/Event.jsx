import {
  getAttrByMode,
  getModuleOrderClassName,
  getCategoriesForPostType
} from '@divi/module-utils';
import { useSelect } from '@divi/data';
import { get_google_map_place_link } from '../../Utils/index.js';

const EventView = ({attributes: event, content}) => {
  let {
    organizer,
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
  } = getAttrByMode(event?.innerContent);

  let {
    show_presenter,
    start_date_custom_format: start_date_custom_format_enabled,
    end_date_custom_format: end_date_custom_format_enabled,
    show_address
  } = getAttrByMode(event?.advanced);

  
  let { postImageUrl } = useSelect(select => select('divi/page-settings')?.getSettings());

  let presenter = 'on' === show_presenter ? 
    <div className="presenter">
      <p>
        <strong>Presenter:</strong><br />
        <strong class="presenter-name">{presenter_name}</strong>
      </p>
      <p>
        { presenter_image && <img src={presenter_image} className="me-3" style={{height: '75px',width: '75px'}} /> }
        { presenter_bio }
      </p>
    </div>
   : '';

  let organizerElement = <>
    <strong>{organizer}</strong><br />
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
      {
        postImageUrl && <img src={ postImageUrl } className="float-start mb-3 me-3" style={{width: '150px', height: '150px'}} />
      }
      <div className="description clearfix" dangerouslySetInnerHTML={{ __html: content }}></div>
      {presenter}
      <div className="row">
        <div className="col-9">
          { organizerElement }
        </div>
      </div>
    </>
  );
};  

export default EventView;