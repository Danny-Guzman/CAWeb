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

  let { request } = attributes;
  let { repo_type, rate_limit } = getAttrByMode(request?.innerContent);

  // Toggle Personal Access Token, Code Request Email and Request Email Body field visibility based on repository type
  set(groupConfiguration, ['style', 'component', 'props', 'fields', 'pat', 'visible'], 'public' !== repo_type );
  set(groupConfiguration, ['style', 'component', 'props', 'fields', 'email', 'visible'], 'public' !== repo_type );
  set(groupConfiguration, ['style', 'component', 'props', 'fields', 'emailBody', 'visible'], 'public' !== repo_type );

  // Toggle Rate Limit fields visibility based on if rate limit is on
  set(groupConfiguration, ['organization', 'component', 'props', 'fields', 'client_id', 'visible'], 'on' === rate_limit );
  set(groupConfiguration, ['organization', 'component', 'props', 'fields', 'client_secret', 'visible'], 'on' === rate_limit );

  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}