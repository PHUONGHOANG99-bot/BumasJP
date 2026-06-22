// ============================= 
// Image Slider Functionality
// =============================

class ImageSlider {
    constructor() {
        this.slider = document.querySelector('.slider');
        this.dotsContainer = document.querySelector('.slider__dots');
        this.slides = document.querySelectorAll('.slide');
        this.dots = document.querySelectorAll('.slider__dot');
        this.prevBtn = document.querySelector('.slider__btn--prev');
        this.nextBtn = document.querySelector('.slider__btn--next');
        
        this.currentSlide = 0;
        this.autoPlayInterval = null;
        
        this.init();
    }

    init() {
        if (!this.slider || !this.prevBtn || !this.nextBtn || this.slides.length === 0) {
            return;
        }

        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        this.slider.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.slider.addEventListener('mouseleave', () => this.startAutoPlay());

        this.startAutoPlay();
    }

    showSlide(n) {
        if (!this.slides[n]) {
            return;
        }

        this.slides.forEach(slide => slide.classList.remove('slide-active'));
        this.dots.forEach(dot => dot.classList.remove('slider__dot--active'));

        this.slides[n].classList.add('slide-active');
        if (this.dots[n]) {
            this.dots[n].classList.add('slider__dot--active');
            this.centerActiveThumbnail(this.dots[n]);
        }
    }

    centerActiveThumbnail(activeDot) {
        if (!this.dotsContainer || !activeDot) {
            return;
        }

        const targetLeft = activeDot.offsetLeft - (this.dotsContainer.clientWidth - activeDot.clientWidth) / 2;
        const maxScroll = this.dotsContainer.scrollWidth - this.dotsContainer.clientWidth;
        const clampedLeft = Math.max(0, Math.min(targetLeft, maxScroll));

        this.dotsContainer.scrollTo({
            left: clampedLeft,
            behavior: 'smooth'
        });
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(this.currentSlide);
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentSlide);
    }

    goToSlide(n) {
        this.currentSlide = n;
        this.showSlide(this.currentSlide);
    }

    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => this.nextSlide(), 2000);
    }

    stopAutoPlay() {
        clearInterval(this.autoPlayInterval);
    }
}

// ============================= 
// Video Slider Functionality
// =============================

class VideoSlider {
    constructor() {
        this.track = document.querySelector('.video-track');
        this.items = document.querySelectorAll('.video-item');
        this.dots = document.querySelectorAll('.video-dot');
        this.prevBtn = document.querySelector('.video-btn--prev');
        this.nextBtn = document.querySelector('.video-btn--next');
        
        this.currentIndex = 0;
        this.autoPlayInterval = null;
        
        if (this.track) {
            this.init();
        }
    }

    init() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        this.track.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.track.addEventListener('mouseleave', () => this.startAutoPlay());

        this.startAutoPlay();
    }

    getCurrentVideo() {
        const currentVideoItem = this.items[this.currentIndex];
        return currentVideoItem.querySelector('video');
    }

    pauseAllVideos() {
        const allVideos = document.querySelectorAll('.video-item video');
        allVideos.forEach(video => {
            video.pause();
        });
    }

    updatePosition() {
        const offset = this.currentIndex * 100;
        this.track.style.transform = `translateX(-${offset}%)`;
    }

    updateDots() {
        this.dots.forEach(dot => dot.classList.remove('video-dot--active'));
        this.dots[this.currentIndex].classList.add('video-dot--active');
    }

    nextSlide() {
        this.pauseAllVideos();
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.updatePosition();
        this.updateDots();
    }

    prevSlide() {
        this.pauseAllVideos();
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.updatePosition();
        this.updateDots();
    }

    goToSlide(n) {
        this.pauseAllVideos();
        this.currentIndex = n;
        this.updatePosition();
        this.updateDots();
    }

    startAutoPlay() {
        // Auto play disabled for videos - let user control
    }

    stopAutoPlay() {
        clearInterval(this.autoPlayInterval);
    }
}

// ============================= 
// Reviews Carousel Functionality
// =============================

class ReviewsCarousel {
    constructor() {
        this.carousel = document.querySelector('.reviews-carousel');
        this.track = document.querySelector('.reviews-carousel__track');
        this.cards = document.querySelectorAll('.review-card');
        this.prevBtn = document.querySelector('.carousel__btn--prev');
        this.nextBtn = document.querySelector('.carousel__btn--next');

        this.currentIndex = 0;
        this.itemsPerView = this.getItemsPerView();
        this.autoPlayInterval = null;

        this.init();
    }

    init() {
        window.addEventListener('resize', () => {
            this.itemsPerView = this.getItemsPerView();
            this.updateCarousel();
        });

        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        this.carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.carousel.addEventListener('mouseleave', () => this.startAutoPlay());

        this.startAutoPlay();
    }

