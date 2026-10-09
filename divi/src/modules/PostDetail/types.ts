// Divi dependencies.
import { ModuleEditProps } from '@divi/module-library';
import {
  FormatBreakpointStateAttr,
  InternalAttrs,
  type Element,
  type Module,
  type OnOff
} from '@divi/types';

export interface ModuleCssAttr extends Module.Css.AttributeValue {
}

export type ModuleCssGroupAttr = FormatBreakpointStateAttr<ModuleCssAttr>;

export interface ModuleAttrs extends InternalAttrs {
  // CSS options is used across multiple elements inside the module thus it deserves its own top property.
  css?: ModuleCssGroupAttr;

  module?: {
    meta?: Element.Meta.Attributes;
    advanced?: {
      link?: Element.Advanced.Link.Attributes;
      htmlAttributes?: Element.Advanced.IdClasses.Attributes;
      text?: Element.Advanced.Text.Attributes;
    };
    decoration?: Element.Decoration.PickedAttributes<
      'animation' |
      'background' |
      'border' |
      'boxShadow' |
      'disabledOn' |
      'filters' |
      'overflow' |
      'position' |
      'scroll' |
      'sizing' |
      'spacing' |
      'sticky' |
      'transform' |
      'transition' |
      'zIndex'
    >;
  };

  // Fields
  layout?: {
    innerContent?: FormatBreakpointStateAttr<string>;
  };

  image?: {
    innerContent?: FormatBreakpointStateAttr<OnOff>;
    advanced?: FormatBreakpointStateAttr<{
      align?: OnOff;
    }>;
  };

  content?: {
    innerContent?: FormatBreakpointStateAttr<string>;
  };

  tags?: {
    innerContent?: FormatBreakpointStateAttr<OnOff>;
  };

  categories?: {
    innerContent?: FormatBreakpointStateAttr<OnOff>;
  };

  news?: {
    innerContent?: FormatBreakpointStateAttr<{
      author?: string;
      publish_date?: string;
      publish_date_custom_format?: string;
      location?: string;
    }>;
    advanced?: FormatBreakpointStateAttr<{
      custom_format?: OnOff;
    }>;
  };

  profile?: {
    innerContent?: FormatBreakpointStateAttr<{
      prefix?: string;
      name?: string;
      career_title?: string;
      career_position?: string;
      career_line_1?: string;
      career_line_2?: string;
      career_line_3?: string;
    }>;
    advanced?: FormatBreakpointStateAttr<{
      career?: string;
      additional_fields?: string;
    }>;
  };

  exam?: {
    innerContent?: FormatBreakpointStateAttr<{
      id?: string;
      class?: string;
      status?: string;
      published_date?: string;
      published_date_custom_format?: string;
      final_filing_date?: string;
      final_filing_date_picker?: string;
      final_filing_date_custom_format?: string;
      type?: string;
      url?: string;
      address?: string;
      city?: string;
      state?: string;
      zip?: string;
    }>;
    advanced?: FormatBreakpointStateAttr<{
      published_date_custom_format?: OnOff;
      date_chooser?: OnOff;
      final_filing_date_custom_format?: OnOff;
    }>;
  };

  course?: {
    innerContent?: FormatBreakpointStateAttr<{
      presenter_name?: string;
      presenter_image?: string;
      presenter_bio?: string;
      start_date?: string;
      start_date_custom_format?: string;
      end_date?: string;
      end_date_custom_format?: string;
      address?: string;
      city?: string;
      state?: string;
      zip?: string;
      registration_type?: string;
      cost?: string;
    }>;
    advanced?: FormatBreakpointStateAttr<{
      show_presenter?: OnOff;
      start_date_custom_format?: OnOff;
      end_date_custom_format?: OnOff;
      show_address?: OnOff;
      show_map?: OnOff;
    }>;
  };

  event?: {
    innerContent?: FormatBreakpointStateAttr<{
      organizer?: string;
      presenter_name?: string;
      presenter_image?: string;
      presenter_bio?: string;
      start_date?: string;
      start_date_custom_format?: string;
      end_date?: string;
      end_date_custom_format?: string;
      address?: string;
      city?: string;
      state?: string;
      zip?: string;
      registration_type?: string;
      cost?: string;
    }>;
    advanced?: FormatBreakpointStateAttr<{
      show_presenter?: OnOff;
      start_date_custom_format?: OnOff;
      end_date_custom_format?: OnOff;
      show_address?: OnOff;
    }>;
  };

  jobs?: {
    innerContent?: FormatBreakpointStateAttr<{
      agency_name?: string;
      agency_address?: string;
      agency_city?: string;
      agency_state?: string;
      agency_zip?: string;
      agency_about?: string;
      hours?: string;
      salary_min?: string;
      salary_max?: string;
      posted_date?: string;
      posted_date_custom_format?: string;
      position_number?: string;
      rpa_number?: string;
      ds_url?: string;
      final_filing_date?: string;
      final_filing_date_picker?: string;
      final_filing_date_custom_format?: string;
      apply_to_dept?: string;
      apply_to_name?: string;
      apply_to_address?: string;
      apply_to_city?: string;
      apply_to_state?: string;
      apply_to_zip?: string;
      questions_name?: string;
      questions_email?: string;
      questions_phone?: string;
    }>;
    advanced?: FormatBreakpointStateAttr<{
      show_about_agency?: OnOff;
      show_salary?: OnOff;
      posted_date_custom_format?: OnOff;
      final_filing_date_chooser?: OnOff;
      final_filing_date_custom_format?: OnOff;
      show_apply_to?: OnOff;
      show_questions?: OnOff;
    }>;
  };
}

export type PostDetailModuleEditProps = ModuleEditProps<ModuleAttrs>;