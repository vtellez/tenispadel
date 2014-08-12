/*!
 ______ _____   _______ _______ _______ _______ ______ _______ 
|   __ \     |_|    ___|_     _|   |   |       |   __ \   _   |
|    __/       |    ___| |   | |       |   -   |      <       |
|___|  |_______|_______| |___| |___|___|_______|___|__|___|___|

P L E T H O R A T H E M E S . C O M 				     (c) 2014
                        
Theme Name: CleanStart
Version: 1.0.1
This file contains necessary Javascript for the theme to function properly.

*/

//===============Jquery to perform on DOM Ready=========================================================

jQuery(document).ready(function() {
			  
"use strict";			  

    triangleSetup();


    //FLEXSLIDER TESTIMONIALS

    jQuery('#testimonials_flexslider').flexslider({
            namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
            selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
            animation: "slide",              //String: Select your animation type, "fade" or "slide"
            easing: "swing",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
            direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
            reverse: false,                 //{NEW} Boolean: Reverse the animation direction
            animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
            smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
            startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
            slideshow: true,                //Boolean: Animate slider automatically
            slideshowSpeed: 5000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
            initDelay: 0                   //{NEW} Integer: Set an initialization delay, in milliseconds
        });
  			  
    // FLEXSLIDER settings & init for the homepage slider

    jQuery('#main_flexslider').flexslider({
        namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
        selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
        animation: "slide",              //String: Select your animation type, "fade" or "slide"
        easing: "swing",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
        direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
        reverse: false,                 //{NEW} Boolean: Reverse the animation direction
        animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
        startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
        slideshow: true,                //Boolean: Animate slider automatically
        slideshowSpeed: 10000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
        initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
        randomize: false,               //Boolean: Randomize slide order
         
        // Usability features
        pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
        pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
        useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
        touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
        video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
         
        // Primary Controls
        controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
        prevText: "Previous",           //String: Set the text for the "previous" directionNav item
        nextText: "Next",               //String: Set the text for the "next" directionNav item
         
         
        // Callback API
        start: function(){
        	//jQuery('.flex-active-slide .container .carousel-caption').addClass('show');
        	},            //Callback: function(slider) - Fires when the slider loads the first slide
        before: function(){
        	jQuery('.flex-active-slide .container .carousel-caption').removeClass('show');
        	jQuery(".flexslider .carousel-caption").addClass("wait_for_photo_load").hide();
        	},           //Callback: function(slider) - Fires asynchronously with each slider animation
        after: function(slider){
        	jQuery('.flex-active-slide .container .carousel-caption').addClass('show');
        	jQuery(".flexslider .carousel-caption.show").removeClass("wait_for_photo_load").show();
        	},            //Callback: function(slider) - Fires after each slider animation completes
        end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
        added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
        removed: function(){}           //{NEW} Callback: function(slider) - Fires after a slide is removed

    });


    // Portfolio Page FLEXSLIDER with carousel---------------------------------------------------------------------

    jQuery('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 10,
        asNavFor: '#portfolio_slider'
      });	
    	
    jQuery('#portfolio_slider').flexslider({
        namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
        selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
        animation: "slide",              //String: Select your animation type, "fade" or "slide"
        easing: "swing",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
        direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
        reverse: false,                 //{NEW} Boolean: Reverse the animation direction
        animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
        startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
        slideshow: false,                //Boolean: Animate slider automatically
        slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
        initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
        randomize: false,               //Boolean: Randomize slide order
         
        // Usability features
        pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
        pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
        useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
        touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
        video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
         
        // Primary Controls
        controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
        prevText: "Previous",           //String: Set the text for the "previous" directionNav item
        nextText: "Next",               //String: Set the text for the "next" directionNav item
         
        // Secondary Navigation
        keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
        multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
        mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
        pausePlay: false,               //Boolean: Create pause/play dynamic element
        pauseText: 'Pause',             //String: Set the text for the "pause" pausePlay item
        playText: 'Play',               //String: Set the text for the "play" pausePlay item
         
        // Special properties
        controlsContainer: "",          //{UPDATED} Selector: USE CLASS SELECTOR. Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be ".flexslider-container". Property is ignored if given element is not found.
        manualControls: "",             //Selector: Declare custom control navigation. Examples would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
        sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
        asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider
         
        // Carousel Options
        itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
        itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
        minItems: 0,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
        maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
        move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
         
        // Callback API
        start: function(){
        	jQuery('.flex-active-slide .container .carousel-caption').addClass('show');
        	},            //Callback: function(slider) - Fires when the slider loads the first slide
        before: function(){
        	jQuery('.flex-active-slide .container .carousel-caption').removeClass('show');
        	jQuery(".flexslider .carousel-caption").addClass("wait_for_photo_load").hide();
        	},           //Callback: function(slider) - Fires asynchronously with each slider animation
        after: function(slider){
        	jQuery('.flex-active-slide .container .carousel-caption').addClass('show');
        	jQuery(".flexslider .carousel-caption.show").removeClass("wait_for_photo_load").show();
        	},            //Callback: function(slider) - Fires after each slider animation completes
        end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
        added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
        removed: function(){}           //{NEW} Callback: function(slider) - Fires after a slide is removed

    });

    // ONEPAGE -------------------------------------------------------------------------------------------------------------

    var header_height = jQuery('header').outerHeight();
    var window_height = jQuery(window).outerHeight();
    var rest_height = header_height + 40;
    var contact_form_overlay_height = jQuery('.contact_form_overlay').outerHeight();
    jQuery('.onepage .main section[id]').css( "padding-top", rest_height).css( "padding-bottom", rest_height/2).css( "margin-top", -rest_height);
    jQuery('.onepage #map').css( "height", contact_form_overlay_height );
    jQuery('.onepage .contact').css( "height", contact_form_overlay_height );

    //Smooth scrolling to hash id when clicking from the menu

    var $htmlBody;

    jQuery('.onepage .menu_container a').click(function() {
        var href = $.attr(this, 'href');
        $htmlBody = $htmlBody || jQuery('html, body');
        $htmlBody.animate({
            scrollTop: jQuery(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });

    // Sticky Header

    var full_page_photo_height = jQuery('.full_page_photo').outerHeight();
    var sticky_appear_height = full_page_photo_height - 100;
    var sticky_nav = jQuery('.sticky_header header');


        
        jQuery(window).scroll(function () {
    	if (jQuery(this).scrollTop() > 4) {
    	  jQuery('.full_page_photo .flexslider .flex-control-nav').removeClass("show").addClass("disappear");
    	  jQuery('#big-video-control-container').removeClass("show").addClass("disappear");
    	  jQuery('.full_page_photo .flexslider .flex-direction-nav').hide();
           
            } else {
                jQuery('.full_page_photo .flexslider .flex-control-nav').removeClass("disappear").addClass("show");
    	        jQuery('#big-video-control-container').removeClass("disappear").addClass("show");
                jQuery('.full_page_photo .flexslider .flex-direction-nav').show();
            }
        });
        
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > sticky_appear_height) {
                sticky_nav.addClass("stuck");
            } else {
                sticky_nav.removeClass("stuck");
            }
        });
        
    var window_top = jQuery(window).scrollTop();

            if (window_top > full_page_photo_height) {
    	  sticky_nav.addClass("stuck");
            } else {
    	  sticky_nav.removeClass("stuck");
            }  
       
       
    jQuery('.sticky_header .main').css( "top", header_height - 1 );

    //ONEPAGE map settings

    var $onepageCloseMap = jQuery(".onepage .close_map");
    var $onepageContact  = jQuery(".onepage .contact");
    var $onepageOpenMap  = jQuery(".onepage .open_map");

    $onepageCloseMap.click(function() {
        $onepageContact.removeClass( "show_map" );
        $onepageCloseMap.hide();
        $onepageOpenMap.show();
    });

    $onepageOpenMap.click(function() {
        $onepageContact.addClass( "show_map" );
        $onepageOpenMap.hide();
        $onepageCloseMap.show();
    });

    $onepageCloseMap.hide();




    // UI to Top Button---------------------------------

    jQuery().UItoTop({ easingType: 'easeOutQuart' });



    // Refrain animations untill the photos load--------

    //Refrain the full_page_photo call_to_action elements from performing their animation untill the photo loads 
    jQuery(".full_page_photo hgroup .hgroup_title").addClass("wait_for_photo_load").hide();
    jQuery(".full_page_photo hgroup .hgroup_subtitle").addClass("wait_for_photo_load").hide();

    //Refrain the flexslider carousel-caption elements from performing their animation untill the photo loads 
    jQuery(".flexslider .carousel-caption").addClass("wait_for_photo_load").hide();


    // TWITTER FEED

    if (jQuery('#twitter_flexslider').length) {

    $('#twitter_flexslider').twittie({
        username: 'plethorathemes', 				//Option to load tweets from another account or list owner's username.
        apiPath: './js/tweetie/api/tweet.php', 		//Path to your tweet.php file.
        dateFormat: '%b. %d, %Y', 					//Your date format
        template: '<blockquote><p>{{user_name}} / {{screen_name}} &bull; {{date}}</p><p>{{tweet}}</p></blockquote>', //Format how you want to show your tweets.
        count: 3, 									//Number of tweets you want to display.
        ulClass: "slides", 							//Class for the ul element that contains the tweets
        liClass: "items" 							//Class for the li element that contains each tweet
		//,list: null  								//List name to load tweets from. If you define list name you also must define the username of the list owner in the username option.
		//,hashtag: null  							//Option to load tweets with a specific hashtag.
		//,hideReplies: false 						//Set true if you want to hide "@" replies as well. Or leave it false to just to show your tweets and no replies.
    }, function() {
        jQuery('#twitter_flexslider').flexslider({
            namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
            selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
            animation: "slide",              //String: Select your animation type, "fade" or "slide"
            easing: "swing",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
            direction: "vertical",        //String: Select the sliding direction, "horizontal" or "vertical"
            reverse: false,                 //{NEW} Boolean: Reverse the animation direction
            animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
            smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
            startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
            slideshow: true,                //Boolean: Animate slider automatically
            slideshowSpeed: 5000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
            initDelay: 0                   //{NEW} Integer: Set an initialization delay, in milliseconds
        });
    });

    }
    
});
//END==================Jquery to perform on DOM Ready=============================================================