    getItemsPerView() {
        const width = window.innerWidth;
        if (width <= 768) return 1;
        if (width <= 1024) return 2;
        return 4;
    }

    updateCarousel() {
        const cardWidth = this.track.offsetWidth / this.itemsPerView;
        const offset = this.currentIndex * cardWidth;
        this.track.style.transform = `translateX(-${offset}px)`;
    }

    nextSlide() {
        const maxIndex = Math.max(0, this.cards.length - this.itemsPerView);
        this.currentIndex = Math.min(this.currentIndex + 1, maxIndex);
        this.updateCarousel();
    }

    prevSlide() {
        this.currentIndex = Math.max(this.currentIndex - 1, 0);
        this.updateCarousel();
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            const maxIndex = Math.max(0, this.cards.length - this.itemsPerView);
            if (this.currentIndex < maxIndex) {
                this.nextSlide();
            } else {
                this.currentIndex = 0;
                this.updateCarousel();
            }
        }, 4000);
    }

    stopAutoPlay() {
        clearInterval(this.autoPlayInterval);
    }
}

// ============================= 
// Scroll Effects
// =============================

class ScrollEffects {
    constructor() {
        this.header = document.getElementById('header');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());
        this.setupRevealOnScroll();
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.header.classList.add('is-scrolled');
        } else {
            this.header.classList.remove('is-scrolled');
        }
    }

    setupRevealOnScroll() {
        const revealElements = document.querySelectorAll('.reveal');
        
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = `revealAnim 0.8s ease forwards`;
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            revealElements.forEach(el => observer.observe(el));
        } else {
            revealElements.forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            });
        }
    }
}

// ============================= 
// Form Handling
// =============================

