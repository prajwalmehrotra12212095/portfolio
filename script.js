document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        // Toggle body scroll when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Sticky header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.slide-in, .pop-in, .fly-in, .flip-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                
                if (element.classList.contains('slide-in')) {
                    element.style.transform = 'translateY(0)';
                } else if (element.classList.contains('pop-in')) {
                    element.style.transform = 'scale(1)';
                } else if (element.classList.contains('fly-in')) {
                    element.style.transform = 'translateY(0)';
                } else if (element.classList.contains('flip-in')) {
                    element.style.transform = 'perspective(1000px) rotateY(0deg)';
                }
            }
        });
    };
    
    // Set initial state for animation
    const animatedElements = document.querySelectorAll('.slide-in, .pop-in, .fly-in, .flip-in');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        
        if (element.classList.contains('slide-in')) {
            element.style.transform = 'translateY(30px)';
        } else if (element.classList.contains('pop-in')) {
            element.style.transform = 'scale(0.8)';
        } else if (element.classList.contains('fly-in')) {
            element.style.transform = 'translateY(50px)';
        } else if (element.classList.contains('flip-in')) {
            element.style.transform = 'perspective(1000px) rotateY(90deg)';
        }
        
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger animation once after page load
    setTimeout(animateOnScroll, 500);
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'form-success';
            successMessage.innerHTML = `
                <div class="success-content">
                    <i class="fas fa-check-circle"></i>
                    <p>Thank you for your message! I will get back to you soon.</p>
                </div>
            `;
            
            contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
            contactForm.reset();
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.style.opacity = '0';
                setTimeout(() => {
                    successMessage.remove();
                }, 500);
            }, 5000);
        });
    }
    
    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.project-image img').style.transform = 'scale(1.1)';
            const afterElement = window.getComputedStyle(this.querySelector('.project-image'), '::after');
            if (afterElement) {
                this.querySelector('.project-image').style.setProperty('--after-opacity', '1');
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.project-image img').style.transform = 'scale(1)';
            const afterElement = window.getComputedStyle(this.querySelector('.project-image'), '::after');
            if (afterElement) {
                this.querySelector('.project-image').style.setProperty('--after-opacity', '0');
            }
        });
    });
    
    // Add hover effect to skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.skill-logo').style.transform = 'scale(1.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.skill-logo').style.transform = 'scale(1)';
        });
    });
    
    // Add hover effect to certificate items
    const certificates = document.querySelectorAll('.certificate');
    certificates.forEach(cert => {
        cert.addEventListener('mouseenter', function() {
            this.querySelector('.certificate-overlay').style.opacity = '1';
        });
        
        cert.addEventListener('mouseleave', function() {
            this.querySelector('.certificate-overlay').style.opacity = '0';
        });
    });
    
    // Add hover effect to highlight items
    const highlightItems = document.querySelectorAll('.highlight-item');
    highlightItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add animation delay to skill items
    skillItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Add animation delay to project cards
    projectCards.forEach((card, index) => {
        if (card.classList.contains('delay-1')) {
            card.style.animationDelay = `${0.2 * index}s`;
        } else if (card.classList.contains('delay-2')) {
            card.style.animationDelay = `${0.4 * index}s`;
        }
    });
    
    // Add floating animation to profile picture
    const profilePic = document.querySelector('.profile-pic');
    if (profilePic) {
        setInterval(() => {
            profilePic.style.animation = 'none';
            void profilePic.offsetWidth; // Trigger reflow
            profilePic.style.animation = 'floating 3s ease-in-out infinite';
        }, 3000);
    }
});