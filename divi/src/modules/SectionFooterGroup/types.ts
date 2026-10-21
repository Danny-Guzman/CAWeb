// Divi dependencies.
import { ModuleEditProps } from '@divi/module-library';
import {
  FormatBreakpointStateAttr,
  InternalAttrs,
  type Element,
  type Module,
  type OnOff,
  type Icon
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
  title?: {
    innerContent?: FormatBreakpointStateAttr<string>;
    decoration?: Element.Decoration.PickedAttributes<'font'>;
  };

  button?: {
    innerContent?: Element.Types.Button.Attributes;
    advanced?: {
      show?: FormatBreakpointStateAttr<OnOff>;
    }
  };
  
  content?: {
    advanced?: {
      displayLink?: FormatBreakpointStateAttr<OnOff>
    },
    decoration?: Element.Decoration.PickedAttributes<'font'>;
  };
  
  icon?: {
    innerContent?: Icon.Font.Attributes;
  };

  link1?: {
    innerContent?: Element.Types.Button.Attributes;
    advanced?: {
      show?: FormatBreakpointStateAttr<OnOff>;
    }
  };

  link2?: {
    innerContent?: Element.Types.Button.Attributes;
    advanced?: {
      show?: FormatBreakpointStateAttr<OnOff>;
    }
  };

  link3?: {
    innerContent?: Element.Types.Button.Attributes;
    advanced?: {
      show?: FormatBreakpointStateAttr<OnOff>;
    }
  };

  link4?: {
    innerContent?: Element.Types.Button.Attributes;
    advanced?: {
      show?: FormatBreakpointStateAttr<OnOff>;
    }
  };

  link5?: {
    innerContent?: Element.Types.Button.Attributes;
    advanced?: {
      show?: FormatBreakpointStateAttr<OnOff>;
    }
  };

  link6?: {
    innerContent?: Element.Types.Button.Attributes;
    advanced?: {
      show?: FormatBreakpointStateAttr<OnOff>;
    }
  };

  link7?: {
    innerContent?: Element.Types.Button.Attributes;
    advanced?: {
      show?: FormatBreakpointStateAttr<OnOff>;
    }
  };

  link8?: {
    innerContent?: Element.Types.Button.Attributes;
    advanced?: {
      show?: FormatBreakpointStateAttr<OnOff>;
    }
  };

  link9?: {
    innerContent?: Element.Types.Button.Attributes;
    advanced?: {
      show?: FormatBreakpointStateAttr<OnOff>;
    }
  };

  link10?: {
    innerContent?: Element.Types.Button.Attributes;
    advanced?: {
      show?: FormatBreakpointStateAttr<OnOff>;
    }
  };
}

export type SectionFooterGroupModuleEditProps = ModuleEditProps<ModuleAttrs>;