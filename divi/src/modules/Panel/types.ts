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
  layout?: {
    innerContent?: FormatBreakpointStateAttr<string>;
  };

  title?: {
    innerContent?: FormatBreakpointStateAttr<string>;
    decoration?: Element.Decoration.PickedAttributes<'font'>;
  };

  content?: {
    innerContent?: FormatBreakpointStateAttr<string>;
  };

  button?: {
    innerContent?: Element.Types.Button.InnerContent.Attributes;
    advanced?: {
      show?: FormatBreakpointStateAttr<OnOff>;
    }
  };

  icon?: {
    innerContent?: Icon.Font.Attributes;
  };
}

export type PanelModuleEditProps = ModuleEditProps<ModuleAttrs>;