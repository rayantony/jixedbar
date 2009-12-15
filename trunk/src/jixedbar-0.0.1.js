/*
 * jixedbar - Fixed bar.
 * http://code.google.com/p/jixedbar/
 * 
 * Version 0.0.1
 * 
 * Copyright (c) 2009 Ryan Yonzon, http://ryan.rawswift.com/
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */

(function($) {

	// jixedbar plugin
	$.fn.jixedbar = function(options) {
		var constants = {
				constOverflow: "hidden",
				constPosition: "absolute",
				constBottom: "0px"
			};
		var defaults = {
				hoverOpaque: false,
				hoverOpaqueEffect: {enter: {speed: "fast", opacity: 1.0}, leave: {speed: "fast", opacity: 0.80}},
				roundedCorners: false, // only works in FF
				roundedButtons: true // only works in FF
			};
		var options = $.extend(defaults, options);
		
		this.each(function() {
			var obj = $(this);
			var $screen = jQuery(this);
			var fullScreen = $screen.width(); // get screen width
			var centerScreen = (fullScreen/2)*(1); // get screen center
			
			// set html and body style for jixedbar to work
			$("html").css({"overflow" : "hidden", "height" : "100%"});
			$("body").css({"margin": "0px", "overflow": "auto", "height": "100%"});

			// initialize bar
			$(this).css({
				"overflow": constants['constOverflow'],
				"position": constants['constPosition'],
				"bottom": constants['constBottom']
			});
			
			// add bar style (theme)
			$(this).addClass("jx-bar");
			
			// rounded corner style (theme)
			if (defaults.roundedCorners) {
				$(this).addClass("jx-bar-rounded-tl jx-bar-rounded-tr");
			}

			// button style (theme)
			$(this).addClass("jx-bar-button");
			
			// rounded button corner style (theme)
			if (defaults.roundedButtons) {
				$(this).addClass("jx-bar-button-rounded");
			}

			// calculate and adjust bar to center
			marginLeft = centerScreen-($(this).width()/2);
			$(this).css({'margin-left': marginLeft});
			
			// fix image vertical alignment and border
			$("img", obj).css({
				"vertical-align": "bottom",
				"border": "#ffffff solid 0px" // no border
			});

			// check of hover effect is enabled
			if (defaults.hoverOpaque) {
				$(this).fadeTo(defaults.hoverOpaqueEffect['leave']['speed'], defaults.hoverOpaqueEffect['leave']['opacity']); 
				$(this).bind("mouseenter", function(e){
					$(this).fadeTo(defaults.hoverOpaqueEffect['enter']['speed'], defaults.hoverOpaqueEffect['enter']['opacity']);
			    });
				$(this).bind("mouseleave", function(e){
					$(this).fadeTo(defaults.hoverOpaqueEffect['leave']['speed'], defaults.hoverOpaqueEffect['leave']['opacity']);
			    });
			}
			
			// create tooltip container
			$("<div />").attr("id", "__jx_tooltip_con__").appendTo("body"); // create div element and append in html body
			$("#__jx_tooltip_con__").css({
				"height": "auto",
				"margin-bottom": $(this).height() + 6, // put spacing between tooltip container and fixed bar
				"margin-left": "0px",
				"width": "100%", // use entire width
				"overflow": constants['constOverflow'],
				"position": constants['constPosition'],
				"bottom": constants['constBottom']
			});
			
			// hover in and out event handler
			$("li", obj).hover(
				function () { // in/over event
					var elemID = $(this).attr('id'); // get ID (w/ or w/o ID, get it anyway)					
					var barTooltipID = elemID + "__tooltip__"; // set a tooltip ID
					var tooltipTitle = $(this).attr('title');
					
					if (tooltipTitle == '') { // if no 'title' attribute then try 'alt' attribute
						tooltipTitle = $(this).attr('alt'); // this prevents IE from showing its own tooltip
					}
					
					if (tooltipTitle != '') { // show a tooltip if it is not empty
						// create tooltip wrapper; fix IE6's float double-margin bug
						barTooltipWrapperID = barTooltipID + '_wrapper';
						$("<div />").attr("id", barTooltipWrapperID).appendTo("#__jx_tooltip_con__");
						// create tooltip div element and put it inside the wrapper
						$("<div />").attr("id", barTooltipID).appendTo("#" + barTooltipWrapperID);
						
						// tooltip default style
						$("#" + barTooltipID).css({
							"float": "left",
							"display": "none"
						});
						
						// theme for tooltip (theme)
						$("#" + barTooltipID).addClass("jx-bar-button-tooltip");
						
						// set tooltip text
						$("#" + barTooltipID).html(tooltipTitle);
	
						// fix tooltip wrapper relative to the associated button
						$("#" + barTooltipWrapperID).css({
							"margin-left": ($(this).offset().left - ($("#" + barTooltipID).width() / 2)) + ($(this).width()/2)
						});
						
						// show tooltip
						$("#" + barTooltipID).show();
					}
				}, 
				function () { // out event
					var elemID = $(this).attr('id'); // get ID (whether there is an ID or none)					
					var barTooltipID = elemID + "__tooltip__"; // set a tooltip ID
					var barTooltipWrapperID = barTooltipID + '_wrapper';
					$("#" + barTooltipID).remove(); // remove tooltip element
					$("#" + barTooltipWrapperID).remove(); // remove tooltip's element DIV wrapper
				}
			);
			
			/**
			 * the following lines below are still under development - 12/12/2009
			 */
			
				/*
				 * menu DIV element click event
				 */

				/*
					$("div", obj).click(function() {
					});
				*/
			
		});
		
		return this;
		
	};
	
})(jQuery);