//=====================Jquery to perform on Window Load===========================================================
 
jQuery(window).load(function(){ 
			
"use strict";			

    var header_height = jQuery('header').outerHeight();
    var full_page_photo_height = jQuery('.full_page_photo').outerHeight();		         
    		         
    jQuery('.sticky_header .main').css( "top", full_page_photo_height ); 
    jQuery('.touch .sticky_header .overflow_wrapper').css( "padding-bottom", full_page_photo_height ); 

    jQuery('.flex-active-slide .container .carousel-caption').addClass('show');

    //setTimeout( function() {
    var window_top = jQuery(window).scrollTop();

    if (window_top < 4) {
    	  //jQuery(".full_page_photo .flexslider .flex-control-nav").removeClass("show").addClass("disappear");
            //} else {
    	jQuery(".full_page_photo .flexslider .flex-control-nav").addClass("show");
    	jQuery("#big-video-control-container").addClass("show");
    	
            } 		 
    		 

    //}, 1000 );


    //Starting the full_page_photo call_to_action elements animations now that the photo is loaded   
    jQuery(".full_page_photo hgroup .hgroup_title").removeClass("wait_for_photo_load").show();
    jQuery(".full_page_photo hgroup .hgroup_subtitle").removeClass("wait_for_photo_load").show();	
    jQuery(".flexslider .carousel-caption.show").removeClass("wait_for_photo_load").show();

    // TWENTY TWENTY PLUGIN ------------------------------

    if (jQuery('.twentytwenty-container').length) {

    jQuery(".twentytwenty-container").twentytwenty({default_offset_pct: 0.5});

    }


    // PARALLAX ------------------------------------------

       var $window = jQuery(window);
     
       jQuery('.parallax').each(function(){

         var $scroll = jQuery(this);
                         
          jQuery(window).scroll(function() {
            
            if($window.scrollTop() + $window.outerHeight() >= $scroll.offset().top) {
            
            var yPos = ($window.scrollTop() + $window.outerHeight() - $scroll.offset().top) / 15;        
            var coords = '50% '+ yPos + '%';
            
    }  
            $scroll.css({ backgroundPosition: coords });    
          }); // end window scroll
       });  // end section function



    //------ISOTOPE-------------------------------------	
     
    // cache container
    var container = jQuery('.isotope_portfolio_container');
    // initialize isotope
    container.isotope({
    });
    jQuery('.portfolio_filters a[data-filter="*"]').addClass('active');
    // filter items when filter link is clicked
    jQuery('.portfolio_filters a').click(function(){
      jQuery('.portfolio_filters a').removeClass('active');
      jQuery(this).addClass('active');
      var selector = jQuery(this).attr('data-filter');
      container.isotope({ filter: selector });
      return false;
    });
    //END---ISOTOPE-------------------------------------

    //------WOW Reveal on scroll initialization only for no-touch devices------------------

    if (jQuery('.no-touch').length) {

        var wow = new WOW(
        	{
        	animateClass: 'animated',
        	offset:       100
        	}
        );	

        wow.init();

    }

    //END---WOW-----------------------------------------

    	
    //------Lightbox with ALL its settings--------------

    var activityIndicatorOn = function()
    	{
    		jQuery( '<div id="imagelightbox-loading"><div></div></div>' ).appendTo( 'body' );
    	},
    	activityIndicatorOff = function()
    	{
    		jQuery( '#imagelightbox-loading' ).remove();
    	},

    	overlayOn = function()
    	{
    		jQuery( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
    	},
    	overlayOff = function()
    	{
    		jQuery( '#imagelightbox-overlay' ).remove();
    	},

    	closeButtonOn = function( instance )
    	{
    		jQuery( '<a href="#" id="imagelightbox-close">Close</a>' ).appendTo( 'body' ).on( 'click', function(){ jQuery( this ).remove(); instance.quitImageLightbox(); return false; });
    	},
    	closeButtonOff = function()
    	{
    		jQuery( '#imagelightbox-close' ).remove();
    	},

    	captionOn = function()
    	{
    		var description = jQuery( 'a[href="' + jQuery( '#imagelightbox' ).attr( 'src' ) + '"] img' ).attr( 'alt' );
    		if( description.length > 0 )
    			jQuery( '<div id="imagelightbox-caption">' + description + '</div>' ).appendTo( 'body' );
    	},
    	portfoliocaptionOn = function()
    	{
    		var description = jQuery( 'a.lightbox_portfolio' ).attr( 'title' );
    		if( description.length > 0 )
    			jQuery( '<div id="imagelightbox-caption">' + description + '</div>' ).appendTo( 'body' );
    	},
    	onepageportfoliocaptionOn = function()
    	{
    		var description = jQuery( '.onepage .portfolio_item a p' ).html();
    		if( description.length > 0 )
    			jQuery( '<div id="imagelightbox-caption">' + description + '</div>' ).appendTo( 'body' );
    	},
    	captionOff = function()
    	{
    		jQuery( '#imagelightbox-caption' ).remove();
    	},

    	navigationOn = function( instance, selector )
    	{
    		var images = jQuery( selector );
    		if( images.length )
    		{
    			var nav = jQuery( '<div id="imagelightbox-nav"></div>' );
    			for( var i = 0; i < images.length; i++ )
    				nav.append( '<a href="#"></a>' );

    			nav.appendTo( 'body' );
    			nav.on( 'click touchend', function(){ return false; });

    			var navItems = nav.find( 'a' );
    			navItems.on( 'click touchend', function()
    			{
    				var $this = jQuery( this );
    				if( images.eq( $this.index() ).attr( 'href' ) != jQuery( '#imagelightbox' ).attr( 'src' ) )
    					instance.switchImageLightbox( $this.index() );

    				navItems.removeClass( 'active' );
    				navItems.eq( $this.index() ).addClass( 'active' );

    				return false;
    			})
    			.on( 'touchend', function(){ return false; });
    		}
    	},
    	navigationUpdate = function( selector )
    	{
    		var items = jQuery( '#imagelightbox-nav a' );
    		items.removeClass( 'active' );
    		items.eq( $( selector ).filter( '[href="' + jQuery( '#imagelightbox' ).attr( 'src' ) + '"]' ).index( selector ) ).addClass( 'active' );
    	},
    	navigationOff = function()
    	{
    		jQuery( '#imagelightbox-nav' ).remove();
    	};

    //	Init for Masonry Gallery
    if ( jQuery().imageLightbox ) {

        var instanceF = jQuery( 'a.lightbox' ).imageLightbox(
        {
            onStart:        function() { overlayOn(); closeButtonOn( instanceF ); },
            onEnd:          function() { overlayOff(); captionOff(); closeButtonOff(); activityIndicatorOff(); },
            onLoadStart:    function() { captionOff(); activityIndicatorOn(); },
            onLoadEnd:      function() { captionOn(); activityIndicatorOff(); }
        });

        //  Init for Portfolio Item
        var instanceG = jQuery( 'a.lightbox_portfolio' ).imageLightbox(
        {
            onStart:        function() { overlayOn(); closeButtonOn( instanceG ); },              
            onEnd:          function() { overlayOff(); captionOff(); closeButtonOff(); activityIndicatorOff(); },
            onLoadStart:    function() { captionOff(); activityIndicatorOn(); },
            onLoadEnd:      function() { portfoliocaptionOn(); activityIndicatorOff(); }
        });

        //  Init for Portfolio Item on Onepager
        var instanceH = jQuery( '.onepage .portfolio_item a' ).imageLightbox(
        {
            onStart:        function() { overlayOn(); closeButtonOn( instanceH ); },              
            onEnd:          function() { overlayOff(); captionOff(); closeButtonOff(); activityIndicatorOff(); },
            onLoadStart:    function() { captionOff(); activityIndicatorOn(); },
            onLoadEnd:      function() { onepageportfoliocaptionOn(); activityIndicatorOff(); }
        });

    }
    //END---Lightbox with ALL its settings--------------

    // Flickr feed snippet by css-tricks.com----------------------------------------------------------------
    // For instructions visit http://css-tricks.com/snippets/jquery/show-most-recent-flickr-uploads/

    jQuery.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=37321137@N03&format=json&jsoncallback=?", function(data) {
              var target = "#latest-flickr-images ul"; // Where is it going?
              for (var i = 0; i <= 7; i = i + 1) { // Loop through the 8 most recent, [0-9]
              var pic = data.items[i];
              var liNumber = i + 1; // Add class to each LI (1-12)
    	jQuery(target).append("<li class='flickr-image no-" + liNumber + "'><a rel='prettyPhoto' title='" + pic.title + "' href='" + pic.link + "'><img src='" + pic.media.m.replace("_m.jpg","_s.jpg") + "' /></a></li>");
    	}
    });


});
//END=============================Jquery to perform on Window Load=======================================


