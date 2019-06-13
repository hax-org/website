# HAX Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/ffc11f15-a95d-4f36-ab1b-d6e8634315cd/deploy-status)](https://app.netlify.com/sites/haxorg/deploys)

This site runs on Jekyll. 

## Install
Prerequisites:
* Ruby (use `rvm`)
* Bundler
[Here's the Jekyll installation guide.](https://jekyllrb.com/docs/installation/)
```
git clone https://github.com/hax-org/website.git
cd website
bundle install
yarn
```

### Starting the server
```
jekyll s
```

Open browser and navigate to `localhost:4000`.

## Development
### `_config.yml`
Some stuff is configured here. [The Jekyll docs](https://jekyllrb.com/docs/configuration/) probably explain it better.

### Layouts
There are 3 layouts in the `_layouts` folder right now: default, post, and tag. Use default for most pages. Posts extend from the post layout, and the jekyll tags plugin relies on the tag layout (configured in config.yml). 

### Creating a new page
Add frontmatter to it:
```
---
layout: default
title: My Page Title
---
```
Then add content below the front matter. Save the file as .md (if you know you only need markdown in it) or .html (more often).

### Including files
Jekyll lets you partial out large files using `_includes`. Let's have a folder for each page (home, about, etc.).
```
{% include my_folder/my_partial.html %}
```
You can pass variables to the partial like this:
```
{% include my_folder/my_partial.html my_variable="awesome" %}
```

### Styling
All of the styling goes in the `_sass` folder. Each time you create a new .scss file, you'll need to include it in `/assets/css/main_css_file.scss` with an import statement:
```
@import "my_new_file.scss"
```

### Generating bios
Don't edit the `_bios` folder directly! Any changes will be overwritten when the parse program is run. Instead, download csv for *formatted* form responses (should be in the HAX Team Drive) and update `data.csv` with the new csv you just downloaded.
```
cd parse
ruby bios.rb
```
That will update the `_bios` folder.

### Jekyll Plugins
Currently using `jekyll-feed` to generate RSS feeds, `jekyll-paginate-v2` (the built-in pagination is sad) for pagination, and `jekyll-tagging` for generating tag pages automatically (so we don't have to make a new page for each tag).

## Blog
### New posts
```
---
layout: post
title: title of the post
subheading: short description of the post content
cover: path to image where the cover image is for the blog (keep blog images at "/assets/images/blog/")
date: Jekyll accepts a lot of formats, but use this format: "1863-11-19 10:18:00"
tags: separate by spaces, e.g. "tag1 tag2 tag3"
---
post content here
```
Save as .html or .md. Refer to the style test post (which is hidden from publishing) for details on what you can include.

### Authors
**If the author is a member of HAX, and has a bio on the website (under Our Team):**
```
author: full name of the author (must EXACTLY match the name under Our Team, case sensitive)
```
**Or if the post is from a guest author**
Setting `guest_author` to true will supersede anything specified in `author`!
```
guest_author: true
guest_author_name: Name of the author
guest_author_desc: Author desc
```

### Netlify CMS - for non-technical people to add posts.
The CMS is configured in `admin/config.yml`. Access the cms at https://haxorg.io/admin.

## Deployment
The site is hosted on Netlify, with CI. Any changes to the `master` branch on Github will automatically show up on the website. Changes to the staging branch will show up at https://staging--haxorg.netlify.com.