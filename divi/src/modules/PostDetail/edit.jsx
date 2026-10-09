// External Dependencies.
import React, { ReactElement, useEffect, useRef } from 'react';
import { get, map } from 'lodash';
import { select } from '@divi/data';

// Divi Dependencies.
import {
  ModuleContainer,
  ElementComponents
} from '@divi/module';
import {
  getAttrByMode,
  getModuleOrderClassName,
  getCategoriesForPostType
} from '@divi/module-utils';
import { useFetch } from '@divi/rest';

// WordPress Dependencies.
import shortcode from '@wordpress/shortcode';
import { addQueryArgs } from '@wordpress/url';
import { __ } from '@wordpress/i18n';

// Local Dependencies.
import { ModuleStyles } from './styles.jsx';
import { moduleClassnames } from './module-classnames.js';
import { ModuleScriptData } from './module-script-data.jsx';
import { PostDetailModuleEditProps } from './types.ts';
import { get_icon_span, get_google_map_place_link, RenderWordPressShortcode, get_address } from '../Utils/index.js';
import { 
  CourseView, 
  EventView,
  ExamView,
  FaqView,
  JobView,
  NewsView, 
  ProfileView,
  Footer 
} from './Views/index.jsx';

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {PostDetailModuleEditProps} props React component props.
 * @returns {ReactElement}
 */
const ModuleEdit = ({
    attrs,
    id,
    name,
    elements,
    postId
  }) => {
    
    let { 
      layout,
      image,
      content,
      course,
      event,
      exam,
      news,
      profile,
      jobs,
      categories,
      tags,
    } = attrs || {};

    let selectedLayout = getAttrByMode(layout?.innerContent);
    let postContent = getAttrByMode(content?.innerContent);
    let showFeaturedImage = 'on' === getAttrByMode(image?.innerContent);
    let featuredImageAlignLeft = "on" !== getAttrByMode(image?.advanced)?.align ;
    let showCategories = 'on' === getAttrByMode(categories?.innerContent);
    let showTags = 'on' === getAttrByMode(tags?.innerContent);

    let output = [];
    let data = [];
    let Action = null;

    switch( selectedLayout ){
      case 'course':
        data = course;
        Action = CourseView;
        break;
      case 'event':
        data = event;
        Action = EventView;
        break;
      case 'exam':
        data = exam;
        Action = ExamView;
        break;
      case 'faqs':
        Action = FaqView;
        break;
      case 'general':
        break;
      case 'news':
        data = news;
        Action = NewsView;
        break;
      case 'profile':
        data = profile;
        Action = ProfileView;
        break;
      case 'jobs':
        data = jobs;
        Action = JobView;
        break;
    }

    if( 'function' === typeof Action ){
      output.push( <Action
        attributes={data} 
        content={postContent} 
        showFeaturedImage={showFeaturedImage}
        featuredImageAlignLeft={featuredImageAlignLeft}
      />)
    }

    if( 'general' !== selectedLayout && 
      ( showCategories || showTags )
    ){
      output.push(
        <Footer
          attributes={data} 
          postId={postId} 
          showCategories={showCategories} 
          showTags={showTags}
        />
      );
    }
    
    return (
      <ModuleContainer
        attrs={attrs}
        elements={elements}
        id={id}
        tag='article'
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
          output
        }
      </ModuleContainer>
    );
}

export {
  ModuleEdit,
};
