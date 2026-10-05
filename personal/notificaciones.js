/* =========================================================
   LABORATORIO CJV S.A.C.
   SISTEMA DE NOTIFICACIONES MODERNAS
   ========================================================= */

(function () {

    "use strict";

    let modalActual = null;

    /* =====================================================
       CREAR NOTIFICACIÓN
       ===================================================== */

    function crearNotificacion({
        tipo = "exito",
        titulo = "Correcto",
        mensaje = "",
        textoBoton = "Aceptar"
    }) {

        cerrarNotificacion();

        const overlay = document.createElement("div");

        overlay.className =
            "cjv-notificacion-overlay";

        const modal = document.createElement("div");

        modal.className =
            `cjv-notificacion cjv-notificacion-${tipo}`;

        let icono = "";

        if (tipo === "exito") {

            icono = `
                <div class="cjv-icono cjv-icono-exito">
                    <svg viewBox="0 0 52 52">
                        <circle
                            class="cjv-circulo"
                            cx="26"
                            cy="26"
                            r="23"
                        />
                        <path
                            class="cjv-check"
                            d="M14 27 L22 35 L39 17"
                        />
                    </svg>
                </div>
            `;

        } else if (tipo === "error") {

            icono = `
                <div class="cjv-icono cjv-icono-error">
                    <svg viewBox="0 0 52 52">
                        <circle
                            class="cjv-circulo"
                            cx="26"
                            cy="26"
                            r="23"
                        />
                        <path
                            class="cjv-x cjv-x1"
                            d="M17 17 L35 35"
                        />
                        <path
                            class="cjv-x cjv-x2"
                            d="M35 17 L17 35"
                        />
                    </svg>
                </div>
            `;

        } else if (tipo === "advertencia") {

            icono = `
                <div class="cjv-icono cjv-icono-advertencia">
                    <svg viewBox="0 0 52 52">
                        <circle
                            class="cjv-circulo"
                            cx="26"
                            cy="26"
                            r="23"
                        />
                        <path
                            class="cjv-advertencia"
                            d="M26 14 V30"
                        />
                        <circle
                            cx="26"
                            cy="37"
                            r="2"
                        />
                    </svg>
                </div>
            `;

        } else {

            icono = `
                <div class="cjv-icono cjv-icono-info">
                    <svg viewBox="0 0 52 52">
                        <circle
                            class="cjv-circulo"
                            cx="26"
                            cy="26"
                            r="23"
                        />
                        <path
                            class="cjv-info"
                            d="M26 23 V37"
                        />
                        <circle
                            cx="26"
                            cy="16"
                            r="2"
                        />
                    </svg>
                </div>
            `;
        }

        modal.innerHTML = `

            <button
                type="button"
                class="cjv-notificacion-cerrar"
                aria-label="Cerrar"
            >
                ×
            </button>

            <div class="cjv-notificacion-contenido">

                ${icono}

                <div class="cjv-notificacion-texto">

                    <h3>
                        ${escapeHTML(titulo)}
                    </h3>

                    <p>
                        ${escapeHTML(mensaje)}
                    </p>

                </div>

            </div>

            <button
                type="button"
                class="cjv-notificacion-boton"
            >
                ${escapeHTML(textoBoton)}
            </button>

        `;

        overlay.appendChild(modal);

        document.body.appendChild(overlay);

        modalActual = overlay;

        requestAnimationFrame(() => {

            overlay.classList.add(
                "cjv-notificacion-visible"
            );

        });

        const cerrarBoton =
            modal.querySelector(
                ".cjv-notificacion-cerrar"
            );

        const aceptarBoton =
            modal.querySelector(
                ".cjv-notificacion-boton"
            );

        cerrarBoton?.addEventListener(
            "click",
            cerrarNotificacion
        );

        aceptarBoton?.addEventListener(
            "click",
            cerrarNotificacion
        );

        overlay.addEventListener(
            "click",
            evento => {

                if (
                    evento.target === overlay
                ) {

                    cerrarNotificacion();

                }

            }
        );

        document.addEventListener(
            "keydown",
            manejarTeclaEscape
        );

        return overlay;
    }


    /* =====================================================
       CERRAR
       ===================================================== */

    function cerrarNotificacion() {

        if (!modalActual) {
            return;
        }

        const elemento =
            modalActual;

        elemento.classList.remove(
            "cjv-notificacion-visible"
        );

        elemento.classList.add(
            "cjv-notificacion-saliendo"
        );

        setTimeout(() => {

            elemento.remove();

            if (
                modalActual === elemento
            ) {

                modalActual = null;

            }

        }, 300);

        document.removeEventListener(
            "keydown",
            manejarTeclaEscape
        );
    }


    /* =====================================================
       ESC
       ===================================================== */

    function manejarTeclaEscape(evento) {

        if (
            evento.key === "Escape"
        ) {

            cerrarNotificacion();

        }

    }


    /* =====================================================
       ESCAPAR HTML
       ===================================================== */

    function escapeHTML(texto) {

        const div =
            document.createElement("div");

        div.textContent =
            String(texto ?? "");

        return div.innerHTML;
    }


    /* =====================================================
       FUNCIONES PÚBLICAS
       ===================================================== */

    window.mostrarExito = function (
        mensaje,
        titulo = "Proceso completado"
    ) {

        return crearNotificacion({

            tipo: "exito",

            titulo,

            mensaje

        });

    };


    window.mostrarError = function (
        mensaje,
        titulo = "Algo salió mal"
    ) {

        return crearNotificacion({

            tipo: "error",

            titulo,

            mensaje

        });

    };


    window.mostrarAdvertencia = function (
        mensaje,
        titulo = "Atención"
    ) {

        return crearNotificacion({

            tipo: "advertencia",

            titulo,

            mensaje

        });

    };


    window.mostrarInfo = function (
        mensaje,
        titulo = "Información"
    ) {

        return crearNotificacion({

            tipo: "info",

            titulo,

            mensaje

        });

    };


    /* =====================================================
       REEMPLAZAR ALERT NATIVO
       ===================================================== */

    window.alert = function (mensaje) {

        const texto =
            String(mensaje ?? "");

        let tipo = "info";

        let titulo = "Información";

        const textoMinuscula =
            texto.toLowerCase();

        if (
            textoMinuscula.includes("correctamente") ||
            textoMinuscula.includes("éxito") ||
            textoMinuscula.includes("exito") ||
            textoMinuscula.includes("iniciado") ||
            textoMinuscula.includes("registrada") ||
            textoMinuscula.includes("registrado") ||
            textoMinuscula.includes("enviado") ||
            textoMinuscula.includes("subido")
        ) {

            tipo = "exito";

            titulo = "Proceso completado";

        }

        if (
            textoMinuscula.includes("error") ||
            textoMinuscula.includes("no se pudo") ||
            textoMinuscula.includes("incorrect") ||
            textoMinuscula.includes("falló") ||
            textoMinuscula.includes("fallo")
        ) {

            tipo = "error";

            titulo = "Error";

        }

        if (
            textoMinuscula.includes("advertencia") ||
            textoMinuscula.includes("atención")
        ) {

            tipo = "advertencia";

            titulo = "Atención";

        }

        crearNotificacion({

            tipo,

            titulo,

            mensaje: texto

        });

    };


    /* =====================================================
       EXPONER CIERRE
       ===================================================== */

    window.cerrarNotificacion =
        cerrarNotificacion;

})();