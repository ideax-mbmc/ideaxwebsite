// Smooth Intro Animation with Loading Bar - Simplified and Robust
class IntroAnimation {
    constructor() {
        this.isComplete = false;
        this.loadingProgress = 0;
        this.loadingInterval = null;
        this.init();
    }

    init() {
        console.log('Initializing intro animation...');
        
        // Lock body scroll
        document.body.classList.add('intro-active');
        
        // Start loading sequence immediately (no need to create elements, they exist in HTML)
        setTimeout(() => {
            this.startLoadingSequence();
        }, 200);
    }

    startLoadingSequence() {
        console.log('Starting loading sequence...');
        const loadingBar = document.getElementById('loading-bar');
        const overlay = document.getElementById('intro-overlay');
        
        // Debug: Check if elements exist
        console.log('Elements check:', {
            loadingBar: !!loadingBar,
            overlay: !!overlay,
            overlayVisible: overlay ? window.getComputedStyle(overlay).display !== 'none' : false
        });
        
        if (!loadingBar) {
            console.error('Loading bar not found! Elements in DOM:', {
                introOverlay: !!document.getElementById('intro-overlay'),
                loadingContainer: !!document.getElementById('loading-container')
            });
            this.completeAnimation();
            return;
        }

        // Make sure overlay is visible
        if (overlay) {
            overlay.style.display = 'flex';
            overlay.style.opacity = '1';
        }

        // Simple, reliable loading animation
        this.loadingProgress = 0;
        this.loadingInterval = setInterval(() => {
            this.loadingProgress += Math.random() * 10 + 3;
            
            if (this.loadingProgress >= 100) {
                this.loadingProgress = 100;
                clearInterval(this.loadingInterval);
                loadingBar.style.width = '100%';
                console.log('Loading complete, transitioning to logo...');
                
                setTimeout(() => {
                    this.transitionToLogo();
                }, 500);
            } else {
                loadingBar.style.width = this.loadingProgress + '%';
            }
        }, 100);
    }

    transitionToLogo() {
        console.log('Transitioning to logo...');
        const loadingContainer = document.getElementById('loading-container');
        const logo = document.getElementById('intro-logo');
        
        // Fade out loading container
        if (loadingContainer) {
            loadingContainer.classList.add('fade-out');
        }
        
        // Show and animate logo
        setTimeout(() => {
            if (logo) {
                logo.classList.add('animate');
                console.log('Logo animation started');
            }
            this.showGatePanels();
        }, 600);
        
        // Start gate animation after logo glow - increased delay for longer X animation
        setTimeout(() => {
            this.animateGates();
        }, 4000); // Increased from 2500ms to 4000ms
        
        // Complete sequence - increased total time
        setTimeout(() => {
            this.completeAnimation();
        }, 6000); // Increased from 4000ms to 6000ms
    }

    showGatePanels() {
        // Show the gate panels that exist in HTML (left and right)
        const leftPanel = document.getElementById('gate-left');
        const rightPanel = document.getElementById('gate-right');
        
        if (leftPanel) {
            leftPanel.classList.add('show');
        }
        if (rightPanel) {
            rightPanel.classList.add('show');
        }
        
        console.log('Gate panels shown:', {
            leftPanel: !!leftPanel,
            rightPanel: !!rightPanel
        });
    }

    animateGates() {
        console.log('Starting gate animation...');
        // Animate the gate panels that exist in HTML (left and right)
        const leftPanel = document.getElementById('gate-left'); 
        const rightPanel = document.getElementById('gate-right');
        
        if (leftPanel) {
            leftPanel.classList.add('open');
        }
        if (rightPanel) {
            setTimeout(() => {
                if (rightPanel) {
                    rightPanel.classList.add('open');
                }
            }, 150);
        }
        
        console.log('Gate animation started for existing panels');
    }

    completeAnimation() {
        // Fade in main content smoothly
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.classList.add('loaded');
        }

