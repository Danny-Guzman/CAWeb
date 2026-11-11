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
import {ModuleAttrs} from "../types.ts";

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

  // Toggle Link URL, Text fields visibility based on if show more button is on
  set(groupConfiguration, ['body', 'component', 'props', 'fields', 'url', 'render'], 'off' !== show );
  set(groupConfiguration, ['body', 'component', 'props', 'fields', 'text', 'render'], 'off' !== show );
  
  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}