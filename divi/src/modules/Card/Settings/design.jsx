// External dependencies.
import React from 'react';
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
    layout,
    title,
    footer
  } = attrs || {};

  let layoutStyle = (layout && getAttrByMode(layout?.innerContent)) || getAttrByMode(defaultSettingsAttrs?.layout?.innerContent);
  let { show: showFooter } = (footer && getAttrByMode(footer?.advanced)) || getAttrByMode(defaultSettingsAttrs?.footer?.advanced);
  let { show: showHeader } = (title && getAttrByMode(title?.advanced)) || getAttrByMode(defaultSettingsAttrs?.title?.advanced);
  
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