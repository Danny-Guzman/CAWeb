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

import { get_icon_span, get_google_map_place_link } from '../Utils/index.js';

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
 

  // let title = getAttrByMode(attrs?.title?.innerContent);
  
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
        elements.render({
          attrName: 'content',
        })
      }
    </ModuleContainer>
  );
}

export {
  ModuleEdit,
};
