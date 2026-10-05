// ======================================================
// LABORATORIO CJV S.A.C.
// LOGIN DEL SISTEMA INTERNO
// ======================================================

// ======================================================
// CONFIGURACIÓN DE SUPABASE
// ======================================================

const SUPABASE_URL = "https://xhyejqperbzrhrwikhfa.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_gZVHUeFgv3yZIRxQ7FUJOQ_wyuI9s2x";


// Crear conexión con Supabase
const clienteSupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);


// ======================================================
// ELEMENTOS DEL FORMULARIO
// ======================================================

const formLogin =
    document.getElementById("formLogin");

const correo =
    document.getElementById("correo");

const contrasena =
    document.getElementById("contrasena");

const botonIngresar =
    document.getElementById("botonIngresar");

const mostrarContrasena =
    document.getElementById("mostrarContrasena");

const mensajeLogin =
    document.getElementById("mensajeLogin");


// ======================================================
// MOSTRAR / OCULTAR CONTRASEÑA
// ======================================================

mostrarContrasena.addEventListener("click", () => {

    if (contrasena.type === "password") {

        contrasena.type = "text";

        mostrarContrasena.textContent = "Ocultar";

    } else {

        contrasena.type = "password";

        mostrarContrasena.textContent = "Mostrar";

    }

});


// ======================================================
// MENSAJE INTERNO
// ======================================================

function limpiarMensaje() {

    if (!mensajeLogin) {
        return;
    }

    mensajeLogin.textContent = "";

    mensajeLogin.className =
        "mensaje-login";

}


// ======================================================
// INICIAR SESIÓN
// ======================================================

formLogin.addEventListener(
    "submit",
    async (evento) => {

        evento.preventDefault();

        limpiarMensaje();


        const emailIngresado =
            correo.value.trim();

        const passwordIngresado =
            contrasena.value;


        // ==================================================
        // VALIDAR CAMPOS
        // ==================================================

        if (
            !emailIngresado ||
            !passwordIngresado
        ) {

            mostrarAdvertencia(
                "Ingrese su correo electrónico y contraseña.",
                "Datos incompletos"
            );

            return;
        }


        // ==================================================
        // DESACTIVAR BOTÓN
        // ==================================================

        botonIngresar.disabled = true;

        botonIngresar.textContent =
            "Verificando...";


        try {

            // ==================================================
            // AUTENTICACIÓN CON SUPABASE
            // ==================================================

            const {
                data,
                error
            } =
                await clienteSupabase.auth.signInWithPassword({

                    email:
                        emailIngresado,

                    password:
                        passwordIngresado

                });


            // ==================================================
            // CREDENCIALES INCORRECTAS
            // ==================================================

            if (error) {

                console.error(
                    "Error de autenticación:",
                    error
                );

                mostrarError(
                    "El correo o la contraseña son incorrectos.",
                    "Acceso denegado"
                );

                return;
            }


            // ==================================================
            // COMPROBAR SESIÓN
            // ==================================================

            if (!data.session) {

                mostrarError(
                    "No se pudo iniciar sesión. Intente nuevamente.",
                    "No se pudo acceder"
                );

                return;
            }


            // ==================================================
            // LOGIN CORRECTO
            // ==================================================

            mostrarExito(
                "Acceso correcto. Ingresando al sistema...",
                "¡Bienvenido!"
            );


            // ==================================================
            // IR AL PANEL
            // ==================================================

            setTimeout(() => {

                window.location.href =
                    "panel.html";

            }, 1200);


        } catch (error) {

            console.error(
                "Error de autenticación:",
                error
            );


            mostrarError(
                "No se pudo conectar con el sistema. Intente nuevamente.",
                "Error de conexión"
            );


        } finally {

            botonIngresar.disabled =
                false;

            botonIngresar.textContent =
                "Ingresar al sistema";

        }

    }
);


// ======================================================
// COMPROBAR SI YA HAY UNA SESIÓN INICIADA
// ======================================================

async function comprobarSesion() {

    try {

        const {
            data: {
                session
            }
        } =
            await clienteSupabase.auth.getSession();


        if (session) {

            window.location.href =
                "panel.html";

        }

    } catch (error) {

        console.error(
            "Error al comprobar la sesión:",
            error
        );

    }

}


// Ejecutar comprobación
comprobarSesion();