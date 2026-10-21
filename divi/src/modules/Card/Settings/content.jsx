// External dependencies.
import { set, merge } from 'lodash';

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
    image,
    title,
    button,
    footer
  } = attributes;
  
  let showImage = getAttrByMode(image?.advanced?.show);
  let showHeader = getAttrByMode(title?.advanced?.show);
  let showButton = getAttrByMode(button?.advanced?.show);
  let showFooter = getAttrByMode(footer?.advanced?.show);
  
  // Toggle Featured Image field visibility based on if show image is on
  set(groupConfiguration, ['style', 'component', 'props', 'fields', 'imageInnercontent', 'render'], 'off' !== showImage );

  // Toggle Title field visibility based on if show header is on
  set(groupConfiguration, ['header', 'component', 'props', 'fields', 'titleInnercontent', 'render'], 'off' !== showHeader );

  // Toggle Button field visibility based on if show button is on
  set(groupConfiguration, ['body', 'component', 'props', 'fields', 'text', 'render'], 'off' !== showButton );
  set(groupConfiguration, ['body', 'component', 'props', 'fields', 'url', 'render'], 'off' !== showButton );

  // Toggle Footer field visibility based on if show footer is on
  set(groupConfiguration, ['footer', 'component', 'props', 'fields', 'footerInnercontent', 'render'], 'off' !== showFooter );
  
  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}