// External dependencies.
import React, { ReactElement } from 'react';
import { merge, set } from 'lodash';

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
  let { image, link } = attributes;

  let showImage = getAttrByMode(image?.advanced?.show);
  let showLink = getAttrByMode(link?.advanced?.show);

  // Toggle Featured Image Image Position, Fade From Left and Src field visibility based on if show image is on
  set(groupConfiguration, ['body', 'component', 'props', 'fields', 'imageInnercontent', 'visible'], 'on' === showImage );
  
  // Toggle Link URL field visibility based on if show more button is on
  set(groupConfiguration, ['body', 'component', 'props', 'fields', 'linkInnercontent', 'visible'], 'on' === showLink );
  
  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}