document.querySelectorAll('.button-header').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target'); // Get the target from the button's data attribute
        const target = document.getElementById(targetId); // Find the target section
        
        if (target) {
            // Scroll to the target element smoothly
            target.scrollIntoView({ 
                behavior: 'smooth' 
            });
        }
    });
});