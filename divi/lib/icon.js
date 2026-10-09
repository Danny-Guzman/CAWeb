#!/usr/bin/env node

/**
 * External dependencies
 */
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import { optimize, loadConfig } from 'svgo';
import { parseSync } from 'svgson';

// SVGO Config
const svgoConfig = await loadConfig( path.join( process.cwd(), 'lib','svgo.config.js' ) );

const parseSVG = (svgFileName) => {
    return fs.existsSync(svgFileName) ? 
        // parse using svgson
        parseSync(
            // optimize svg using svgo
            optimize(
                // read svg file content
                // double encode the & otherwise when we write the file the & would be interpreted as an entity
                fs.readFileSync(svgFileName, 'utf-8').toString().replace(/&/g, '&amp;'),
                svgoConfig
            ).data
        )
        : [];
};

const getGlyphs = (svgObj) => {
    const svg = 'string' === typeof svgObj ? parseSVG(svgObj) : svgObj;

    return svg.children
        .filter( e => 'defs' === e.name )[0].children[0].children
        .filter( e => 'glyph' === e.name );
};

// Constants
const require = createRequire( import.meta.url );
const iconsPath = path.join(process.cwd(), 'src', 'icons');

// Main SVG file
const fontsDir = path.resolve( require.resolve('@caweb/icon-library'), '..', 'fonts');
const mainSVGFile = fs.readdirSync( fontsDir, { recursive: true } ).filter( (e) => e.endsWith( '.svg' ) )[0];

// All icons from the main SVG file
let allIcons = [];

// loop through the SVG file list and add the icon.data to allIcons
getGlyphs( path.join( fontsDir, mainSVGFile ) ).forEach( glyph => {
    // glyph attributes
     let { 
          'glyph-name': name, 
          'data-tags': tags, 
          'd' : dimensions,
          unicode
     } = glyph.attributes;

     // if the name is not defined we skip it
     if( ! name ){
          return;
     }
     
     // if there is a unicode we can continue
     if( unicode ){
        // convert the glyph name to a human-readable title case format
        let titleName = name.replaceAll(/[-_]/g, ' ').toLowerCase().split(' ').map( ( w ) => w.charAt(0).toUpperCase() + w.slice(1) ).join(' ');

        // some minor titleName corrections just for consistency purposes
        if( titleName === 'Caweb' ){
            titleName = 'CAWeb';
        }

        // remove the name from the tags.
        tags = tags ? tags.replace( name, '' ).split( ',' ).filter(Boolean).join(' ') : '';

        // create the Icon.data json object
        // this has to match @divi/types/src/icon/index.ts Icon.Type['data']
        let iconData = {
            searchTerms: [
                ...new Set(['caweb',
                name,
                titleName,
                tags].map( t => t.trim().toLowerCase()))
            ].filter(Boolean).join(' '),
            unicode: unicode.replace(/&amp;/g, '&'),
            name: titleName,
            styles: [
                'caweb'
            ],
            fontWeight: parseInt( 400 ),
            decodedUnicode: String.fromCodePoint(parseInt(unicode.replace(/&amp;/g, '&').replace(/[&#x;]/g,''), 16))
        }

        // add to all icons
        allIcons.push( iconData );
     }


});

// create the icons directory
fs.mkdirSync( iconsPath, { recursive: true } );

// write the full icon list json file
fs.writeFileSync(
    path.join( iconsPath, 'iconList.json' ),
    JSON.stringify( allIcons, null, 4 ), 
    'utf8'
);
