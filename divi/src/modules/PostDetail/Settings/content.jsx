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

  let taxonomy = getAttrByMode(attributes[selectedLayout]?.innerContent);

  // toggle group configuration based on selected layout
  set( groupConfiguration, ['course', 'render'], 'course' === selectedLayout );
  set( groupConfiguration, ['event', 'render'], 'event' === selectedLayout );
  set( groupConfiguration, ['exam', 'render'], 'exam' === selectedLayout );
  set( groupConfiguration, ['jobs', 'render'], 'jobs' === selectedLayout );
  set( groupConfiguration, ['news', 'render'], 'news' === selectedLayout );
  set( groupConfiguration, ['profile', 'render'], 'profile' === selectedLayout );
  
  // Featured Image is only available for 'news' or 'profile' layouts.
  set( groupConfiguration, ['style', 'component', 'props', 'fields', 'imageAdvancedShow', 'visible'], ['exam', 'news', 'profile'].includes(selectedLayout) );
  
  // toggle body group if not general
  set( groupConfiguration, ['body', 'render'], 'general' !== selectedLayout );

  switch(selectedLayout){
    // Course Options Only
    case 'course':
      let {
        presenter: { show: showPresenter},
        start: { custom: startCustom },
        end: { custom: endCustom },
        address: { show: showAddress },
      } = taxonomy;

      // if presenter is enabled, show the relevant fields
      set( groupConfiguration, ['course', 'component', 'props', 'fields', 'presenter.name', 'visible'], "on" === showPresenter );
      set( groupConfiguration, ['course', 'component', 'props', 'fields', 'presenter.image', 'visible'], "on" === showPresenter );
      set( groupConfiguration, ['course', 'component', 'props', 'fields', 'presenter.bio', 'visible'], "on" === showPresenter );

      // if start date custom format is provided, show the relevant field
      set( groupConfiguration, ['course', 'component', 'props', 'fields', 'start.pattern', 'visible'], 'on' === startCustom );

      // if end date custom format is provided, show the relevant field
      set( groupConfiguration, ['course', 'component', 'props', 'fields', 'end.pattern', 'visible'], 'on' === endCustom );

      // if show address is enabled, show the relevant field
      set( groupConfiguration, ['course', 'component', 'props', 'fields', 'address.address', 'visible'], "on" === showAddress );
      set( groupConfiguration, ['course', 'component', 'props', 'fields', 'address.city', 'visible'], "on" === showAddress );
      set( groupConfiguration, ['course', 'component', 'props', 'fields', 'address.state', 'visible'], "on" === showAddress );
      set( groupConfiguration, ['course', 'component', 'props', 'fields', 'address.zip', 'visible'], "on" === showAddress );

      break;

    // Event Options Only
    case 'event':
      let {
        presenter: { show: showEventPresenter},
        start: { custom: eventStartDateCustomFormat },
        end: { custom: eventEndDateCustomFormat },
        address: { show: eventShowAddress }
      } = taxonomy;

      // if presenter is enabled, show the relevant fields
      set( groupConfiguration, ['event', 'component', 'props', 'fields', 'presenter.name', 'visible'], "on" === showEventPresenter );
      set( groupConfiguration, ['event', 'component', 'props', 'fields', 'presenter.image', 'visible'], "on" === showEventPresenter );
      set( groupConfiguration, ['event', 'component', 'props', 'fields', 'presenter.bio', 'visible'], "on" === showEventPresenter );

      // if start date custom format is provided, show the relevant field
      set( groupConfiguration, ['event', 'component', 'props', 'fields', 'start.pattern', 'visible'], 'on' === eventStartDateCustomFormat );

      // if end date custom format is provided, show the relevant field
      set( groupConfiguration, ['event', 'component', 'props', 'fields', 'end.pattern', 'visible'], 'on' === eventEndDateCustomFormat );

      // if show address is enabled, show the relevant field
      set( groupConfiguration, ['event', 'component', 'props', 'fields', 'address.address', 'visible'], "on" === eventShowAddress );
      set( groupConfiguration, ['event', 'component', 'props', 'fields', 'address.city', 'visible'], "on" === eventShowAddress );
      set( groupConfiguration, ['event', 'component', 'props', 'fields', 'address.state', 'visible'], "on" === eventShowAddress );
      set( groupConfiguration, ['event', 'component', 'props', 'fields', 'address.zip', 'visible'], "on" === eventShowAddress );

      break;

    // Exam Options Only
    case 'exam':
      let { 
        type, 
        filing: {chooser: examFilingChooser, custom: examFilingCustom },  
        published: { custom: examPublishedCustom } 
      } = taxonomy;

      // if published date custom format is provided, show the relevant field
      set( groupConfiguration, ['exam', 'component', 'props', 'fields', 'published.pattern', 'visible'], 'on' === examPublishedCustom );

      // if final filing date picker is provided, show the relevant fields
      set( groupConfiguration, ['exam', 'component', 'props', 'fields', 'filing.picker', 'visible'], 'on' === examFilingChooser );
      set( groupConfiguration, ['exam', 'component', 'props', 'fields', 'filing.date', 'visible'], 'off' === examFilingChooser );

      // if final filing date custom format is provided, show the relevant field
      set( groupConfiguration, ['exam', 'component', 'props', 'fields', 'filing.pattern', 'visible'], 'on' === examFilingCustom );

      // show relevant exam type field
      set( groupConfiguration, ['exam', 'component', 'props', 'fields', 'url', 'visible'], 'web' === type );
      set( groupConfiguration, ['exam', 'component', 'props', 'fields', 'address.address', 'visible'], 'location' === type );
      set( groupConfiguration, ['exam', 'component', 'props', 'fields', 'address.city', 'visible'], 'location' === type );
      set( groupConfiguration, ['exam', 'component', 'props', 'fields', 'address.state', 'visible'], 'location' === type );
      set( groupConfiguration, ['exam', 'component', 'props', 'fields', 'address.zip', 'visible'], 'location' === type );
      break;
      
    // Jobs Options Only
    case 'jobs':
      let {
        agency: { show: showAboutAgency },
        salary: { show: showSalary },
        posted: { custom:postedCustom },
        filing: { chooser: jobsFilingChooser, custom: jobsFilingCustom },
        apply: { show: showApplyTo },
        questions: { show: showQuestions },
      } = taxonomy;

      // if show about agency is provided, show the relevant field
      set( groupConfiguration, ['jobs', 'component', 'props', 'fields', 'agency.name', 'visible'], 'on' === showAboutAgency );
      set( groupConfiguration, ['jobs', 'component', 'props', 'fields', 'agency.about', 'visible'], 'on' === showAboutAgency );
      set( groupConfiguration, ['jobs', 'component', 'props', 'fields', 'agency.address', 'visible'], 'on' === showAboutAgency );
      set( groupConfiguration, ['jobs', 'component', 'props', 'fields', 'agency.city', 'visible'], 'on' === showAboutAgency );
      set( groupConfiguration, ['jobs', 'component', 'props', 'fields', 'agency.state', 'visible'], 'on' === showAboutAgency );
      set( groupConfiguration, ['jobs', 'component', 'props', 'fields', 'agency.zip', 'visible'], 'on' === showAboutAgency );

      // if show salary is provided, show the relevant field
      set( groupConfiguration, ['jobs', 'component', 'props', 'fields', 'salary.min', 'visible'], 'on' === showSalary );
      set( groupConfiguration, ['jobs', 'component', 'props', 'fields', 'salary.max', 'visible'], 'on' === showSalary );

      // if posted date custom format is provided, show the relevant field
      set( groupConfiguration, ['jobs', 'component', 'props', 'fields', 'posted.pattern', 'visible'], 'on' === postedCustom );

      // if final filing date chooser is provided, show the relevant fields
      set( groupConfiguration, ['jobs', 'component', 'props', 'fields', 'filing.picker', 'visible'], 'on' === jobsFilingChooser );
      set( groupConfiguration, ['jobs', 'component', 'props', 'fields', 'filing.date', 'visible'], 'off' === jobsFilingChooser );

      // if final filing date custom format is provided, show the relevant field
      set( groupConfiguration, ['jobs', 'component', 'props', 'fields', 'filing.pattern', 'visible'], 'on' === jobsFilingCustom );

      // if show apply to is provided, show the relevant field
      set( groupConfiguration, ['jobs', 'component', 'props', 'fields', 'apply.dept', 'visible'], 'on' === showApplyTo );
      set( groupConfiguration, ['jobs', 'component', 'props', 'fields', 'apply.name', 'visible'], 'on' === showApplyTo );
      set( groupConfiguration, ['jobs', 'component', 'props', 'fields', 'apply.address', 'visible'], 'on' === showApplyTo );
      set( groupConfiguration, ['jobs', 'component', 'props', 'fields', 'apply.city', 'visible'], 'on' === showApplyTo );
      set( groupConfiguration, ['jobs', 'component', 'props', 'fields', 'apply.state', 'visible'], 'on' === showApplyTo );
      set( groupConfiguration, ['jobs', 'component', 'props', 'fields', 'apply.zip', 'visible'], 'on' === showApplyTo );

      // if show questions is provided, show the relevant field
      set( groupConfiguration, ['jobs', 'component', 'props', 'fields', 'questions.name', 'visible'], 'on' === showQuestions );
      set( groupConfiguration, ['jobs', 'component', 'props', 'fields', 'questions.phone', 'visible'], 'on' === showQuestions );
      set( groupConfiguration, ['jobs', 'component', 'props', 'fields', 'questions.email', 'visible'], 'on' === showQuestions );

      break;

    // News Options Only
    case 'news':
      let {published: { custom: newsPublishedCustom }} = taxonomy;

      // if custom format is provided, show the relevant field
      set( groupConfiguration, ['news', 'component', 'props', 'fields', 'published.pattern', 'visible'], 'on' === newsPublishedCustom );

      break;
      
    // Profile Options Only
    case 'profile':
      let { career: { show: showCareer }, fields: { show: showFields } } = taxonomy;

      // if career is provided, show the relevant field
      set( groupConfiguration, ['profile', 'component', 'props', 'fields', 'career.title', 'visible'], 'on' === showCareer );
      set( groupConfiguration, ['profile', 'component', 'props', 'fields', 'career.position', 'visible'], 'on' === showCareer );

      // if additional fields are provided, show the relevant field
      set( groupConfiguration, ['profile', 'component', 'props', 'fields', 'fields.line1', 'visible'], 'on' === showFields );
      set( groupConfiguration, ['profile', 'component', 'props', 'fields', 'fields.line2', 'visible'], 'on' === showFields );
      set( groupConfiguration, ['profile', 'component', 'props', 'fields', 'fields.line3', 'visible'], 'on' === showFields );

      break;
  }

  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}