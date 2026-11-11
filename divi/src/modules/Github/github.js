window.addEventListener("load", (event) => {

    // Attach click event listeners to pagination links within the GitHub module
    document.querySelectorAll('.et_pb_ca_github .caweb-github-pagination a').forEach(el => el.addEventListener('click', requestRepos));

    /**
     * Handles the request for GitHub repositories when a pagination link is clicked.
     *
     * @param {Event} e The click event.
     */
    function requestRepos(e){
        e.preventDefault();

        let module = this.parentElement.parentElement.parentElement;
        let pagination = module.querySelector('.caweb-github-pagination');
        let paginationLinks = [];
        let spinner = module.querySelector('.caweb-github-spinner');
        let ul = module.querySelector('ul.list-group');
        let currentPage = new URL(this.dataset.url ).searchParams.get('page');
        let definitions = ul.dataset.definitions.split('|') || [];
        let requestEmail = ul.dataset.email;
        let requestEmailBody = ul.dataset.emailBody;
        let info = ul.dataset.info ? JSON.parse(atob(ul.dataset.info).split('').reverse().join('')) : {};
        
        // show spinner
        ul.classList.add('d-none');
        pagination.classList.add('d-none');
        spinner.classList.remove('d-none');

        // empty the current list of repositories
        ul.innerHTML = '';

        // empty pagination controls
        pagination.innerHTML = '';

        let headers = {
            'Accept': 'application/vnd.github.v3+json'
        }

        // Add the authorization header if a token is available in the info object
        if( info.token ){
            headers['Authorization'] = 'Bearer ' + info.token;
        }

        fetch(
            this.dataset.url,
            {
                action: 'caweb_github_module_repo_request',
                nonce: caweb_github_module_params.nonce,
                headers
            }
        )
        .then( response => {
            // split the first time at the comma to separate each link
            paginationLinks = response.headers.get('link') ? response.headers.get('link').split(',')
            .map(part => part.split(';')) // split the link at the semi colon for each part
            .map(part => part.map(subPart => subPart.trim())) // trim whitespace from each part
            // extract the URL and relationship from each part
            .map(part => ({
              // 0 element has the url, 1 has the relationship.
              url: part[0].replace(/[<>]/g, ''),
              rel: part[1].replace(/rel="(.*)"/, '$1')
            })) : [];
            
            return response.json();
        } )
        .then( data => {
            
            // append new repos
            Object.entries(data).forEach( ([i, repo]) => {
                let li = document.createElement('LI');
                
                li.classList.add('list-group-item', 'border-0');

                // Render the repository name with a link if it's not private and the 'link' definition is included
                if( definitions.includes('name') ){
                    let name = document.createElement('H3');

                    if( repo.private && definitions.includes('link') ){
                        let link = document.createElement('A');
                        link.href = repo.html_url;
                        link.target = '_blank';
                        link.rel = 'noopener noreferrer';
                        link.textContent = repo.name;
                        name.append(link);
                    }else{
                        name.textContent = repo.name
                    }
                    
                    // append name element to the list item
                    li.append(name);
                }

                // Render the repository description if the 'description' definition is included
                if( definitions.includes('description') ){
                    let description = document.createElement('P');
                    description.innerHTML = `<strong>Project Description: </strong>${repo.description}`;
                    li.append(description);
                }

                // Render the repository fork status if the 'fork' definition is included
                if( definitions.includes('fork') ){
                    let fork = document.createElement('P');
                    fork.innerHTML = `<strong>Project forked by another organization: </strong>${repo.fork ? 'True' : 'False'}`;
                    li.append(fork);
                }

                // Render the repository creation date if the 'created_at' definition is included
                if( definitions.includes('created_at') ){
                    let created = document.createElement('P');
                    created.innerHTML = `<strong>Created on: </strong>${new Date(repo.created_at).toLocaleDateString()}`;
                    li.append(created);
                }
                
                // Render the repository updated date if the 'updated_at' definition is included
                if( definitions.includes('updated_at') ){
                    let updated = document.createElement('P');
                    updated.innerHTML = `<strong>Updated on: </strong>${new Date(repo.updated_at).toLocaleDateString()}`;
                    li.append(updated);
                }
                
                // Render the repository language if the 'language' definition is included
                if( definitions.includes('language') ){
                    let language = document.createElement('P');
                    language.innerHTML = `<strong>Language: </strong>${repo.language}`;
                    li.append(language);
                }

                // Render request email information if the repository is private and an email is provided
                if( definitions.includes('email') && repo.private && requestEmail ){
                    let email = document.createElement('P');
                    email.innerHTML = `* This is a Private Repository <a class="btn btn-main ms-2" href="mailto:${requestEmail}?subject=${repo.name} Repository Access Request&body=${requestEmailBody}">Request Access</a>`;
                    li.append(email);
                }

                ul.appendChild(li);
            });

            // render pagination links
            let page = document.createElement('STRONG');
            let left = document.createElement('DIV');
            let right = document.createElement('DIV');
            let last = paginationLinks.filter(link => link.rel === 'last').map(link => new URL(link.url).searchParams.get('page'));

            // Page information
            page.classList.add('text-center');
            page.textContent = `Page ${currentPage} of ${last.length ? last : currentPage}`;

            // construct pagination controls
            left.classList.add('col');
            right.classList.add('col', 'text-end');

            // first
            if( paginationLinks.some(link => link.rel === 'first') ){
                left.appendChild(createPaginationLink( paginationLinks.find(link => link.rel === 'first') ));
            }

            // previous
            if( paginationLinks.some(link => link.rel === 'prev') ){
                left.appendChild(createPaginationLink( paginationLinks.find(link => link.rel === 'prev') ));
            }

            // next
            if( paginationLinks.some(link => link.rel === 'next') ){
                right.appendChild(createPaginationLink( paginationLinks.find(link => link.rel === 'next') ));
            }

            // last
            if( paginationLinks.some(link => link.rel === 'last') ){
                right.appendChild(createPaginationLink( paginationLinks.find(link => link.rel === 'last') ));
            }

            pagination.appendChild(page);
            pagination.appendChild(left);
            pagination.appendChild(right);
        })
        .catch( error => {
            console.error( 'error', error );
        })
        .finally( () => {
            // hide spinner and show list and pagination after request is done
            spinner.classList.add('d-none');
            ul.classList.remove('d-none');
            pagination.classList.remove('d-none');
        });
        
    }

    /**
     * Creates a pagination link element for the given URL and relationship type.
     *
     * @param {Object} param0 The pagination link object containing the URL and relationship type.
     * @param {string} param0.url The URL for the pagination link.
     * @param {string} param0.rel The relationship type (e.g., 'first', 'prev', 'next', 'last').
     * @returns {HTMLAnchorElement} The created pagination link element.
     */
    function createPaginationLink( {url, rel} ){
        let link = document.createElement('A');
        
        link.dataset.url = url;
        link.classList.add('cursor-pointer', 'fs-4', 'me-3');
        link.rel = rel;
        link.textContent = rel.charAt(0).toUpperCase() + rel.substring( 1 );
        link.addEventListener('click', requestRepos);

        return link;
    }
});