// Track data for the tracks section
const trackData = [
    {
        label: 'Healthcare',
        icon: '<i class="fas fa-heartbeat"></i>',
        description: 'Build tech that enhances lives through smarter, faster, and more accessible healthcare solutions.',
        reward: 'Rs. 10,000'
    },
    {
        label: 'Fintech',
        icon: '<i class="fas fa-coins"></i>',
        description: 'Reimagine how people save, spend, lend, and grow wealth in a digital-first world.',
        reward: 'Rs. 10,000'
    },
    {
        label: 'Agrotech',
        icon: '<i class="fas fa-seedling"></i>',
        description: 'Empower farmers and food systems with sustainable, data-driven agricultural technology.',
        reward: 'Rs. 10,000'
    },
    {
        label: 'Travel and Tourism',
        icon: '<i class="fas fa-plane"></i>',
        description: 'Transform how we explore, discover, and experience places using immersive, intelligent tools.',
        reward: 'Rs. 10,000'
    },
    {
        label: 'Culture Tech',
        icon: '<i class="fas fa-palette"></i>',
        description: 'Explore the intersection of technology and culture. Innovate in areas like digital art, music tech, and cultural preservation.',
        reward: 'Rs. 10,000'
    },
    {
        label: 'Open',
        icon: '<i class="fas fa-code-branch"></i>',
        description: 'Ignite collaboration with IdeaX. Explore open source, community-driven innovation, and the future of shared technology.',
        reward: 'Rs. 10,000'
    }
];

// Sidebar functionality
let sidebarOpen = false;

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebarOpen = !sidebarOpen;
    
    if (sidebarOpen) {
        sidebar.style.display = 'flex';
        setTimeout(() => {
            sidebar.style.opacity = '1';
        }, 10);
    } else {
        sidebar.style.opacity = '0';
        setTimeout(() => {
            sidebar.style.display = 'none';
        }, 300);
    }
}

// Close sidebar when clicking on links
document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (this.getAttribute('href') && this.getAttribute('href').startsWith('#')) {
                toggleSidebar();
            }
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Dropdown functionality
function showDropdown() {
    // Dropdown is handled by CSS hover
}

function hideDropdown() {
    // Dropdown is handled by CSS hover
}

// Tracks section functionality
let activeTrackIndex = 0;

function initializeTracks() {
    const tabs = document.querySelectorAll('.tab');
    const contentCard = document.querySelector('.content-card');
    
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function() {
            setActiveTrack(index);
        });
    });
    
    updateTrackContent();
}

function setActiveTrack(index) {
    activeTrackIndex = index;
    
    // Update tab active state
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab, i) => {
        if (i === index) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    updateTrackContent();
}

function updateTrackContent() {
    const track = trackData[activeTrackIndex];
    const iconCircle = document.querySelector('.icon-circle');
    const title = document.querySelector('.track-content-title');
    const description = document.querySelector('.track-description');
    const reward = document.querySelector('.reward-box h1');
    
    if (iconCircle && title && description && reward) {
        iconCircle.innerHTML = track.icon;
        title.textContent = track.label;
        description.textContent = track.description;
        reward.textContent = track.reward;
    }
}

// FAQ functionality
function toggleFAQ(element) {
    const isOpen = element.classList.contains('open');
    
    // Close all FAQ items
    const allFAQItems = document.querySelectorAll('.faq-item');
    allFAQItems.forEach(item => {
        item.classList.remove('open');
        const icon = item.querySelector('.icon i');
        if (icon) {
            icon.className = 'fas fa-question-circle';
        }
    });
    
    // If this item wasn't open, open it
    if (!isOpen) {
        element.classList.add('open');
        const icon = element.querySelector('.icon i');
        if (icon) {
            icon.className = 'fas fa-check-circle';
        }
    }
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for navbar height
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Initialize sliders
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tracks
    initializeTracks();
    
    // Initialize testimonials slider if using Slick
    if (typeof $ !== 'undefined' && $.fn.slick) {
        $('.testimonials-slider').slick({
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        arrows: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        centerMode: true,
                        centerPadding: '20px'
                    }
                }
            ]
        });
        
        // Initialize gallery slider
        $('.gallery-slider').slick({
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        arrows: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }
            ]
        });
    }
});

// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const mobileIcon = document.querySelector('.mobile-icon');
    
    if (sidebarOpen && !sidebar.contains(event.target) && !mobileIcon.contains(event.target)) {
        toggleSidebar();
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && sidebarOpen) {
        toggleSidebar();
    }
});

// Add intersection observer for navbar
const observerOptions = {
    root: null,
    rootMargin: '-80px 0px 0px 0px',
    threshold: 0
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        const navLinks = document.querySelectorAll('.nav-links');
        const targetId = entry.target.id;
        
        navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${targetId}`) {
                if (entry.isIntersecting) {
                    link.style.borderBottom = '3px solid #015482';
                } else {
                    link.style.borderBottom = '';
                }
            }
        });
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add scroll-to-top button functionality
let scrollToTopBtn = null;

function createScrollToTopButton() {
    scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top-btn';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #015482;
        color: white;
        border: none;
        cursor: pointer;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
        font-size: 16px;
    `;
    
    scrollToTopBtn.addEventListener('click', scrollToTop);
    document.body.appendChild(scrollToTopBtn);
}

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    if (!scrollToTopBtn) {
        createScrollToTopButton();
    }
    
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
    } else {
        scrollToTopBtn.style.opacity = '0';
    }
});

