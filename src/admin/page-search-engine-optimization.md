# Page SEO
Once the site SEO is complete and you have chosen the theme the next step is
creating tags for your pages.

## Manage Pages 
All pages within the active theme directory (excluding index and layout) are listed here 
with their corresponding meta tags.  If a page does not have any tags yet it will have
a message <span style="color:#dc3545;">**missing meta tags**</span>
 <img :src="$withBase('/LaraNx-Pages-Main-Incomplete.png')" alt="Laranx Manage Pages">

## Site  Meta
Select Site from the navigation menu

Setting up site SEO will create meta tags for the home page and will be the fall
back for any pages that do not have their meta tags completed.

<img :src="$withBase('/Setup-LaraNx-Site-Meta-Tag-Panel.png')" alt="Laranx Site Meta">

Begin by entering your site title and your site description.  

<img :src="$withBase('/Setup-LaraNx-Site-Meta-Tag-Title-Description.png')" alt="Laranx Site Meta">

The site feature image is the fallback
image for the Open Graph and Twitter tags for the homepage and all other pages that do not
have a feature image. 

## Open Graph
Under the Facebook panel are the Open Graph tag settings.  Here you
may enter custom information that you wish to be displayed on Facebook, LinkedIn and other platforms 
that adhere to the Open Graph standard.

<img :src="$withBase('/Setup-LaraNx-Site-Facebook-OpenGraph-Tags.png')" alt="Laranx Open Graph Settings">

## Twitter
Twitter section for custom information you would like to appear on Twitter.

<img :src="$withBase('/Setup-LaraNx-Site-Twitter-Tags.png')" alt="Laranx Open Graph Settings">

## JSON LD Site Schema
LaraNx will generate a JSON LD script based on the site meta data by default.  If you 
require a more complex JSON LD script include it here.
<img :src="$withBase('/Setup-LaraNx-Site-Json-Ld-Tags.png')" alt="Laranx Open Graph Settings">
