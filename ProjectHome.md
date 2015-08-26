## Project Description ##

**jixedbar** is a [jQuery](http://jquery.com/) plugin that lets you fix a horizontal bar at the bottom of your website or web application. This project is inspired by [Facebook](http://www.facebook.com/)’s fixed application/menu bar.

## Latest/Branch (Development) Release ##

| Version | **0.0.5 (Development)** |
|:--------|:------------------------|
| Date    | **September 21, 2010**  |
| Description | **Extendable jixedbar. Bug fix on windows resize, add new public methods and updated minified version.** |
| Source  | **[http://jixedbar.googlecode.com/svn/branches/0.0.5/](http://code.google.com/p/jixedbar/source/browse/#svn/branches/0.0.5)** |
| Download | **[http://code.google.com/p/jixedbar/downloads/list](http://code.google.com/p/jixedbar/downloads/list)** |

## Trunk/Download Release ##

| Version | **0.0.4 (Beta)** |
|:--------|:-----------------|
| Date    | **August 16, 2010** |
| Description | **This release includes mostly IE compatibility fixes, especially on old IE6 and IE7 browser.** |
| Download | **[http://code.google.com/p/jixedbar/downloads/list](http://code.google.com/p/jixedbar/downloads/list)** |

## Demo ##

For the latest demo and documentation, please visit [jixedbar's official website](http://jixedbar.rawswift.com/).

## How-to ##

1. Get the latest copy of jixedbar, you can get it in two(2) ways:
  * Project's [download page](http://code.google.com/p/jixedbar/downloads/list) (the easy way).
  * or through [SVN repository](http://code.google.com/p/jixedbar/source/checkout):
```
svn checkout http://jixedbar.googlecode.com/svn/trunk/ jixedbar
```

2. Extract or copy the source on your web root then include this simple codes inside your HTML Head:
```
<link type="text/css" href="/path/to/themes/default/jx.stylesheet.css" rel="stylesheet"/>
<script type="text/javascript" src="/path/to/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="/path/to/src/jquery.jixedbar.min.js"></script>
<script type="text/javascript">
    $(document).ready(function() {
	$("#sample-bar").jixedbar();
    });
</script>
```

**Notes**:
  * This package includes [jQuery](http://jquery.com/) 1.4.2. Check for the latest version and if needed replace with the latest version/release.
  * Replace with the appropriate path. (scripts, themes, etc)

**Sample bar/menu items:**

```
<div id="sample-bar">
   <ul>
      <li title="Home"><a href="http://your.domain.tld/"><img src="img/home.png" alt="" /></a></li>
   </ul>
   <span class="jx-separator-left"></span>
   <ul>        
      <li title="Around The Web"><a href="#"><img src="img/web.png" alt="Get Social" /></a>
         <ul>
            <li><a href="http://www.facebook.com/account-name"><img src="img/facebook.png" title="Facebook" />Facebook</a></li>
            <li><a href="http://twitter.com/account-name"><img src="img/twitter.png" title="Twitter" />Twitter</a></li>
            <li><a href="http://www.flickr.com/photos/account-name/"><img src="img/flickr.png" title="Flickr" />Flickr</a></li>
         </ul>
      </li>
   </ul>   
   <span class="jx-separator-left"></span>
   <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
   <ul class="jx-bar-button-right">
      <li title="Feeds"><a href="#"><img src="img/feed.png" alt="" /></a>
         <ul>
            <li><a href="http://your.domain.tld/feed/"><img src="img/feed.png" title="Content Feed" />Content Feed</a></li>
            <li><a href="http://your.domain.tld/comments/"><img src="img/comment.png" title="Comment Feed" />Comment Feed</a></li>
         </ul>
      </li>
   </ul>
   <span class="jx-separator-right"></span>   
</div>
```

**Behaviors**

You can pass parameters on jixedbar to change how it look and/or behaves.

| **Option** | **Type** | **Description** | Default |
|:-----------|:---------|:----------------|:--------|
| showOnTop  | Boolean  | Position the bar on top, instead of the default bottom. | false   |
| transparent | Boolean  | Make the bar transparent. | false   |
| opacity    | Float    | Set bar's opacity level. (0.0 ~ 1.0) | 0.9     |
| slideSpeed | String or Integer | Set bar's hide/show slide effect speed. (fast ~ slow or 200 ~ 600) | fast    |
| roundedCorners | Boolean  | Enable or disable bar's rounded corner property. | true    |
| roundedButtons | Boolean  | Enable or disable button's rounded corner property. | true    |
| menuFadeSpeed | String or Integer | Set menu fade effect speed. (fast ~ slow or 200 ~ 600) | 250     |
| tooltipFadeSpeed | String or Integer | Set tooltip fade effect speed. (fast ~ slow or 200 ~ 600) | slow    |
| tooltipFadeOpacity | Float    | Set tooltip fadeout opacity effect. (0.0 ~ 1.0) | 0.8     |

**Example**:

```
$("#sample-bar").jixedbar({
    showOnTop: true,
    transparent: true,
    opacity: 0.5,
    slideSpeed: "slow",
    roundedCorners: false,
    roundedButtons: false,
    menuFadeSpeed: "slow",
    tooltipFadeSpeed: "fast",
    tooltipFadeOpacity: 0.5
});
```

**Themes/Styles**

You can customize the bar's look/style by modifiying the bundled theme. Choose the theme that you want to modify (under "themes" directory) and edit the "jx.bar.css" stylesheet file. Also you can create your own by copying from one of the existing theme (for reference) and save it under "themes" directory with a different theme name.

CSS class reference:

| **Class** | **Description** |
|:----------|:----------------|
| jx-bar    | Style for the main bar |
| jx-bar span | Separators. (width, background-color) |
| jx-separator-left | Separator's position. (float left) |
| jx-separator-right | Separator's position. (float right) |
| jx-bar-button li | Defines bar's button style. |
| jx-bar-button li:hover | Button hover effect. |
| jx-bar-button li a:| Button's anchor text style. |
| jx-bar-button-tooltip | Button's tooltip style. |
| jx-bar div | Text container and arrow indicator style. |
| jx-bar iframe | iframe tag style. |
| jx-nav-menu | Drop up/down menu style. |
| jx-nav-menu a:hover | Menu item hover effect. |
| jx-nav-menu ul li a | Style for menu items. |
| jx-nav-menu-active | Style for active button. (button clicked state) |
| jx-arrow-up | Arrow indicator. (Up state) |
| jx-arrow-down | Arrow indicator. (Down state) |
| jx-tool-point-dir-down | Tooltip pointer direction state. (Down state) |
| jx-tool-point-dir-up | Tooltip pointer direction state. (Up state) |
| jx-hide   | Hide container style. |
| jx-show   | Show container style. |

You can also change/replace the icons, if you wish to.

## Bug Report ##

[http://code.google.com/p/jixedbar/issues/list](http://code.google.com/p/jixedbar/issues/list)

## License ##

jixedbar is available for use in all personal or commercial projects under both [MIT](http://www.opensource.org/licenses/mit-license.php) and [GPL](http://www.gnu.org/licenses/gpl.html) licenses.

## Donation ##

Please support this project by donating any amount through PayPal or by simply linking back to this page. (http://code.google.com/p/jixedbar/)

<a href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=10638047'><img src='https://www.paypal.com/en_US/i/btn/btn_donate_LG.gif' /></a>

## Changelog ##

Version 0.0.4 (August 16, 2010)

  * Additional source comments - August 16, 2010
  * Tested on top popular browsers and different OS (see [CHANGELOG file](http://code.google.com/p/jixedbar/source/browse/trunk/CHANGELOG)) - August 15, 2010
  * Browser compatibility test using IETester 0.4.4 (under Windows XP (SP2)) - Passed IE6 and IE7 tests. - August 15, 2010
  * IE7 and some Chrome bug fix - August 15, 2010
  * Modified "default" theme - August 13, 2010
  * IE6 bug fix - August 13, 2010

Version 0.0.3 (July 17, 2010)

  * Added "Rave" theme - July 16, 2010
  * Updated "Vista" theme - July 16, 2010
  * Element IDs been replaced. ([Issue 25](https://code.google.com/p/jixedbar/issues/detail?id=25) - http://code.google.com/p/jixedbar/issues/detail?id=25#c0) - July 14, 2010
  * Rounded corner as defaults - July 14, 2010
  * Removed hover effect (issue with "slideToggle" caused by jQuery "stop" method) - July 12, 2010
  * Replaced hover effect with "transparent" option - July 12, 2010
  * Added "showOnTop" option to place bar on top - July 11, 2010
  * Updated jQuery version (1.3.2 -> 1.4.2) - July 11, 2010
  * Bug fix: Arrow indicator alignment on Chrome (float right) - July 9, 2010
  * Bug fix: Tooltip center alignment - July 2, 2010
  * Cookie based hide/show function (save bar's show/hide state) - July 1, 2010
  * Added tooltip on "Hide/Show" button - June 24, 2010
  * Prevent menu item container from showing if no active menu selected - June 24, 2010
  * Bar and menu, auto sync hide/show (up/down arrow) - June 24, 2010
  * Hide/show function - June 24, 2010
  * Improved tooltip - June 23, 2010
  * Button menu indicator (up/down arrow) - June 23, 2010
  * Menu items (first level) - June 22, 2010
  * Modified html and body css style on load: Fixed overlapping and double scroll bar. - January 6, 2010
  * Added windows resize event handler: Adjust bar's position on window resize. - January 6, 2010

Version 0.0.2 (December 18, 2009)

  * Use img alt attribute as button text.
  * Fixed PNG transparency issue on IE6 browser.
  * Added "vista" theme.

Version 0.0.1 (December 15, 2009)

  * Initial beta release.