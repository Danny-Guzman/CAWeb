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
    icon
  } = attrs || {};

  let { show } = (icon && getAttrByMode(icon?.innerContent)) ?? getAttrByMode(defaultSettingsAttrs?.icon?.innerContent);

  // Toggle Icon Design group visibility based on layout
  set(groupConfiguration, ['content-font', 'component', 'props', 'fields', 'icon', 'render'], 'on' === show );
  
  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}