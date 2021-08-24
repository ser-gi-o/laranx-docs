# Installation

When you pay for your site license or lifetime license (if available) you are entitled to
a copy of the LaraNx code.

Please, do not share the file with others.      

## Download Package
Whether your account is on LaraNx.com or Gumroads you will have access to downloading a zip
file.

Download the file and uncompress in root directory of your Laravel installation. 
Eventually, a composer package will be available, but for now we will use this method. 

## Install
Uncompress the laranx.zip file and place at the root of you Laravel application. 
File structure:
```
|-packages
    |-srg
        |-laranx
       
```

In **composers.json** add:
```json
"repositories": [
        {
            "type": "path",
            "url": "packages/srg/laranx",
            "options": {
                "symlink": true
            }
        }
    ],
```

Then, run
```sh
 composer require srg/laranx
```

Publish the theming directory
```sh
 php artisan publish srg/laranx
```

If you haven't created your storage symbolic link:
```sh
 php artisan storage:link
```