// External dependencies.
import React from 'react';
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
    layout,
    title,
    footer
  } = attributes;

  let layoutStyle = getAttrByMode(layout?.innerContent);
  let showFooter = getAttrByMode(footer?.advanced?.show);
  let showHeader = getAttrByMode(title?.advanced?.show);
  
  // Toggle Layout color field visibility based on if layout is custom
  set(groupConfiguration, ['content-background', 'render'], 'custom' === layoutStyle );

  // Toggle Header group visibility based on if show header is on
  set(groupConfiguration, ['title-font', 'render'], 'on' === showHeader );

  // Toggle Footer group visibility based on if show footer is on
  set(groupConfiguration, ['footer-font', 'render'], 'on' === showFooter );
  
  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}