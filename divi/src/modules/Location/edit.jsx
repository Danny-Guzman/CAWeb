// External Dependencies.
import React, { Fragment, ReactElement } from 'react';

// Divi Dependencies.
import {
  ModuleContainer,
} from '@divi/module';
import {
  getAttrByMode,
} from '@divi/module-utils';

// Local Dependencies.
import { ModuleStyles } from './styles.jsx';
import { moduleClassnames } from './module-classnames.js';
import { ModuleScriptData } from './module-script-data.jsx';
import { LocationModuleEditProps } from './types.ts';

import { get_icon_span, get_google_map_place_link } from '../Utils/Module.jsx';

/**
 * Renders Location (contact)
 *
 * @return ReactElement
 */
const contactLocation = ({
  elements,
  attrs
}) => {
  let layout = getAttrByMode(attrs?.layout?.innerContent);
  let address = getAttrByMode(attrs?.address?.innerContent);
  let icon = getAttrByMode(attrs?.icon?.innerContent);
  let contact = getAttrByMode(attrs?.contact?.innerContent);
  let showContact = getAttrByMode(attrs?.contact?.advanced?.show);
  let link = getAttrByMode(attrs?.link?.innerContent);
  let showLink = getAttrByMode(attrs?.link?.advanced?.show);
  let name = getAttrByMode(attrs?.name?.innerContent);

  if ( 'contact' !== layout ) return null;

  // get a map link if address info exists
  let addressMapLink = get_google_map_place_link( [ address?.addr, address?.city, address?.state, address?.zip ] );
 
  // If displaying an icon
	let displayIcon   = 'on' === icon?.show ? <div className="thumbnail">{get_icon_span(icon)}</div> : <></>;

  // show contact info if enabled
  let displayOther = 'on' === showContact ? <Fragment>
      {
        [
          '' !== contact?.phone ? <p>General Information: {contact?.phone}</p> : null,
          '' !== contact?.fax ? <p>FAX: {contact?.fax}</p> : null
        ]
      }
    </Fragment> : null;
  
  let linkElement = '' !== link?.linkUrl && 'on' === showLink ?
      <a href={ link?.linkUrl } className='btn btn-outline-dark' target='_blank'>More</a>
      : null;

  // we combine all contact info elements here
  let contactInfo = ( 
    "" !== name ||
    (null !== displayOther && displayOther?.props?.children) ||
    null !== addressMapLink ||
    (null !== linkElement && linkElement?.props?.children)
  ) ? 
  <div className="contact">
    { elements.render({'attrName': 'name'}) }
    { addressMapLink }
    { displayOther }
    { linkElement }
  </div> : <></>;

  return(<Fragment>
    { displayIcon }
    { contactInfo}
  </Fragment>)
}

/**
 * Renders Location (mini)
 *
 * @return {ReactElement}
 */
const miniLocation = ({
  elements,
  attrs
}) => {
  let layout = getAttrByMode(attrs?.layout?.innerContent);
  let address = getAttrByMode(attrs?.address?.innerContent);
  let icon = getAttrByMode(attrs?.icon?.innerContent);
  let name = getAttrByMode(attrs?.name?.innerContent);
  let link = getAttrByMode(attrs?.link?.innerContent);
  
  if ( layout && 'mini' !== layout ) return <></>;

  // get a map link if address info exists
  let addressMapLink = get_google_map_place_link( [ address?.addr, address?.city, address?.state, address?.zip ] );
 
  // If displaying an icon
	let displayIcon   = 'on' === icon?.show ? <div className="thumbnail">{get_icon_span(icon)}</div> : <></>;

  // we wrap the name in a link if a link url is provided
  let nameElement = '' !== name ?
    '' !== link?.linkUrl ? 
      <a href={link?.linkUrl} target="_blank">{ name }</a>
      :
    elements.render({'attrName': 'name' })
     : null;

  // we combine all contact info elements here
  let contactInfo = ( 
    '' !== name ||
    null !== addressMapLink 
  ) ? 
  <div className="contact">
    { nameElement }
    { addressMapLink }
  </div> : <></>;

  return(<Fragment>
    { displayIcon }
    { contactInfo}
  </Fragment>)
}

/**
 * Renders Location (banner)
 *
 * @return ReactElement
 */
const bannerLocation = ({
  elements,
  attrs
}) => {

  let layout = getAttrByMode(attrs?.layout?.innerContent);
  let image = getAttrByMode(attrs?.image?.innerContent);
  let address = getAttrByMode(attrs?.address?.innerContent);
  let desc = getAttrByMode(attrs?.desc?.innerContent);
  let link = getAttrByMode(attrs?.link?.innerContent);
  let showLink = getAttrByMode(attrs?.link?.advanced?.show);
  let name = getAttrByMode(attrs?.name?.innerContent);

  if ( 'banner' !== layout ) return null;
  
  let imageElement = '' !== image?.src ?
    <div className='thumbnail'>
      {
        elements.render({
            attrName: 'image',
        })
      }
    </div> : null;

  // get a map link if address info exists
  let addressMapLink = get_google_map_place_link( [ address?.addr, address?.city, address?.state, address?.zip ] );
 
  // Add description markup
  let descElement = '' !== desc ? 
      <Fragment>
        <strong>Description:</strong> 
        {
          elements.render({
              attrName: 'desc',
          })
        }
      </Fragment> : null

  let linkElement = '' !== link?.linkUrl && 'on' === showLink ?
        <a href={ link?.linkUrl } target="_blank" className="btn btn-outline-dark">View More Details</a>
        : null;

  // we combine all contact info elements here
  let contactInfo = ( 
    "" !== name ||
    null !== addressMapLink 
  ) ? 
  <div className="contact">
    { elements.render({'attrName': 'name'}) }
    { 
      addressMapLink ? 
      <div className='address'>
        { get_icon_span('road-pin') }
        {addressMapLink}
      </div> 
      : <></>
    }
  </div> : <></>;

  // we combine all summary info elements here
  let summaryInfo = ( 
    "" !== desc ||
    null !== linkElement 
  ) ? 
  <div className="summary">
    { descElement }
    { linkElement }
  </div> : <></>;

  return(<Fragment>
    { imageElement }
    { contactInfo }
    { summaryInfo }
  </Fragment>)
}

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {LocationModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = (props) => {
  const {
    attrs,
    id,
    name,
    elements,
  } = props;

  return (
    <ModuleContainer
      attrs={attrs}
      elements={elements}
      id={id}
      name={name}
      stylesComponent={ModuleStyles}
      classnamesFunction={moduleClassnames}
      scriptDataComponent={ModuleScriptData}
    >
      {
        elements.styleComponents({
          attrName: 'module',
        })
      }
      { contactLocation({elements, attrs}) }
      { miniLocation({elements, attrs}) }
      { bannerLocation({elements, attrs}) }
    </ModuleContainer>
  );
}

export {
  ModuleEdit,
};
