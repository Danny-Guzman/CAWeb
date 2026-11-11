// External Dependencies.
import React, { ReactElement } from 'react';

// Divi Dependencies.
import {
  ModuleContainer
} from '@divi/module';

import {
  getAttrByMode,
  getCurrentModuleId
} from '@divi/module-utils';

// Local Dependencies.
import { SectionCarouselSlideModuleEditProps } from './types.ts';
import { ModuleStyles } from './styles.jsx';
import { ModuleScriptData } from './module-script-data.jsx';
import { useSelect } from '@divi/data';

let activeSlide = null;

const setActiveSlide = (id) => {
  activeSlide = id;
};

const getActiveSlide = () => {
  return activeSlide;
};

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {SectionCarouselSlideModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = ({
    attrs,
    id,
    name,
    elements,
    parentAttrs,
    isFirst,
    isLooped,
  }) => {

  let title = getAttrByMode(attrs?.title?.innerContent);

  let show = getAttrByMode(attrs?.button?.advanced?.show);

  let { linkUrl } = getAttrByMode(attrs?.button?.innerContent);

  // Check if the module is hovered
  const isHovered = useSelect((select) => {
    // Accessing Divi events store selectors
    return select('divi/events').isHovered(id);
  }, [id]);

  // if the module is hovered, set the current id as the active slide
  if( isHovered ) {
    // we do this cause Divi does a re-render on hover, and we want to keep track of the active slide
    setActiveSlide(id);
  }

  return (
    <ModuleContainer
      attrs={attrs}
      parentAttrs={parentAttrs}
      elements={elements}
      id={id}
      name={name}
      stylesComponent={ModuleStyles}
      classnamesFunction={({id, classnamesInstance}) => {
        let active = getActiveSlide();

        classnamesInstance.add('carousel-item');

        // if the module is the first and no active slide is set, or if the module is the active slide, mark it as active
        if( (isFirst && null === active) || id === active || id === getCurrentModuleId() ) {
          classnamesInstance.add('active');

          // if the module is active but not hovered, reset the active slide to false
          // if we dont reset then an overlap may occur where multiple slides appear active
          if( ! isHovered ){
            // setActiveSlide(false);
          }
        }
      }}
      scriptDataComponent={ModuleScriptData}
      isFirst={isFirst}
      isLooped={isLooped}
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
            className: 'd-block w-100',
          },
        })
      }
      <div className="carousel-caption d-block">
        {
          elements.render({
            attrName: 'title'
          })
        }
        {
          elements.render({
            attrName: 'desc',
          })
        }
        {
          'on' === show && linkUrl.length && title.length && (
            <>
              <br />
              <a href={linkUrl} className="btn btn-primary" target="_blank">
                <strong>More Information</strong>
                <span className="sr-only">More Information about {title}</span>
              </a>
            </>
          )
        }
      </div>
      
    </ModuleContainer>
  );
}

export {
  ModuleEdit,
};
