import {
  getAttrByMode,
  getModuleOrderClassName,
  getCategoriesForPostType
} from '@divi/module-utils';
import { useSelect } from '@divi/data';
import { get_address, get_google_map_place_link } from '../../Utils/index.js';

const JobView = ({attributes: jobs, content, showFeaturedImage, featuredImageAlignLeft}) => {
  let {
    agency_name,
    agency_address,
    agency_city,
    agency_state,
    agency_zip,
    agency_about,
    hours,
    salary_min,
    salary_max,
    posted_date,
    posted_date_custom_format,
    position_number,
    rpa_number,
    ds_url,
    final_filing_date,
    final_filing_date_picker,
    final_filing_date_custom_format,
    apply_to_dept,
    apply_to_name,
    apply_to_address,
    apply_to_city,
    apply_to_state,
    apply_to_zip,
    questions_name,
    questions_email,
    questions_phone,
  } = getAttrByMode( jobs?.innerContent );

  let {
     show_about_agency,
     show_salary,
     posted_date_custom_format: enablePostedDateCustomFormat,
     final_filing_date_chooser,
     final_filing_date_custom_format: enableFinalFilingDateCustomFormat,
     show_apply_to,
     show_questions
  } = getAttrByMode( jobs?.advanced );
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
    
  let agencyAddr = [ agency_address, agency_city, agency_state, agency_zip ].filter(Boolean);

  let postedDate = '';
  let daysPassed = 0;

  if( posted_date ){
    // subtracting today from the posted date returns today days passed in milliseconds
    // convert the milliseconds to days 
    let today = new Date();
    posted_date = new Date(posted_date);
    // convert the milliseconds to days 
    daysPassed = Math.floor((today - posted_date) / (1000 * 60 * 60 * 24));
    postedDate = posted_date.toLocaleDateString('en-US', {month: 'short', day: '2-digit', year: 'numeric', timeZone: 'UTC'});
  }

  let header = [
    'on' === show_about_agency && (
      <div className="entity" key="entity">
        <strong>{ agency_name }</strong>
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
    'on' === show_salary && <span className="d-block" key="salaryRange">Salaray Range: { [formatter.format(salary_min), formatter.format(salary_max)].filter(Boolean).join(' - ') }</span>,
    jobPosition && <span className="d-block" key="jobPosition">{ jobPosition }</span>,
    ds_url && <span className="d-block" key="ds_url">Duty Statement (<a href={ ds_url }>PDF</a>)</span>,
    'on' === final_filing_date_chooser ? 
      <span className="d-block" key="finalFilingDate">Final Filing Date: <time>{ new Date(final_filing_date_picker).toLocaleDateString('en-US', {weekday: 'short', month: 'numeric', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'}) }</time></span> : 
      <span className="d-block" key="finalFilingDate">Final Filing Date: { final_filing_date }</span>

  ].filter(Boolean);

  let applyInfo = [
    'on' === show_apply_to && (
      <p key="applyTo">
        <strong>Apply To:</strong>
        { apply_to_dept && <span className="d-block">{ apply_to_dept }</span> }
        { apply_to_name && <span className="d-block">Attn: { apply_to_name }</span> }
        { get_address([apply_to_address, apply_to_city, apply_to_state, apply_to_zip])}
      </p>
    ),
    'on' === show_questions && (
      <p key="questions">
        <strong>Questions</strong>
        <span>
          { questions_name ? ` ${ questions_name } at ` : ' Contact ' }
          {
            [ 
              questions_phone,
              questions_email && <a href={`mailto:${questions_email}`}>{ questions_email }</a>,
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
        'on' === show_about_agency && agency_about && (
          <div className="card card-understated about-department">
            <div className="card-header">
              <h4>About this Department</h4>
            </div>
            <div className="card-body">
              <p>{ agency_about }</p>
            </div>
          </div>
        )
      }
      <div className="clearfix" dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
};  

export default JobView;