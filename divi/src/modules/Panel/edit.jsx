// External Dependencies.
import React, { ReactElement } from 'react';

// Divi Dependencies.
import {
  ModuleContainer,
} from '@divi/module';
import {
  getAttrByMode,
} from '@divi/module-utils';

// Local Dependencies.
import { ModuleStyles } from './styles.jsx';
import { moduleClassnames } from './module-classnames.js';
import { ModuleScriptData } from './module-script-data.jsx';
import { PanelModuleEditProps } from './types.ts';

import { get_icon_span } from '../Utils/Module.jsx';

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {PanelModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = ({
    attrs,
    id,
    name,
    elements,
  }) => {
 
  let layout = getAttrByMode(attrs?.layout?.innerContent);
  
  let header = getAttrByMode(attrs?.title?.innerContent);
  let { textAlign } = getAttrByMode(attrs?.title?.decoration?.font?.font);

  let {
    show: showButton
  } = getAttrByMode(attrs?.button?.advanced);

  let {
    linkUrl: buttonUrl,
    text: buttonText,
    linkTarget: buttonTarget,
  } = getAttrByMode(attrs?.button?.innerContent);

  let icon = getAttrByMode(attrs?.icon?.innerContent);
  let showIcon = getAttrByMode(attrs?.icon?.innerContent)?.show ?? 'off';

 let headerIcon = 'on' === showIcon ? get_icon_span(icon) : '';
  
  // create button element if button is set to show and button text is not empty.
  let buttonElement = null;
  if( 'on' === showButton && buttonUrl && buttonUrl.length > 0 ) {
    buttonElement = <div className="options">
      <a href={buttonUrl} target={ 'on' === buttonTarget ? '_blank' : '_self'} className={`btn btn-${layout}`}>{buttonText}</a>
    </div>;
  }
  
  return (
    <ModuleContainer
      attrs={attrs}
      elements={elements}
      id={id}
      name={name}
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
        header && header.length > 0 && <div className={ `card-header ${textAlign}` }>
          { 
            elements.render({
              attrName: 'title',
              valueResolver: value => [headerIcon, value]
            })
          }
          { buttonElement }
        </div>
      }
      { 
        elements.render({
          'attrName': 'content',
        })
      }
    </ModuleContainer>
  );
}

export {
  ModuleEdit,
};
