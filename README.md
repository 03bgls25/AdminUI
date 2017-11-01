Admin UI - Admin Template
=======

 - [jQuery](https://jquery.com/)
 - [Bootstrap v3.3.7](https://getbootstrap.com/docs/3.3/)
 - [Fontawesome v4.7.0](http://fontawesome.io/)
 - [Material Design Icons v2.0.46](https://materialdesignicons.com/)

Light, simple, custom interface and bootstrap v3.3.7 based admin panel free template 

Installation Guide
---------------------------------------
**Download From GitHub** or clone project to your machine

    git clone https://github.com/03bgls25/AdminUI.git

Theme Documentation
----------------------------
You can easily customized stylesheet with SCSS file provided.

**Prerequisite**

 - [Node JS](https://nodejs.org/en/)
 - [Gulp JS](https://gulpjs.com/)

**SCSS compiler using Gulp JS**

 1. **Step 1:** Go to project directory using command prompt or terminal
 2. **Step 2:** Install node package module using command `npm install`
 3. **Step 3:** Run Gulp JS task runner using command `gulp`  this will watch all scss compilation task

**SCSS Documentation**

SCSS folder has 4 sub-folders (*components*, *helpers*, *themes*, *vendors*) and 1 scss file (*portal.scss*). 

> SCSS file *portal.scss* import all scss file and is compile to *portal.css* file in *css* folder of project.

 1. Folder **components** has 3 scss files (*base*, *layout*, *reset*)
	 1. scss file *base* has stylesheet of html component
	 2. scss file *layout* has stylesheet of layout that are create in template  
	 3. scss file *reset* has stylsheet of bootstrap customization

 2. Folder **helpers** has 4 scss files (*breakpoints*, *functions*,
    *mixins*, *variables*)
	 1. scss file *breakpoint* contain mixin for generating responsive stylesheet
	 2. scss file *function* contain function of handling stylesheet
	 3. scss file *mixin* contain mixin for cross browser prefix stylesheet
	 4. scss file *variable* contain all variable used for entire theme

 3. Folder **theme** contain *portal* scss file that has stylesheet of admin panel
 
 4. Folder **vendors** contain *vendor* scss file that has overriding stylesheet of third party plugins.


Theme Customization
-------------------

Customize theme color, changing listed variable in *variable.scss*

    /* THEME-COLOR DEFINATION */
    $primary-color: YOUR_COLOR;
    $accent-color: YOUR_COLOR;
    
    /* EXTRA-COLOR DEFINATION */
    $highlight-color: YOUR_COLOR;
    $balance-color: YOUR_COLOR;
    $calm-color: YOUR_COLOR;
    $positive-color: YOUR_COLOR;
    $assertive-color: YOUR_COLOR;
    $dark-color: YOUR_COLOR;
    $shade-color: YOUR_COLOR;
    $divider-color: YOUR_COLOR;
    
    /* BACKGROUND-COLOR DEFINATION */
    $background: YOUR_COLOR;
    $dark-background: YOUR_COLOR;
    $light-background: YOUR_COLOR;
    
    /* FUNCTION-COLOR DEFINATION */
    $default-color: YOUR_COLOR;
    $success-color: YOUR_COLOR;
    $warning-color: YOUR_COLOR;
    $danger-color: YOUR_COLOR;
    $info-color: YOUR_COLOR;

Customize theme fonts, changing listed variable in *variable.scss*

    /* FONT-FAMILY DEFINATION */
    $heading-font: YOUR_FONT_NAME;
    $title-font: YOUR_FONT_NAME;
    $text-font: YOUR_FONT_NAME;

    /* FONT-SIZE DEFINATION */
    $xl-font-size: YOUR_FONT_SIZE;
    $lg-font-size: YOUR_FONT_SIZE;
    $md-font-size: YOUR_FONT_SIZE;
    $sm-font-size: YOUR_FONT_SIZE;
    $xs-font-size: YOUR_FONT_SIZE;
    
    /* FONT-WEIGHT DEFINATION */
    $xl-font-weight: YOUR_FONT_WEIGHT;
    $lg-font-weight: YOUR_FONT_WEIGHT;
    $md-font-weight: YOUR_FONT_WEIGHT;
    $sm-font-weight: YOUR_FONT_WEIGHT;
    $xs-font-weight: YOUR_FONT_WEIGHT;
    
    /* TEXT-COLOR DEFINATION */
    $text-color: YOUR_FONT_COLOR;
    $light-text-color: YOUR_FONT_COLOR;


----------

  

