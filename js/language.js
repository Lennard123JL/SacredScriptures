document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            var dropdownMenu = toggle.nextElementSibling; // Get the next sibling element, which is the dropdown menu
            toggleDropdown(dropdownMenu);
        });
    });

    // Toggle main navigation visibility on mobile
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        var mainNavigation = document.querySelector('.main-navigation');
        mainNavigation.classList.toggle('active');
    });

    // Function to toggle dropdown menu visibility
    function toggleDropdown(element) {
        element.classList.toggle('active');
    }

    // Function to select language
    window.selectLanguage = function(language) {
        localStorage.setItem('selectedLanguage', language);
        setTextContentByLanguage(); // Call function to update text content immediately after selecting language
    }

    // Function to set text content based on selected language
    function setTextContentByLanguage() {
        const selectedLanguage = localStorage.getItem('selectedLanguage');
        let translations;
        switch(selectedLanguage) {
            case 'tagalog':
                translations = tagalogTranslations;
                break;
            case 'bisaya':
                translations = bisayaTranslations;
                break;
            case 'hiligaynon':
                translations = hiligaynonTranslations;
                break;
            case 'ilocano':
                translations = ilocanoTranslations;
                break;
            default:
                translations = {}; // Default to empty translations
        }
        // Apply translations
        for (const selector in translations) {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.textContent = translations[selector];
            });
        }
    }

    // Translation dictionaries for each dialect
    const tagalogTranslations = {
        '.nav-link': 'Tagalog Translation', // Translate navigation links
        '.hero-title': 'Tagalog Translation', // Translate hero section title
        '.slide-subtitle': 'Tagalog Translation', // Translate slide subtitle
        '.news-title a': 'Tagalog Translation', // Translate news titles
        // Add more translations as needed
    };

    const bisayaTranslations = {
        '.nav-link': 'Bisaya Translation', // Translate navigation links
        '.hero-title': 'Bisaya Translation', // Translate hero section title
        '.slide-subtitle': 'Bisaya Translation', // Translate slide subtitle
        '.news-title a': 'Bisaya Translation', // Translate news titles
        // Add more translations as needed
    };

    const hiligaynonTranslations = {
        '.nav-link': 'Hiligaynon Translation', // Translate navigation links
        '.hero-title': 'Hiligaynon Translation', // Translate hero section title
        '.slide-subtitle': 'Hiligaynon Translation', // Translate slide subtitle
        '.news-title a': 'Hiligaynon Translation', // Translate news titles
        // Add more translations as needed
    };

    const ilocanoTranslations = {
        '.nav-link': 'Ilocano Translation', // Translate navigation links
        '.hero-title': 'Ilocano Translation', // Translate hero section title
        '.slide-subtitle': 'Ilocano Translation', // Translate slide subtitle
        '.news-title a': 'Ilocano Translation', // Translate news titles
        // Add more translations as needed
    };

    // Call the function to set text content based on selected language when the page loads
    setTextContentByLanguage();
});
