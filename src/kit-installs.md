# Starter Kit Installs
Process of installing LaraNx on clean Laravel installs

## Breeze
Provision server using Forge by Laravel

Rename the standard public folder to public-forge

Install Laravel:
composer create-project laravel/laravel app

cd app

edit .env file. add db settings

composer require laravel/breeze --dev

php artisan breeze:install

npm install
npm run dev
php artisan migrate

copy laranx.zip to app directory

unzip laranx.zip

add to composer.json
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

add to composer.json
```json
"srg/laranx": "dev-master"
```
then run 
composer update
php artisan migrate

There have been issues with adding the package from the command line, so add it manually to the composer.json file.

publish the theming directory
php artisan vendor:publish --tag=laranx


in your app/routes/web.php

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

On your application register first user

Once logged in replace 'dashboard' in the url with 'laranx'.  ie: yoursite.com/laranx

You will get the Welcome to LaraNx screen.
Select your admin

 
    