class FormHandler {
    constructor() {
        this.form = document.querySelector('.contact-form');
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        const name = this.form.querySelector('input[placeholder="Tên của bạn"]').value;
        const email = this.form.querySelector('input[placeholder="Email của bạn"]').value;
        const phone = this.form.querySelector('input[placeholder="Số điện thoại"]').value;
        const message = this.form.querySelector('textarea').value;

        // Send via mailto
        const mailtoLink = `mailto:contact@example.com?subject=Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
        
        window.location.href = mailtoLink;
        
        // Reset form
        this.form.reset();
    }
}

// ============================= 
// Mobile Menu Toggle (if needed)
// =============================

class MobileMenu {
    constructor() {
        this.nav = document.querySelector('.header__nav');
        if (this.nav) {
            this.init();
        }
    }

    init() {
        // Add mobile menu toggle logic here if needed
        // For now, the nav is hidden via CSS on mobile
    }
}

// ============================= 
// Product Description Gallery
// =============================

class ProductDescGallery {
    constructor() {
        this.container = document.getElementById('descImagesContainer');
        this.expandBtn = document.getElementById('expandDescBtn');
        this.collapseBtn = document.getElementById('collapseDescBtn');
        
        if (this.container) {
            this.init();
        }
    }

    init() {
        // Load images from mota folder (1.jpg, 2.jpg, etc.)
        // We'll assume there are images available - user needs to add them
        this.loadImages();
        
        this.expandBtn.addEventListener('click', () => this.expand());
        this.collapseBtn.addEventListener('click', () => this.collapse());
    }

    loadImages() {
        // Create image elements and add to container
        const imageCount = 16; // Total images in mota folder
        
        for (let i = 1; i <= imageCount; i++) {
            const img = document.createElement('img');
            img.alt = `Mô tả sản phẩm ${i}`;
            img.className = 'desc-image';
            
            // Try loading jpg first, if fails try png
            img.src = `assets/images/mota/${i}.jpg`;
            
            let retried = false;
            img.onerror = function() {
                // If jpg fails and haven't retried, try png
                if (!retried) {
                    retried = true;
                    this.src = `assets/images/mota/${i}.png`;
                } else {
                    // If both fail, remove the image
                    this.remove();
                }
            };
            
            this.container.appendChild(img);
        }
        
        // Show expand button and hide collapse button initially
        this.updateButtonStates();
    }

    updateButtonStates() {
        const isExpanded = this.container.classList.contains('expanded');
        
        if (isExpanded) {
            this.expandBtn.style.display = 'none';
            this.collapseBtn.style.display = 'inline-block';
        } else {
            this.expandBtn.style.display = 'inline-block';
            this.collapseBtn.style.display = 'none';
        }
    }

    expand() {
        this.container.classList.add('expanded');
        this.updateButtonStates();
    }

    collapse() {
        this.container.classList.remove('expanded');
        this.updateButtonStates();
        
        // Scroll to top of section
        const section = document.getElementById('product-description');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// =============================
// Customer Reviews Slider
// =============================

class CustomerReviewsSlider {
    constructor() {
        this.imageElement = document.getElementById('customerReviewImage');
        this.prevBtn = document.querySelector('.review-nav--prev');
        this.nextBtn = document.querySelector('.review-nav--next');
        this.sliderContainer = document.getElementById('customerReviewSlider');

        this.images = [
            'assets/images/danhgia/z7963028398801_363e92dd96b83922a15d6a163f938909.jpg',
            'assets/images/danhgia/z7963028399074_3e41d866cf5dfdaae7c8ddc0dcd1cd79.jpg',
            'assets/images/danhgia/z7963028405283_e607610051be7444c51230dccf0681c4.jpg',
            'assets/images/danhgia/z7963028414269_c68c36b836f20d3ddb1dc92fff8afea6.jpg',
            'assets/images/danhgia/z7963028419238_005863434c1a4481fd1f5eca1ae768cb.jpg',
            'assets/images/danhgia/z7963028424739_c2616e3dcf869b4ddc32f9a76394289f.jpg',
            'assets/images/danhgia/z7963028431140_8473348b590d582ee2f7efd93d8428ab.jpg',
            'assets/images/danhgia/z7963028435259_9224e42302aae488a5ce2dce53b130e3.jpg',
            'assets/images/danhgia/z7963028440280_7104cd863fa631338d070d8711576d4a.jpg',
            'assets/images/danhgia/z7963028447128_ba9e1ee4186ec2761fa6f45f5c70d181.jpg',
            'assets/images/danhgia/z7963028447959_1d4e2d3ffaa833a5bff95b1f53265a8c.jpg',
            'assets/images/danhgia/z7963028459800_8ff0575f156b2d4a6d8780445f8f579d.jpg',
            'assets/images/danhgia/z7963028460613_9b6eca30e9e80b2b2ae4a74683fea654.jpg',
            'assets/images/danhgia/z7963028472179_3cae1f82cc923efbce1d3d2184c80be8.jpg',
            'assets/images/danhgia/z7963028472518_61afb0d3d257f47a3d3816a547ac24fc.jpg',
            'assets/images/danhgia/z7963028478955_990d375cbf631aa6b133a5d1ee5de9b5.jpg'
        ];

        this.currentIndex = 0;
        this.autoPlayInterval = null;

        if (this.imageElement && this.prevBtn && this.nextBtn && this.images.length > 0) {
            this.init();
        }
    }

    init() {
        this.showSlide(this.currentIndex);

        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        this.sliderContainer.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.sliderContainer.addEventListener('mouseleave', () => this.startAutoPlay());

        this.startAutoPlay();
    }

    showSlide(index) {
        this.imageElement.src = this.images[index];
        this.imageElement.alt = `Đánh giá khách hàng ${index + 1}`;
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.showSlide(this.currentIndex);
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.showSlide(this.currentIndex);
    }

    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => this.nextSlide(), 6000);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
}

// ============================= 
// Initialize All Components
// =============================

document.addEventListener('DOMContentLoaded', () => {
    new ImageSlider();
    new VideoSlider();
    new ProductDescGallery();
    new CustomerReviewsSlider();
    new ScrollEffects();
    new FormHandler();
    new MobileMenu();

    console.log('🚀 Website initialized successfully!');
});

// ============================= 
// Smooth Scroll Helper
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// ============================= 
// Keyboard Navigation
// =============================

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        const sliderBtn = document.querySelector('.slider__btn--prev');
        if (sliderBtn) sliderBtn.click();
    }
    if (e.key === 'ArrowRight') {
        const sliderBtn = document.querySelector('.slider__btn--next');
        if (sliderBtn) sliderBtn.click();
    }
});

// ============================= 
// Lightbox Functionality
// =============================

class Lightbox {
    constructor() {
        this.lightbox = document.getElementById('lightbox');
        this.lightboxImage = document.getElementById('lightboxImage');
        this.lightboxClose = document.getElementById('lightboxClose');
        this.thumbnails = document.querySelectorAll('[data-lightbox]');

        if (!this.lightbox || !this.lightboxImage || !this.lightboxClose || this.thumbnails.length === 0) {
            return;
        }

        this.init();
    }

    init() {
        this.thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => this.open(thumbnail.src));
        });

        this.lightboxClose.addEventListener('click', () => this.close());
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) this.close();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.close();
        });
    }

    open(imageSrc) {
        this.lightboxImage.src = imageSrc;
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Initialize lightbox after class declaration to avoid TDZ ReferenceError.
document.addEventListener('DOMContentLoaded', () => {
    new Lightbox();
});
