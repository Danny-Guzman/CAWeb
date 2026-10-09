// External dependencies.
import React, { ReactElement } from 'react';

// Divi dependencies.
import {
  StyleContainer,
  StylesProps,
  CssStyle,
  CommonStyle,
  TextStyle,
} from '@divi/module';
import {
  getAttrByMode,
} from '@divi/module-utils';
// Local dependencies.
import { ModuleAttrs } from './types.ts';
import { cssFields } from './custom-css.js';

/**
 * Module's style components.
 *
 * @since ??
 */
 const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements,
}) => {

  let { layout } = attrs || {};

  layout = getAttrByMode(layout?.innerContent);

  return (
    <StyleContainer mode={mode} state={state} noStyleTag={noStyleTag}>
      {elements.style({
        attrName: 'module',
        styleProps: {
          disabledOn: {
            disabledModuleVisibility: settings?.disabledModuleVisibility,
          }
        },
      })}
      {
        elements.style({
          attrName: 'title',
          styleProps: {
            attrsFilter: (attrs) => {
              // color is only applied if layout is 'none'
              if( 'none' !== layout ) {
                delete attrs?.font?.font?.desktop?.value?.color;
              }

              // we remove the textAlign as that's handled as a classname and doesn't need to be included in the style props.
              delete attrs?.font?.font?.desktop?.value?.textAlign;
              return attrs;
            }
          }
        })
      }
      <CssStyle
        selector={orderClass}
        attr={attrs?.css}
        cssFields={cssFields}
      />
    </StyleContainer>
  );
}

export {
  ModuleStyles,
};
