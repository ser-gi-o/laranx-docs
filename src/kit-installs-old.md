---
title: Start Kit Install Examples
lang: en-US
---
# Starter Kit Installs
Installing LaraNx on Laravel starter kits.

## Breeze   
Our starting point is a new server provisioned with [Laravel Forge](https://forge.laravel.com)

### Install Laravel
In this example we will use composer to install Laravel.  If you prefer a different method,
Laravel provides plenty of methods of installation explained in the 
[Laravel Documentation](https://laravel.com/docs/8.x#your-first-laravel-project).
```bash
composer create-project laravel/laravel app
```

Let's go to the new Laravel application directory
```bash
cd app
```

Update the app **.env** file with your database credentials
```bash
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

### Install Breeze
```bash
composer require laravel/breeze --dev
```
```bash
php artisan breeze:install
```

Then run

```bash
npm install
npm run dev
php artisan migrate
```

### Install Laranx
Copy laranx.zip to app directory and unzip.

```bash
unzip laranx.zip
```
This will add packages\srg\laranx\src files to your application


Add the following to composer.json
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

And the following line to "require": section in composer.json
```json
"srg/laranx": "dev-master"
```
There have been issues with adding the package from the command line, so add it manually to the composer.json file.


Finally, run the following
```bash
composer update
php artisan migrate
```

### LaraNx Setup
Once LaraNx has been installed in your Laravel application we are going to publish and
setup routing.

Publish the theming directory
```bash
php artisan vendor:publish --tag=laranx
```
This will create the necessary files for themes in your views directory.

in your routes/web.php

replace:
```php
Route::get('/', function () {
    return view('welcome');
});
```
with 
```php
use Srg\Laranx\Laranx;
Laranx::routes();
```

### LaraNx Admin
Once the previous steps are complete your LaraNx install will work in your application.

Log in to your application and replace 'dashboard' in the url with 'laranx'.  ie: yoursite.com/laranx

You will get the Welcome to LaraNx screen.

<img :src="$withBase('/Setup-LaraNx-SEO-Marketing-Kit-Admin.png')" alt="LaraNx Admin">


This concludes our Laravel Breeze full install.
 
 
 
## Inertia
Once again, our starting point is a new server provisioned with [Laravel Forge](https://forge.laravel.com)

### Install Laravel
In this example we will use composer to install Laravel.  Alternative methods explained in 
[Laravel Documentation](https://laravel.com/docs/8.x#your-first-laravel-project).
```bash
composer create-project laravel/laravel app
```

Let's go to the new Laravel application directory
```bash
cd app
```

Update the app **.env** file with your database credentials
```bash
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

### Install Breeze
```bash
composer require laravel/breeze --dev
```
```bash
php artisan breeze:install
```

Then run

```bash
npm install
npm run dev
php artisan migrate
```

### Install Laranx
Copy laranx.zip to app directory and unzip.

```bash
unzip laranx.zip
```
This will add packages\srg\laranx\src files to your application


Add the following to composer.json
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

And the following line to "require": section in composer.json
```json
"srg/laranx": "dev-master"
```
There have been issues with adding the package from the command line, so add it manually to the composer.json file.


Finally, run the following
```bash
composer update
php artisan migrate
```

### LaraNx Setup
Once LaraNx has been installed in your Laravel application we are going to publish and
setup routing.

Publish the theming directory
```bash
php artisan vendor:publish --tag=laranx
```
This will create the necessary files for themes in your views directory.

in your routes/web.php

replace:
```php
Route::get('/', function () {
    return view('welcome');
});
```
with 
```php
use Srg\Laranx\Laranx;
Laranx::routes();
```

### LaraNx Admin
Once the previous steps are complete your LaraNx install will work in your application.

Log in to your application and replace 'dashboard' in the url with 'laranx'.  ie: yoursite.com/laranx

You will get the Welcome to LaraNx screen.

<img :src="$withBase('/Setup-LaraNx-SEO-Marketing-Kit-Admin.png')" alt="LaraNx Admin">


This concludes our Laravel Breeze full install.
 
    

