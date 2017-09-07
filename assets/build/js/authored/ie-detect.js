/**
  Target IE 10 with JavaScript and CSS property detection.

  # 2013 by Tim Pietrusky
  # timpietrusky.com
 **/

 // IE 10 only CSS properties
 var ie10Styles = [
     'msTouchAction',
     'msWrapFlow',
     'msWrapMargin',
     'msWrapThrough',
     'msOverflowStyle',
     'msScrollChaining',
     'msScrollLimit',
     'msScrollLimitXMin',
     'msScrollLimitYMin',
     'msScrollLimitXMax',
     'msScrollLimitYMax',
     'msScrollRails',
     'msScrollSnapPointsX',
     'msScrollSnapPointsY',
     'msScrollSnapType',
     'msScrollSnapX',
     'msScrollSnapY',
     'msScrollTranslation',
     'msFlexbox',
     'msFlex',
     'msFlexOrder'];

 var ie11Styles = [
     'msTextCombineHorizontal'];

 /*
  * Test all IE only CSS properties
  */
 var d = document;
 var b = d.body;
 var s = b.style;
 var ieVersion = null;
 var property;

 // Test IE10 properties
 for (var i = 0; i < ie10Styles.length; i++) {
     property = ie10Styles[i];

     if (s[property] != undefined) {
         ieVersion = "ie10";
         $('body').addClass('IE');
         console.log("IE10 style found: " + property);

     }
 }

 // Test IE11 properties
 for (var i = 0; i < ie11Styles.length; i++) {
     property = ie11Styles[i];

     if (s[property] != undefined) {
         ieVersion = "ie11";
         console.log("IE11 style found: " + property);

     }
 }

 if (ieVersion) {
     $('body').addClass('IE');
     console.log('Version: ' + ieVersion);

 } else {
     console.log('Not IE10 or 11.');
 }


 /*
  * List of IE CSS stuff:
  * http://msdn.microsoft.com/en-us/library/ie/hh869403(v=vs.85).aspx
  */
