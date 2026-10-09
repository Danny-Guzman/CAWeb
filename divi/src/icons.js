// WordPress Dependencies.
 
import { addAction, addFilter } from '@wordpress/hooks';
 
// Divi Dependencies.
import { iconList, getIconList } from '@divi/icon-library';

// Icons.
import * as moduleLogo from './icons/module-logo/module-logo.tsx';
import iconLibrary from './icons/iconList.json';


// This adds the CAWeb Icon to the Modules Library.
const addCAWebModuleIcon = ( icons ) => {
	return {
		...icons, // This is important. Without this, all other icons will be overwritten.
		[moduleLogo.name]: moduleLogo
	};
};
	
//  Add module icons to the icon library.
addFilter( 'divi.iconLibrary.icon.map', 'caweb.addCAWebModuleIcon', addCAWebModuleIcon );

// this adds the CAWeb Icon type to the icon library.
addFilter( 'divi.iconLibrary.fontIcon.types', 'caweb.iconLibrary', (types) => {
	types.push('caweb');
	return types;
} );

// this adds the CAWeb Icons filter option to the icon library.
addFilter( 'divi.iconLibrary.fontIcon.filterOptions', 'caweb.iconLibrary', (options) => {
	options.caweb = { label: 'CAWeb Icons' };
	return options;
} );

// this maps the CAWeb Icons to CaGov font-family.
addFilter( 'divi.iconLibrary.fontIcon.families', 'caweb.iconLibrary', (families) => {
	families.caweb = 'CaGov';
	return families;
} );

// the divi filters aren't all working yet, so this is a good place to add icons to the iconList
// addFilter( 'divi.iconLibrary.fontIcon.list', 'caweb.addCAWebModuleIcon', (args) => {
// 	console.log( 'args from divi.iconLibrary.fontIcon.list filter', args );
// 	return args;
// } );

addAction( 
 	'divi.visualBuilder.registerStores.after',
 	'caweb.iconList',
 	( arr ) => {

		// add the CAWeb Icon Library to the Icon List
		iconList.push( ...iconLibrary );
 	}
);
	 