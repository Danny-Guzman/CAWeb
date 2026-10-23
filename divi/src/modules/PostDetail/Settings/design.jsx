// External dependencies.
import React, { ReactElement, useMemo, useState } from 'react';
import { set, merge } from 'lodash';

// WordPress dependencies
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  ModuleGroups,
} from '@divi/module';
// import { BlogAttrs, FieldLibrary, Module } from '@divi/types';
import { useSelect, select } from '@divi/data';
import { getCategoriesForPostType, transformTaxonomiesToCheckboxOptions } from '@divi/module-utils';
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
  } = attributes;

  let selectedLayout = getAttrByMode(layout?.innerContent);
  
  // Profile Only options
  set( groupConfiguration, ['profileDesign', 'render'], 'profile' === selectedLayout );

  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}