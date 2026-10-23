// External dependencies.
import React, { ReactElement } from 'react';
import { set, merge } from 'lodash';

// WordPress dependencies
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  ModuleGroups,
} from '@divi/module';
import { getAttrByMode } from '@divi/module-utils';

// Local dependencies.
import {ModuleAttrs} from "../types";

export const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration,
}) => {
  let attributes = merge({}, defaultSettingsAttrs, attrs);
  
  let {
    button
  } = attributes;
  let show = getAttrByMode( button?.advanced?.show );

  let links = {};
  
  Object.entries(attributes).map(([key, value]) => {
    // only if the key starts with 'link'
    if( key.startsWith('link')  ) {
      // if the attrs exists, use that
      links[key] = value;
    }
  })
  
  Object.entries(links).forEach(([key, value]) => {
    let show = getAttrByMode(value?.advanced?.show);
    
    // Toggle Link URL field visibility based on if show more button is on
    set(groupConfiguration, ['body', 'component', 'props', 'fields', `${key}Text`, 'visible'], 'on' === show );
    set(groupConfiguration, ['body', 'component', 'props', 'fields', `${key}Url`, 'visible'], 'on' === show );
  })

  // Toggle Button URL field visibility based on if show more button is on
  set(groupConfiguration, ['body', 'component', 'props', 'fields', 'url', 'visible'], 'on' === show );
  
  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}