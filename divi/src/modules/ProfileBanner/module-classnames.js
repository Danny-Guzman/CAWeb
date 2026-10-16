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
  const {
    portrait
  } = attrs;
      
  let { vertical } = getAttrByMode(portrait?.advanced);
  
  classnamesInstance.add('executive-profile');

  // add vertical class if portrait is vertical
  classnamesInstance.add(vertical === 'on' ? 'vertical' : '');

  // Text Options.
  classnamesInstance.add(textOptionsClassnames(attrs?.module?.advanced?.text));
};
