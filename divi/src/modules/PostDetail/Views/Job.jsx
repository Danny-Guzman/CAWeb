import {
  getAttrByMode,
  getModuleOrderClassName,
  getCategoriesForPostType
} from '@divi/module-utils';
import { useSelect } from '@divi/data';
import { get_address, get_google_map_place_link } from '../../Utils/Module.jsx';

const JobView = ({attributes: jobs, content, showFeaturedImage, featuredImageAlignLeft}) => {
  let {
    agency,
    hours,
    salary,
    posted,
    position_number,
    rpa_number,
    ds_url,
    filing,
    apply,
    questions
  } = getAttrByMode( jobs?.innerContent );
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
    
  let agencyAddr = Object.values(agency?.address).filter(Boolean);

  let postedDate = '';
  let daysPassed = 0;

  if( posted?.date ){
    // subtracting today from the posted date returns today days passed in milliseconds
    // convert the milliseconds to days 
    let today = new Date();
    let tmp = new Date(posted?.date);
    // convert the milliseconds to days 
    daysPassed = Math.floor((today - tmp) / (1000 * 60 * 60 * 24));
    postedDate = tmp.toLocaleDateString('en-US', {month: 'short', day: '2-digit', year: 'numeric', timeZone: 'UTC'});
  }

  let header = [
    'on' === agency?.show && (
      <div className="entity" key="entity">
        <strong>{ agency?.name }</strong>
        {
          agencyAddr.length > 0 && (
            <><span className="ca-gov-icon-road-pin"></span>{ get_google_map_place_link(agencyAddr)  }</>
          )
        }
      </div>
    ),
    postedDate && (
      <div className="published text-secondary" key="published">
        Published: <time>{ postedDate }</time>
        { 0 < daysPassed && (<>&mdash;<span className="fuzzy-date"> { daysPassed } days ago</span></>) }
      </div>
    )
  ].filter(Boolean);

  let jobPosition = [
    position_number && `Position Number: ${ position_number }`,
    rpa_number && `RPA # ${ rpa_number }`,
  ].filter(Boolean).join(', ');

  let body = [
    hours && <span className="d-block" key="hours">{ hours }</span>,
    'on' === salary?.show && <span className="d-block" key="salaryRange">Salaray Range: { [formatter.format(salary?.min), formatter.format(salary?.max)].filter(Boolean).join(' - ') }</span>,
    jobPosition && <span className="d-block" key="jobPosition">{ jobPosition }</span>,
    ds_url && <span className="d-block" key="ds_url">Duty Statement (<a href={ ds_url }>PDF</a>)</span>,
    'on' === filing?.chooser ? 
      <span className="d-block" key="finalFilingDate">Final Filing Date: <time>{ new Date(filing?.picker).toLocaleDateString('en-US', {weekday: 'short', month: 'numeric', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'}) }</time></span> : 
      <span className="d-block" key="finalFilingDate">Final Filing Date: { filing?.date }</span>

  ].filter(Boolean);

  let applyInfo = [
    'on' === apply?.show && (
      <p key="applyTo">
        <strong>Apply To:</strong>
        { apply?.dept && <span className="d-block">{ apply?.dept }</span> }
        { apply?.name && <span className="d-block">Attn: { apply?.name }</span> }
        { get_address(apply?.address)}
      </p>
    ),
    'on' === questions?.show && (
      <p key="questions">
        <strong>Questions</strong>
        <span>
          { questions?.name ? ` ${ questions?.name } at ` : ' Contact ' }
          {
            [ 
              questions?.phone,
              questions?.email && <a href={`mailto:${questions?.email}`}>{ questions?.email }</a>,
            ].filter(Boolean).map((item, index) => <>{item} </>)
          }
        </span>
      </p>
    )
  ].filter(Boolean);

  return (
    <>
      {
        0 < header.length && (
          <div className="sub-header mb-4">{ header }</div>
        )  
      }
      <div className="row">
        <div className="col-6">
          <div className="well">
            <div className="well-body">
              <p>
                { 0 < body.length && body }
              </p>
            </div>
          </div>
        </div>
        {
          0 < applyInfo.length && (
            <div className="col-6">
              <div className="well">
                <div className="well-body">
                  { applyInfo }
                </div>
              </div>
            </div>
          )
        }
      </div>
      {
        'on' === agency?.show && agency?.about && (
          <div className="card card-understated about-department">
            <div className="card-header">
              <h4>About this Department</h4>
            </div>
            <div className="card-body">
              <p>{ agency?.about }</p>
            </div>
          </div>
        )
      }
      <div className="clearfix" dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
};  

export default JobView;