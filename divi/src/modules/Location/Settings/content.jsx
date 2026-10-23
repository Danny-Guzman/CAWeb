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

  let layout = getAttrByMode(attributes?.layout?.innerContent);
  let showContact = getAttrByMode(attributes?.contact?.advanced?.show);
  let showLink = getAttrByMode(attributes?.link?.advanced?.show);
  

  // Toggle Featured Image field visibility based on layout
  set(groupConfiguration, ['style', 'component', 'props', 'fields', 'imageInnercontent', 'visible'], 'banner' === layout );

  // Toggle Description field visibility based on layout
  set(groupConfiguration, ['location', 'component', 'props', 'fields', 'descInnercontent', 'visible'], 'banner' === layout );

  // Toggle Show Contact Button field visibility based on layout
  set(groupConfiguration, ['location', 'component', 'props', 'fields', 'showContact', 'visible'], 'contact' === layout );

  // Toggle Phone/Fax fields visibility based on layout and Show Contact Button
  set(groupConfiguration, ['location', 'component', 'props', 'fields', 'phone', 'visible'], 'contact' === layout && 'on' === showContact );
  set(groupConfiguration, ['location', 'component', 'props', 'fields', 'fax', 'visible'], 'contact' === layout && 'on' === showContact );

  // Toggle Show Button field visibility based on layout
  set(groupConfiguration, ['location', 'component', 'props', 'fields', 'showLink', 'visible'], 'mini' !== layout );

  // Toggle URL field visibility based on Show Button
  set(groupConfiguration, ['location', 'component', 'props', 'fields', 'linkInnercontent', 'visible'], 'mini' !== layout && 'on' === showLink );

  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}