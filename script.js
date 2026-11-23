
document.addEventListener("DOMContentLoaded", function () {

    const pestañas = document.querySelectorAll(".pestaña");
    const paneles = document.querySelectorAll(".panel");

    pestañas.forEach(function (pestaña) {

        pestaña.addEventListener("click", function () {

            // Desactivar todas las pestañas
            pestañas.forEach(function (elemento) {
                elemento.classList.remove("activa");
            });

            // Ocultar todos los paneles
            paneles.forEach(function (panel) {
                panel.hidden = true;
            });

            // Activar la pestaña seleccionada
            pestaña.classList.add("activa");

            // Buscar el contenido correspondiente
            const id = pestaña.getAttribute("data-tab");
            const contenido = document.getElementById(id);

            // Mostrar el contenido seleccionado
            if (contenido) {
                contenido.hidden = false;
            } else {
                console.error("No se encontró el panel:", id);
            }

        });

    });

    console.log("Pestañas encontradas:", pestañas.length);
});
