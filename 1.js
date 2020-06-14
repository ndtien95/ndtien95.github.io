 $(function(){
 	blockItem = $('.muchItem').isotope({
 		itemSelector: '.oneItem',
 		layoutMode: 'fitRows'
 	});
	
	 blockItem.imagesLoaded().progress( function() {
		blockItem.isotope('layout');
	  });

 	$('.menuProduct .selectMenu > a').click(function(e) {
 		
 		a=$(this).data('item');
 		blockItem.isotope({filter:a});
 		
 		return false;
 	});

 	$('.menu .tc').click(function(){
 		$('body,html').animate({scrollTop:$('.blockInfo').offset().top}, 1000,'easeOutCubic')
 		return false;		
 	});

 	$('.menu .gt').click(function(){
 		$('body,html').animate({scrollTop:$('.about').offset().top}, 1000,'easeOutCubic')
 		return false;		
 	});
 	$('.menu .hv').click(function(){
 		$('body,html').animate({scrollTop:$('.experience').offset().top}, 1000,'easeOutCubic')
 		return false;		
 	});
 	$('.menu .kn').click(function(){
 		$('body,html').animate({scrollTop:$('.skills').offset().top}, 1000,'easeOutCubic')
 		return false;		
 	});
 	$('.menu .sp').click(function(){
 		$('body,html').animate({scrollTop:$('.menuProduct').offset().top}, 1000,'easeOutCubic')
 		return false;		
 	});
 	
 	$('.menu .lh').click(function(){
 		$('body,html').animate({scrollTop:$('.contact').offset().top}, 1400,'easeOutCubic')
 		return false;		
 	});

 	$('#exCollapsingNavbar2').after().click(function(event) {
        jQuery('.collapse').collapse('hide');
     });



//Javascript Function for PROGRESS BAR LINES  
var linesHead = $(".skills-section"),
line = $(".progress-line");

 	//Progress Bars function
 	function progressFunction(e) {

 		if ( linesHead.length ) {

 			if (!linesHead.hasClass("done")) {

 				var linesHeadTop = linesHead.offset().top,
 				top = $(window).scrollTop(),
 				winH = $(window).height() - 160;

 				if (top >= linesHeadTop - winH) {

 					linesHead.addClass("done");
 					$.each( line, function( i, val ) {

 						var thisLine = $(this),
 						value = thisLine.data("percent"),
 						progressCont = $(thisLine).closest('.bar').find(".num .span");

 						thisLine.css("width",value + "%");
 						progressCont.html(value + "%")

 					});
 				}
 			}
 		}
    } //End progressFunction Fuction
    function changeColor(argument) {

        var $nav = $("nav.navbar.navbar-light.bg-light.navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() >= $('.about').offset().top- 70);
    }

    $(window).on('scroll', function() {
    	progressFunction();
        changeColor()
        // console.log($('.blockInfo').height());
        

    });

    
    // contact form

    $('#contact-form').on('submit', function() {
    	var send_btn = $('#send-form'),
    	form = $(this),
    	formdata = $(this).serialize(),
    	chack = $('#form-chack');
    	send_btn.text('Wait...');

    	function reset_form(){
    		$("#name").val('');
    		$("#email").val('');
    		$("#massage").val('');
    	}

    	$.ajax({
    		url:  $(form).attr('action'),
    		type: 'POST',
    		data: formdata,
    		success : function(text){
    			if (text == "success"){
    				send_btn.addClass('done');
    				send_btn.text('Success');
    				setTimeout(function() {
    					reset_form();
    					send_btn.removeClass('done');
    					send_btn.text('Massage');
    				}, 2500);
    			}
    			else {
    				reset_form();
    				send_btn.addClass('error');
    				send_btn.text('Error');
    				setTimeout(function() {
    					send_btn.removeClass('error');
    					send_btn.text('Massage');
    				}, 5000);
    			}
    		}
    	});
    	return false;
    });



    new WOW().init();
})  
 