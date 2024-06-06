(function($, document, window){
	
	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		$(".hero").flexslider({
			directionNav: false,
			controlNav: true
		});
	});

	$(window).load(function(){

	});

})(jQuery, document, window);

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.news-image');
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const closePopup = document.getElementById('close-popup');
    const mainContent = document.querySelector('.main-content');

    images.forEach(image => {
        image.addEventListener('click', function () {
            popupImg.src = this.src;
            overlay.style.display = 'block';
            popup.style.display = 'block';
            mainContent.classList.add('blur');
        });
    });

    closePopup.addEventListener('click', function () {
        overlay.style.display = 'none';
        popup.style.display = 'none';
        mainContent.classList.remove('blur');
    });

    overlay.addEventListener('click', function () {
        overlay.style.display = 'none';
        popup.style.display = 'none';
        mainContent.classList.remove('blur');
    });
});
