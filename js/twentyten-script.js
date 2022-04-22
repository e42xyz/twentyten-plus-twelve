jQuery(document).ready(function($) {
	if( window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ) {
		console.log("add dark css");
		let root = document.getElementsByTagName('html')[0];
		root.setAttribute('class', 'tt-darkmode');
	}

	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',event=>{
		const newColorScheme = event.matches ? "dark":"light";
		let root = document.getElementsByTagName('html')[0];
		if ( newColorScheme === 'dark' ) {
			root.setAttribute('class', 'tt-darkmode');
		} else {
			root.classList.remove('tt-darkmode');
		}
	});

	$(window).scroll(function(e){
		$el = $('#access');
        var elementExists = document.getElementById("wpadminbar");
		if ( $(window).width() > 600) {
			if ($(this).scrollTop() > 250 && $el.css('position') != 'fixed'){
				$el.addClass("fixedMenu");
                if (elementExists !== null) {
                    $('.fixedMenu').css('top','32px');
                }
				//$('.scroll-top').show('slow');
			}
			else if ($(this).scrollTop() < 250 && $el.css('position') == 'fixed'){
				$el.removeClass("fixedMenu");
				//$('.scroll-top').hide('slow');
			}
		}
		else {
			$el.removeClass("fixedMenu");
			//$('.scroll-top').hide('slow');
		}
	});

    $('.scroll-top').click(function(e){
        e.preventDefault();
        scroller('#wrapper');
    });

    $('.navbar-btn').click(function(e){
        e.preventDefault();
        $('.menu').toggleClass('show-menu');
    });

	function scroller(hash) {
        var lastElementTop = $(hash).position().top;
        var scrollAmount = lastElementTop - 250;
        $('html,body').animate({scrollTop: scrollAmount},800);
    };
});