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
    advanced?: {
      show?: FormatBreakpointStateAttr<OnOff>;
      alignment?: FormatBreakpointStateAttr<string>;
    };
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
      published?: {
        date?: string;
        custom?: OnOff;
        pattern?: string;
      };
      location?: string;
    }>;
  };

  profile?: {
    innerContent?: FormatBreakpointStateAttr<{
      prefix?: string;
      name?: string;
      career?: {
        show?: OnOff;
        title?: string;
        position?: string;
      };
      fields?: {
        show?: OnOff;
        line1?: string;
        line2?: string;
        line3?: string;
      };
    }>;
  };

  exam?: {
    innerContent?: FormatBreakpointStateAttr<{
      id?: string;
      class?: string;
      status?: string;
      published?: {
        date?: string;
        custom?: OnOff;
        pattern?: string;
      };
      filing?: {
        date?: string;
        custom?: OnOff;
        pattern?: string;
        chooser?: OnOff;
        picker?: string
      };
      type?: string;
      url?: string;
      address?: {
        address?: string;
        city?: string;
        state?: string;
        zip?: string;
      };
    }>;
  };

  course?: {
    innerContent?: FormatBreakpointStateAttr<{
      presenter?: {
        show?: OnOff;
        name?: string;
        image?: Element.Types.Image.InnerContent.AttributeValue;
        bio?: string;
      };
      start?: {
        date?: string;
        custom?: OnOff;
        pattern?: string;
      };
      end?: {
        date?: string;
        custom?: OnOff;
        pattern?: string;
      };
      address?: {
        show?: OnOff;
        address?: string;
        city?: string;
        state?: string;
        zip?: string;
      };
      show_map?: OnOff;
      registration_type?: string;
      cost?: string;
    }>;
  };

  event?: {
    innerContent?: FormatBreakpointStateAttr<{
      organizer?: string;
      presenter?: {
        show?: OnOff;
        name?: string;
        image?: Element.Types.Image.InnerContent.AttributeValue;
        bio?: string;
      };
      start?: {
        date?: string;
        custom?: OnOff;
        pattern?: string;
      };
      end?: {
        date?: string;
        custom?: OnOff;
        pattern?: string;
      };
      address?: {
        show?: OnOff;
        address?: string;
        city?: string;
        state?: string;
        zip?: string;
      };
      registration_type?: string;
      cost?: string;
    }>;
  };

  jobs?: {
    innerContent?: FormatBreakpointStateAttr<{
      agency?: {
        show?: OnOff;
        name?: string;
        about?: string;
        address?: {
          address?: string;
          city?: string;
          state?: string;
          zip?: string;
        };
      };
      hours?: string;
      salary?: {
        show?: OnOff;
        min?: string;
        max?: string;
      };
      posted?: {
        date?: string;
        custom?: OnOff;
        pattern?: string;
      };
      position_number?: string;
      rpa_number?: string;
      ds_url?: string;
      filing?: {
        date?: string;
        custom?: OnOff;
        pattern?: string;
        chooser?: OnOff;
        picker?: string;
      };
      apply?: {
        show?: OnOff;
        dept?: string;
        name?: string;
        address?: {
          address?: string;
          city?: string;
          state?: string;
          zip?: string;
        };
      };
      questions?: {
        show?: OnOff;
        name?: string;
        email?: string;
        phone?: string;
      };
    }>;
  };
}

export type PostDetailModuleEditProps = ModuleEditProps<ModuleAttrs>;