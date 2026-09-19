// ======================================================
// LABORATORIO CJV S.A.C.
// LOGIN DEL SISTEMA INTERNO
// ======================================================

// CONFIGURACIÓN DE SUPABASE
const SUPABASE_URL = "https://xhyejqperbzrhrwikhfa.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_gZVHUeFgv3yZIRxQ7FUJOQ_wyuI9s2x";

// Crear conexión con Supabase
const clienteSupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

// ======================================================
// ELEMENTOS DEL FORMULARIO
// ======================================================

const formLogin = document.getElementById("formLogin");
const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const botonIngresar = document.getElementById("botonIngresar");
const mostrarContrasena = document.getElementById("mostrarContrasena");
const mensajeLogin = document.getElementById("mensajeLogin");

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
// MOSTRAR MENSAJES
// ======================================================

function mostrarMensaje(mensaje, tipo) {

    mensajeLogin.textContent = mensaje;
    mensajeLogin.className = "mensaje-login";

    if (tipo === "error") {
        mensajeLogin.classList.add("error");
    }

    if (tipo === "exito") {
        mensajeLogin.classList.add("exito");
    }
}

function limpiarMensaje() {
    mensajeLogin.textContent = "";
    mensajeLogin.className = "mensaje-login";
}

// ======================================================
// INICIAR SESIÓN
// ======================================================

formLogin.addEventListener("submit", async (evento) => {

    evento.preventDefault();

    limpiarMensaje();

    const emailIngresado = correo.value.trim();
    const passwordIngresado = contrasena.value;

    // Validar campos
    if (!emailIngresado || !passwordIngresado) {

        mostrarMensaje(
            "Ingrese su correo electrónico y contraseña.",
            "error"
        );

        return;
    }

    // Desactivar botón mientras se verifica
    botonIngresar.disabled = true;
    botonIngresar.textContent = "Verificando...";

    try {

        const { data, error } =
            await clienteSupabase.auth.signInWithPassword({
                email: emailIngresado,
                password: passwordIngresado
            });

        // Credenciales incorrectas
        if (error) {

            mostrarMensaje(
                "Correo o contraseña incorrectos.",
                "error"
            );

            return;
        }

        // Comprobar sesión
        if (!data.session) {

            mostrarMensaje(
                "No se pudo iniciar sesión. Intente nuevamente.",
                "error"
            );

            return;
        }

        // Login correcto
        mostrarMensaje(
            "Acceso correcto. Ingresando al sistema...",
            "exito"
        );

        // Ir al panel
        setTimeout(() => {
            window.location.href = "panel.html";
        }, 700);

    } catch (error) {

        console.error("Error de autenticación:", error);

        mostrarMensaje(
            "No se pudo conectar con el sistema. Intente nuevamente.",
            "error"
        );

    } finally {

        botonIngresar.disabled = false;
        botonIngresar.textContent = "Ingresar al sistema";

    }

});

// ======================================================
// COMPROBAR SI YA HAY UNA SESIÓN INICIADA
// ======================================================

async function comprobarSesion() {

    try {

        const {
            data: { session }
        } = await clienteSupabase.auth.getSession();

        if (session) {
            window.location.href = "panel.html";
        }

    } catch (error) {

        console.error(
            "Error al comprobar la sesión:",
            error
        );

    }
}

comprobarSesion();