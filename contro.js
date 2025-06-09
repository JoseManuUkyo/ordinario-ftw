document.addEventListener("DOMContentLoaded", () => {
            const tabs = document.querySelectorAll('[role="tab"]');
            const panels = document.querySelectorAll('[role="tabpanel"]');

            // Oculta todos los paneles al inicio
            panels.forEach(panel => panel.style.display = "none");

            // Muestra el primero por defecto
            document.querySelector("#pes1").style.display = "block";

            tabs.forEach(tab => {
                tab.addEventListener("click", () => {
                    const targetPanel = document.getElementById(tab.getAttribute("aria-controls"));

                    // Oculta todos los paneles
                    panels.forEach(panel => panel.style.display = "none");

                    // Muestra el panel correspondiente
                    targetPanel.style.display = "block";
                });
            });
});

window.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("DiariosBoticaria");

    if (contenedor) {
        const img = document.createElement("img");
        img.src = "DiariosBoticaria.jpeg"; // Ruta relativa a tu carpeta de imágenes
        img.alt = "Imagen de Los Diarios de la Boticaria";
        img.classList.add("img-boticaria");
        contenedor.appendChild(img);
    }
});

window.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("slimeAzusa");

    if (contenedor) {
        const img = document.createElement("img");
        img.src = "AzusaSlime.jpeg"; // Ruta relativa a tu carpeta de imágenes
        img.alt = "Imagen de Azusa";
        img.classList.add("img-slime");
        contenedor.appendChild(img);
    }
});

window.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("IrumaDemonio");

    if (contenedor) {
        const img = document.createElement("img");
        img.src = "mairimashita.jpeg"; // Ruta relativa a tu carpeta de imágenes
        img.alt = "Imagen de Mairimashita Iruma Kun";
        img.classList.add("img-Iruma");
        contenedor.appendChild(img);
    }
});

window.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("EVA-01");

    if (contenedor) {
        const img = document.createElement("img");
        img.src = "NeoEva.jpeg"; // Ruta relativa a tu carpeta de imágenes
        img.alt = "Imagen de Evangelion";
        img.classList.add("img-Eva");
        contenedor.appendChild(img);
    }
});

window.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("REV");

    if (contenedor) {
        const img = document.createElement("img");
        img.src = "ResidentEvil.jpeg"; // Ruta relativa a tu carpeta de imágenes
        img.alt = "Imagen de Resident Evil";
        img.classList.add("img-REV");
        contenedor.appendChild(img);
    }
});

window.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("DMC");

    if (contenedor) {
        const img = document.createElement("img");
        img.src = "DevilMayCry.jpeg"; // Ruta relativa a tu carpeta de imágenes
        img.alt = "Imagen de Devil May Cry";
        img.classList.add("img-DMC");
        contenedor.appendChild(img);
    }
});

window.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("marioO");

    if (contenedor) {
        const img = document.createElement("img");
        img.src = "marioOddysey.jpeg"; // Ruta relativa a tu carpeta de imágenes
        img.alt = "Imagen de Mario";
        img.classList.add("img-mario");
        contenedor.appendChild(img);
    }
});

window.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("ShannoaC");

    if (contenedor) {
        const img = document.createElement("img");
        img.src = "Castlevania.jpeg"; // Ruta relativa a tu carpeta de imágenes
        img.alt = "Imagen de Castlevania";
        img.classList.add("img-castlevania");
        contenedor.appendChild(img);
    }
});

window.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("SamusM");

    if (contenedor) {
        const img = document.createElement("img");
        img.src = "samusMetorid.jpeg"; // Ruta relativa a tu carpeta de imágenes
        img.alt = "Imagen de Metroid";
        img.classList.add("img-metroid");
        contenedor.appendChild(img);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const user = document.getElementById("user").value.trim();
            const password = document.getElementById("password").value.trim();
            const mensaje = document.getElementById("mensaje");

            const usuarioValido = "Manuel";
            const contrasenaValida = "1984";

            if (user === usuarioValido && password === contrasenaValida) {
                window.location.href = "PaginaNuevaProyecto.html";
            } else {
                mensaje.textContent = "Usuario o contraseña incorrectos";
            }
        });
    }
});

