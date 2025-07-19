// Portfolio Interactive Features
class PortfolioEnhancer {
    constructor() {
        this.particles = [];
        this.canvas = null;
        this.ctx = null;
        this.mouse = { x: 0, y: 0 };
        
        // Configuration object for all settings
        this.config = {
            // Particle system settings
            particles: {
                density: 20, // pixels per particle (lower = more particles)
                maxRadius: 3,
                minRadius: 1,
                maxOpacity: 0.7,
                minOpacity: 0.2,
                speed: 0.5,
                connectionDistance: 100,
                mouseInteractionDistance: 100,
                mouseInfluence: 0.0001
            },
            
            // Animation timing
            timing: {
                preloaderFadeOut: 200,
                typingSpeed: {
                    name: 30,
                    title: 20
                },
                typingDelays: {
                    initial: 100,
                    betweenElements: 100
                },
                sectionStagger: 50,
                skillBarDelay: 300
            },
            
            // Color palette
            colors: {
                primary: '#1e90ff',
                secondary: '#4169e1',
                accent: '#87ceeb',
                particleHue: {
                    base: 200,
                    range: 60
                }
            },
            
            // Effects
            effects: {
                glassmorphism: {
                    defaultBlur: 15,
                    hoverBlur: 25
                },
                hover: {
                    scale: 1.02,
                    translateY: -5,
                    skillTranslateX: 20,
                    skillScale: 1.05
                }
            },
            
            // Responsive breakpoints
            breakpoints: {
                mobile: 768,
                tablet: 1024,
                desktop: 1200
            }
        };
        
        this.init();
    }

    // Utility method to get responsive values
    getResponsiveValue(desktop, tablet = desktop, mobile = tablet) {
        const width = window.innerWidth;
        if (width <= this.config.breakpoints.mobile) return mobile;
        if (width <= this.config.breakpoints.tablet) return tablet;
        return desktop;
    }

