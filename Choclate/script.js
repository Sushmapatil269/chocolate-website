$(document).ready(function () {
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      const target = $(this).attr('href');
      $('html, body').animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  
    // Form submission handling
    $('#contact-form').on('submit', function (e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    });
  
    // Add animation to product cards on scroll
    $(window).scroll(function () {
      $('.product-card').each(function () {
        const cardPosition = $(this).offset().top;
        const scrollPosition = $(window).scrollTop() + $(window).height();
        if (scrollPosition > cardPosition) {
          $(this).addClass('animated');
        }
      });
    });
  });
  // Testimonial Slider
$(document).ready(function() {
    let currentSlide = 0;
    const slides = $('.slide');
    const dots = $('.dot');
  
    function showSlide(n) {
      slides.removeClass('active');
      dots.removeClass('active');
      currentSlide = (n + slides.length) % slides.length;
      slides.eq(currentSlide).addClass('active');
      dots.eq(currentSlide).addClass('active');
    }
  
    // Create dots
    slides.each((index) => {
      $('.slider-dots').append(`<div class="dot ${index === 0 ? 'active' : ''}"></div>`);
    });
  
    // Dot click handler
    $('.dot').click(function() {
      showSlide($(this).index());
    });
  
    // Auto-advance slider
    let autoSlide = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);
  
    // Pause on hover
    $('.slider-container').hover(
      () => clearInterval(autoSlide),
      () => autoSlide = setInterval(() => showSlide(currentSlide + 1), 5000)
    );
  });
  