// Add hover effects for buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.styled-button, .nav-btn-link, .sidebar-route');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Preload images
function preloadImages() {
    const imageUrls = [
        'images/carousel/a.webp',
        'images/carousel/b.webp',
        'images/carousel/c.webp',
        'images/carousel/d.webp',
        'images/carousel/e.webp',
        'images/carousel/f.webp',
        'images/carousel/g.webp',
        'images/carousel/h.webp',
        'images/expect/workshop.jpg',
        'images/expect/music1.jpg',
        'images/expect/goodies.jpg',
        'images/expect/games.jpg'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    preloadImages();
    
    // Add loading class to body for smooth transitions
    document.body.classList.add('loading');
    
    // Remove loading class after a short delay
    setTimeout(() => {
        document.body.classList.remove('loading');
    }, 500);
});

// Error handling for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.warn('Failed to load image:', this.src);
            // Set a placeholder or hide the image gracefully
            this.style.opacity = '0.5';
            this.style.border = '2px dashed #ccc';
            this.title = 'Image failed to load';
        });
    });
});

// Add performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}

// Service Worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registered successfully');
            })
            .catch(function(error) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Add loading states for forms
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('button[type="submit"], input[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                
                // Re-enable after 5 seconds to prevent permanent disabling
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Submit';
                }, 5000);
            }
        });
    });
});

// Add keyboard navigation for accessibility
document.addEventListener('keydown', function(e) {
    // ESC key closes sidebar
    if (e.key === 'Escape' && sidebarOpen) {
        toggleSidebar();
    }
    
    // Tab navigation for FAQ items
    if (e.key === 'Enter' || e.key === ' ') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('faq-item')) {
            e.preventDefault();
            toggleFAQ(focusedElement);
        }
    }
});

// Add touch/swipe support for mobile sliders
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        const slider = document.querySelector('.slider, .testimonials-slider');
        if (slider && typeof $ !== 'undefined' && $.fn.slick) {
            if (diff > 0) {
                $(slider).slick('slickNext');
            } else {
                $(slider).slick('slickPrev');
            }
        }
    }
}

// Add print styles handler
window.addEventListener('beforeprint', function() {
    // Expand all FAQ items for printing
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.classList.add('print-expanded');
    });
});

window.addEventListener('afterprint', function() {
    // Restore FAQ state after printing
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.classList.remove('print-expanded');
    });
});

// Add analytics tracking (placeholder)
function trackEvent(category, action, label) {
    // Replace with your analytics implementation
    console.log('Analytics Event:', { category, action, label });
    
    // Example for Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// Track important interactions
document.addEventListener('DOMContentLoaded', function() {
    // Track registration clicks
    const registerBtns = document.querySelectorAll('a[href*="forms.google.com"]');
    registerBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            trackEvent('Registration', 'click', 'Register Button');
        });
    });
    
    // Track social media clicks
    const socialLinks = document.querySelectorAll('.social-icon-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            const platform = this.href.includes('facebook') ? 'Facebook' :
                            this.href.includes('instagram') ? 'Instagram' :
                            this.href.includes('discord') ? 'Discord' :
                            this.href.includes('linkedin') ? 'LinkedIn' : 'Social';
            trackEvent('Social Media', 'click', platform);
        });
    });
    
    // Track section views
    const sections = document.querySelectorAll('section[id]');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                trackEvent('Section View', 'view', entry.target.id);
            }
        });
    }, { threshold: 0.5 });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});

// Notice Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
    const noticePopup = document.getElementById('notice-popup');
    const closeNoticeBtn = document.getElementById('close-notice');
    
    // Ensure popup is hidden initially
    if (noticePopup) {
        noticePopup.style.display = 'none';
        noticePopup.style.position = 'fixed';
        noticePopup.style.left = '-9999px';
        noticePopup.style.top = '-9999px';
        noticePopup.classList.remove('show');
    }
    
    // Show popup after a delay on every page load
    setTimeout(() => {
        showNoticePopup();
    }, 1500); // Show after 1.5 seconds
    
    // Close button functionality
    if (closeNoticeBtn) {
        closeNoticeBtn.addEventListener('click', function() {
            hideNoticePopup();
        });
    }
    
    // Close on overlay click
    if (noticePopup) {
        noticePopup.addEventListener('click', function(e) {
            if (e.target === noticePopup) {
                hideNoticePopup();
            }
        });
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && noticePopup && noticePopup.classList.contains('show')) {
            hideNoticePopup();
        }
    });
    
    function showNoticePopup() {
        if (noticePopup) {
            noticePopup.style.position = 'fixed';
            noticePopup.style.left = '0';
            noticePopup.style.top = '0';
            noticePopup.style.display = 'flex';
            setTimeout(() => {
                noticePopup.classList.add('show');
            }, 10);
            document.body.style.overflow = 'hidden'; // Prevent scrolling
            
            // Track popup view
            if (typeof trackEvent === 'function') {
                trackEvent('Notice Popup', 'view', 'Notice Shown');
            }
        }
    }
    
    function hideNoticePopup() {
        if (noticePopup) {
            noticePopup.classList.remove('show');
            setTimeout(() => {
                noticePopup.style.display = 'none';
                noticePopup.style.position = 'absolute';
                noticePopup.style.left = '-9999px';
                noticePopup.style.top = '-9999px';
            }, 300);
            document.body.style.overflow = ''; // Restore scrolling
            
            // Track popup close
            if (typeof trackEvent === 'function') {
                trackEvent('Notice Popup', 'close', 'Notice Closed');
            }
        }
    }
    
    // Global functions for manual control
    window.showNoticePopup = showNoticePopup;
    window.hideNoticePopup = hideNoticePopup;
});
