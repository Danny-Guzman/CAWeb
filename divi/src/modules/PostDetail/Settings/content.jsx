// External dependencies.
import React, { ReactElement, useMemo, useState } from 'react';
import { set, merge } from 'lodash';

// WordPress dependencies
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  ModuleGroups,
} from '@divi/module';
// import { BlogAttrs, FieldLibrary, Module } from '@divi/types';
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
  let { layout } = attributes;

  let selectedLayout = getAttrByMode(layout?.innerContent);
  let taxonomy = getAttrByMode(attributes[selectedLayout]?.advanced);
  
  // toggle group configuration based on selected layout
  set( groupConfiguration, ['course', 'render'], 'course' === selectedLayout );
  set( groupConfiguration, ['event', 'render'], 'event' === selectedLayout );
  set( groupConfiguration, ['exam', 'render'], 'exam' === selectedLayout );
  set( groupConfiguration, ['jobs', 'render'], 'jobs' === selectedLayout );
  set( groupConfiguration, ['news', 'render'], 'news' === selectedLayout );
  set( groupConfiguration, ['profile', 'render'], 'profile' === selectedLayout );

  // toggle body group if not general
  set( groupConfiguration, ['body', 'render'], 'general' !== selectedLayout );

  // Featured Image is only available for 'news' or 'profile' layouts.
  set( groupConfiguration, ['style', 'component', 'props', 'fields', 'imageInnercontent', 'render'], 'news' === selectedLayout || 'profile' === selectedLayout );

  // Content, Tags, Categories are available for all layouts except 'general'
  set( groupConfiguration, ['content', 'render'], 'general' !== selectedLayout  );
  set( groupConfiguration, ['style', 'component', 'props', 'fields','tagsInnercontent', 'render'], 'general' !== selectedLayout  );
  set( groupConfiguration, ['style', 'component', 'props', 'fields','categoriesInnercontent', 'render'], 'general' !== selectedLayout  );
      
  switch( selectedLayout ){
    // Course Options Only
    case 'course':

      let { 
        show_presenter: showCoursePresenter,
        start_date_custom_format: courseStartDateCustomFormat,
        end_date_custom_format: courseEndDateCustomFormat,
        show_address: courseShowAddress,
      } = taxonomy


      // if presenter is enabled, show the relevant fields
      set( groupConfiguration, ['course', 'component', 'props', 'fields', 'name', 'render'], "on" === showCoursePresenter );
      set( groupConfiguration, ['course', 'component', 'props', 'fields', 'image', 'render'], "on" === showCoursePresenter );
      set( groupConfiguration, ['course', 'component', 'props', 'fields', 'bio', 'render'], "on" === showCoursePresenter );

      // if start date custom format is provided, show the relevant field
      set( groupConfiguration, ['course', 'component', 'props', 'fields', 'customStartDateCustomFormat', 'render'], 'on' === courseStartDateCustomFormat );

      // if end date custom format is provided, show the relevant field
      set( groupConfiguration, ['course', 'component', 'props', 'fields', 'customEndDateCustomFormat', 'render'], 'on' === courseEndDateCustomFormat );

      // if show address is enabled, show the relevant field
      set( groupConfiguration, ['course', 'component', 'props', 'fields', 'address', 'render'], "on" === courseShowAddress );
      set( groupConfiguration, ['course', 'component', 'props', 'fields', 'city', 'render'], "on" === courseShowAddress );
      set( groupConfiguration, ['course', 'component', 'props', 'fields', 'state', 'render'], "on" === courseShowAddress );
      set( groupConfiguration, ['course', 'component', 'props', 'fields', 'zip', 'render'], "on" === courseShowAddress );

      break;
    // Event Options Only
    case 'event':
      let {
        show_presenter: showEventPresenter,
        start_date_custom_format: eventStartDateCustomFormat,
        end_date_custom_format: eventEndDateCustomFormat,
        show_address: eventShowAddress
      } = taxonomy;

      // if presenter is enabled, show the relevant fields
      set( groupConfiguration, ['event', 'component', 'props', 'fields', 'name', 'render'], "on" === showEventPresenter );
      set( groupConfiguration, ['event', 'component', 'props', 'fields', 'image', 'render'], "on" === showEventPresenter );
      set( groupConfiguration, ['event', 'component', 'props', 'fields', 'bio', 'render'], "on" === showEventPresenter );

      // if start date custom format is provided, show the relevant field
      set( groupConfiguration, ['event', 'component', 'props', 'fields', 'customStartDateCustomFormat', 'render'], 'on' === eventStartDateCustomFormat );

      // if end date custom format is provided, show the relevant field
      set( groupConfiguration, ['event', 'component', 'props', 'fields', 'customEndDateCustomFormat', 'render'], 'on' === eventEndDateCustomFormat );

      // if show address is enabled, show the relevant field
      set( groupConfiguration, ['event', 'component', 'props', 'fields', 'address', 'render'], "on" === eventShowAddress );
      set( groupConfiguration, ['event', 'component', 'props', 'fields', 'city', 'render'], "on" === eventShowAddress );
      set( groupConfiguration, ['event', 'component', 'props', 'fields', 'state', 'render'], "on" === eventShowAddress );
      set( groupConfiguration, ['event', 'component', 'props', 'fields', 'zip', 'render'], "on" === eventShowAddress );

      break;

    // Exam Options Only
    case 'exam':
        let {
        published_date_custom_format: examPublishedDateCustomFormat,
        date_chooser,
        final_filing_date_custom_format: examFinalFilingDateCustomFormat
      } = taxonomy;

      // if published date custom format is provided, show the relevant field
      set( groupConfiguration, ['exam', 'component', 'props', 'fields', 'customPublishedDateFormat', 'render'], 'on' === examPublishedDateCustomFormat );

      // if final filing date picker is provided, show the relevant fields
      set( groupConfiguration, ['exam', 'component', 'props', 'fields', 'datePicker', 'render'], 'on' === date_chooser );
      set( groupConfiguration, ['exam', 'component', 'props', 'fields', 'finalFilingDate', 'render'], 'off' === date_chooser );

      // if final filing date custom format is provided, show the relevant field
      set( groupConfiguration, ['exam', 'component', 'props', 'fields', 'customFilingDateCustomFormat', 'render'], 'on' === examFinalFilingDateCustomFormat );

      break;

    // Jobs Options Only
    case 'jobs':
      let {
        show_about_agency: showAboutAgency,
        show_salary: showSalary,
        posted_date_custom_format: postedDateCustomFormat,
        final_filing_date_chooser: finalFilingDateChooser,
        final_filing_date_custom_format: finalFilingDateCustomFormat,
        show_apply_to: showApplyTo,
        show_questions: showQuestions,
      } = taxonomy;

      // if show about agency is provided, show the relevant field
      set( groupConfiguration, ['job', 'component', 'props', 'fields', 'name', 'render'], 'on' === showAboutAgency );
      set( groupConfiguration, ['job', 'component', 'props', 'fields', 'address', 'render'], 'on' === showAboutAgency );
      set( groupConfiguration, ['job', 'component', 'props', 'fields', 'city', 'render'], 'on' === showAboutAgency );
      set( groupConfiguration, ['job', 'component', 'props', 'fields', 'state', 'render'], 'on' === showAboutAgency );
      set( groupConfiguration, ['job', 'component', 'props', 'fields', 'zip', 'render'], 'on' === showAboutAgency );
      set( groupConfiguration, ['job', 'component', 'props', 'fields', 'about', 'render'], 'on' === showAboutAgency );

      // if show salary is provided, show the relevant field
      set( groupConfiguration, ['job', 'component', 'props', 'fields', 'minSalary', 'render'], 'on' === showSalary );
      set( groupConfiguration, ['job', 'component', 'props', 'fields', 'maxSalary', 'render'], 'on' === showSalary );

      // if posted date custom format is provided, show the relevant field
      set( groupConfiguration, ['job', 'component', 'props', 'fields', 'customPostedDateCustomFormat', 'render'], 'on' === postedDateCustomFormat );

      // if final filing date chooser is provided, show the relevant fields
      set( groupConfiguration, ['job', 'component', 'props', 'fields', 'finalFilingDatePicker', 'render'], 'on' === finalFilingDateChooser );
      set( groupConfiguration, ['job', 'component', 'props', 'fields', 'finalFilingDate', 'render'], 'off' === finalFilingDateChooser );

      // if final filing date custom format is provided, show the relevant field
      set( groupConfiguration, ['job', 'component', 'props', 'fields', 'customFinalFilingDateCustomFormat', 'render'], 'on' === finalFilingDateCustomFormat );

      // if show apply to is provided, show the relevant field
      set( groupConfiguration, ['job', 'component', 'props', 'fields', 'applyToDept', 'render'], 'on' === showApplyTo );
      set( groupConfiguration, ['job', 'component', 'props', 'fields', 'applyToName', 'render'], 'on' === showApplyTo );
      set( groupConfiguration, ['job', 'component', 'props', 'fields', 'applyToAddr', 'render'], 'on' === showApplyTo );
      set( groupConfiguration, ['job', 'component', 'props', 'fields', 'applyToCity', 'render'], 'on' === showApplyTo );
      set( groupConfiguration, ['job', 'component', 'props', 'fields', 'applyToState', 'render'], 'on' === showApplyTo );
      set( groupConfiguration, ['job', 'component', 'props', 'fields', 'applyToZip', 'render'], 'on' === showApplyTo );

      // if show questions is provided, show the relevant field
      set( groupConfiguration, ['job', 'component', 'props', 'fields', 'questionName', 'render'], 'on' === showQuestions );
      set( groupConfiguration, ['job', 'component', 'props', 'fields', 'phone', 'render'], 'on' === showQuestions );
      set( groupConfiguration, ['job', 'component', 'props', 'fields', 'email', 'render'], 'on' === showQuestions );

      break;

    // News Options Only
    case 'news':
      let { custom_format: newsCustomFormat } = taxonomy;

      // if custom format is provided, show the relevant field
      set( groupConfiguration, ['news', 'component', 'props', 'fields', 'customPublishDateCustomFormat', 'render'], 'on' === newsCustomFormat );

      break;

    // Profile Options Only
    case 'profile':
      let { career, additional_fields } = taxonomy;

      // if career is provided, show the relevant field
      set( groupConfiguration, ['profile', 'component', 'props', 'fields', 'title', 'render'], 'on' === career );
      set( groupConfiguration, ['profile', 'component', 'props', 'fields', 'position', 'render'], 'on' === career );

      // if additional fields are provided, show the relevant field
      set( groupConfiguration, ['profile', 'component', 'props', 'fields', 'line1', 'render'], 'on' === additional_fields );
      set( groupConfiguration, ['profile', 'component', 'props', 'fields', 'line2', 'render'], 'on' === additional_fields );
      set( groupConfiguration, ['profile', 'component', 'props', 'fields', 'line3', 'render'], 'on' === additional_fields );

      break;
  }
  
  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}