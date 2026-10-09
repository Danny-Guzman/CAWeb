import React, { ReactElement, useEffect, useRef } from 'react';
import { useFetch } from '@divi/rest';
import { addQueryArgs } from '@wordpress/url';
import { useSelect } from '@divi/data';

const Footer = ({attributes, postId, showCategories, showTags}) => {
      const fetchAbortRef = useRef(new AbortController());
      let { postCategories: categories, postTags: tags} = useSelect(select => select('divi/page-settings')?.getSettings());
    
      const {
          fetch: fetchCategories,
          response: responseCategories,
          isLoading: isLoadingCategories,
      } = useFetch([]);

      const {
          fetch: fetchTags,
          response: responseTags,
          isLoading: isLoadingTags,
      } = useFetch([]);

      useEffect(() => {
        if(fetchAbortRef.current) {
          fetchAbortRef.current.abort();
        }
        
        fetchAbortRef.current = new AbortController();

        let args = {
          hide_empty: false,
          _fields: 'name'
        };
        
        // get tag names
        if( showTags ) {
            fetchTags({
              restRoute: addQueryArgs('/wp/v2/tags', {include: tags, ...args}), 
              method:    'GET',
            })
        }

        // get categories name
        if( showCategories ) {
            fetchCategories({
              restRoute: addQueryArgs('/wp/v2/categories', {include: categories, ...args}), 
              method:    'GET',
            })
        }


      });

      let footerContents = [
        ! isLoadingTags && 0 < responseTags?.length && (
            <div className="float-start me-4">
                Tags or Keywords
                <ul>
                  {responseTags.map((tag,i) => (
                    <li key={`tag-${i}`}>{tag.name}</li>
                  ))}
                </ul>
            </div>
          ),
        ! isLoadingCategories && 0 < responseCategories?.length && (
            <>
                Categories
                <ul>
                  {responseCategories.map((category,i) => (
                    <li key={`category-${i}`}>{category.name}</li>
                  ))}
                </ul>
            </>
          )
      ].filter(Boolean);

  return (
    <footer className="keywords mt-0">
        { 
          footerContents
        }
    </footer>
  );
};

export default Footer;