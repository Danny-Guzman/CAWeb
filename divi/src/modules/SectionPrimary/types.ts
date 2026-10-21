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
  title?: {
    innerContent?: FormatBreakpointStateAttr<string>;
    decoration?: Element.Decoration.PickedAttributes<'font'>;
  };

  content?: {
    innerContent?: FormatBreakpointStateAttr<string>;
  }

  link?: {
    innerContent?: Element.Types.Button.InnerContent.Attributes;
    advanced?: {
      show?: FormatBreakpointStateAttr<OnOff>;
    }
  };


  image?: {
      innerContent?: Element.Types.Image.InnerContent.Attributes;
      advanced?: {
        alignment?: FormatBreakpointStateAttr<string>;
        fade?: FormatBreakpointStateAttr<string>;
        show?: FormatBreakpointStateAttr<OnOff>;
      };
  };

}

export type SectionPrimaryModuleEditProps = ModuleEditProps<ModuleAttrs>;