        // Clean up after smooth transition
        setTimeout(() => {
            this.cleanup();
        }, 1200);
    }

    cleanup() {
        console.log('Cleaning up animation...');
        
        // Remove intro elements
        const overlay = document.getElementById('intro-overlay');
        const leftPanel = document.getElementById('gate-left');
        const rightPanel = document.getElementById('gate-right');
        
        if (overlay) {
            overlay.classList.add('hidden');
            setTimeout(() => overlay.remove(), 800);
        }

        if (leftPanel) {
            setTimeout(() => leftPanel.remove(), 800);
        }
        
        if (rightPanel) {
            setTimeout(() => rightPanel.remove(), 800);
        }

        // Restore body scroll
        setTimeout(() => {
            document.body.classList.remove('intro-active');
        }, 800);

        // Mark as complete
        this.isComplete = true;

        // Clear interval if still running
        if (this.loadingInterval) {
            clearInterval(this.loadingInterval);
        }

        // Trigger custom event
        window.dispatchEvent(new CustomEvent('introAnimationComplete'));
        console.log('Animation cleanup complete');
    }

    skipAnimation() {
        // Show main content immediately
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.classList.add('loaded');
        }
        
        // Ensure body scroll is enabled
        document.body.classList.remove('intro-active');
        
        this.isComplete = true;
        
        // Trigger completion event
        window.dispatchEvent(new CustomEvent('introAnimationComplete'));
    }

    // Method to replay animation (for testing)
    replay() {
        console.log('Replaying animation...');
        
        // Clean up existing elements
        const overlay = document.getElementById('intro-overlay');
        const leftPanel = document.getElementById('gate-left');
        const rightPanel = document.getElementById('gate-right');
        
        if (overlay) overlay.remove();
        if (leftPanel) leftPanel.remove();
        if (rightPanel) rightPanel.remove();

        // Reset state
        this.isComplete = false;
        this.loadingProgress = 0;
        if (this.loadingInterval) {
            clearInterval(this.loadingInterval);
        }

        // Hide main content
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.classList.remove('loaded');
        }

        // Restart animation
        setTimeout(() => this.init(), 100);
    }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing intro animation');
    initIntroAnimation();
});

// Also initialize on window load as fallback
window.addEventListener('load', () => {
    console.log('Window loaded');
    if (!window.introAnimation || !window.introAnimation.isComplete) {
        console.log('Starting fallback initialization');
        initIntroAnimation();
    }
});

// Initialize immediately if DOM is already ready
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    console.log('DOM already ready, initializing immediately');
    initIntroAnimation();
}

function initIntroAnimation() {
    // Prevent multiple initializations
    if (window.introAnimation && !window.introAnimation.isComplete) {
        console.log('Intro animation already running, skipping initialization');
        return;
    }
    
    console.log('Initializing intro animation...');
    
    // Check if elements exist
    const overlay = document.getElementById('intro-overlay');
    const loadingBar = document.getElementById('loading-bar');
    const logo = document.getElementById('intro-logo');
    
    console.log('Elements found:', {
        overlay: !!overlay,
        loadingBar: !!loadingBar, 
        logo: !!logo
    });
    
    // Initialize with a small delay to ensure all elements are ready
    setTimeout(() => {
        window.introAnimation = new IntroAnimation();
        console.log('Intro animation started');
    }, 50);
}

// Add keyboard shortcut for testing (Ctrl+Shift+I)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        if (window.introAnimation) {
            window.introAnimation.replay();
        }
    }
});

// Add double-click trigger for easy testing
document.addEventListener('dblclick', (e) => {
    if (e.ctrlKey && window.introAnimation) {
        window.introAnimation.replay();
    }
});

// Fallback: If animation doesn't start within 3 seconds, show content
setTimeout(() => {
    if (!window.introAnimation || !window.introAnimation.isComplete) {
        console.log('Animation fallback triggered - showing content directly');
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.classList.add('loaded');
        }
        document.body.classList.remove('intro-active');
        
        // Remove any intro elements that might be stuck
        const overlay = document.getElementById('intro-overlay');
        if (overlay) overlay.remove();
        
        ['top', 'bottom', 'left', 'right'].forEach(position => {
            const panel = document.getElementById(`gate-${position}`);
            if (panel) panel.remove();
        });
    }
}, 3000);
