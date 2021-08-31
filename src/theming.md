# Front End
LaraNx is a marketing package designed to help Laravel applications with SEO of their primary and secondary
pages.  LaraNx is designed to be modular,  meaning that installing ( and uninstalling ) LaraNx into your Laravel application will 
not affect the rest of your applications.  
 

## Theming
Once published the theming directory will have the following file structure:
```
|-resources
    |-views
        |-vendor
            |-laranx
                |-share
                |-themes
                    |-primero-bs
                    |-primero-tw
```
Notice that there will be two themes as examples. One uses Bootstrap 5 (primero-bs) and the other Tailwind CSS 
(primero-tw).  You can use these as starting points to make your own themes.  There is no limit to the amount 
of themes you can use.

## Themes
Within each theme there are two files that are required: the **index.blade.php** and **routes.php** files.  However, it is a 
good idea to have a layout.blade.php file in order to easily add pages to your theme.

I've included a share directory in case you would like to share files across themes like: about, privacy, or terms.  Of course using the share directory is entirely up to you.  

**primero-tw file structure**:
```
|-resources
    |-views
        |-vendor
            |-laranx
                |-share
                    |-about.blade.php
                    |-privacy.blade.php
                    |-terms.blade.php
                |-themes
                    |-primero-tw
                        |-partial
                            |-footer.blade.php
                            |-nav.blade.php
                        |-about.blade.php
                        |-features.blade.php
                        |-index.blade.php
                        |-layout.blade.php
                        |-pricing.blade.php
                        |-privacy.blade.php
                        |-routes.php
                        |-terms.blade.php
```

## Routing
Each theme has it's own routing.  This is significant because it allows each theme to be independent 
of other parts of the Laravel application.  Each theme is responsible for routing the files in its primary
directory.

The filename must match the routing name.  The following example is from the primero-tw theme included with LaraNx. 
Notice that each slug matches the filenames listed in the primero-tw theme directory.
```php
use Srg\Laranx\Http\Controllers\RenderController;

Route::get('{slug?}', [RenderController::class, 'page'])
    ->where('slug', '""|privacy|terms|features|about|pricing')
    ->name('page');
```
