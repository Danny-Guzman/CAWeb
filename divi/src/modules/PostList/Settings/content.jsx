// External dependencies.
import React from 'react';
import { set, merge } from 'lodash';

// WordPress dependencies
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  ModuleGroups,
} from '@divi/module';
import { useSelect, select } from '@divi/data';
import { getCategoriesForPostType, transformTaxonomiesToCheckboxOptions } from '@divi/module-utils';
import { getAttrByMode } from '@divi/module-utils';

// Local dependencies.

export const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration,
}) => {
  let attributes = merge({}, defaultSettingsAttrs, attrs);

  let { 
    style,
    categories,
    tags,
  } = attributes;

  let selectedStyle = getAttrByMode(style?.innerContent);
  let showAllCategories = getAttrByMode(categories?.advanced?.all);
  let selectedCategories = getAttrByMode(categories?.innerContent);
  let showAllTags = getAttrByMode(tags?.advanced?.all);
  let selectedTags = getAttrByMode(tags?.innerContent);
  let isGeneralListStyle = 'general-list' === selectedStyle;
  let isFaqsListStyle = 'faqs-list' === selectedStyle;

  // Categories and tags are only visible if the selected style is not a 'faqs-list'
  set( groupConfiguration, ['style', 'component', 'props', 'fields', 'categoriesAdvancedAll', 'visible'], isGeneralListStyle );
  set( groupConfiguration, ['style', 'component', 'props', 'fields', 'tagsAdvancedAll', 'visible'], isGeneralListStyle );
  
  // Toggle the visibility of the category and tag fields
  set( groupConfiguration, ['style', 'component', 'props', 'fields', 'categoriesInnercontent', 'visible'], isGeneralListStyle && 'off' === showAllCategories );
  set( groupConfiguration, ['style', 'component', 'props', 'fields', 'tagsInnercontent', 'visible'], isGeneralListStyle && 'off' === showAllTags );
 
  // Accordion style is only visible if the selected style is a 'faqs-list'
  set( groupConfiguration, ['style', 'component', 'props', 'fields', 'styleAdvancedFaq', 'visible'], isFaqsListStyle );
  
  // Featured image field is only visible if the selected style is a 'general-list'
  set( groupConfiguration, ['style', 'component', 'props', 'fields', 'imageInnercontent', 'visible'], ! isFaqsListStyle );
  
  // Excerpt is only visible if the selected style is a 'general-list'
  set( groupConfiguration, ['style', 'component', 'props', 'fields', 'excerptInnercontent', 'visible'], 
    [
      'course-list',
      'events-list',
      'general-list', 
      'news-list',
    ].includes(selectedStyle) 
  );

  // If the selected style is a 'general-list', we need to set the selected categories and tags in the group configuration
  if( isGeneralListStyle ) {
    const allCategories = getCategoriesForPostType('post');
    const allTags = select('divi/settings').getSetting(['taxonomy', 'postTag']); 
  
    const categoryCheckboxes = transformTaxonomiesToCheckboxOptions(allCategories);
    const tagCheckboxes = transformTaxonomiesToCheckboxOptions(allTags);

    // Add all categories to the category field options if options is empty 
    if( groupConfiguration.style?.component?.props?.fields?.categoriesInnercontent?.component?.props?.options.length === 0 ) {
      groupConfiguration.style?.component?.props?.fields?.categoriesInnercontent?.component?.props?.options.push(...categoryCheckboxes);
    }
    if( groupConfiguration.style?.component?.props?.fields?.tagsInnercontent?.component?.props?.options.length === 0 ) {
      groupConfiguration.style?.component?.props?.fields?.tagsInnercontent?.component?.props?.options.push(...tagCheckboxes);
    }
    
    // Set the selected categories and tags in the group configuration
    set( groupConfiguration, ['style', 'component', 'props', 'fields', 'categoriesInnercontent', 'defaultAttr', 'desktop', 'value'], selectedCategories );
    set( groupConfiguration, ['style', 'component', 'props', 'fields', 'tagsInnercontent', 'defaultAttr', 'desktop', 'value'], selectedTags );
  
  }

  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}