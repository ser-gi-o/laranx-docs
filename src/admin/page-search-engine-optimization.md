# Page SEO
Once the site SEO is complete and you have chosen the theme the next step is
creating tags for your pages.

## Manage Pages 
All pages within the active theme directory (excluding index and layout) are listed here 
with their corresponding meta tags.  If a page does not have any tags yet it will have
a message <span style="color:#dc3545;">**missing meta tags**</span>
 <img :src="$withBase('/LaraNx-Pages-Main-Incomplete.png')" alt="Laranx Manage Pages">

## Page  Meta
Select the page from the list to create/edit tags for the page.

The page SEO will create meta tags for the page and will be the fall
back for generating Open Graph and Twitter meta tags. Begin by entering your page title and description.  

<img :src="$withBase('/LaraNx-Page-SEO-Title-Description.png')" alt="Laranx Page Meta">

The page feature image is the fallback image for the Open Graph and Twitter tags.

## Open Graph
Under the Facebook panel are the Open Graph tag settings.  Enter custom information that you wish to be displayed 
on Facebook, LinkedIn and other platforms that adhere to the Open Graph standard.

<img :src="$withBase('/LaraNx-Page-Facebook-OpenGraph.png')" alt="Page Open Graph Settings">

## Twitter
Twitter section for custom information you would like to appear on Twitter.

<img :src="$withBase('/LaraNx-Page-Twitter-Tags.png')" alt="Page Twitter Settings">

## JSON LD Webpage Schema
LaraNx will generate a JSON LD script based on the page meta data by default.  If you 
require a more complex JSON LD script include it here.
<img :src="$withBase('/LaraNx-Page-Json-Ld.png')" alt="Laranx Open Graph Settings">

### Overview
Once pages begin to have data entered for the tags the overview page will summarize the status.
<img :src="$withBase('/LaraNx-Overview-Single-Page-Complete.png')" alt="Laranx Overview Page Complete">