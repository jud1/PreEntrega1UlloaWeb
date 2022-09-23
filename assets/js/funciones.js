/* Funciones ejecutadas al cargar todo el dom */
window.onload = function () {

    /* Scroll suave */
    document.querySelectorAll('[smooth-scroll]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
};