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
import { CardModuleEditProps } from './types.ts';

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {CardModuleEditProps} props React component props.
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
  
  let { src: imgSrc } = getAttrByMode(attrs?.image?.innerContent);
  let { show: showImage } = getAttrByMode(attrs?.image?.advanced);

  let { 
    show: showHeader,
  } = getAttrByMode(attrs?.title?.advanced);

  let {
    show: showButton
  } = getAttrByMode(attrs?.button?.advanced);
  let {
    linkUrl: buttonUrl,
    text: buttonText,
  } = getAttrByMode(attrs?.button?.innerContent);
  let buttonClass = 'light';

  let { 
    show: showFooter,
  } = getAttrByMode(attrs?.footer?.advanced);

  switch( layout ) {
    case 'overstated':
      buttonClass = 'main';
      break;
    case 'understated':
      buttonClass = 'alt';
      break;
    case 'standout':
      buttonClass = 'standout';
      break;

  }

  let buttonComponent = 'on' === showButton ? `<a href="${ buttonUrl }" class="btn btn-${buttonClass}" target="_blank">${buttonText}</a>` : '';
  
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
        'on' === showImage && imgSrc ? 
          <img src={imgSrc} className="card-img-top img-responsive" /> : null
      }
      {
        'on' === showHeader ? <div className="card-header">
          {
            elements.render({
              attrName: 'title',
              className: [
                'pb-0',
                'mb-0',
                'border-bottom-0',
              ]
            })
          }
          </div> : null
      }
      {
        elements.render({
          attrName: 'content',
          valueResolver: value => [value, buttonComponent]
        })
      }
      {
        'on' === showFooter ? 
          elements.render({
            attrName: 'footer',
          }) : null
      }
    </ModuleContainer>
  );
}

export {
  ModuleEdit,
};
