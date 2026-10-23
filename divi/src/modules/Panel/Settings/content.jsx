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

export const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration,
}) => {
  let attributes = merge({}, defaultSettingsAttrs, attrs);

  let { 
    button,
  } = attributes;

  let showButton = getAttrByMode(button?.advanced?.show);

  // Toggle Button field visibility based on if show button is on
  set(groupConfiguration, ['header', 'component', 'props', 'fields', 'text', 'visible'], 'on' === showButton );
  set(groupConfiguration, ['header', 'component', 'props', 'fields', 'url', 'visible'], 'on' === showButton );
  set(groupConfiguration, ['header', 'component', 'props', 'fields', 'target', 'visible'], 'on' === showButton );

  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}