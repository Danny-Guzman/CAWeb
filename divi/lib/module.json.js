import fs from 'fs';
import path from 'path';

const MODULES_PATH = path.resolve('src', 'modules');

// only get module.override.json files
let overrides = fs.readdirSync(MODULES_PATH, { recursive: true }).filter(file => file.endsWith('module.override.json'));

// iterate over the overrides
overrides.forEach(file => {
    // Overrides are intended to be used for fullwidth modules only
    let moduleName = file.substring(0, file.indexOf('/')).replace('Fullwidth', '');

    // get override content
    let override = JSON.parse(fs.readFileSync(path.join(MODULES_PATH, file), 'utf-8'));

    // get module json data
    let moduleJson = JSON.parse(fs.readFileSync(path.join(MODULES_PATH, moduleName, 'module.json'), 'utf-8'));

    // merge override into module json
    // we want to ensure that the 'active' property is set based on the override, defaulting to true if not specified
    // we also want the 'active' property to be the first property in the merged object
    moduleJson = { 
        "_comment": "!!! THIS IS AN AUTOMATICALLY GENERATED FILE - DO NOT EDIT !!!",
        active: override.active ?? true,
        ...moduleJson, 
        ...override 
    };

    // write merged content back to module.json
    fs.writeFileSync(path.join(MODULES_PATH, `Fullwidth${moduleName}`, 'module.json'), JSON.stringify(moduleJson, null, 2), 'utf-8');

});
