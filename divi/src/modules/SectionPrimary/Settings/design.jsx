// External dependencies.
import React from 'react';
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

export const SettingsDesign = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration,
}) => {
  let attributes = merge({}, defaultSettingsAttrs, attrs);
  let { image } = attributes;
  
  let showImage = getAttrByMode(image?.advanced?.show);
  
  // Toggle Image field visibility based on if show image is on
  set(groupConfiguration, ['image', 'render'], 'on' === showImage );
  
  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}