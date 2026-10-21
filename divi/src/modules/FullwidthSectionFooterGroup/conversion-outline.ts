/* eslint-disable @typescript-eslint/naming-convention */
import { ModuleConversionOutline } from '@divi/types';

// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields

export const conversionOutline: ModuleConversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation:   'module.decoration.animation',
    background:  'module.decoration.background',
    borders:     {
      default: 'module.decoration.border',
    },
    box_shadow: {
      default: 'module.decoration.boxShadow',
    },
    disabled_on: 'module.decoration.disabledOn',
    filters:     {
      default: 'module.decoration.filters',
    },
    fonts: {
      body:       'content.decoration.bodyFont.body',
      body_link:  'content.decoration.bodyFont.link',
      body_ol:    'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul:    'content.decoration.bodyFont.ul',
      header:     'title.decoration.font',
    },
    height:          'module.decoration.sizing',
    link_options:    'module.advanced.link',
    margin_padding:  'module.decoration.spacing',
    max_width:       'module.decoration.sizing',
    module:          'module.advanced.htmlAttributes',
    overflow:        'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll:          'module.decoration.scroll',
    sticky:          'module.decoration.sticky',
    text:            'module.advanced.text',
    text_shadow:     {
      default: 'module.advanced.text.textShadow',
    },
    transform:  'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index:    'module.decoration.zIndex',
  },
  css: {
    after:         'css.*.after',
    before:        'css.*.before',
    main_element:  'css.*.mainElement',
    content:       'css.*.content',
    title:         'css.*.title',
  },
  module: {
    group_title: 'title.innerContent.*',
    heading_size: 'title.decoration.font.font.*.headingLevel',
    heading_color: 'title.decoration.font.font.*.color',

    group_show_more_button: 'button.advanced.show.*',
    group_url: 'button.innerContent.*.linkUrl',
    
    text_color: 'content.decoration.font.font.*.color',
    display_link_as_button: 'content.advanced.displayLink.*',
    
    group_icon_button: 'icon.innerContent.*.show',
    group_icon: 'icon.innerContent.*',

    group_link1_show: 'link1.advanced.show.*',
    group_link_text1: 'link1.innerContent.*.text',
    group_link_url1: 'link1.innerContent.*.linkUrl',

    group_link2_show: 'link2.advanced.show.*',
    group_link_text2: 'link2.innerContent.*.text',
    group_link_url2: 'link2.innerContent.*.linkUrl',

    group_link3_show: 'link3.advanced.show.*',
    group_link_text3: 'link3.innerContent.*.text',
    group_link_url3: 'link3.innerContent.*.linkUrl',

    group_link4_show: 'link4.advanced.show.*',
    group_link_text4: 'link4.innerContent.*.text',
    group_link_url4: 'link4.innerContent.*.linkUrl',
    
    group_link5_show: 'link5.advanced.show.*',
    group_link_text5: 'link5.innerContent.*.text',
    group_link_url5: 'link5.innerContent.*.linkUrl',

    group_link6_show: 'link6.advanced.show.*',
    group_link_text6: 'link6.innerContent.*.text',
    group_link_url6: 'link6.innerContent.*.linkUrl',

    group_link7_show: 'link7.advanced.show.*',
    group_link_text7: 'link7.innerContent.*.text',
    group_link_url7: 'link7.innerContent.*.linkUrl',

    group_link8_show: 'link8.advanced.show.*',
    group_link_text8: 'link8.innerContent.*.text',
    group_link_url8: 'link8.innerContent.*.linkUrl',

    group_link9_show: 'link9.advanced.show.*',
    group_link_text9: 'link9.innerContent.*.text',
    group_link_url9: 'link9.innerContent.*.linkUrl',

    group_link10_show: 'link10.advanced.show.*',
    group_link_text10: 'link10.innerContent.*.text',
    group_link_url10: 'link10.innerContent.*.linkUrl',

  },
  valueExpansionFunctionMap: {
    group_icon: "CAWeb\\Modules\\Utils\\ValueExpansion::convertModuleIcon",
  }
};
