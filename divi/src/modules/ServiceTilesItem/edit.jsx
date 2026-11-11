// External Dependencies.
import React, { ReactElement } from 'react';

// Divi Dependencies.
import {
  ModuleContainer,
} from '@divi/module';

import {
  getAttrByMode,
  getModuleOrderClassName
} from '@divi/module-utils';

// Local Dependencies.
import { ServiceTilesItemModuleEditProps } from './types.ts';
import { ModuleStyles } from './styles.jsx';
import { moduleClassnames } from './module-classnames.js';
import { ModuleScriptData } from './module-script-data.jsx';

// used to track the cumulative width of tiles and their contents
let width = 0;
let tile_contents = [];

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {ServiceTilesItemModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = (props) => {
let {
    attrs,
    id,
    name,
    elements,
    parentAttrs,
    parentId,
    isLooped,
    isLast,
    loopIndex
  } = props;

  let {
    size,
    show,
    url
  } = getAttrByMode(attrs?.tile?.innerContent);

  // increment the cumulative width by the current tile's size
  width += parseInt(size.replace('w-', ''));

  // reset everytime the width exceeds 100%
  if( 100 < width  ){
  // if( 100 < width || isLast ){
    width -= 100;
    tile_contents = [];
  }

  if( 'off' === show ){
    tile_contents[`${id}`] =
      <div id={id} className="collapse" data-bs-parent={ `.${getModuleOrderClassName(parentId)}` }>
        <div className="card card-default py-4 mb-0">
          <div className="container pt-0">
            <div className="card card-block p-3 mb-0 bg-white">
              <button 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target={ `#${id}` }
                className="btn btn-sm btn-secondary ca-gov-icon-close-mark float-end" 
                aria-expanded="false"></button>
              {elements.render({
                attrName: 'content'
              })}
            </div>
          </div>
        </div>
      </div>
    // });
  }

  return (
    <>
    <ModuleContainer
      attrs={attrs}
      parentAttrs={parentAttrs}
      elements={elements}
      id={id}
      name={name}
      stylesComponent={ModuleStyles}
      classnamesFunction={moduleClassnames}
      scriptDataComponent={ModuleScriptData}
      isLooped={isLooped}
      loopIndex={loopIndex}
      htmlAttrs={{
        tabIndex: 0,
      }}
    >
      {
        elements.styleComponents({
          attrName: 'module',
        })
      }
      {
        elements.render({
          attrName: 'image',
          htmlAttributes: {
            style: {
              backgroundSize: 'cover',
              height: '320px'
            },
          }
        })
      }
      {
        <div className="teaser bg-black text-white py-1 text-center">
          <a 
            href={url} 
            className="title h4 text-decoration-none text-white lh-base"
            {
              ...( 'off' === show ? 
                { 
                  'aria-expanded': 'false',
                  'data-bs-toggle': 'collapse',
                  'data-bs-target': `#${id}`
                } : 
                {}
              )
            }
          >
            {elements.render({ attrName: 'title' })}
            <span className={ `d-block ca-gov-icon-` + ( 'off' === show ? 'plus-fill' : 'link' ) }></span>
          </a>
        </div>
      } 
    </ModuleContainer>
    {
      (100 === width || isLast ) && Object.values(tile_contents)
    }
    </>
  );
}

export {
  ModuleEdit,
};
