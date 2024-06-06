document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    var navLinks = document.querySelectorAll('.nav-link');

    // Loop through each link
    navLinks.forEach(function(link) {
        // Add click event listener
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            navLinks.forEach(function(navLink) {
                navLink.classList.remove('active');
            });
            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });
});
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
	document.addEventListener("DOMContentLoaded", function() {
		const scriptureData = [
			{ date: "2024-01-01", text: "Placeholder scripture text for January 1, 2024." },
			{ date: "2024-01-02", text: "Placeholder scripture text for January 2, 2024." },
			// Add more scripture data here as needed
		];
	
		let currentDayIndex = 0;
	
		function updateScriptureContent() {
			const scripture = scriptureData[currentDayIndex];
			document.getElementById("scriptureDate").textContent = `Date: ${scripture.date}`;
			document.getElementById("scriptureText").textContent = scripture.text;
		}
	
		document.getElementById("prevDayBtn").addEventListener("click", function() {
			if (currentDayIndex > 0) {
				currentDayIndex--;
				updateScriptureContent();
			}
		});
	
		document.getElementById("nextDayBtn").addEventListener("click", function() {
			if (currentDayIndex < scriptureData.length - 1) {
				currentDayIndex++;
				updateScriptureContent();
			}
		});
	
		// Initialize the content
		updateScriptureContent();
	});
	
	
    document.getElementById('prevButton').addEventListener('click', function() {
		// Add functionality for previous button
		alert('Previous button clicked');
	});

	document.getElementById('nextButton').addEventListener('click', function() {
		// Add functionality for next button
		alert('Next button clicked');
	});