// Divi dependencies.
import { ModuleEditProps } from '@divi/module-library';
import {
  FormatBreakpointStateAttr,
  InternalAttrs,
  type Element,
  type Module,
  type OnOff,
  Icon
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
      innerContent?: FormatBreakpointStateAttr<string>
  };

  name?: {
      innerContent?: FormatBreakpointStateAttr<string>
  };

  desc?: {
      innerContent?: FormatBreakpointStateAttr<string>
  };

  address?: {
      innerContent?: FormatBreakpointStateAttr<{
        addr?:string, 
        city?:string
        state?:string
        zip?:string
      }>;
  };

  contact?: {
      innerContent?: FormatBreakpointStateAttr<{
        phone?:string, 
        fax?:string
      }>;
      advanced?: {
        show?: FormatBreakpointStateAttr<OnOff>;
      };
  };

  link?: {
      innerContent?: Element.Types.Button.InnerContent.Attributes;
      advanced?: {
        show?: FormatBreakpointStateAttr<OnOff>;
      };
  };

  icon?: {
      innerContent?: Icon.Font.Attributes;
  };

  image?: {
    innerContent?: Element.Types.Image.InnerContent.Attributes;
  }
}

export type LocationModuleEditProps = ModuleEditProps<ModuleAttrs>;