// Divi Dependencies.
import { ModuleClassnamesParams, textOptionsClassnames } from '@divi/module';
import {
  getAttrByMode,
} from '@divi/module-utils';

import { ModuleAttrs } from './types.ts';

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
    isFirst
  }) => {
    
    let { size } = getAttrByMode(attrs?.tile?.innerContent);
    
    classnamesInstance.add('service-tile');
    classnamesInstance.add(size);
    
    // Text Options.
    classnamesInstance.add(textOptionsClassnames(attrs?.module?.advanced?.text));
};