    // Method to update configuration dynamically
    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
        // Recreate particles with new settings
        if (this.canvas && this.ctx) {
            this.createParticles();
        }
    }

    init() {
        this.setupPreloader();
        this.setupParticleSystem();
        this.setupTypingAnimation();
        this.setupScrollAnimations();
        this.setupSkillBars();
        this.setupFAB();
        this.setupGlassmorphism();
        this.setupInteractiveElements();
        this.disableLazyLoading();
    }

    // Preloader Animation
    setupPreloader() {
        window.addEventListener('load', () => {
            const preloader = document.getElementById('preloader');
            if (!preloader) return;
            
            preloader.style.opacity = '0';
            preloader.style.transform = 'scale(0.8)';
            setTimeout(() => {
                preloader.style.display = 'none';
                this.startMainAnimations();
            }, this.config.timing.preloaderFadeOut);
        });
    }

    // Particle System
    setupParticleSystem() {
        this.canvas = document.getElementById('particles-canvas');
        this.ctx = this.canvas.getContext('2d');
        
        this.resizeCanvas();
        this.createParticles();
        this.animateParticles();
        
        window.addEventListener('resize', () => this.resizeCanvas());
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        // Responsive particle density
        const responsiveDensity = this.getResponsiveValue(
            this.config.particles.density,
            this.config.particles.density * 1.5,
            this.config.particles.density * 2
        );
        
        const particleCount = Math.floor(window.innerWidth / responsiveDensity);
        this.particles = [];
        
        for (let i = 0; i < particleCount; i++) {
            const radiusRange = this.config.particles.maxRadius - this.config.particles.minRadius;
            const opacityRange = this.config.particles.maxOpacity - this.config.particles.minOpacity;
            
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * this.config.particles.speed,
                vy: (Math.random() - 0.5) * this.config.particles.speed,
                radius: Math.random() * radiusRange + this.config.particles.minRadius,
                opacity: Math.random() * opacityRange + this.config.particles.minOpacity,
                color: `hsl(${this.config.colors.particleHue.base + Math.random() * this.config.colors.particleHue.range}, 70%, 60%)`
            });
        }
    }

    animateParticles() {
        if (!this.canvas || !this.ctx) return;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            // Mouse interaction
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < this.config.particles.mouseInteractionDistance) {
                particle.vx += dx * this.config.particles.mouseInfluence;
                particle.vy += dy * this.config.particles.mouseInfluence;
            }
            
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fill();
            
            // Draw connections
            this.particles.forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.config.particles.connectionDistance) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(otherParticle.x, otherParticle.y);
                    this.ctx.strokeStyle = `rgba(30, 144, 255, ${0.1 * (1 - distance / this.config.particles.connectionDistance)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(() => this.animateParticles());
    }

    // Typing Animation
    setupTypingAnimation() {
        const nameElement = document.getElementById('typing-name');
        const titleElement = document.getElementById('typing-title');
        
        if (!nameElement || !titleElement) return;
        
        const nameText = nameElement.textContent;
        const titleText = titleElement.textContent;
        
        nameElement.textContent = '';
        titleElement.textContent = '';
        
        setTimeout(() => {
            this.typeWriter(nameElement, nameText, this.config.timing.typingSpeed.name, () => {
                setTimeout(() => {
                    this.typeWriter(titleElement, titleText, this.config.timing.typingSpeed.title);
                }, this.config.timing.typingDelays.betweenElements);
            });
        }, this.config.timing.typingDelays.initial);
    }

    typeWriter(element, text, speed, callback) {
        if (!element || !text) return;
        
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                if (callback) callback();
            }
        }, speed);
    }

    // Scroll Animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('.skills, .edu, .certification, .exp, .projects-achievements, .group-3').forEach(section => {
            section.classList.add('animate-on-scroll');
            observer.observe(section);
        });
    }

    // Skill Progress Bars
    setupSkillBars() {
        const skillBars = document.querySelectorAll('.skill-bar');
        
        if (skillBars.length === 0) return;
        
        const animateSkillBars = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBar = entry.target;
                    const skillLevel = skillBar.getAttribute('data-skill');
                    
                    if (skillLevel) {
                        setTimeout(() => {
                            skillBar.style.width = skillLevel + '%';
                        }, this.config.timing.skillBarDelay);
                    }
                }
            });
        };

        const skillObserver = new IntersectionObserver(animateSkillBars, {
            threshold: 0.5
        });

        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });
    }

    // Floating Action Button
    setupFAB() {
        const fab = document.getElementById('main-fab');
        const fabOptions = document.querySelector('.fab-options');
        
        if (!fab || !fabOptions) return;
        
        let isOpen = false;

        fab.addEventListener('click', (e) => {
            e.stopPropagation();
            isOpen = !isOpen;
            fabOptions.classList.toggle('open', isOpen);
            const icon = fab.querySelector('i');
            if (icon) {
                icon.style.transform = isOpen ? 'rotate(45deg)' : 'rotate(0deg)';
            }
        });

        // Close FAB when clicking outside
        document.addEventListener('click', (e) => {
            if (!fab.contains(e.target) && !fabOptions.contains(e.target)) {
                isOpen = false;
                fabOptions.classList.remove('open');
                const icon = fab.querySelector('i');
                if (icon) {
                    icon.style.transform = 'rotate(0deg)';
                }
            }
        });
    }

    // Glassmorphism Effects
    setupGlassmorphism() {
        const cards = document.querySelectorAll('.skills, .edu, .certification, .exp, .projects-achievements');
        
        if (cards.length === 0) return;
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.backdropFilter = `blur(${this.config.effects.glassmorphism.hoverBlur}px)`;
                card.style.transform = `translateY(${this.config.effects.hover.translateY}px) scale(${this.config.effects.hover.scale})`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.backdropFilter = `blur(${this.config.effects.glassmorphism.defaultBlur}px)`;
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // Interactive Elements
    setupInteractiveElements() {
        // Skill items hover effects
        const skillItems = document.querySelectorAll('.skill-item');
        if (skillItems.length > 0) {
            skillItems.forEach(item => {
                item.addEventListener('mouseenter', () => {
                    item.style.transform = `translateX(${this.config.effects.hover.skillTranslateX}px) scale(${this.config.effects.hover.skillScale})`;
                    item.style.boxShadow = `0 10px 30px rgba(30, 144, 255, 0.3)`;
                });
                
                item.addEventListener('mouseleave', () => {
                    item.style.transform = 'translateX(0) scale(1)';
                    item.style.boxShadow = 'none';
                });
            });
        }

        // Experience items timeline effect
        const expItems = document.querySelectorAll('.exp_item');
        if (expItems.length > 0) {
            expItems.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.1}s`;
                item.classList.add('timeline-item');
            });
        }

        // Projects items interactive
        const projectItems = document.querySelectorAll('.projects_item, .achievements_item');
        if (projectItems.length > 0) {
            projectItems.forEach(item => {
                item.addEventListener('click', () => {
                    item.classList.toggle('expanded');
                });
            });
        }

        // Smooth scrolling for internal links
        const internalLinks = document.querySelectorAll('a[href^="#"]');
        if (internalLinks.length > 0) {
            internalLinks.forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }
    }

    // Start main animations after preloader
    startMainAnimations() {
        document.body.classList.add('loaded');
        
        // Staggered animation for main sections
        const sections = document.querySelectorAll('.profile, .group-1, .group-2, .group-3, .projects-achievements');
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.classList.add('fade-in');
            }, index * this.config.timing.sectionStagger);
        });
    }

    // Disable lazy loading for immediate content display
    disableLazyLoading() {
        // Force immediate loading of all images
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (img.getAttribute('data-src')) {
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
            }
            img.loading = 'eager';
        });

        // Remove lazy loading attributes from all elements
        const lazyElements = document.querySelectorAll('[loading="lazy"]');
        lazyElements.forEach(element => {
            element.removeAttribute('loading');
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioEnhancer();
});

// Performance optimization
let ticking = false;
function updateOnScroll() {
    if (!ticking) {
        requestAnimationFrame(() => {
            // Parallax effect for background
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('body::before');
            if (parallax) {
                document.body.style.backgroundPosition = `center ${scrolled * 0.5}px`;
            }
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', updateOnScroll);