//================================Jquery to perform on Window Resize=====================================

jQuery(window).resize(function() {
			 
    "use strict";			 
		      
    //ISOTOPE Again, in order to fix the resizing bug
    var container = jQuery('.isotope_portfolio_container');
        container.isotope({ });

    // SETUP TRIANGLES PLACING
    waitForFinalEvent(function(){
      triangleSetup();
    }, 50, "setup triangles placing");

});

//END=============================Jquery to perform on Window Resize=====================================




//------Text Rotator flip animations unfortunately don't work well on Safari / IE so we replace flip-up animation with the default dissolve animation on those browsers -------------------------------------

(function(){
	
"use strict";	

    var animationSettting = "flipUp";

    if ( navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 ) {
        animationSettting = "dissolve";
        jQuery(".rotate").textrotator({
              animation: animationSettting, // You can pick the way it animates when rotating through words. Options are dissolve, fade, flip, flipUp, flipCube, flipCubeUp and spin.
              separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
              speed: 6000 // How many milliseconds until the next word show.
            });
    } else {
        if ( jQuery().textrotator ){
            // IE doesn't play well with 3d transforms...
            if ( navigator.appName == 'Microsoft Internet Explorer'
                || window.navigator.userAgent.indexOf("MSIE ") > 0
                || !!navigator.userAgent.match(/Trident.*rv\:11\./)
                || !!/rv:11.0/i.test(navigator.userAgent)
            ) {
                animationSettting = "dissolve";
            } else {
                animationSettting = "flipUp";
            }
        // Nope, it's another browser =(
            jQuery(".rotate").textrotator({
              animation: animationSettting, // You can pick the way it animates when rotating through words. Options are dissolve, fade, flip, flipUp, flipCube, flipCubeUp and spin.
              separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
              speed: 6000 // How many milliseconds until the next word show.
            });
        }
    }

}());

