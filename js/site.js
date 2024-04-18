jQuery(document).ready(function($) {

	for (var i=1; i<=totalQs; i++) {
	  (function(i){
	    $('.q'+i).keyup(function () {
	        if ($.inArray($(this).val().toLowerCase(), a[i-1]) > -1) {
	            $(this).addClass('right').removeClass('wrong');
				$(this).prop('disabled','true');
				$('.lights :nth-child('+i+')').addClass('y').removeClass('n');
				$('.lights .y').next().addClass('n');
				var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
				if(iOS != true) {
					$("input:not(:disabled)")[$("input:not(:disabled)").index(document.activeElement) + 1].focus();
				}
	        } else {
	        	$(this).addClass('wrong').removeClass('right');
	        };
	    });
	  })(i);
	}

/*
	for (var x=1; x<=totalQs; x++) {
	  (function(x){
	    $('.q'+x).keyup(function () {
	        if ($.inArray($(this).val().toLowerCase(), b[x-1]) > -1) {
	            $(this).prev().prev().fadeIn();
	        } else {
	        	$(this).prev().prev().fadeOut();
	        };
	    });
	  })(x);
	}


	for (var y=1; y<=totalQs; y++) {
	  (function(y){
	    $('.q'+y).keyup(function () {
	        if ($.inArray($(this).val().toLowerCase(), c[y-1]) > -1) {
	            $(this).prev().prev().fadeIn();
	        } else {
	        	$(this).prev().prev().fadeOut();
	        };
	    });
	  })(y);
	}
     */


	// Add one to score count with each correct answer
	$(document.body)
	.keyup(function() {
		var n = $(".lights .y").length;
		$(".live-score").text(n);
	})


	//Show Score Overlay when quiz successfully completed
	.keyup(function() {
		if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 65 && event.keyCode <= 90)
		var s = $(".lights .y").length;
		if(s == totalQs) {
			$('.score-overlay').fadeIn();
			var windowWidth = $(window).width();
			if (windowWidth < 699) {
				window.scrollTo(0,0)
			}
		}
	})
	// Close score overlay with Escape key
	.keyup(function(e) {
	  if (e.keyCode == 27) { $('.score-overlay').fadeOut(); }
	});
	// Close score overlay with Close button
	$('.close').click(function() {
	  $('.score-overlay').fadeOut();
	});
	//Hide Result Descriptions
	$('.res').hide();
	//Show Score Overlay when score is clicked
	$('.score').click(function() {
		var n = $(".lights .y").length;
		$(".live-score").text(n);
		$('.score-overlay').fadeIn();
		var windowWidth = $(window).width();
		if (windowWidth < 699) {
			window.scrollTo(0,0)
		}
		if(n<=5) { $('.res.one').show(); } else { $('.res.one').hide(); }
		if(n>5 && n<=8) { $('.res.two').show(); } else { $('.res.two').hide(); }
		if(n>8 && n<=12) { $('.res.three').show(); } else { $('.res.three').hide(); }
		if(n>12 && n<=16) { $('.res.four').show(); } else { $('.res.four').hide(); }
	})


	// Show embed code
	$('.embed p').click(function() {
	  $('.embed textarea').fadeToggle();
	});

	$(".embed textarea").focus(function() {
	    var $this = $(this);
	    $this.select();

	    // Work around Chrome's little problem
	    $this.mouseup(function() {
	        // Prevent further mouseup intervention
	        $this.unbind("mouseup");
	        return false;
	    });
	});


	// Prevent the backspace key from navigating back.
	$(document).unbind('keydown').bind('keydown', function (event) {
		var doPrevent = false;
		if (event.keyCode === 8) {
			var d = event.srcElement || event.target;
			if ((d.tagName.toUpperCase() === 'INPUT' && (d.type.toUpperCase() === 'TEXT' || d.type.toUpperCase() === 'PASSWORD' || d.type.toUpperCase() === 'FILE')) 
				 || d.tagName.toUpperCase() === 'TEXTAREA') {
				doPrevent = d.readOnly || d.disabled;
			}
			else {
				doPrevent = true;
			}
		}

		if (doPrevent) {
			event.preventDefault();
		}
	});



	$('.goa').hover(function() { $('.img-goa').fadeToggle(); });
	$('.jaipur').hover(function() { $('.img-jaipur').fadeToggle(); });



});