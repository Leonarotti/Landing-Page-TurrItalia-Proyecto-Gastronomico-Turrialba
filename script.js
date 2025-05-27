document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-newsletter");
    const mensaje = document.getElementById("mensaje-exito");

    const toggleBtn = document.querySelector(".menu-toggle");
    const closeBtn = document.querySelector(".menu-close");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileNavLinks = document.querySelectorAll(".mobile-menu a");

    toggleBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('oculto');
        mobileMenu.classList.add('animar-entrada');
        mobileMenu.classList.remove('animar-salida');
        document.body.style.overflow = 'hidden'; // Evita el scroll del body
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('animar-entrada');
        mobileMenu.classList.add('animar-salida');
        // Espera a que la animación termine antes de ocultar el menú
        setTimeout(() => {
            mobileMenu.classList.add('oculto');
        }, 300); // Duración de la animación de salida

        document.body.style.overflow = ''; // Restaura el scroll del body
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('animar-entrada');
            mobileMenu.classList.add('animar-salida');
            // Espera a que la animación termine antes de ocultar el menú
            setTimeout(() => {
                mobileMenu.classList.add('oculto');
            }, 300); // Duración de la animación de salida

            document.body.style.overflow = ''; // Restaura el scroll del body
        });
    }
    );


    // Validación del formulario
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const acepta = document.getElementById("acepto").checked;

        if (!nombre || !correo || !acepta) {
            alert("Por favor completa todos los campos y acepta las políticas.");
            return;
        }

        // Simulación de registro exitoso
        form.reset();
        mensaje.classList.remove("oculto");

        setTimeout(() => {
            mensaje.classList.add("oculto");
        }, 5000);
    });


    // Inicialización de Swiper para la galería de imágenes
    const swiper = new Swiper('.galeria-swiper', {
        loop: true,
        grabCursor: true,
        spaceBetween: 20,
        slidesPerView: 1,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });


    // Resaltar el enlace de navegación activo al hacer scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let currentSectionId = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });


    // Mensaje de éxito para el formulario
    const modal = document.getElementById("registroModal");
    const btnCTA = document.getElementById("btn-cta");

    btnCTA.addEventListener("click", () => {
        modal.classList.remove("oculto");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("oculto");
        }
    });

    // Inicialización de AOS (Animate On Scroll) para animaciones
    const h2Elements = document.querySelectorAll(".section h2");
    h2Elements.forEach((h2) => {
        h2.setAttribute("data-aos", "fade-down");
    });

    const h3Elements = document.querySelectorAll(".section h3");
    h3Elements.forEach((h3) => {
        h3.setAttribute("data-aos", "fade-right");
    });

    const pElements = document.querySelectorAll(".section p");
    pElements.forEach((p) => {
        p.setAttribute("data-aos", "fade-up");
    });

    const imgElements = document.querySelectorAll(".section img");
    imgElements.forEach((img) => {
        img.setAttribute("data-aos", "zoom-in");
    });

    const liElements = document.querySelectorAll(".section .paso li");
    liElements.forEach((li) => {
        li.setAttribute("data-aos", "fade-up");
    });


    // Inicialización de AOS (Animate On Scroll)
    AOS.init({
        duration: 1000, // Duración de la animación
        once: false, // Solo animar una vez
        easing: 'ease-out', // Efecto de easing
    });

});