//END---Text Rotator-------------------------------------

//------ OSX TOUCHPAD FIX: Prevent horizontal scrolling using the trackpad. Added: v.1.0.1 ------

function triangleSetup(){

    var squareRight = document.querySelectorAll(".square-right");
    if ( squareRight.length > 0 ){
        var bodyWidth = document.body.offsetWidth;
        var containerWidth = document.querySelector(".container").offsetWidth;
        var squareWidth = Math.round((bodyWidth - (containerWidth + 200))/2);
            squareWidth = squareWidth <= 0 ? 0 : squareWidth;
        var squareRightTriangles = document.querySelectorAll(".main .triangle-up-right");

        if ( (containerWidth + 200) > bodyWidth ){
            var squareTriangleWidth = Math.round((bodyWidth - containerWidth)/2) - 1;
            [].forEach.call(squareRightTriangles,function(el,index){
                    el.setAttribute('style', 
                        "width: " + (squareTriangleWidth) + "px;" + 
                        "right: " + "-" + (squareTriangleWidth + 1) + "px; "
                    );
            })
        } else {
            [].forEach.call(squareRightTriangles,function(el,index){
                    el.setAttribute('style', 
                        "width: 100px;" + 
                        "right: -100px;"
                    );
            });            
        }

        [].forEach.call(squareRight,function(el){
            el.style.width  = squareWidth + "px";
            el.style.right  = "-" + ( squareWidth + 100 ) + "px";
        });
    }

}

var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();


//END--- OSX TOUCHPAD FIX: Prevent horizontal scrolling using the trackpad. Added: v.1.0.1 ------