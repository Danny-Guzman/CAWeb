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

export const SettingsDesign = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration,
}) => {
  let attributes = merge({}, defaultSettingsAttrs, attrs);

  let { 
    icon,
    layout
  } = attributes;

  let { show: showIcon } = getAttrByMode(icon?.innerContent);
  
  layout = getAttrByMode(layout?.innerContent);
  
  // Title Font Color field is only visible when a 'none' layout is selected.
  set(groupConfiguration, ['title-font', 'component', 'props', 'fields', 'color', 'visible'], 'none' === layout );

  // Toggle Heading icon and color field visibility based on if show icon is on
  set(groupConfiguration, ['icon', 'component', 'props', 'fields', 'icon', 'visible'], 'on' === showIcon );
  
  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}