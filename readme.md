# HAX Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/16be9979-eeff-4894-8891-2935a1046932/deploy-status)](https://app.netlify.com/sites/haxorg/deploys)

This site runs on Jekyll. Make sure you have Ruby and Bundler installed. [Here's the Jekyll installation guide.](https://jekyllrb.com/docs/installation/)

## Install
```
git clone https://github.com/hax-org/website.git
cd website
bundle install
```

## Starting the server

(with live reload)
```
jekyll liveserve
```

or 

```
jekyll s
```

Open browser and navigate to `localhost:4000`.

## Development

### Styling

All of the styling goes in the `_sass` folder. Each time you create a new .scss file, you'll need to include it in `/assets/css/main_css_file.scss` with an import statement.

### Generating bios
Download csv for formatted form responses and update data.csv with the file you just downloaded.
```
cd parse
ruby bios.rb
```
That should update the `_bios` folder.

### Misc
* New pages go in the root directory
* Let's keep third party stuff in node_modules, if possible
* Try to cut down on long files by using `_includes`

## Deployment

The site is hosted on Netlify, with CI. Any changes to the `master` branch on Github will automatically show up on the website.