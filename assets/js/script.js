/* ===================================================================
    
    Author          : Valid Theme
    Template Name   : Agrul - Organic Farm Agriculture Template
    Version         : 1.0
    
* ================================================================= */

(function($){
    "use strict"
    $(document).ready(function(){

        AOS.init({
            duration: 1500,
        });


		/* ==================================================
            # Banner Carousel
         ===============================================*/

         const BannerOne = new Swiper('.banner-style-one-carousel', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            autoplay: false,
			speed: 2000,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
          
            // If we need pagination
            pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          
        });

         /* ==================================================
            # Project Carousel
         ===============================================*/
		const projectStyleTwo = new Swiper(".project-style-two-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: false,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
	
			breakpoints: {
				
				1199: {
					slidesPerView: 1.5,
				}
			},
		});


         /* ==================================================
            # Services Carousel
         ===============================================*/
		const ServicesStyleOne = new Swiper(".service-style-one-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: false,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1199: {
					slidesPerView: 4,
				}
			},
		});

        /* ==================================================
            # Brand Carousel
         ===============================================*/
		const BrandStyleOne = new Swiper(".brand-style-one-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			
			breakpoints: {
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
				},
				1199: {
					slidesPerView: 6,
				}
			},
		});

		/* ==================================================
            # Mixitup
         ===============================================*/

		//  var containerEl = document.querySelector('.magnific-mix-gallery');

        //     var mixer = mixitup(containerEl);

        /* ==================================================
            # Venobox
         ===============================================*/

			new VenoBox({
				selector: '.my-video-links',
			});

			/* ==================================================
            # Typed js
            ===============================================*/

			$(".typed").typed({
				strings: ["Web Developer", "Web Designer", "Stylish Model" , "Content Writer"],
				// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
				stringsElement: null,
				// typing speed
				typeSpeed: 50,
				// time before typing starts
				startDelay: 1200,
				// backspacing speed
				backSpeed: 20,
				// time before backspacing
				backDelay: 500,
				// loop
				loop: true,
				// false = infinite
				loopCount: 5,
				// show cursor
				showCursor: false,
				// character for cursor
				cursorChar: "|",
				// attribute to type (null == text)
				attr: null,
				// either html or text
				contentType: 'html',
				// call when done callback function
				callback: function() {},
				// starting callback function before each string
				preStringTyped: function() {},
				//callback for every typed string
				onStringTyped: function() {},
				// callback for reset
				resetCallback: function() {}
			});


			/* ==================================================
		    # Fun Factor Init
		===============================================*/
		$('.counter').counterUp({
			delay: 20,
			time: 3000
		});

		// =============Scroll Up Button Progress=======
		let progressPath = document.getElementById("progress-path");
        let progressWrap = document.getElementById("progress-wrap");
        let pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.webkitTransition = "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.webkitTransition =
        "stroke-dashoffset 10ms linear";
  
       const onScollEvent = function (event) {
         let scroll = window.scrollY;
         let height = document.body.scrollHeight - window.innerHeight;
         let progress = pathLength - (scroll * pathLength) / height;
         progressPath.style.strokeDashoffset = progress;

         let offset = 50;
         if (window.scrollY > offset) {
           progressWrap.classList.add("active-progress");
         } else {
           progressWrap.classList.remove("active-progress");
         }
       };


	   // ============= Progress=======
onScollEvent();
window.onscroll = onScollEvent;
progressWrap.onclick = function (event) {
  window.scroll({ top: 0, behavior: "smooth" });
  return false;
};
	

$(window).on('scroll',function(){
	let scroll = $(window).scrollTop();
	let oTop = $('.progress-bar').offset().top - window.innerHeight;
	if(scroll>oTop){
		$(".progress-bar").addClass("progressbar-active");
	}
	else{
		$(".progress-bar").removeClass("progressbar-active");
	}
});


	   // ============= Progress=======

$(window).on('scroll', function () {
    let scroll = $(window).scrollTop();

    $('.skill-wrapper').each(function () {
        let wrapper = $(this);
        let oTop = wrapper.offset().top - window.innerHeight + 50;

        if (scroll > oTop) {
            let percent = wrapper.find('.progress-bar').attr('data-percent');
            
            // bar fill হবে
            wrapper.find('.progress-bar').css("width", percent + "%");
            
            // text move হবে
            wrapper.find('.skill-text').css("left", percent + "%");
        } else {
            // উপরে গেলে reset হবে
            wrapper.find('.progress-bar').css("width", "0");
            wrapper.find('.skill-text').css("left", "0");
        }
    });
});


    })
})(jQuery);


 const form = document.getElementById("quoteForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // পেজ রিফ্রেশ/উপরে যাওয়া বন্ধ করবে

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    alert("Thank you, " + name + "! Your request has been submitted.");
  });

// ===================
  form.addEventListener("submit", function(e) {
  e.preventDefault();

  const button = form.querySelector("button");
  button.disabled = true;
  button.textContent = "Sending...";

  setTimeout(() => {
    alert("Form submitted successfully!");
    button.disabled = false;
    button.textContent = "Get Quote Free";
  }, 2000);
});


