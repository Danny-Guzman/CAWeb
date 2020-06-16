<!-- General Section -->
<div>
    <a class="d-inline-block text-decoration-none" aria-label="CAWeb General Settings" data-toggle="collapse" href="#general-setting" role="button" aria-expanded="true" aria-controls="general-settings">
        <h2 class="mb-0">General <span class="text-secondary ca-gov-icon-"></span></h2>
    </a>
</div>
<div class="collapse show" id="general-setting" data-parent="#general-settings">
        <!-- State Template Version Row -->
        <div class="form-row">
            <div class="form-group col-sm-5">
                <label for="ca_site_version" class="d-block mb-0"><strong>State Template Version</strong></label>
                <small class="mb-2 text-muted d-block">Select a California State Template version.</small>
                <select id="ca_site_version" name="ca_site_version" class="w-50 form-control">
                    <option class="legacy" value="5" <?php print 5 == $ver ? 'selected="selected"' : '' ?>>Version 5.0</option>
                    <option value="5.5" <?php print 5.5 == $ver ? 'selected="selected"' : '' ?>>Version 5.5</option>
                    <?php if (4 == $ver) : ?>
                    <option class="legacy" value="4" <?php print 4 == $ver ? 'selected="selected"' : '' ?>>Version 4.0</option>
                    <?php endif; ?>
                </select>
            </div>
        </div>
        <!-- Fav Icon Row -->
        <div class="form-row">
            <div class="form-group col-sm-5">
                <label for="ca_fav_ico_filename" class="d-block mb-0"><strong>Fav Icon</strong></label>
                <small class="mb-2 text-muted d-block">Select a site fav icon (displays in browser tab).</small>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <!-- Fav Icon Preview -->
                            <img class="ca_fav_ico_option" id="ca_fav_ico_img" src="<?php print $fav_icon ?>"/> 
                        </span>
                    </div>
                    <!-- Fav Icon Input Field -->
                    <input 
                        type="text" 
                        name="ca_fav_ico" 
                        id="ca_fav_ico_filename" 
                        value="<?php print $fav_icon_name ?>" 
                        class="form-control library-link h-auto mx-2" 
                        placeholder="Fav Icon" 
                        data-choose="Choose a Fav Icon"
                        data-update="Set as Fav Icon"
                        data-option="x-image/icon, image/x-icon, x-image/x-icon, image/icon, image/vnd.microsoft.icon"
                        data-uploader="false" 
                        data-icon-check="true"
                        readonly>
                    <div class="input-group-append">
                        <button 
                            name="ca_fav_ico"
                            class="btn btn-outline-primary library-link" 
                            data-choose="Choose a Fav Icon"
                            data-update="Set as Fav Icon"
                            data-option="x-image/icon, image/x-icon, x-image/x-icon, image/icon, image/vnd.microsoft.icon"
                            data-uploader="false" 
                            data-icon-check="true">Browse</button>
                        <button id="resetFavIcon" class="btn btn-outline-primary" type="button">Reset</button>
                    </div>
                    <!-- Fav Icon Hidden  -->
                    <input type="hidden" id="ca_fav_ico" name="ca_fav_ico" value="<?php print $fav_icon ?>" >
                
                </div>
            </div>
        </div>

        <!-- Header Menu Type Row -->
        <div class="form-row">
            <div class="form-group col-sm-5">
                <label for="ca_default_navigation_menu" class="d-block mb-0"><strong>Header Menu Type</strong></label>
                <small class="mb-2 text-muted d-block">Set a menu style for all pages.</small>
                <select id="ca_default_navigation_menu" name="ca_default_navigation_menu" class="w-50 form-control">
                    <option value="megadropdown"
                    <?php print  'megadropdown' == $navigation_menu ? 'selected="selected"' : '' ?>>Mega Drop</option>
                    <option value="dropdown"
                    <?php print 'dropdown' == $navigation_menu ? 'selected="selected"' : '' ?>>Drop Down</option>
                    <option value="singlelevel"
                    <?php print 'singlelevel' == $navigation_menu ? 'selected="selected"' : '' ?>>Single Level</option>
                </select>
            </div>
        </div>

        <!-- Colorscheme Row -->
        <div class="form-row">
            <div class="form-group col-sm-5">
                <label for="ca_site_color_scheme" class="d-block mb-0"><strong>Color Scheme</strong></label>
                <small class="mb-2 text-muted d-block">Apply a site-wide color scheme.</small>
                <select id="ca_site_color_scheme" name="ca_site_color_scheme" class="w-50 form-control">
                <?php

                    foreach ($schemes as $key => $data) {
                        printf('<option value="%1$s"%2$s%3$s>%4$s</option>',
                        $key, ! array_key_exists($key, $legacySchemes) ? sprintf(' class="extra %1$s" ', $modern) : '',
                        $key == $color_scheme ? ' selected="selected"' : '', $data);
                    }

                ?>
                </select>
            </div>
        </div>

        <!-- Search on FrontPage, Sticky Navigation & Menu Home Link Row -->
        <div class="form-row">
            <!-- Title Display Default Off -->
            <div class="form-group col">
                <label for="ca_default_post_title_display" class="d-block mb-0"><strong>Title Display Default Off</strong></label>
                <small class="mb-2 text-muted d-block">Suppress the title for all new pages/posts.</small>
                <input type="checkbox" name="ca_default_post_title_display" id="ca_default_post_title_display" data-toggle="toggle" data-onstyle="success" <?php print $display_post_title ?>>
            </div>
            <!-- Sticky Navigation -->
            <div class="form-group col">
                <label for="ca_sticky_navigation" class="d-block mb-0"><strong>Sticky Navigation</strong></label>
                <small class="mb-2 text-muted d-block">Keep the navigation menu visibile when scrolling.</small>
                <input type="checkbox" name="ca_sticky_navigation" id="ca_sticky_navigation" data-toggle="toggle" data-onstyle="success" <?php print $sticky_nav_enabled ?>>
            </div>
            <!-- Menu Home Link -->
            <div class="form-group col">
                <label for="ca_home_nav_link" class="d-block mb-0"><strong>Menu Home Link</strong></label>
                <small class="mb-2 text-muted d-block">Add Home link to subpages header.</small>
                <input type="checkbox" name="ca_home_nav_link" id="ca_home_nav_link" data-toggle="toggle" data-onstyle="success" <?php print $home_nav_link_enabled ?>>
            </div>
        </div>

        <!-- Title Display Default Off, Display Date for Non-Divi Posts & Legacy Browser Support Row -->
        <div class="form-row">
            <!-- Display Date for Non-Divi Posts -->
            <div class="form-group col">
                <label for="ca_default_post_date_display" class="d-block mb-0"><strong>Display Date for Non-Divi Posts</strong></label>
                <small class="mb-2 text-muted d-block">Display the post published date for non-Divi posts.</small>
                <input type="checkbox" name="ca_default_post_date_display" id="ca_default_post_date_display" data-toggle="toggle" data-onstyle="success" <?php print $display_post_date ?>>
            </div>
            <!-- Legacy Browser Support -->
            <div class="form-group col">
                <label for="ca_x_ua_compatibility" class="d-block mb-0"><strong>Legacy Browser Support</strong></label>
                <small class="mb-2 text-muted d-block">Creates tradeoff: IE works better but forces accessibility errors.</small>
                <input type="checkbox" name="ca_x_ua_compatibility" id="ca_x_ua_compatibility" data-toggle="toggle" data-onstyle="success" <?php print $ua_compatibiliy ?> >
                <small class="text-danger d-block"><?php print ! empty($ua_compatibiliy) ? 'IE 11 browser compatibility enabled. Warning: creates accessibility errors when using IE browsers.' : '' ?></small>
            </div>
            <!-- Search on FrontPage -->
            <div class="form-group col">
                <label for="ca_frontpage_search_enabled" class="d-block mb-0"><strong>Show Search on Front Page</strong></label>
                <small class="mb-2 text-muted d-block">Enable Feature Search box on home page.</small>
                <input type="checkbox" name="ca_frontpage_search_enabled" id="ca_frontpage_search_enabled" data-toggle="toggle" data-onstyle="success" <?php print $frontpage_search_enabled ?> >
            </div>
        </div>
    </div>