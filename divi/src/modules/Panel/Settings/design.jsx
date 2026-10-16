// External dependencies.
import React, { ReactElement } from 'react';
import { set } from 'lodash';

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

  let { 
    icon,
    layout
  } = attrs || {};

  let { show: showIcon } = (icon && getAttrByMode(icon?.innerContent)) || getAttrByMode(defaultSettingsAttrs?.icon?.innerContent);
  
  layout = getAttrByMode(layout?.innerContent);
  
  // Title Font Color field is only visible when a 'none' layout is selected.
  set(groupConfiguration, ['title-font', 'component', 'props', 'fields', 'color', 'render'], 'none' === layout );

  // Toggle Heading icon and color field visibility based on if show icon is on
  set(groupConfiguration, ['icon', 'component', 'props', 'fields', 'icon', 'render'], 'off' !== showIcon );
  
  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}