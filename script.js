document.addEventListener('DOMContentLoaded', function() {

    const carousel = document.querySelector('.carousel');

    let scrollAmount = 0;

    const scrollStep = 2; // Ajusta la velocidad del desplazamiento

    const scrollInterval = 20; // Ajusta el intervalo de tiempo en milisegundos

    function autoScroll() {

        if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {

            scrollAmount = 0;

        } else {

            scrollAmount += scrollStep;

        }

        carousel.scrollTo({

            left: scrollAmount,

            behavior: 'smooth'

        });

    }

    setInterval(autoScroll, scrollInterval);

    const testimonials = document.querySelector('.auto-scroll');

    let testimonialScrollAmount = 0;

    const testimonialScrollStep = 2; // Ajusta la velocidad del desplazamiento

    const testimonialScrollInterval = 20; // Ajusta el intervalo de tiempo en milisegundos

    function autoScrollTestimonials() {

        if (testimonialScrollAmount >= testimonials.scrollHeight - testimonials.clientHeight) {

            testimonialScrollAmount = 0;

        } else {

            testimonialScrollAmount += testimonialScrollStep;

        }

        testimonials.scrollTo({

            top: testimonialScrollAmount,

            behavior: 'smooth'

        });

    }

    setInterval(autoScrollTestimonials, testimonialScrollInterval);

});