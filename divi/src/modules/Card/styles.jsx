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

  let { 
      color: headerColor,
  } = getAttrByMode(attrs?.title?.decoration?.font?.font);

  let { 
      color: footerColor,
  } = getAttrByMode(attrs?.footer?.decoration?.font?.font);


  return (
    <StyleContainer mode={mode} state={state} noStyleTag={noStyleTag}>
      {
        elements.style({
          attrName: 'module',
          styleProps: {
            disabledOn: {
              disabledModuleVisibility: settings?.disabledModuleVisibility,
            }
          },
        })
      }
      {
        elements.style({
          attrName: 'title'
        })
      }
      {
        elements.style({
          attrName: 'content'
        })
      }
      {
        elements.style({
          attrName: 'footer'
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
