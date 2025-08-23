/* Enhanced Fixed Navigation Script */
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar-sticky, .fixed-top');
    
    if (navbar) {
        // Force fixed positioning
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.left = '0';
        navbar.style.right = '0';
        navbar.style.width = '100%';
        navbar.style.zIndex = '1050';
        
        // Add scroll effect
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        console.log('Fixed navbar initialized successfully');
    } else {
        console.warn('Navbar not found');
    }
});
