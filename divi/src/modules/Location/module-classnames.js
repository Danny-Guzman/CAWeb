import { ModuleAttrs } from './types.ts';

// Divi Dependencies.
import { ModuleClassnamesParams, textOptionsClassnames } from '@divi/module';
import {
  getAttrByMode,
} from '@divi/module-utils';

/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
export const moduleClassnames = ({
  classnamesInstance,
  attrs,
}) => {

  let layout = getAttrByMode(attrs?.layout?.innerContent);

  classnamesInstance.add('location');
  
  classnamesInstance.add(layout);

  // Text Options.
  classnamesInstance.add(textOptionsClassnames(attrs?.module?.advanced?.text));
};
