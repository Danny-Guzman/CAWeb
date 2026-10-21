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
import { SectionPrimaryModuleEditProps } from './types.ts';
import { ModuleStyles } from './styles.jsx';
import { moduleClassnames } from './module-classnames.js';
import { ModuleScriptData } from './module-script-data.jsx';
import { processColorPickerValue } from '../Utils/Module.jsx';


/**
 * Renders the Featured Image
 *
 * @param {{
 *     elements?: Module.ModuleElements,
 *     image?: {
 *       src?: string,
 *       alt?: string,
 *       title?: string,
 *       show?: string,
 *       alignment?: string,
 *       fade?: string
 *     }
 * }} props 
 * @returns {ReactElement} 
 */
const renderImage = ({
    elements,
    attrs
}) => {

  let {alignment, fade, show} = attrs?.image?.advanced;
  let showImage = getAttrByMode(show);
  let imgAlign = getAttrByMode(alignment);
  let fadeAnim = getAttrByMode(fade);
  
  if( 'off' === showImage ){
    return <></>;
  }

  let classes = `col-4 ${imgAlign}`;

  classes += 'none' !== fadeAnim ? ` animate__animated  animate__${fadeAnim}` : '';

  return <div className={ classes }>
    {
      elements.render({
            attrName: 'image',
        })
    }
  </div>
}

/**
 * Renders the More Button
 *
 * @param {{
 *     text?: string;
 *     link?: {
 *       url?: string;
 *       show?: string;
 *     }
 * }} props 
 * @returns {ReactElement} 
 */
const renderButton = (attrs) => {
  let { show } = attrs?.link?.advanced;
  let showLink = getAttrByMode(show);
  let { linkUrl } = getAttrByMode(attrs?.link?.innerContent);
  let text = getAttrByMode(attrs?.title?.innerContent);

  if( 'off' === showLink || !linkUrl ){
    return <></>;
  }

  return <div>
    <a href={ linkUrl } className="btn btn-outline-dark" target="_blank">
      More Information
      <span className="sr-only">More information about { text } </span></a>
    </div>
}

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {SectionPrimaryModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = (props) => {
  const {
    attrs,
    id,
    name,
    elements,
  } = props;
  
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
        renderImage({ elements, attrs } )
      }
      <div>
      {
        elements.render({
          attrName: 'title',
        })
      }
      {
        elements.render({
          attrName: 'content',
        })
      }
      {
        renderButton(attrs)
      } 
      </div>

    </ModuleContainer>
  );
}

export {
  ModuleEdit,
};
