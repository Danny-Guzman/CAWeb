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

  let layout = getAttrByMode(attributes?.layout?.innerContent);

  // Toggle Icon Design group visibility based on layout
  set(groupConfiguration, ['icon', 'render'], 'banner' !== layout );

  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}