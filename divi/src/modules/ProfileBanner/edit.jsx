// External Dependencies.
import React, { ReactElement } from 'react';

// Divi Dependencies.
import {
  ModuleContainer,
  ElementComponents,
  DynamicData,
} from '@divi/module';
import {
  getAttrByMode,
} from '@divi/module-utils';

// Local Dependencies.
import { ProfileBannerModuleEditProps } from './types';
import { ModuleStyles } from './styles.jsx';
import { moduleClassnames } from './module-classnames.js';
import { ModuleScriptData } from './module-script-data.jsx';

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {ProfileBannerModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = ({
    attrs,
    id,
    name,
    elements,
  }) => {

  let profile = getAttrByMode(attrs?.profile?.innerContent);
  let roundedPortrait = getAttrByMode(attrs?.portrait?.advanced?.rounded);
  
  return (
    <ModuleContainer
      attrs={attrs}
      elements={elements}
      id={id}
      name={name}
      tag="figure"
      stylesComponent={ModuleStyles}
      classnamesFunction={moduleClassnames}
      scriptDataComponent={ModuleScriptData}
    >
      {
        elements.styleComponents({
          attrName: 'module',
        })
      }
      {
          elements.render({
            attrName: 'portrait',
            attrSubName: 'src',
            className: `${("on" === roundedPortrait ? 'rounded-circle' : '')}` // rounded image
          })
        }
        <div className="body">
          {
            elements.render({
              attrName: 'name',
            })
          }
          {
            elements.render({
              attrName: 'job',
            })
          }
          {
          profile?.text && profile?.linkUrl ? 
            elements.render({
              attrName: 'profile',
              attrSubName: 'text',
              htmlAttributes: {
                href: profile?.linkUrl,
              }
            }) : ''
          } 
        </div>
    </ModuleContainer>
  );
}

export {
  ModuleEdit,
};
