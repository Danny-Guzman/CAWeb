// External Dependencies.
import React, { ReactElement, useRef, useEffect, useState } from 'react';
import { map } from 'lodash';

// Divi Dependencies.
import {
  ModuleContainer,
} from '@divi/module';
import { useFetch } from '@divi/rest';
import {
  getAttrByMode,
} from '@divi/module-utils';

// Local Dependencies.
import { GithubModuleEditProps } from './types.ts';
import { ModuleStyles } from './styles.jsx';
import { moduleClassnames } from './module-classnames.js';
import { ModuleScriptData } from './module-script-data.jsx';
import { addQueryArgs } from '@wordpress/url';

let etag = '';

/**
 * Create the request URL for fetching GitHub repositories.
 *
 * @param {Object} params The parameters for the request.
 * @param {string} params.organization The GitHub organization.
 * @param {string} params.repo_type The type of repositories to fetch.
 * @param {number} params.per_page The number of repositories per page.
 * @param {string} params.rate_limit The rate limit setting.
 * @param {string} params.client_id The GitHub client ID.
 * @param {string} params.client_secret The GitHub client secret.
 *
 * @returns {string} The constructed request URL.
 */
const create_request_url = ({
  organization,
  repo_type,
  per_page,
  rate_limit,
  client_id,
  client_secret,
}) => {

  // if organization is provided, construct the request URL
  if( organization ){
    let args = {
      type: repo_type,
      per_page
    };
    
    // if rate limit is on, append client ID and secret if available
    if( 'on' === rate_limit ){
 
      // append client ID and secret if available
      if( client_id ){
        args.client_id = client_id;
      }

      // append client secret if available
      if( client_secret ){
        args.client_secret = client_secret;
      }
    }

    return addQueryArgs(`https://api.github.com/orgs/${organization}/repos`, args );
  }
}

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {GithubModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = ({
    attrs,
    id,
    name,
    elements,
  }) => {
    let request = getAttrByMode(attrs?.request?.innerContent);
    let request_url = create_request_url(request);
  
    const fetchAbortRef = useRef(new AbortController());
    
    const [response, setResponse] = useState([]);
    const [pagination, setPagination] = useState([]);
    const [isLoading, setLoading] = useState(null);
    
    useEffect(() => {
      if(fetchAbortRef.current) {
        fetchAbortRef.current.abort();
      }
      
      fetchAbortRef.current = new AbortController();
        
      if( !request_url ) {
        return;
      }
  
      setLoading(true);

      let args = {
        method:    'GET',
        signal:    fetchAbortRef.current.signal,
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      };

      // add authorization header if access token is provided
      if( request?.access_token ){
        args.headers['Authorization'] = `Bearer ${request.access_token}`;
      }

      // add etag header if available
      if( etag ){
        args.headers['If-None-Match'] = etag;
      }

      // fetch the repository data from GitHub API
      window.fetch(request_url, args)
      .then((response) => {
        etag = response.headers.get('etag');

        // 200 is returned with the repository data in JSON format
        if( 200 === response.status ){
          
          // split the first time at the comma to separate each link
          let parts = response.headers.get('link') ? response.headers.get('link').split(',')
          .map(part => part.split(';')) // split the link at the semi colon for each part
          .map(part => part.map(subPart => subPart.trim())) // trim whitespace from each part
          // extract the URL and relationship from each part
          .map(part => ({
            // 0 element has the url, 1 has the relationship.
            url: part[0].replace(/[<>]/g, ''),
            rel: part[1].replace(/rel="(.*)"/, '$1')
          })) : [];

          setPagination(parts);
          return response.json();
        }
        
        return response;
      })
      .then((data) => {
              
        if( Array.isArray(data) ){
          // set the response state with the fetched repository data
          setResponse(data);

        // 304 is returned when the data has not changed since the last request
        } else if( 304 === response.status ) {
          // set the response state with the previously fetched data if available
          setResponse(response);
        }

        return data;
      })
      .finally(() => {
        setLoading(false);
      })
      
      return () => {
        if(fetchAbortRef.current) {
          fetchAbortRef.current.abort();
        }
      };
  
    }, [request_url, request?.access_token]);
    


    return (
      <ModuleContainer
        attrs={attrs}
        elements={elements}
        id={id}
        name={name}
        stylesComponent={ModuleStyles}
        classnamesFunction={moduleClassnames}
        scriptDataComponent={ModuleScriptData}
      >
        {
          elements.styleComponents({
            attrName: 'module',
          })
        }
        {
          elements.render({
            attrName: 'title',
          })
        }
        <ul className="list-group list-group-flush ps-0">
        {
          false === isLoading && response && map(response, (repo) => {
            return (
              <li className="list-group-item ps-0" key={repo.id}>
                {
                  // Render the repository name with a link if it's not private and the 'link' definition is included
                  request?.definitions?.includes('name') && (
                    <h3>
                      { 
                        ! repo?.private && request?.definitions?.includes('link') ? 
                        <a href={repo.html_url} target="_blank">{repo.name}</a> : 
                        repo.name
                      }
                    </h3>
                  )
                }
                {
                  // render the repository description if the 'description' definition is included
                  request?.definitions?.includes('description') && repo.description && (
                    <p><strong>Project Description: </strong>{repo.description}</p>
                  )
                }
                {
                  // render the repository fork status if the 'fork' definition is included
                  request?.definitions?.includes('fork') && (
                    <p><strong>Project forked by another organization: </strong>{ String(repo.fork).charAt(0).toUpperCase() + String(repo.fork).slice(1) }</p>
                  )
                }
                {
                  // render the repository creation date if the 'created_at' definition is included
                  request?.definitions?.includes('created_at') && (
                    <p><strong>Created on: </strong>{ new Date(repo.created_at).toLocaleDateString('en-US', {month: 'numeric', day: 'numeric', year: 'numeric'}) }</p>
                  )
                }
                {
                  // render the repository updated date if the 'updated_at' definition is included
                  request?.definitions?.includes('updated_at') && (
                    <p><strong>Updated on: </strong>{ new Date(repo.updated_at).toLocaleDateString('en-US', {month: 'numeric', day: 'numeric', year: 'numeric'}) }</p>
                  )
                }
                {
                  // render the repository language if the 'language' definition is included
                  request?.definitions?.includes('language') && (
                    <p><strong>Language: </strong>{repo.language}</p>
                  )
                }
                {
                  // render request email information
                  request?.email && repo.private && (
                    <p>* This is a Private Repository <a className="btn btn-main ms-2" href={`mailto:${request?.email}?subject=${repo.name} Repository Access Request&body=${request?.email_body || ''}`}>Request Access</a></p>
                  )

                }
              </li>
            );
          })
        }
        {
          isLoading && (
            <div className="caweb-github-spinner text-center my-3">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )
        }
        </ul>
        {
          // render pagination if available
          pagination && pagination.length ?
            <div className="caweb-pagination row">
              <strong className="text-center">Page {new URLSearchParams(request_url).get('page') || 1} of {pagination?.filter(link => link.rel === 'last').map(link => new URLSearchParams(link.url).get('page')) || 1}</strong>
              <div className="col">
                {
                  // render first pagination if available
                  pagination?.filter(link => link.rel === 'first').map(link => (
                    <a key={link.rel} data-url={link.url} rel={ link.rel } className="cursor-pointer fs-4 me-3">First</a>
                  ))
                }
                {
                  // render previous pagination if available
                  pagination?.filter(link => link.rel === 'prev').map(link => (
                    <a key={link.rel} data-url={link.url} rel={ link.rel } className="cursor-pointer fs-4 me-3">Prev</a>
                  ))
                }
              </div>
              <div className="col text-end">
                {
                  // render next pagination if available
                  pagination?.filter(link => link.rel === 'next').map(link => (
                    <a key={link.rel} data-url={link.url} rel={ link.rel } className="cursor-pointer fs-4 me-3">Next</a>
                  ))
                }
                {
                  // render last pagination if available
                  pagination?.filter(link => link.rel === 'last').map(link => (
                    <a  key={link.rel} data-url={link.url} rel={ link.rel } className="cursor-pointer fs-4 me-3">Last</a>
                  ))
                }
              </div>
            </div>
           : null
        }
      </ModuleContainer>
    );
}

export {
  ModuleEdit,
};
