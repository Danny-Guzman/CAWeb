import {
  getAttrByMode,
  getModuleOrderClassName,
  getCategoriesForPostType
} from '@divi/module-utils';
import { useSelect } from '@divi/data';
import { get_google_map_place_link } from '../../Utils/Module.jsx';

const EventView = ({attributes: event, content, elements}) => {
  let {
    organizer,
    presenter,
    start,
    end,
    address,
    registration_type,
    cost
  } = getAttrByMode(event?.innerContent);
  
  let { postImageUrl } = useSelect(select => select('divi/page-settings')?.getSettings());

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

  let organizerElement = <>
    <strong>{organizer}</strong><br />
    <p className="date-time">
      {
        [
          start.date && new Date(start.date).toLocaleDateString('en-US', {weekday: 'short', month: 'numeric', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'}),
          end.date && new Date(end.date).toLocaleDateString('en-US', {weekday: 'short', month: 'numeric', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'})
        ].filter(Boolean).join(' - ') 
      }
      <br />
      {
        'on' === address?.show && (
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
      {
        postImageUrl && <img src={ postImageUrl } className="float-start mb-3 me-3" style={{width: '150px', height: '150px'}} />
      }
      <div className="description clearfix" dangerouslySetInnerHTML={{ __html: content }}></div>
      {presenterElement}
      <div className="row">
        <div className="col-9">
          { organizerElement }
        </div>
      </div>
    </>
  );
};  

export default EventView;