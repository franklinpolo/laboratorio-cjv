// ======================================================

 

 

 

 

 

 

 

// LABORATORIO CJV S.A.C.

 

 

 

 

 

 

 

// PANEL DEL SISTEMA INTERNO

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// 1. CONFIGURACIÓN DE SUPABASE

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

const SUPABASE_URL =

 

 

 

 

 

 

 

    "https://xhyejqperbzrhrwikhfa.supabase.co";

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

const SUPABASE_PUBLISHABLE_KEY =

 

 

 

 

 

 

 

    "sb_publishable_gZVHUeFgv3yZIRxQ7FUJOQ_wyuI9s2x";

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

const clienteSupabase = window.supabase.createClient(

 

 

 

 

 

 

 

    SUPABASE_URL,

 

 

 

 

 

 

 

    SUPABASE_PUBLISHABLE_KEY

 

 

 

 

 

 

 

);

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// 2. ELEMENTOS DEL PANEL

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

const correoUsuario =

 

 

 

 

 

 

 

    document.getElementById("correoUsuario");

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

const cerrarSesion =

 

 

 

 

 

 

 

    document.getElementById("cerrarSesion");

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

const tituloSeccion =

 

 

 

 

 

 

 

    document.getElementById("tituloSeccion");

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

const botonesMenu =

 

 

 

 

 

 

 

    document.querySelectorAll(".menu-item");

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

const secciones =

 

 

 

 

 

 

 

    document.querySelectorAll(".panel-seccion");

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// ELEMENTOS DEL DASHBOARD

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

const totalRecepciones =

 

 

 

 

 

 

 

    document.getElementById("totalRecepciones");

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

const totalMuestras =

 

 

 

 

 

 

 

    document.getElementById("totalMuestras");

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

const muestrasAnalisis =

 

 

 

 

 

 

 

    document.getElementById("muestrasAnalisis");

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

const muestrasFinalizadas =

 

 

 

 

 

 

 

    document.getElementById("muestrasFinalizadas");

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

const tablaRecepcionesDashboard =

 

 

 

 

 

 

 

    document.getElementById(

 

 

 

 

 

 

 

        "tablaRecepcionesDashboard"

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// ELEMENTOS DE RECEPCIONES

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

const nuevaRecepcionDashboard =

 

 

 

 

 

 

 

    document.getElementById(

 

 

 

 

 

 

 

        "nuevaRecepcionDashboard"

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

const nuevaRecepcion =

 

 

 

 

 

 

 

    document.getElementById(

 

 

 

 

 

 

 

        "nuevaRecepcion"

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

const contenedorNuevaRecepcion =

 

 

 

 

 

 

 

    document.getElementById(

 

 

 

 

 

 

 

        "contenedorNuevaRecepcion"

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

const contenedorTablaRecepciones =

 

 

 

 

 

 

 

    document.getElementById(

 

 

 

 

 

 

 

        "contenedorTablaRecepciones"

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

const cerrarFormularioRecepcion =

 

 

 

 

 

 

 

    document.getElementById(

 

 

 

 

 

 

 

        "cerrarFormularioRecepcion"

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

const cancelarRecepcion =

 

 

 

 

 

 

 

    document.getElementById(

 

 

 

 

 

 

 

        "cancelarRecepcion"

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

const formRecepcion =

 

 

 

 

 

 

 

    document.getElementById(

 

 

 

 

 

 

 

        "formRecepcion"

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

const fechaRecepcion =

 

 

 

 

 

 

 

    document.getElementById(

 

 

 

 

 

 

 

        "fechaRecepcion"

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

const listaMuestras =

 

 

 

 

 

 

 

    document.getElementById(

 

 

 

 

 

 

 

        "listaMuestras"

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

const agregarMuestra =

 

 

 

 

 

 

 

    document.getElementById(

 

 

 

 

 

 

 

        "agregarMuestra"

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// 3. PROTEGER EL PANEL

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

async function verificarSesion() {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    try {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        const {

 

 

 

 

 

 

 

            data: { session },

 

 

 

 

 

 

 

            error

 

 

 

 

 

 

 

        } = await clienteSupabase.auth.getSession();

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        if (error) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            console.error(

 

 

 

 

 

 

 

                "Error al verificar sesión:",

 

 

 

 

 

 

 

                error

 

 

 

 

 

 

 

            );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            window.location.href =

 

 

 

 

 

 

 

                "login.html";

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            return;

 

 

 

 

 

 

 

        }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        if (!session) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            window.location.href =

 

 

 

 

 

 

 

                "login.html";

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            return;

 

 

 

 

 

 

 

        }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        if (correoUsuario) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            correoUsuario.textContent =

 

 

 

 

 

 

 

                session.user.email ||

 

 

 

 

 

 

 

                "Personal CJV";

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        await cargarDashboard();

 

 

 

 

 

 

 

        await cargarTiposAnalisis();

 

        await cargarAnalisisActivosRecepcion();

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    } catch (error) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        console.error(

 

 

 

 

 

 

 

            "No se pudo verificar la sesión:",

 

 

 

 

 

 

 

            error

 

 

 

 

 

 

 

        );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        window.location.href =

 

 

 

 

 

 

 

            "login.html";

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// 4. CAMBIAR ENTRE SECCIONES

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

botonesMenu.forEach((boton) => {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    boton.addEventListener(

 

 

 

 

 

 

 

        "click",

 

 

 

 

 

 

 

        () => {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            const nombreSeccion =

 

 

 

 

 

 

 

                boton.dataset.seccion;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            botonesMenu.forEach((item) => {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                item.classList.remove(

 

 

 

 

 

 

 

                    "activo"

 

 

 

 

 

 

 

                );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            });

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            boton.classList.add(

 

 

 

 

 

 

 

                "activo"

 

 

 

 

 

 

 

            );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            secciones.forEach((seccion) => {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                seccion.classList.remove(

 

 

 

 

 

 

 

                    "activa"

 

 

 

 

 

 

 

                );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            });

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            const seccionSeleccionada =

 

 

 

 

 

 

 

                document.getElementById(

 

 

 

 

 

 

 

                    nombreSeccion

 

 

 

 

 

 

 

                );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            if (seccionSeleccionada) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                seccionSeleccionada

 

 

 

 

 

 

 

                    .classList.add(

 

 

 

 

 

 

 

                        "activa"

 

 

 

 

 

 

 

                    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            const titulos = {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                dashboard: "Dashboard",

 

 

 

 

 

 

 

                recepciones: "Recepciones",

 

 

 

 

 

 

 

                clientes: "Clientes",

 

 

 

 

 

 

 

                muestras: "Muestras",

 

 

 

 

 

 

 

                analisis: "Análisis",

 

 

 

 

 

 

 

                certificados: "Certificados"

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            };

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            if (tituloSeccion) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                tituloSeccion.textContent =

 

 

 

 

 

 

 

                    titulos[nombreSeccion] ||

 

 

 

 

 

 

 

                    "Sistema interno";

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        }

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

});

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// 5. CERRAR SESIÓN

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

if (cerrarSesion) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    cerrarSesion.addEventListener(

 

 

 

 

 

 

 

        "click",

 

 

 

 

 

 

 

        async () => {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            cerrarSesion.disabled = true;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            cerrarSesion.textContent =

 

 

 

 

 

 

 

                "Cerrando...";

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            try {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                const { error } =

 

 

 

 

 

 

 

                    await clienteSupabase.auth

 

 

 

 

 

 

 

                        .signOut();

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                if (error) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                    console.error(

 

 

 

 

 

 

 

                        "Error al cerrar sesión:",

 

 

 

 

 

 

 

                        error

 

 

 

 

 

 

 

                    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                    cerrarSesion.disabled =

 

 

 

 

 

 

 

                        false;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                    cerrarSesion.textContent =

 

 

 

 

 

 

 

                        "Cerrar sesión";

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                    return;

 

 

 

 

 

 

 

                }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                window.location.href =

 

 

 

 

 

 

 

                    "login.html";

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            } catch (error) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                console.error(

 

 

 

 

 

 

 

                    "No se pudo cerrar sesión:",

 

 

 

 

 

 

 

                    error

 

 

 

 

 

 

 

                );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                cerrarSesion.disabled =

 

 

 

 

 

 

 

                    false;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                cerrarSesion.textContent =

 

 

 

 

 

 

 

                    "Cerrar sesión";

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        }

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// 6. CARGAR DASHBOARD

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

async function cargarDashboard() {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    await Promise.all([

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        obtenerTotalRecepciones(),

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        obtenerTotalMuestras(),

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        obtenerMuestrasEnAnalisis(),

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        obtenerMuestrasFinalizadas(),

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        obtenerRecepcionesRecientes()

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    ]);

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// 7. TOTAL DE RECEPCIONES

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

async function obtenerTotalRecepciones() {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    const {

 

 

 

 

 

 

 

        count,

 

 

 

 

 

 

 

        error

 

 

 

 

 

 

 

    } = await clienteSupabase

 

 

 

 

 

 

 

        .from("recepciones")

 

 

 

 

 

 

 

        .select("*", {

 

 

 

 

 

 

 

            count: "exact",

 

 

 

 

 

 

 

            head: true

 

 

 

 

 

 

 

        });

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (error) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        console.error(

 

 

 

 

 

 

 

            "Error al contar recepciones:",

 

 

 

 

 

 

 

            error

 

 

 

 

 

 

 

        );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        return;

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (totalRecepciones) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        totalRecepciones.textContent =

 

 

 

 

 

 

 

            count ?? 0;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// 8. TOTAL DE MUESTRAS

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

async function obtenerTotalMuestras() {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    const {

 

 

 

 

 

 

 

        count,

 

 

 

 

 

 

 

        error

 

 

 

 

 

 

 

    } = await clienteSupabase

 

 

 

 

 

 

 

        .from("muestras")

 

 

 

 

 

 

 

        .select("*", {

 

 

 

 

 

 

 

            count: "exact",

 

 

 

 

 

 

 

            head: true

 

 

 

 

 

 

 

        });

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (error) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        console.error(

 

 

 

 

 

 

 

            "Error al contar muestras:",

 

 

 

 

 

 

 

            error

 

 

 

 

 

 

 

        );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        return;

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (totalMuestras) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        totalMuestras.textContent =

 

 

 

 

 

 

 

            count ?? 0;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// 9. MUESTRAS EN ANÁLISIS

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

async function obtenerMuestrasEnAnalisis() {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    const {

 

 

 

 

 

 

 

        count,

 

 

 

 

 

 

 

        error

 

 

 

 

 

 

 

    } = await clienteSupabase

 

 

 

 

 

 

 

        .from("muestras")

 

 

 

 

 

 

 

        .select("*", {

 

 

 

 

 

 

 

            count: "exact",

 

 

 

 

 

 

 

            head: true

 

 

 

 

 

 

 

        })

 

 

 

 

 

 

 

        .eq(

 

 

 

 

 

 

 

            "estado",

 

 

 

 

 

 

 

            "EN ANÁLISIS"

 

 

 

 

 

 

 

        );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (error) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        console.error(

 

 

 

 

 

 

 

            "Error al consultar muestras en análisis:",

 

 

 

 

 

 

 

            error

 

 

 

 

 

 

 

        );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        return;

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (muestrasAnalisis) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        muestrasAnalisis.textContent =

 

 

 

 

 

 

 

            count ?? 0;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// 10. MUESTRAS FINALIZADAS

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

async function obtenerMuestrasFinalizadas() {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    const {

 

 

 

 

 

 

 

        count,

 

 

 

 

 

 

 

        error

 

 

 

 

 

 

 

    } = await clienteSupabase

 

 

 

 

 

 

 

        .from("muestras")

 

 

 

 

 

 

 

        .select("*", {

 

 

 

 

 

 

 

            count: "exact",

 

 

 

 

 

 

 

            head: true

 

 

 

 

 

 

 

        })

 

 

 

 

 

 

 

        .eq(

 

 

 

 

 

 

 

            "estado",

 

 

 

 

 

 

 

            "ANÁLISIS FINALIZADO"

 

 

 

 

 

 

 

        );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (error) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        console.error(

 

 

 

 

 

 

 

            "Error al consultar muestras finalizadas:",

 

 

 

 

 

 

 

            error

 

 

 

 

 

 

 

        );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        return;

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (muestrasFinalizadas) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        muestrasFinalizadas.textContent =

 

 

 

 

 

 

 

            count ?? 0;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// 11. RECEPCIONES RECIENTES

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

async function obtenerRecepcionesRecientes() {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    const {

 

 

 

 

 

 

 

        data,

 

 

 

 

 

 

 

        error

 

 

 

 

 

 

 

    } = await clienteSupabase

 

 

 

 

 

 

 

        .from("recepciones")

 

 

 

 

 

 

 

        .select(`

 

 

 

 

 

 

 

            id,

 

 

 

 

 

 

 

            numero_recepcion,

 

 

 

 

 

 

 

            fecha_recepcion,

 

 

 

 

 

 

 

            total,

 

 

 

 

 

 

 

            estado_pago,

 

 

 

 

 

 

 

            clientes (

 

 

 

 

 

 

 

                razon_social

 

 

 

 

 

 

 

            )

 

 

 

 

 

 

 

        `)

 

 

 

 

 

 

 

        .order(

 

 

 

 

 

 

 

            "created_at",

 

 

 

 

 

 

 

            {

 

 

 

 

 

 

 

                ascending: false

 

 

 

 

 

 

 

            }

 

 

 

 

 

 

 

        )

 

 

 

 

 

 

 

        .limit(5);

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (error) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        console.error(

 

 

 

 

 

 

 

            "Error al cargar recepciones:",

 

 

 

 

 

 

 

            error

 

 

 

 

 

 

 

        );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        return;

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    mostrarRecepcionesDashboard(

 

 

 

 

 

 

 

        data

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// 12. MOSTRAR RECEPCIONES EN DASHBOARD

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

function mostrarRecepcionesDashboard(

 

 

 

 

 

 

 

    recepciones

 

 

 

 

 

 

 

) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (!tablaRecepcionesDashboard) {

 

 

 

 

 

 

 

        return;

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (

 

 

 

 

 

 

 

        !recepciones ||

 

 

 

 

 

 

 

        recepciones.length === 0

 

 

 

 

 

 

 

    ) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        tablaRecepcionesDashboard.innerHTML = `

 

 

 

 

 

 

 

            <tr>

 

 

 

 

 

 

 

                <td

 

 

 

 

 

 

 

                    colspan="5"

 

 

 

 

 

 

 

                    class="tabla-vacia"

 

 

 

 

 

 

 

                >

 

 

 

 

 

 

 

                    No hay recepciones registradas.

 

 

 

 

 

 

 

                </td>

 

 

 

 

 

 

 

            </tr>

 

 

 

 

 

 

 

        `;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        return;

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    tablaRecepcionesDashboard.innerHTML =

 

 

 

 

 

 

 

        recepciones

 

 

 

 

 

 

 

            .map((recepcion) => {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                const cliente =

 

 

 

 

 

 

 

                    recepcion.clientes

 

 

 

 

 

 

 

                        ?.razon_social ||

 

 

 

 

 

 

 

                    "Sin cliente";

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                const total =

 

 

 

 

 

 

 

                    Number(

 

 

 

 

 

 

 

                        recepcion.total || 0

 

 

 

 

 

 

 

                    ).toFixed(2);

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                const fecha =

 

 

 

 

 

 

 

                    formatearFecha(

 

 

 

 

 

 

 

                        recepcion

 

 

 

 

 

 

 

                            .fecha_recepcion

 

 

 

 

 

 

 

                    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                return `

 

 

 

 

 

 

 

                    <tr>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                        <td>

 

 

 

 

 

 

 

                            ${escaparHTML(

 

 

 

 

 

 

 

                                recepcion

 

 

 

 

 

 

 

                                    .numero_recepcion

 

 

 

 

 

 

 

                            )}

 

 

 

 

 

 

 

                        </td>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                        <td>

 

 

 

 

 

 

 

                            ${escaparHTML(

 

 

 

 

 

 

 

                                cliente

 

 

 

 

 

 

 

                            )}

 

 

 

 

 

 

 

                        </td>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                        <td>

 

 

 

 

 

 

 

                            ${fecha}

 

 

 

 

 

 

 

                        </td>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                        <td>

 

 

 

 

 

 

 

                            S/ ${total}

 

 

 

 

 

 

 

                        </td>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                        <td>

 

 

 

 

 

 

 

                            ${escaparHTML(

 

 

 

 

 

 

 

                                recepcion

 

 

 

 

 

 

 

                                    .estado_pago

 

 

 

 

 

 

 

                            )}

 

 

 

 

 

 

 

                        </td>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                    </tr>

 

 

 

 

 

 

 

                `;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            })

 

 

 

 

 

 

 

            .join("");

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

// ======================================================

// CARGAR TABLA DE RECEPCIONES

// ======================================================

 

async function cargarTablaRecepciones() {

 

    const tablaRecepciones =

        document.getElementById("tablaRecepciones");

 

    if (!tablaRecepciones) return;

 

    const { data, error } = await clienteSupabase

        .from("recepciones")

        .select(`

            id,

            numero_recepcion,

            fecha_recepcion,

            total,

            estado_pago,

            clientes (

                razon_social

            )

        `)

        .order("created_at", { ascending: false });

 

    if (error) {

 

        console.error(

            "Error al cargar las recepciones:",

            error

        );

 

        tablaRecepciones.innerHTML = `

            <tr>

                <td colspan="6" class="tabla-vacia">

                    No se pudieron cargar las recepciones.

                </td>

            </tr>

        `;

 

        return;

    }

 

    if (!data || data.length === 0) {

 

        tablaRecepciones.innerHTML = `

            <tr>

                <td colspan="6" class="tabla-vacia">

                    No hay recepciones registradas.

                </td>

            </tr>

        `;

 

        return;

    }

 

    tablaRecepciones.innerHTML = data

        .map((recepcion) => {

 

            const cliente =

                recepcion.clientes?.razon_social ||

                "Sin cliente";

 

            const fecha =

                recepcion.fecha_recepcion

                    ? recepcion.fecha_recepcion

                        .split("-")

                        .reverse()

                        .join("/")

                    : "-";

 

            const total =

                Number(recepcion.total || 0)

                    .toFixed(2);

 

            return `

                <tr>

                    <td>

                        ${escaparHTML(

                            recepcion.numero_recepcion

                        )}

                    </td>

 

                    <td>

                        ${escaparHTML(cliente)}

                    </td>

 

                    <td>

                        ${fecha}

                    </td>

 

                    <td>

                        S/ ${total}

                    </td>

 

                    <td>

                        ${escaparHTML(

                            recepcion.estado_pago

                        )}

                    </td>

 

                    <td>

                        <button

                            type="button"

                            class="boton-tabla"

                            data-recepcion-id="${recepcion.id}"

                        >

                            Ver

                        </button>

                    </td>

                </tr>

            `;

        })

        .join("");

}

 

// ======================================================

// DETALLE DE RECEPCIÓN

// ======================================================

 

async function verDetalleRecepcion(recepcionId) {

 

    const detalleRecepcion =

        document.getElementById("detalleRecepcion");

 

    const detalleNumeroRecepcion =

        document.getElementById("detalleNumeroRecepcion");

 

    const detalleCliente =

        document.getElementById("detalleCliente");

 

    const detalleRuc =

        document.getElementById("detalleRuc");

 

    const detalleTelefono =

        document.getElementById("detalleTelefono");

 

    const detalleCorreo =

        document.getElementById("detalleCorreo");

 

    const detalleFecha =

        document.getElementById("detalleFecha");

 

    const detallePago =

        document.getElementById("detallePago");

 

    const detalleTotal =

        document.getElementById("detalleTotal");

 

    const detalleMuestras =

        document.getElementById("detalleMuestras");

 

    try {

 

        const { data: recepcion, error } =

            await clienteSupabase

                .from("recepciones")

                .select(`

                    id,

                    numero_recepcion,

                    fecha_recepcion,

                    estado_pago,

                    total,

                    observaciones,

                    clientes (

                        razon_social,

                        ruc,

                        telefono,

                        correo,

                        direccion

                    ),

                    muestras (

                        id,

                        codigo_muestra,

                        descripcion,

                        estado,

                        analisis_solicitados (

                            id,

                            precio,

                            estado,

                            tipos_analisis (

                                nombre

                            )

                        )

                    )

                `)

                .eq("id", recepcionId)

                .single();

 

        if (error) {

            throw error;

        }

 

        if (!recepcion) {

            alert("No se encontró la recepción.");

            return;

        }

 

        const cliente = recepcion.clientes || {};

 

        detalleNumeroRecepcion.textContent =

            `N.º ${recepcion.numero_recepcion || "-"}`;

 

        detalleCliente.textContent =

            cliente.razon_social || "-";

 

        detalleRuc.textContent =

            cliente.ruc || "-";

 

        detalleTelefono.textContent =

            cliente.telefono || "-";

 

        detalleCorreo.textContent =

            cliente.correo || "-";

 

        detalleFecha.textContent =

            recepcion.fecha_recepcion

                ? recepcion.fecha_recepcion

                    .split("-")

                    .reverse()

                    .join("/")

                : "-";

 

        detallePago.textContent =

            recepcion.estado_pago || "-";

 

        detalleTotal.textContent =

            `S/ ${Number(recepcion.total || 0).toFixed(2)}`;

 

        const muestras = recepcion.muestras || [];

 

        if (muestras.length === 0) {

 

            detalleMuestras.innerHTML = `

                <p class="detalle-sin-datos">

                    No hay muestras registradas.

                </p>

            `;

 

        } else {

 

            detalleMuestras.innerHTML = muestras

                .map((muestra) => {

 

                    const analisis =

                        muestra.analisis_solicitados || [];

 

                    const listaAnalisis =

                        analisis.length > 0

                            ? analisis

                                .map((item) => {

 

                                    const nombre =

                                        item.tipos_analisis?.nombre ||

                                        "Análisis";

 

                                    return `

                                        <div class="detalle-analisis-item">

                                            <div>

                                                <span>Análisis</span>

                                                <strong>

                                                    ${escaparHTML(nombre)}

                                                </strong>

                                            </div>

 

                                            <div>

                                                <span>Precio</span>

                                                <strong>

                                                    S/ ${Number(

                                                        item.precio || 0

                                                    ).toFixed(2)}

                                                </strong>

                                            </div>

 

                                            <div>

                                                <span>Estado</span>

                                                <strong>

                                                    ${escaparHTML(

                                                        item.estado || "-"

                                                    )}

                                                </strong>

                                            </div>

                                        </div>

                                    `;

                                })

                                .join("")

                            : `

                                <p class="detalle-sin-datos">

                                    Sin análisis registrados.

                                </p>

                            `;

 

                    return `

                        <div class="detalle-muestra-item">

 

                            <div class="detalle-muestra-encabezado">

 

                                <div>

                                    <span>Código de muestra</span>

                                    <strong>

                                        ${escaparHTML(

                                            muestra.codigo_muestra || "-"

                                        )}

                                    </strong>

                                </div>

 

                                <div>

                                    <span>Estado</span>

                                    <strong>

                                        ${escaparHTML(

                                            muestra.estado || "-"

                                        )}

                                    </strong>

                                </div>

 

                            </div>

 

                            <div class="detalle-descripcion">

                                <span>Descripción</span>

                                <p>

                                    ${escaparHTML(

                                        muestra.descripcion || "-"

                                    )}

                                </p>

                            </div>

 

                            <div class="detalle-lista-analisis">

                                ${listaAnalisis}

                            </div>

 

                        </div>

                    `;

                })

                .join("");

        }

 

        detalleRecepcion.classList.remove("oculto");

 

    } catch (error) {

 

        console.error(

            "Error al cargar el detalle de la recepción:",

            error

        );

 

        alert(

            "No se pudo cargar el detalle de la recepción."

        );

    }

}

 

 

// ======================================================

// EVENTOS DEL DETALLE DE RECEPCIÓN

// ======================================================

 

document.addEventListener("click", (evento) => {

 

    const botonVer =

        evento.target.closest(".boton-tabla");

 

    if (botonVer) {

 

        const recepcionId =

            botonVer.dataset.recepcionId;

 

        if (recepcionId) {

            verDetalleRecepcion(recepcionId);

        }

 

        return;

    }

 

    if (

        evento.target.id === "cerrarDetalleRecepcion" ||

        evento.target.id === "cerrarDetalleRecepcionPie"

    ) {

 

        const detalleRecepcion =

            document.getElementById("detalleRecepcion");

 

        if (detalleRecepcion) {

            detalleRecepcion.classList.add("oculto");

        }

    }

});

// ======================================================

// CARGAR TABLA DE MUESTRAS

// ======================================================

 

async function cargarTablaMuestras() {

 

    const tablaMuestras =

        document.getElementById("tablaMuestras");

 

    if (!tablaMuestras) return;

 

    const { data, error } = await clienteSupabase

        .from("muestras")

        .select(`

            id,

            codigo_muestra,

            descripcion,

            estado,

            recepcion_id,

            recepciones (

                numero_recepcion

            )

        `)

        .order("created_at", { ascending: false });

 

    if (error) {

 

        console.error(

            "Error al cargar las muestras:",

            error

        );

 

        tablaMuestras.innerHTML = `

            <tr>

                <td colspan="5" class="tabla-vacia">

                    No se pudieron cargar las muestras.

                </td>

            </tr>

        `;

 

        return;

    }

 

    if (!data || data.length === 0) {

 

        tablaMuestras.innerHTML = `

            <tr>

                <td colspan="5" class="tabla-vacia">

                    No hay muestras registradas.

                </td>

            </tr>

        `;

 

        return;

    }

 

    tablaMuestras.innerHTML = data

        .map((muestra) => {

 

            const numeroRecepcion =

                muestra.recepciones?.numero_recepcion ||

                "-";

 

            const descripcion =

                muestra.descripcion ||

                "-";

 

            const estado =

                muestra.estado ||

                "-";

 

            return `

                <tr>

 

                    <td>

                        ${escaparHTML(muestra.codigo_muestra)}

                    </td>

 

                    <td>

                        ${escaparHTML(numeroRecepcion)}

                    </td>

 

                    <td>

                        ${escaparHTML(descripcion)}

                    </td>

 

                    <td>

                        <span class="estado-muestra">

                            ${escaparHTML(estado)}

                        </span>

                    </td>

 

                    <td>

                        <button

                            type="button"

                            class="boton-tabla boton-ver-muestra"

                            data-muestra-id="${muestra.id}"

                        >

                            Ver

                        </button>

                    </td>

 

                </tr>

            `;

        })

        .join("");

}

// ======================================================

// CLIC EN BOTÓN VER MUESTRA

// ======================================================

 

 

document.addEventListener("click", (evento) => {

 

    const botonVerMuestra =

        evento.target.closest(".boton-ver-muestra");

 

    if (!botonVerMuestra) return;

 

    const muestraId =

        botonVerMuestra.dataset.muestraId;

 

    if (!muestraId) return;

 

    verDetalleMuestra(muestraId);

});

// ======================================================

// VER DETALLE DE MUESTRA

// ======================================================

 

async function verDetalleMuestra(muestraId) {

 

    try {

 

        const { data, error } = await clienteSupabase

            .from("muestras")

            .select(`

                id,

                codigo_muestra,

                descripcion,

                estado,

                recepcion_id,

                recepciones (

                    numero_recepcion,

                    clientes (

                        razon_social

                    )

                ),

                analisis_solicitados (

                    id,

                    precio,

                    estado,

                    tipos_analisis (

                        nombre

                    )

                )

            `)

            .eq("id", muestraId)

            .single();

 

        if (error) {

 

            console.error(

                "Error al cargar el detalle de la muestra:",

                error

            );

 

            alert("No se pudo cargar el detalle de la muestra.");

 

            return;

        }

 

       const detalleMuestra = document.getElementById("detalleMuestra");

const detalleMuestraCodigo = document.getElementById("detalleMuestraCodigo");

const detalleMuestraRecepcion = document.getElementById("detalleMuestraRecepcion");

const detalleMuestraEstado = document.getElementById("detalleMuestraEstado");

const detalleMuestraDescripcion = document.getElementById("detalleMuestraDescripcion");

const detalleMuestraAnalisis = document.getElementById("detalleMuestraAnalisis");

 

if (!detalleMuestra) {

    console.error("No se encontró el modal detalleMuestra.");

    return;

}

 

detalleMuestraCodigo.textContent = data.codigo_muestra || "-";

 

detalleMuestraRecepcion.textContent =

    data.recepciones?.numero_recepcion || "-";

 

detalleMuestraEstado.innerHTML = `

    <select id="selectEstadoMuestra" data-muestra-id="${data.id}">

        <option value="MUESTRA RECIBIDA" ${data.estado === "MUESTRA RECIBIDA" ? "selected" : ""}>

            MUESTRA RECIBIDA

        </option>

        <option value="EN ANÁLISIS" ${data.estado === "EN ANÁLISIS" ? "selected" : ""}>

            EN ANÁLISIS

        </option>

        <option value="ANÁLISIS FINALIZADO" ${data.estado === "ANÁLISIS FINALIZADO" ? "selected" : ""}>

            ANÁLISIS FINALIZADO

        </option>

        <option value="CERTIFICADO GENERADO" ${data.estado === "CERTIFICADO GENERADO" ? "selected" : ""}>

            CERTIFICADO GENERADO

        </option>

        <option value="ENTREGADO" ${data.estado === "ENTREGADO" ? "selected" : ""}>

            ENTREGADO

        </option>

    </select>

`;

 

detalleMuestraDescripcion.textContent =

    data.descripcion || "Sin descripción";

 

const analisis = data.analisis_solicitados || [];

 

if (analisis.length === 0) {

 

    detalleMuestraAnalisis.innerHTML = `

        <div class="detalle-dato detalle-dato-completo">

            <strong>No hay análisis registrados.</strong>

        </div>

    `;

 

} else {

 

    detalleMuestraAnalisis.innerHTML = analisis

        .map((item) => {

 

            const nombre =

                item.tipos_analisis?.nombre || "Análisis";

 

            const precio =

                Number(item.precio || 0).toFixed(2);

 

            const estado =

                item.estado || "PENDIENTE";

 

            return `

                <div class="detalle-analisis-item">

 

                    <div>

                        <span>ANÁLISIS</span>

                        <strong>${escaparHTML(nombre)}</strong>

                    </div>

 

                    <div>

                        <span>PRECIO</span>

                        <strong>S/ ${precio}</strong>

                    </div>

 

                    <div>

                        <span>ESTADO</span>

                        <strong>${escaparHTML(estado)}</strong>

                    </div>

 

                </div>

            `;

        })

        .join("");

}

 

detalleMuestra.classList.remove("oculto");  

const selectEstadoMuestra = document.getElementById("selectEstadoMuestra");

 

if (selectEstadoMuestra) {

    selectEstadoMuestra.addEventListener("change", async () => {

 

        const nuevoEstado = selectEstadoMuestra.value;

 

        const { error: errorEstado } =

            await clienteSupabase

                .from("muestras")

                .update({

                    estado: nuevoEstado

                })

                .eq("id", muestraId);

 

        if (errorEstado) {

 

            console.error(

                "Error al cambiar estado:",

                errorEstado

            );

 

            alert(

                "No se pudo cambiar el estado de la muestra."

            );

 

            selectEstadoMuestra.value =

                data.estado;

 

            return;

        }

 

        data.estado = nuevoEstado;

 

        await cargarTablaMuestras();

 

        if (

            nuevoEstado ===

            "CERTIFICADO GENERADO"

        ) {

            await generarCertificado(

                muestraId

            );

        } else {

            alert(

                "Estado de la muestra actualizado correctamente."

            );

        }

    });

}

 

    } catch (error) {

 

        console.error(

            "Error inesperado al cargar la muestra:",

            error

        );

 

        alert("Ocurrió un error al cargar la muestra.");

    }

}

 

// ============================================

// CERRAR DETALLE DE MUESTRA

// ============================================

 

document.addEventListener("click", (evento) => {

 

    if (

        evento.target.id === "cerrarDetalleMuestra" ||

        evento.target.id === "cerrarDetalleMuestraPie"

    ) {

 

        const detalleMuestra =

            document.getElementById("detalleMuestra");

 

        if (detalleMuestra) {

            detalleMuestra.classList.add("oculto");

        }

    }

 

});

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// 13. FORMATEAR FECHA

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

function formatearFecha(fecha) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (!fecha) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        return "-";

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    const partes =

 

 

 

 

 

 

 

        fecha.split("-");

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (partes.length !== 3) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        return fecha;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    return (

 

 

 

 

 

 

 

        `${partes[2]}/` +

 

 

 

 

 

 

 

        `${partes[1]}/` +

 

 

 

 

 

 

 

        `${partes[0]}`

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// 14. SEGURIDAD PARA TEXTO HTML

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

function escaparHTML(valor) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (

 

 

 

 

 

 

 

        valor === null ||

 

 

 

 

 

 

 

        valor === undefined

 

 

 

 

 

 

 

    ) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        return "";

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    return String(valor)

 

 

 

 

 

 

 

        .replaceAll("&", "&amp;")

 

 

 

 

 

 

 

        .replaceAll("<", "&lt;")

 

 

 

 

 

 

 

        .replaceAll(">", "&gt;")

 

 

 

 

 

 

 

        .replaceAll('"', "&quot;")

 

 

 

 

 

 

 

        .replaceAll("'", "&#039;");

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// 15. IR A RECEPCIONES DESDE DASHBOARD

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

function irARecepciones() {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    const botonRecepciones =

 

 

 

 

 

 

 

        document.querySelector(

 

 

 

 

 

 

 

            '[data-seccion="recepciones"]'

 

 

 

 

 

 

 

        );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (botonRecepciones) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        botonRecepciones.click();

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

if (nuevaRecepcionDashboard) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    nuevaRecepcionDashboard.addEventListener(

 

 

 

 

 

 

 

        "click",

 

 

 

 

 

 

 

        () => {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            irARecepciones();

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            abrirFormularioRecepcion();

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        }

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// 16. FECHA ACTUAL

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

function establecerFechaActual() {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (!fechaRecepcion) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        return;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (fechaRecepcion.value) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        return;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    const hoy =

 

 

 

 

 

 

 

        new Date();

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    const anio =

 

 

 

 

 

 

 

        hoy.getFullYear();

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    const mes =

 

 

 

 

 

 

 

        String(

 

 

 

 

 

 

 

            hoy.getMonth() + 1

 

 

 

 

 

 

 

        ).padStart(

 

 

 

 

 

 

 

            2,

 

 

 

 

 

 

 

            "0"

 

 

 

 

 

 

 

        );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    const dia =

 

 

 

 

 

 

 

        String(

 

 

 

 

 

 

 

            hoy.getDate()

 

 

 

 

 

 

 

        ).padStart(

 

 

 

 

 

 

 

            2,

 

 

 

 

 

 

 

            "0"

 

 

 

 

 

 

 

        );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    fechaRecepcion.value =

 

 

 

 

 

 

 

        `${anio}-${mes}-${dia}`;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// 17. ABRIR FORMULARIO NUEVA RECEPCIÓN

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

function abrirFormularioRecepcion() {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (!contenedorNuevaRecepcion) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        return;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    contenedorNuevaRecepcion

 

 

 

 

 

 

 

        .classList.remove(

 

 

 

 

 

 

 

            "oculto"

 

 

 

 

 

 

 

        );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (contenedorTablaRecepciones) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        contenedorTablaRecepciones

 

 

 

 

 

 

 

            .classList.add(

 

 

 

 

 

 

 

                "oculto"

 

 

 

 

 

 

 

            );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (nuevaRecepcion) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        nuevaRecepcion

 

 

 

 

 

 

 

            .classList.add(

 

 

 

 

 

 

 

                "oculto"

 

 

 

 

 

 

 

            );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    establecerFechaActual();

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    actualizarMuestras();

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    setTimeout(() => {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        contenedorNuevaRecepcion

 

 

 

 

 

 

 

            .scrollIntoView({

 

 

 

 

 

 

 

                behavior: "smooth",

 

 

 

 

 

 

 

                block: "start"

 

 

 

 

 

 

 

            });

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    }, 50);

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// 18. CERRAR FORMULARIO NUEVA RECEPCIÓN

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

function cerrarFormularioNuevaRecepcion() {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (!contenedorNuevaRecepcion) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        return;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    contenedorNuevaRecepcion

 

 

 

 

 

 

 

        .classList.add(

 

 

 

 

 

 

 

            "oculto"

 

 

 

 

 

 

 

        );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (contenedorTablaRecepciones) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        contenedorTablaRecepciones

 

 

 

 

 

 

 

            .classList.remove(

 

 

 

 

 

 

 

                "oculto"

 

 

 

 

 

 

 

            );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (nuevaRecepcion) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        nuevaRecepcion

 

 

 

 

 

 

 

            .classList.remove(

 

 

 

 

 

 

 

                "oculto"

 

 

 

 

 

 

 

            );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// 19. CREAR NUEVA MUESTRA

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

function crearMuestra() {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (!listaMuestras) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        return;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    const nuevaMuestra =

 

 

 

 

 

 

 

        document.createElement(

 

 

 

 

 

 

 

            "article"

 

 

 

 

 

 

 

        );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    nuevaMuestra.className =

 

 

 

 

 

 

 

        "muestra-formulario";

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    nuevaMuestra.innerHTML = `

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        <div class="muestra-cabecera">

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            <div>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                <span class="muestra-numero">

 

 

 

 

 

 

 

                    MUESTRA

 

 

 

 

 

 

 

                </span>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                <h5>

 

 

 

 

 

 

 

                    Información de la muestra

 

 

 

 

 

 

 

                </h5>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            </div>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            <button

 

 

 

 

 

 

 

                type="button"

 

 

 

 

 

 

 

                class="boton-eliminar-muestra"

 

 

 

 

 

 

 

            >

 

 

 

 

 

 

 

                Eliminar muestra

 

 

 

 

 

 

 

            </button>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        </div>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        <div class="formulario-grid">

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            <div class="campo-panel">

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                <label>

 

 

 

 

 

 

 

                    Código de muestra *

 

 

 

 

 

 

 

                </label>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                <input

 

 

 

 

 

 

 

                    type="text"

 

 

 

 

 

 

 

                    class="codigo-muestra"

 

 

 

 

 

 

 

                    maxlength="100"

 

 

 

 

 

 

 

                    placeholder="Código proporcionado por el cliente"

 

 

 

 

 

 

 

                    required

 

 

 

 

 

 

 

                >

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                <small>

 

 

 

 

 

 

 

                    Este código es proporcionado

 

 

 

 

 

 

 

                    por el cliente y no puede repetirse.

 

 

 

 

 

 

 

                </small>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            </div>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            <div

 

 

 

 

 

 

 

                class="campo-panel

 

 

 

 

 

 

 

                       campo-panel-grande"

 

 

 

 

 

 

 

            >

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                <label>

 

 

 

 

 

 

 

                    Descripción

 

 

 

 

 

 

 

                </label>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                <input

 

 

 

 

 

 

 

                    type="text"

 

 

 

 

 

 

 

                    class="descripcion-muestra"

 

 

 

 

 

 

 

                    placeholder="Descripción de la muestra"

 

 

 

 

 

 

 

                >

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            </div>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        </div>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        <div class="analisis-muestra">

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            <div class="analisis-encabezado">

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                <div>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                    <strong>

 

 

 

 

 

 

 

                        Análisis solicitados

 

 

 

 

 

 

 

                    </strong>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                    <small>

 

 

 

 

 

 

 

                        Puede agregar varios análisis

 

 

 

 

 

 

 

                        para esta muestra.

 

 

 

 

 

 

 

                    </small>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                </div>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                <button

 

 

 

 

 

 

 

                    type="button"

 

 

 

 

 

 

 

                    class="boton-agregar-analisis"

 

 

 

 

 

 

 

                >

 

 

 

 

 

 

 

                    Agregar análisis

 

 

 

 

 

 

 

                </button>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            </div>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            <div class="lista-analisis">

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                <div class="fila-analisis">

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                    <div class="campo-panel">

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                        <label>

 

 

 

 

 

 

 

                            Tipo de análisis *

 

 

 

 

 

 

 

                        </label>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                        <select

 

 

 

 

 

 

 

                            class="tipo-analisis"

 

 

 

 

 

 

 

                            required

 

 

 

 

 

 

 

                        >

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                            <option value="">

 

 

 

 

 

 

 

                                Seleccionar análisis

 

 

 

 

 

 

 

                            </option>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                        </select>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                    </div>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                    <div class="campo-panel">

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                        <label>

 

 

 

 

 

 

 

                            Precio S/ *

 

 

 

 

 

 

 

                        </label>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                        <input

 

 

 

 

 

 

 

                            type="number"

 

 

 

 

 

 

 

                            class="precio-analisis"

 

 

 

 

 

 

 

                            min="0"

 

 

 

 

 

 

 

                            step="0.01"

 

 

 

 

 

 

 

                            placeholder="0.00"

 

 

 

 

 

 

 

                            required

 

 

 

 

 

 

 

                        >

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                    </div>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                    <button

 

 

 

 

 

 

 

                        type="button"

 

 

 

 

 

 

 

                        class="boton-eliminar-analisis"

 

 

 

 

 

 

 

                        title="Eliminar análisis"

 

 

 

 

 

 

 

                    >

 

 

 

 

 

 

 

                        ×

 

 

 

 

 

 

 

                    </button>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                </div>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            </div>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        </div>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    `;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    listaMuestras.appendChild(

 

 

 

 

 

 

 

        nuevaMuestra

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    actualizarMuestras();

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    const campoCodigo =

 

 

 

 

 

 

 

        nuevaMuestra.querySelector(

 

 

 

 

 

 

 

            ".codigo-muestra"

 

 

 

 

 

 

 

        );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (campoCodigo) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        campoCodigo.focus();

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// 20. ACTUALIZAR / RENUMERAR MUESTRAS

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

function actualizarMuestras() {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (!listaMuestras) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        return;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    const muestras =

 

 

 

 

 

 

 

        listaMuestras.querySelectorAll(

 

 

 

 

 

 

 

            ".muestra-formulario"

 

 

 

 

 

 

 

        );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    muestras.forEach(

 

 

 

 

 

 

 

        (muestra, indice) => {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            muestra.dataset.muestra =

 

 

 

 

 

 

 

                String(indice + 1);

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            const numero =

 

 

 

 

 

 

 

                muestra.querySelector(

 

 

 

 

 

 

 

                    ".muestra-numero"

 

 

 

 

 

 

 

                );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            if (numero) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                numero.textContent =

 

 

 

 

 

 

 

                    `MUESTRA ${String(

 

 

 

 

 

 

 

                        indice + 1

 

 

 

 

 

 

 

                    ).padStart(2, "0")}`;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            let botonEliminar =

 

 

 

 

 

 

 

                muestra.querySelector(

 

 

 

 

 

 

 

                    ".boton-eliminar-muestra"

 

 

 

 

 

 

 

                );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            // La muestra inicial del HTML no tiene

 

 

 

 

 

 

 

            // botón eliminar. Lo creamos aquí.

 

 

 

 

 

 

 

            if (!botonEliminar) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                const cabecera =

 

 

 

 

 

 

 

                    muestra.querySelector(

 

 

 

 

 

 

 

                        ".muestra-cabecera"

 

 

 

 

 

 

 

                    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                if (cabecera) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                    botonEliminar =

 

 

 

 

 

 

 

                        document.createElement(

 

 

 

 

 

 

 

                            "button"

 

 

 

 

 

 

 

                        );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                    botonEliminar.type =

 

 

 

 

 

 

 

                        "button";

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                    botonEliminar.className =

 

 

 

 

 

 

 

                        "boton-eliminar-muestra";

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                    botonEliminar.textContent =

 

 

 

 

 

 

 

                        "Eliminar muestra";

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                    cabecera.appendChild(

 

 

 

 

 

 

 

                        botonEliminar

 

 

 

 

 

 

 

                    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            // Si solo existe una muestra,

 

 

 

 

 

 

 

            // no permitimos eliminarla.

 

 

 

 

 

 

 

            if (botonEliminar) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                botonEliminar.style.display =

 

 

 

 

 

 

 

                    muestras.length > 1

 

 

 

 

 

 

 

                        ? ""

 

 

 

 

 

 

 

                        : "none";

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        }

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// 21. ELIMINAR MUESTRA

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

function eliminarMuestra(muestra) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (!listaMuestras || !muestra) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        return;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    const muestras =

 

 

 

 

 

 

 

        listaMuestras.querySelectorAll(

 

 

 

 

 

 

 

            ".muestra-formulario"

 

 

 

 

 

 

 

        );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    // Siempre debe quedar al menos una muestra

 

 

 

 

 

 

 

    if (muestras.length <= 1) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        return;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    muestra.remove();

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    actualizarMuestras();

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// 22. EVENTOS DINÁMICOS DE MUESTRAS

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

if (agregarMuestra) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    agregarMuestra.addEventListener(

 

 

 

 

 

 

 

        "click",

 

 

 

 

 

 

 

        crearMuestra

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

if (listaMuestras) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    listaMuestras.addEventListener(

 

 

 

 

 

 

 

        "click",

 

 

 

 

 

 

 

        (evento) => {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            const botonEliminar =

 

 

 

 

 

 

 

                evento.target.closest(

 

 

 

 

 

 

 

                    ".boton-eliminar-muestra"

 

 

 

 

 

 

 

                );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            if (botonEliminar) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                const muestra =

 

 

 

 

 

 

 

                    botonEliminar.closest(

 

 

 

 

 

 

 

                        ".muestra-formulario"

 

 

 

 

 

 

 

                    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                eliminarMuestra(

 

 

 

 

 

 

 

                    muestra

 

 

 

 

 

 

 

                );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        }

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// 23. EVENTOS DEL FORMULARIO

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

if (nuevaRecepcion) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    nuevaRecepcion.addEventListener(

 

 

 

 

 

 

 

        "click",

 

 

 

 

 

 

 

        abrirFormularioRecepcion

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

if (cerrarFormularioRecepcion) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    cerrarFormularioRecepcion

 

 

 

 

 

 

 

        .addEventListener(

 

 

 

 

 

 

 

            "click",

 

 

 

 

 

 

 

            cerrarFormularioNuevaRecepcion

 

 

 

 

 

 

 

        );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

if (cancelarRecepcion) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    cancelarRecepcion.addEventListener(

 

 

 

 

 

 

 

        "click",

 

 

 

 

 

 

 

        cerrarFormularioNuevaRecepcion

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

// 24. GUARDAR RECEPCIÓN COMPLETA EN SUPABASE

 

// ======================================================

 

async function guardarRecepcionCompleta(evento) {

 

    evento.preventDefault();

 

    const clienteNombre =

        document.getElementById("clienteNombre");

 

    const clienteRuc =

        document.getElementById("clienteRuc");

 

    const clienteTelefono =

        document.getElementById("clienteTelefono");

 

    const clienteCorreo =

        document.getElementById("clienteCorreo");

 

    const clienteDireccion =

        document.getElementById("clienteDireccion");

 

    const estadoPago =

        document.getElementById("estadoPago");

 

    const observacionesRecepcion =

        document.getElementById("observacionesRecepcion");

 

    const numeroRecepcion =

        document.getElementById("numeroRecepcion");

 

    const mensajeRecepcion =

        document.getElementById("mensajeRecepcion");

 

    const botonGuardar =

        formRecepcion.querySelector(

            'button[type="submit"]'

        );

 

 

    function mostrarMensajeRecepcion(texto, tipo = "") {

 

        if (!mensajeRecepcion) {

            return;

        }

 

        mensajeRecepcion.textContent = texto;

 

        mensajeRecepcion.className =

            "mensaje-formulario";

 

        if (tipo) {

            mensajeRecepcion.classList.add(tipo);

        }

 

    }

 

 

    if (!clienteNombre ||

        !clienteNombre.value.trim()) {

 

        mostrarMensajeRecepcion(

            "Ingrese el nombre o razón social del cliente.",

            "error"

        );

 

        clienteNombre?.focus();

 

        return;

 

    }

 

 

    const ruc =

        clienteRuc?.value.trim() || "";

 

    if (ruc && !/^\d{11}$/.test(ruc)) {

 

        mostrarMensajeRecepcion(

            "El RUC debe contener 11 dígitos.",

            "error"

        );

 

        clienteRuc.focus();

 

        return;

 

    }

 

 

    if (!fechaRecepcion ||

        !fechaRecepcion.value) {

 

        mostrarMensajeRecepcion(

            "Seleccione la fecha de recepción.",

            "error"

        );

 

        fechaRecepcion?.focus();

 

        return;

 

    }

 

 

    const elementosMuestra =

        listaMuestras?.querySelectorAll(

            ".muestra-formulario"

        ) || [];

 

 

    if (elementosMuestra.length === 0) {

 

        mostrarMensajeRecepcion(

            "Debe registrar al menos una muestra.",

            "error"

        );

 

        return;

 

    }

 

 

    const muestras = [];

 

    const codigosUsados = new Set();

 

 

    for (const elementoMuestra of elementosMuestra) {

 

        const campoCodigo =

            elementoMuestra.querySelector(

                ".codigo-muestra"

            );

 

        const campoDescripcion =

            elementoMuestra.querySelector(

                ".descripcion-muestra"

            );

 

        const codigo =

            campoCodigo?.value.trim() || "";

 

        const descripcion =

            campoDescripcion?.value.trim() || "";

 

 

        if (!codigo) {

 

            mostrarMensajeRecepcion(

                "Todas las muestras deben tener un código.",

                "error"

            );

 

            campoCodigo?.focus();

 

            return;

 

        }

 

 

        const codigoNormalizado =

            codigo.toLowerCase();

 

        if (codigosUsados.has(codigoNormalizado)) {

 

            mostrarMensajeRecepcion(

                `El código de muestra "${codigo}" está repetido en la recepción.`,

                "error"

            );

 

            campoCodigo?.focus();

 

            return;

 

        }

 

        codigosUsados.add(

            codigoNormalizado

        );

 

 

        const filasAnalisis =

            elementoMuestra.querySelectorAll(

                ".fila-analisis"

            );

 

        if (filasAnalisis.length === 0) {

 

            mostrarMensajeRecepcion(

                `La muestra "${codigo}" debe tener al menos un análisis.`,

                "error"

            );

 

            return;

 

        }

 

 

        const analisis = [];

 

        const tiposUsados = new Set();

 

 

        for (const fila of filasAnalisis) {

 

            const selectTipo =

                fila.querySelector(

                    ".tipo-analisis"

                );

 

            const campoPrecio =

                fila.querySelector(

                    ".precio-analisis"

                );

 

            const tipoAnalisisId =

                Number(selectTipo?.value);

 

            const precio =

                Number(campoPrecio?.value);

 

 

            if (!Number.isInteger(tipoAnalisisId) ||

                tipoAnalisisId <= 0) {

 

                mostrarMensajeRecepcion(

                    `Seleccione un tipo de análisis para la muestra "${codigo}".`,

                    "error"

                );

 

                selectTipo?.focus();

 

                return;

 

            }

 

 

            if (tiposUsados.has(tipoAnalisisId)) {

 

                mostrarMensajeRecepcion(

                    `La muestra "${codigo}" tiene un análisis repetido.`,

                    "error"

                );

 

                selectTipo?.focus();

 

                return;

 

            }

 

            tiposUsados.add(

                tipoAnalisisId

            );

 

 

            if (!Number.isFinite(precio) ||

                precio < 0) {

 

                mostrarMensajeRecepcion(

                    `Ingrese un precio válido para la muestra "${codigo}".`,

                    "error"

                );

 

                campoPrecio?.focus();

 

                return;

 

            }

 

 

            analisis.push({

                tipo_analisis_id:

                    tipoAnalisisId,

 

                precio:

                    Number(

                        precio.toFixed(2)

                    )

            });

 

        }

 

 

        muestras.push({

            codigo_muestra:

                codigo,

 

            descripcion:

                descripcion || null,

 

            analisis

        });

 

    }

 

 

    const datosCliente = {

 

        razon_social:

            clienteNombre.value.trim(),

 

        ruc:

            ruc || null,

 

        direccion:

            clienteDireccion?.value.trim() || null,

 

        correo:

            clienteCorreo?.value.trim() || null,

 

        telefono:

            clienteTelefono?.value.trim() || null

 

    };

 

 

    const datosRecepcion = {

 

        fecha_recepcion:

            fechaRecepcion.value,

 

        estado_pago:

            estadoPago?.value || "PENDIENTE",

 

        observaciones:

            observacionesRecepcion?.value.trim() || null

 

    };

 

 

    if (botonGuardar) {

 

        botonGuardar.disabled = true;

 

        botonGuardar.dataset.textoOriginal =

            botonGuardar.textContent;

 

        botonGuardar.textContent =

            "Guardando...";

 

    }

 

 

    mostrarMensajeRecepcion(

        "Guardando recepción..."

    );

 

 

    try {

 

        const {

            data,

            error

        } = await clienteSupabase.rpc(

            "guardar_recepcion_completa",

            {

                p_cliente:

                    datosCliente,

 

                p_recepcion:

                    datosRecepcion,

 

                p_muestras:

                    muestras

            }

        );

 

 

        if (error) {

 

            console.error(

                "Error al guardar recepción:",

                error

            );

 

            let mensajeError =

                error.message ||

                "No se pudo guardar la recepción.";

 

 

            if (

                mensajeError.includes(

                    "ya se encuentra registrado"

                )

            ) {

 

                mostrarMensajeRecepcion(

                    mensajeError,

                    "error"

                );

 

            } else if (

                mensajeError.includes(

                    "Existen códigos de muestra repetidos"

                )

            ) {

 

                mostrarMensajeRecepcion(

                    mensajeError,

                    "error"

                );

 

            } else {

 

                mostrarMensajeRecepcion(

                    mensajeError,

                    "error"

                );

 

            }

 

            return;

 

        }

 

 

        const numeroGenerado =

            data?.numero_recepcion || "";

 

 

        if (numeroRecepcion) {

 

            numeroRecepcion.value =

                numeroGenerado;

 

        }

 

 

        mostrarMensajeRecepcion(

            numeroGenerado

                ? `Recepción N.º ${numeroGenerado} registrada correctamente.`

                : "Recepción registrada correctamente.",

            "exito"

        );

 

 

        await cargarDashboard();

        await cargarTablaRecepciones();

        await cargarTablaMuestras();

 

 

    } catch (error) {

 

        console.error(

            "Error inesperado al guardar recepción:",

            error

        );

 

        mostrarMensajeRecepcion(

            "Ocurrió un error inesperado al guardar la recepción.",

            "error"

        );

 

 

    } finally {

 

        if (botonGuardar) {

 

            botonGuardar.disabled = false;

 

            botonGuardar.textContent =

                botonGuardar.dataset.textoOriginal ||

                "Guardar recepción";

 

        }

 

    }

 

}

 

 

if (formRecepcion) {

 

    formRecepcion.addEventListener(

        "submit",

        guardarRecepcionCompleta

    );

 

}

 

// ======================================================

 

 

 

 

 

 

 

// 25. PREPARAR MUESTRA INICIAL

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

actualizarMuestras();

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

// ======================================================

// CARGAR TABLA DE CLIENTES

// ======================================================

 

async function cargarClientes() {

 

    const tablaClientes =

        document.getElementById("tablaClientes");

 

    if (!tablaClientes) return;

 

    tablaClientes.innerHTML = `

        <tr>

            <td colspan="5" class="tabla-vacia">

                Cargando clientes...

            </td>

        </tr>

    `;

 

    const { data, error } = await clienteSupabase

        .from("clientes")

        .select(`

            id,

            razon_social,

            ruc,

            telefono,

            correo

        `)

        .order("created_at", {

            ascending: false

        });

 

    if (error) {

 

        console.error(

            "Error al cargar clientes:",

            error

        );

 

        tablaClientes.innerHTML = `

            <tr>

                <td colspan="5" class="tabla-vacia">

                    No se pudieron cargar los clientes.

                </td>

            </tr>

        `;

 

        return;

    }

 

    if (!data || data.length === 0) {

 

        tablaClientes.innerHTML = `

            <tr>

                <td colspan="5" class="tabla-vacia">

                    No hay clientes registrados.

                </td>

            </tr>

        `;

 

        return;

    }

 

    tablaClientes.innerHTML = data

        .map((cliente) => {

 

            return `

                <tr>

 

                    <td>

                        ${escaparHTML(

                            cliente.razon_social || "-"

                        )}

                    </td>

 

                    <td>

                        ${escaparHTML(

                            cliente.ruc || "-"

                        )}

                    </td>

 

                    <td>

                        ${escaparHTML(

                            cliente.telefono || "-"

                        )}

                    </td>

 

                    <td>

                        ${escaparHTML(

                            cliente.correo || "-"

                        )}

                    </td>

 

                    <td>

                        <button

                            type="button"

                            class="boton-tabla"

                            data-cliente-id="${cliente.id}"

                        >

                            Ver

                        </button>

                    </td>

 

                </tr>

            `;

        })

        .join("");

}

 

 

 

 

// 26. INICIAR PANEL

 

setTimeout(() => {

    cargarTablaRecepciones();

    cargarTablaMuestras();

    cargarAnalisisSolicitados();

    cargarClientes();

}, 1000);

 

// ======================================================

// VER INFORMACIÓN DEL CLIENTE

// ======================================================

 

document.addEventListener("click", async (evento) => {

 

    const botonVer = evento.target.closest(

        ".boton-tabla[data-cliente-id]"

    );

 

    if (!botonVer) return;

 

    const clienteId = botonVer.dataset.clienteId;

 

    if (!clienteId) return;

 

    const { data: cliente, error } = await clienteSupabase

        .from("clientes")

        .select(`

            id,

            razon_social,

            ruc,

            direccion,

            correo,

            telefono

        `)

        .eq("id", clienteId)

        .single();

 

    if (error) {

        console.error(

            "Error al consultar cliente:",

            error

        );

 

        alert("No se pudo cargar la información del cliente.");

 

        return;

    }

 

    const modalCliente =

    document.getElementById("modalCliente");

 

if (!modalCliente) {

    console.error("No se encontró el modal del cliente.");

    return;

}

 

document.getElementById("clienteNombreModal").textContent =

    cliente.razon_social || "-";

 

document.getElementById("clienteRucModal").textContent =

    cliente.ruc || "-";

 

document.getElementById("clienteTelefonoModal").textContent =

    cliente.telefono || "-";

 

document.getElementById("clienteCorreoModal").textContent =

    cliente.correo || "-";

 

document.getElementById("clienteDireccionModal").textContent =

    cliente.direccion || "-";

 

modalCliente.classList.remove("oculto");

});

 

// ======================================================

// CERRAR MODAL DEL CLIENTE

// ======================================================

 

document.addEventListener("click", (evento) => {

 

    const modalCliente =

        document.getElementById("modalCliente");

 

    if (!modalCliente) return;

 

    // Botón X

    if (

        evento.target.closest("#cerrarModalCliente")

    ) {

        modalCliente.classList.add("oculto");

        return;

    }

 

    // Botón Cerrar

    if (

        evento.target.closest("#cerrarModalClienteBtn")

    ) {

        modalCliente.classList.add("oculto");

        return;

    }

 

    // Clic fuera del contenido

    if (evento.target === modalCliente) {

        modalCliente.classList.add("oculto");

    }

 

});

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

verificarSesion();

 

setTimeout(() => {

    cargarTablaRecepciones();

    cargarTablaMuestras();

    cargarAnalisisSolicitados();

}, 1000);

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

// 27. AGREGAR, ELIMINAR ANÁLISIS Y CALCULAR TOTAL

 

 

 

 

 

 

 

// ======================================================

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

const totalRecepcion =

 

 

 

 

 

 

 

    document.getElementById("totalRecepcion");

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ------------------------------------------------------

 

 

 

 

 

 

 

// CREAR UNA NUEVA FILA DE ANÁLISIS

 

 

 

 

 

 

 

// ------------------------------------------------------

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

function crearFilaAnalisis(listaAnalisis) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (!listaAnalisis) {

 

 

 

 

 

 

 

        return;

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    const nuevaFila =

 

 

 

 

 

 

 

        document.createElement("div");

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    nuevaFila.className =

 

 

 

 

 

 

 

        "fila-analisis";

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    nuevaFila.innerHTML = `

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        <div class="campo-panel">

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            <label>

 

 

 

 

 

 

 

                Tipo de análisis *

 

 

 

 

 

 

 

            </label>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            <select

 

 

 

 

 

 

 

                class="tipo-analisis"

 

 

 

 

 

 

 

                required

 

 

 

 

 

 

 

            >

 

 

 

 

 

 

 

                <option value="">

 

 

 

 

 

 

 

                    Seleccionar análisis

 

 

 

 

 

 

 

                </option>

 

 

 

 

 

 

 

            </select>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        </div>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        <div class="campo-panel">

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            <label>

 

 

 

 

 

 

 

                Precio S/ *

 

 

 

 

 

 

 

            </label>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            <input

 

 

 

 

 

 

 

                type="number"

 

 

 

 

 

 

 

                class="precio-analisis"

 

 

 

 

 

 

 

                min="0"

 

 

 

 

 

 

 

                step="0.01"

 

 

 

 

 

 

 

                placeholder="0.00"

 

 

 

 

 

 

 

                required

 

 

 

 

 

 

 

            >

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        </div>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        <button

 

 

 

 

 

 

 

            type="button"

 

 

 

 

 

 

 

            class="boton-eliminar-analisis"

 

 

 

 

 

 

 

            title="Eliminar análisis"

 

 

 

 

 

 

 

        >

 

 

 

 

 

 

 

            ×

 

 

 

 

 

 

 

        </button>

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    `;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    listaAnalisis.appendChild(

 

 

 

 

 

 

 

        nuevaFila

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    actualizarBotonesAnalisis();

 

 

 

 

 

 

 

    calcularTotalRecepcion();

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ------------------------------------------------------

 

 

 

 

 

 

 

// CONTROLAR BOTONES ELIMINAR ANÁLISIS

 

 

 

 

 

 

 

// ------------------------------------------------------

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

function actualizarBotonesAnalisis() {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (!listaMuestras) {

 

 

 

 

 

 

 

        return;

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    const muestras =

 

 

 

 

 

 

 

        listaMuestras.querySelectorAll(

 

 

 

 

 

 

 

            ".muestra-formulario"

 

 

 

 

 

 

 

        );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    muestras.forEach((muestra) => {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        const filas =

 

 

 

 

 

 

 

            muestra.querySelectorAll(

 

 

 

 

 

 

 

                ".fila-analisis"

 

 

 

 

 

 

 

            );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        filas.forEach((fila) => {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            const boton =

 

 

 

 

 

 

 

                fila.querySelector(

 

 

 

 

 

 

 

                    ".boton-eliminar-analisis"

 

 

 

 

 

 

 

                );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            if (boton) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                // Siempre debe quedar

 

 

 

 

 

 

 

                // mínimo un análisis.

 

 

 

 

 

 

 

                boton.style.display =

 

 

 

 

 

 

 

                    filas.length > 1

 

 

 

 

 

 

 

                        ? ""

 

 

 

 

 

 

 

                        : "none";

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        });

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    });

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ------------------------------------------------------

 

 

 

 

 

 

 

// ELIMINAR UN ANÁLISIS

 

 

 

 

 

 

 

// ------------------------------------------------------

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

function eliminarAnalisis(fila) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (!fila) {

 

 

 

 

 

 

 

        return;

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    const lista =

 

 

 

 

 

 

 

        fila.closest(

 

 

 

 

 

 

 

            ".lista-analisis"

 

 

 

 

 

 

 

        );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (!lista) {

 

 

 

 

 

 

 

        return;

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    const filas =

 

 

 

 

 

 

 

        lista.querySelectorAll(

 

 

 

 

 

 

 

            ".fila-analisis"

 

 

 

 

 

 

 

        );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    // No permitir eliminar

 

 

 

 

 

 

 

    // el único análisis.

 

 

 

 

 

 

 

    if (filas.length <= 1) {

 

 

 

 

 

 

 

        return;

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    fila.remove();

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    actualizarBotonesAnalisis();

 

 

 

 

 

 

 

    calcularTotalRecepcion();

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ------------------------------------------------------

 

 

 

 

 

 

 

// CALCULAR TOTAL DE LA RECEPCIÓN

 

 

 

 

 

 

 

// ------------------------------------------------------

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

function calcularTotalRecepcion() {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    if (!totalRecepcion) {

 

 

 

 

 

 

 

        return;

 

 

 

 

 

 

 

    }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    const precios =

 

 

 

 

 

 

 

        document.querySelectorAll(

 

 

 

 

 

 

 

            "#listaMuestras .precio-analisis"

 

 

 

 

 

 

 

        );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    let total = 0;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    precios.forEach((campo) => {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        const valor =

 

 

 

 

 

 

 

            parseFloat(campo.value);

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        if (!isNaN(valor)) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            total += valor;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    });

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    totalRecepcion.textContent =

 

 

 

 

 

 

 

        total.toFixed(2);

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ------------------------------------------------------

 

 

 

 

 

 

 

// EVENTOS PARA AGREGAR Y ELIMINAR ANÁLISIS

 

 

 

 

 

 

 

// ------------------------------------------------------

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

if (listaMuestras) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    listaMuestras.addEventListener(

 

 

 

 

 

 

 

        "click",

 

 

 

 

 

 

 

        (evento) => {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            // AGREGAR ANÁLISIS

 

 

 

 

 

 

 

            const botonAgregar =

 

 

 

 

 

 

 

                evento.target.closest(

 

 

 

 

 

 

 

                    ".boton-agregar-analisis"

 

 

 

 

 

 

 

                );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            if (botonAgregar) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                const muestra =

 

 

 

 

 

 

 

                    botonAgregar.closest(

 

 

 

 

 

 

 

                        ".muestra-formulario"

 

 

 

 

 

 

 

                    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                if (!muestra) {

 

 

 

 

 

 

 

                    return;

 

 

 

 

 

 

 

                }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                const listaAnalisis =

 

 

 

 

 

 

 

                    muestra.querySelector(

 

 

 

 

 

 

 

                        ".lista-analisis"

 

 

 

 

 

 

 

                    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                crearFilaAnalisis(

 

 

 

 

 

 

 

                    listaAnalisis

 

 

 

 

 

 

 

                );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                return;

 

 

 

 

 

 

 

            }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            // ELIMINAR ANÁLISIS

 

 

 

 

 

 

 

            const botonEliminar =

 

 

 

 

 

 

 

                evento.target.closest(

 

 

 

 

 

 

 

                    ".boton-eliminar-analisis"

 

 

 

 

 

 

 

                );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            if (botonEliminar) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                const fila =

 

 

 

 

 

 

 

                    botonEliminar.closest(

 

 

 

 

 

 

 

                        ".fila-analisis"

 

 

 

 

 

 

 

                    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                eliminarAnalisis(

 

 

 

 

 

 

 

                    fila

 

 

 

 

 

 

 

                );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        }

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    // Actualizar total al escribir

 

 

 

 

 

 

 

    // cualquier precio.

 

 

 

 

 

 

 

    listaMuestras.addEventListener(

 

 

 

 

 

 

 

        "input",

 

 

 

 

 

 

 

        (evento) => {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            if (

 

 

 

 

 

 

 

                evento.target.classList

 

 

 

 

 

 

 

                    .contains(

 

 

 

 

 

 

 

                        "precio-analisis"

 

 

 

 

 

 

 

                    )

 

 

 

 

 

 

 

            ) {

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

                calcularTotalRecepcion();

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

            }

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

        }

 

 

 

 

 

 

 

    );

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

// ------------------------------------------------------

 

 

 

 

 

 

 

// PREPARAR LOS ANÁLISIS QUE YA EXISTEN EN EL HTML

 

 

 

 

 

 

 

// ------------------------------------------------------

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

actualizarBotonesAnalisis();

 

 

 

 

 

 

 

calcularTotalRecepcion();

 

 

 

// ======================================================

 

 

 

// 28. CATÁLOGO DE TIPOS DE ANÁLISIS

 

 

 

// ======================================================

 

 

 

const nuevoTipoAnalisis = document.getElementById("nuevoTipoAnalisis");

 

 

 

const contenedorNuevoAnalisis = document.getElementById("contenedorNuevoAnalisis");

 

 

 

const contenedorTablaAnalisis = document.getElementById("contenedorTablaAnalisis");

 

 

 

const cerrarFormularioAnalisis = document.getElementById("cerrarFormularioAnalisis");

 

 

 

const cancelarTipoAnalisis = document.getElementById("cancelarTipoAnalisis");

 

 

 

const formTipoAnalisis = document.getElementById("formTipoAnalisis");

 

 

 

const nombreTipoAnalisis = document.getElementById("nombreTipoAnalisis");

 

 

 

const precioTipoAnalisis = document.getElementById("precioTipoAnalisis");

 

 

 

const descripcionTipoAnalisis = document.getElementById("descripcionTipoAnalisis");

 

 

 

const estadoTipoAnalisis = document.getElementById("estadoTipoAnalisis");

 

 

 

const mensajeTipoAnalisis = document.getElementById("mensajeTipoAnalisis");

 

 

 

const guardarTipoAnalisis = document.getElementById("guardarTipoAnalisis");

 

 

 

const tablaTiposAnalisis = document.getElementById("tablaTiposAnalisis");

 

 

 

 

 

 

 

function abrirFormularioTipoAnalisis() {

 

 

 

    if (!contenedorNuevoAnalisis) return;

 

 

 

    contenedorNuevoAnalisis.classList.remove("oculto");

 

 

 

    if (contenedorTablaAnalisis) contenedorTablaAnalisis.classList.add("oculto");

 

 

 

    if (nuevoTipoAnalisis) nuevoTipoAnalisis.classList.add("oculto");

 

 

 

    if (mensajeTipoAnalisis) {

 

 

 

        mensajeTipoAnalisis.textContent = "";

 

 

 

        mensajeTipoAnalisis.className = "mensaje-formulario";

 

 

 

    }

 

 

 

    if (nombreTipoAnalisis) setTimeout(() => nombreTipoAnalisis.focus(), 50);

 

 

 

}

 

 

 

 

 

 

 

function cerrarFormularioTipoAnalisis() {

 

 

 

    if (!contenedorNuevoAnalisis) return;

 

 

 

    contenedorNuevoAnalisis.classList.add("oculto");

 

 

 

    if (contenedorTablaAnalisis) contenedorTablaAnalisis.classList.remove("oculto");

 

 

 

    if (nuevoTipoAnalisis) nuevoTipoAnalisis.classList.remove("oculto");

 

 

 

    if (formTipoAnalisis) formTipoAnalisis.reset();

 

 

 

    if (estadoTipoAnalisis) estadoTipoAnalisis.value = "true";

 

 

 

    if (mensajeTipoAnalisis) {

 

 

 

        mensajeTipoAnalisis.textContent = "";

 

 

 

        mensajeTipoAnalisis.className = "mensaje-formulario";

 

 

 

    }

 

 

 

}

 

 

 

 

 

 

 

async function cargarTiposAnalisis() {

 

 

 

    if (!tablaTiposAnalisis) return;

 

 

 

    tablaTiposAnalisis.innerHTML = `<tr><td colspan="5" class="tabla-vacia">Cargando tipos de análisis...</td></tr>`;

 

 

 

 

 

 

 

    const { data, error } = await clienteSupabase

 

 

 

        .from("tipos_analisis")

 

 

 

        .select("id,nombre,descripcion,precio_referencial,activo")

 

 

 

        .order("nombre", { ascending: true });

 

 

 

 

 

 

 

    if (error) {

 

 

 

        console.error("Error al cargar tipos de análisis:", error);

 

 

 

        tablaTiposAnalisis.innerHTML = `<tr><td colspan="5" class="tabla-vacia">No se pudo cargar el catálogo de análisis.</td></tr>`;

 

 

 

        return;

 

 

 

    }

 

 

 

    mostrarTiposAnalisis(data || []);

 

 

 

}

 

// ======================================================

// CARGAR ANÁLISIS SOLICITADOS

// ======================================================

 

async function cargarAnalisisSolicitados() {

 

    const tablaAnalisisSolicitados =

        document.getElementById("tablaAnalisisSolicitados");

 

    if (!tablaAnalisisSolicitados) return;

 

    tablaAnalisisSolicitados.innerHTML = `

        <tr>

            <td colspan="5" class="tabla-vacia">

                Cargando análisis solicitados...

            </td>

        </tr>

    `;

 

    const { data, error } = await clienteSupabase

        .from("analisis_solicitados")

        .select(`

            id,

            precio,

            estado,

            muestras (

                id,

                codigo_muestra

            ),

            tipos_analisis (

                nombre

            )

        `)

        .order("created_at", { ascending: false });

 

    if (error) {

 

        console.error(

            "Error al cargar análisis solicitados:",

            error

        );

 

        tablaAnalisisSolicitados.innerHTML = `

            <tr>

                <td colspan="5" class="tabla-vacia">

                    No se pudieron cargar los análisis solicitados.

                </td>

            </tr>

        `;

 

        return;

    }

 

    if (!data || data.length === 0) {

 

        tablaAnalisisSolicitados.innerHTML = `

            <tr>

                <td colspan="5" class="tabla-vacia">

                    No hay análisis solicitados.

                </td>

            </tr>

        `;

 

        return;

    }

 

    tablaAnalisisSolicitados.innerHTML = data

        .map((analisis) => {

 

            const muestra =

                analisis.muestras?.codigo_muestra || "-";

 

            const tipo =

                analisis.tipos_analisis?.nombre || "-";

 

            const precio =

                Number(analisis.precio || 0).toFixed(2);

 

            const estado =

                analisis.estado || "PENDIENTE";

 

            return `

                <tr>

 

                    <td>

                        ${escaparHTML(muestra)}

                    </td>

 

                    <td>

                        ${escaparHTML(tipo)}

                    </td>

 

                    <td>

                        S/ ${precio}

                    </td>

 

                    <td>

                        ${escaparHTML(estado)}

                    </td>

 

                    <td>

                       ${

    estado.toUpperCase() === "FINALIZADO"

        ? `

            <button

                type="button"

                class="boton-tabla boton-resultado"

                data-analisis-id="${analisis.id}"

            >

                Ver resultado

            </button>

        `

        : `

            

        `

}

                    </td>

 

                </tr>

            `;

 

        })

        .join("");

}

 

 

 

// =====================================================

// ABRIR MODAL PARA VER RESULTADO

// =====================================================

 

document.addEventListener("click", async (evento) => {

 

    const botonResultado =

        evento.target.closest(".boton-resultado");

 

    if (!botonResultado) return;

 

    const analisisId =

        botonResultado.dataset.analisisId;

 

    if (!analisisId) {

        alert("No se encontró el análisis.");

        return;

    }

 

    try {

 

        const { data, error } =

            await clienteSupabase

                .from("analisis_solicitados")

                .select(`

                    id,

                    estado,

                    muestras (

                        codigo_muestra

                    ),

                    tipos_analisis (

                        nombre

                    )

                `)

                .eq("id", analisisId)

                .single();

 

        if (error) {

            console.error(

                "Error al cargar el análisis:",

                error

            );

 

            alert("No se pudo cargar el análisis.");

            return;

        }

 

        const modal =

            document.getElementById("modalResultado");

 

        const inputId =

            document.getElementById("resultadoAnalisisId");

 

        const muestra =

            document.getElementById("resultadoMuestra");

 

        const analisis =

            document.getElementById("resultadoAnalisis");

 

        if (!modal || !inputId || !muestra || !analisis) {

            console.error(

                "No se encontraron los elementos del modal de resultados."

            );

            return;

        }

 

        inputId.value = data.id;

 

        muestra.textContent =

            data.muestras?.codigo_muestra || "-";

 

        analisis.textContent =

            data.tipos_analisis?.nombre || "-";

 

        modal.classList.remove("oculto");

 

    } catch (error) {

 

        console.error(

            "Error inesperado al abrir resultado:",

            error

        );

 

        alert("Ocurrió un error al abrir el resultado.");

    }

 

});

// =====================================================

// GUARDAR RESULTADOS DEL ANÁLISIS

// =====================================================

 

document.addEventListener("click", async (evento) => {

    const botonGuardar = evento.target.closest("#guardarResultado");

 

    if (!botonGuardar) return;

 

    const analisisId =

        document.getElementById("resultadoAnalisisId")?.value;

 

    const filas =

        document.querySelectorAll("#listaResultados .resultado-fila");

 

    if (!analisisId) {

        alert("No se encontró el análisis solicitado.");

        return;

    }

 

    if (filas.length === 0) {

        alert("Debe registrar al menos un resultado.");

        return;

    }

 

    const resultados = [];

 

    for (const fila of filas) {

        const parametro =

            fila.querySelector(".resultado-parametro")?.value.trim();

 

        const resultado =

            fila.querySelector(".resultado-valor")?.value.trim();

 

        const unidad =

            fila.querySelector(".resultado-unidad")?.value.trim();

 

        if (!parametro || !resultado) {

            alert("Complete el parámetro y el resultado.");

            return;

        }

 

        resultados.push({

            analisis_solicitado_id: Number(analisisId),

            parametro: parametro,

            resultado: resultado,

            unidad: unidad || null

        });

    }

 

    const observaciones =

        document.getElementById("resultadoObservaciones")?.value.trim();

 

    botonGuardar.disabled = true;

    botonGuardar.textContent = "Guardando...";

 

    try {

 

        const { error: errorResultados } =

            await clienteSupabase

                .from("resultados")

                .insert(

                    resultados.map((item) => ({

                        ...item,

                        observaciones: observaciones || null

                    }))

                );

 

        if (errorResultados) {

            throw errorResultados;

        }

 

        const { error: errorAnalisis } =

            await clienteSupabase

                .from("analisis_solicitados")

                .update({

                    estado: "FINALIZADO"

                })

                .eq("id", analisisId);

 

        if (errorAnalisis) {

            throw errorAnalisis;

        }

 

        alert("Resultado registrado correctamente.");

 

        const modal =

            document.getElementById("modalResultado");

 

        if (modal) {

            modal.classList.add("oculto");

        }

 

        await cargarAnalisisSolicitados();

        await cargarTablaMuestras();

 

    } catch (error) {

 

        console.error(

            "Error al guardar el resultado:",

            error

        );

 

        alert(

            "No se pudo guardar el resultado: " +

            (error.message || "Error desconocido")

        );

 

    } finally {

 

        botonGuardar.disabled = false;

        botonGuardar.textContent = "Guardar resultado";

 

    }

});

 

// =====================================================

// BOTONES DEL MODAL REGISTRAR RESULTADO

// =====================================================

 

document.addEventListener("click", (evento) => {

 

    // BOTÓN X

    const botonCerrar =

        evento.target.closest("#modalResultado .detalle-cerrar");

 

    if (botonCerrar) {

 

        const modal =

            document.getElementById("modalResultado");

 

        if (modal) {

            modal.classList.add("oculto");

        }

 

        return;

    }

 

 

    // BOTÓN CANCELAR

    const botonCancelar =

        evento.target.closest("#modalResultado .boton-secundario");

 

    if (

        botonCancelar &&

        botonCancelar.textContent.trim().toLowerCase() === "cancelar"

    ) {

 

        const modal =

            document.getElementById("modalResultado");

 

        if (modal) {

            modal.classList.add("oculto");

        }

 

        return;

    }

 

});

 

function mostrarTiposAnalisis(tipos) {

 

 

 

    if (!tablaTiposAnalisis) return;

 

 

 

    if (!tipos || tipos.length === 0) {

 

 

 

        tablaTiposAnalisis.innerHTML = `<tr><td colspan="5" class="tabla-vacia">No hay tipos de análisis registrados.</td></tr>`;

 

 

 

        return;

 

 

 

    }

 

 

 

 

 

 

 

    tablaTiposAnalisis.innerHTML = tipos.map((tipo) => {

 

 

 

        const precio = tipo.precio_referencial === null || tipo.precio_referencial === undefined

 

 

 

            ? "-"

 

 

 

            : `S/ ${Number(tipo.precio_referencial).toFixed(2)}`;

 

 

 

        const estado = tipo.activo ? "Activo" : "Inactivo";

 

 

 

        const accion = tipo.activo ? "Desactivar" : "Activar";

 

 

 

        return `

 

 

 

            <tr>

 

 

 

                <td><strong>${escaparHTML(tipo.nombre)}</strong></td>

 

 

 

                <td>${escaparHTML(tipo.descripcion || "-")}</td>

 

 

 

                <td>${precio}</td>

 

 

 

                <td>${estado}</td>

 

 

 

                <td>

 

 

 

                    <button type="button" class="boton-secundario boton-estado-analisis"

 

 

 

                        data-id="${tipo.id}" data-activo="${tipo.activo}">${accion}</button>

 

 

 

                </td>

 

 

 

            </tr>`;

 

 

 

    }).join("");

 

 

 

}

 

 

 

 

 

 

 

function mostrarMensajeTipoAnalisis(texto, tipo) {

 

 

 

    if (!mensajeTipoAnalisis) return;

 

 

 

    mensajeTipoAnalisis.textContent = texto;

 

 

 

    mensajeTipoAnalisis.className = "mensaje-formulario";

 

 

 

    if (tipo) mensajeTipoAnalisis.classList.add(tipo);

 

 

 

}

 

 

 

 

 

 

 

async function guardarNuevoTipoAnalisis(evento) {

 

 

 

    evento.preventDefault();

 

 

 

    if (!nombreTipoAnalisis || !precioTipoAnalisis || !descripcionTipoAnalisis || !estadoTipoAnalisis) return;

 

 

 

 

 

 

 

    const nombre = nombreTipoAnalisis.value.trim();

 

 

 

    const descripcion = descripcionTipoAnalisis.value.trim();

 

 

 

    const precioTexto = precioTipoAnalisis.value.trim();

 

 

 

    const activo = estadoTipoAnalisis.value === "true";

 

 

 

 

 

 

 

    if (!nombre) {

 

 

 

        mostrarMensajeTipoAnalisis("Ingrese el nombre del análisis.", "error");

 

 

 

        nombreTipoAnalisis.focus();

 

 

 

        return;

 

 

 

    }

 

 

 

 

 

 

 

    let precio = null;

 

 

 

    if (precioTexto !== "") {

 

 

 

        precio = Number(precioTexto);

 

 

 

        if (!Number.isFinite(precio) || precio < 0) {

 

 

 

            mostrarMensajeTipoAnalisis("Ingrese un precio referencial válido.", "error");

 

 

 

            precioTipoAnalisis.focus();

 

 

 

            return;

 

 

 

        }

 

 

 

    }

 

 

 

 

 

 

 

    if (guardarTipoAnalisis) {

 

 

 

        guardarTipoAnalisis.disabled = true;

 

 

 

        guardarTipoAnalisis.textContent = "Guardando...";

 

 

 

    }

 

 

 

    mostrarMensajeTipoAnalisis("", "");

 

 

 

 

 

 

 

    const { error } = await clienteSupabase.from("tipos_analisis").insert({

 

 

 

        nombre,

 

 

 

        descripcion: descripcion || null,

 

 

 

        precio_referencial: precio,

 

 

 

        activo

 

 

 

    });

 

 

 

 

 

 

 

    if (error) {

 

 

 

        console.error("Error al guardar tipo de análisis:", error);

 

 

 

        if (error.code === "23505") {

 

 

 

            mostrarMensajeTipoAnalisis(`El análisis "${nombre}" ya se encuentra registrado.`, "error");

 

 

 

        } else {

 

 

 

            mostrarMensajeTipoAnalisis("No se pudo guardar el análisis. Intente nuevamente.", "error");

 

 

 

        }

 

 

 

        if (guardarTipoAnalisis) {

 

 

 

            guardarTipoAnalisis.disabled = false;

 

 

 

            guardarTipoAnalisis.textContent = "Guardar análisis";

 

 

 

        }

 

 

 

        return;

 

 

 

    }

 

 

 

 

 

 

 

    mostrarMensajeTipoAnalisis("Análisis registrado correctamente.", "exito");

 

 

 

    await cargarTiposAnalisis();

 

    await cargarAnalisisActivosRecepcion();

 

 

 

    if (guardarTipoAnalisis) {

 

 

 

        guardarTipoAnalisis.disabled = false;

 

 

 

        guardarTipoAnalisis.textContent = "Guardar análisis";

 

 

 

    }

 

 

 

    setTimeout(cerrarFormularioTipoAnalisis, 700);

 

 

 

}

 

 

 

 

 

 

 

async function cambiarEstadoTipoAnalisis(id, activoActual) {

 

 

 

    const { error } = await clienteSupabase

 

 

 

        .from("tipos_analisis")

 

 

 

        .update({ activo: !activoActual })

 

 

 

        .eq("id", id);

 

 

 

 

 

 

 

    if (error) {

 

 

 

        console.error("Error al cambiar estado del análisis:", error);

 

 

 

        alert("No se pudo cambiar el estado del análisis.");

 

 

 

        return;

 

 

 

    }

 

 

 

    await cargarTiposAnalisis();

 

    await cargarAnalisisActivosRecepcion();

 

 

 

}

 

 

 

 

 

 

 

if (nuevoTipoAnalisis) nuevoTipoAnalisis.addEventListener("click", abrirFormularioTipoAnalisis);

 

 

 

if (cerrarFormularioAnalisis) cerrarFormularioAnalisis.addEventListener("click", cerrarFormularioTipoAnalisis);

 

 

 

if (cancelarTipoAnalisis) cancelarTipoAnalisis.addEventListener("click", cerrarFormularioTipoAnalisis);

 

 

 

if (formTipoAnalisis) formTipoAnalisis.addEventListener("submit", guardarNuevoTipoAnalisis);

 

 

 

 

 

 

 

if (tablaTiposAnalisis) {

 

 

 

    tablaTiposAnalisis.addEventListener("click", async (evento) => {

 

 

 

        const boton = evento.target.closest(".boton-estado-analisis");

 

 

 

        if (!boton) return;

 

 

 

        const id = Number(boton.dataset.id);

 

 

 

        const activoActual = boton.dataset.activo === "true";

 

 

 

        if (!Number.isInteger(id) || id <= 0) return;

 

 

 

        boton.disabled = true;

 

 

 

        await cambiarEstadoTipoAnalisis(id, activoActual);

 

 

 

    });

 

 

 

}

 

 

 

// ======================================================

 

// 29. CATÁLOGO ACTIVO EN NUEVA RECEPCIÓN

 

// ======================================================

 

 

 

let catalogoAnalisisActivos = [];

 

 

 

async function cargarAnalisisActivosRecepcion() {

 

    const { data, error } = await clienteSupabase

 

        .from("tipos_analisis")

 

        .select("id,nombre,precio_referencial")

 

        .eq("activo", true)

 

        .order("nombre", { ascending: true });

 

 

 

    if (error) {

 

        console.error(

 

            "Error al cargar análisis activos para recepción:",

 

            error

 

        );

 

        catalogoAnalisisActivos = [];

 

        actualizarSelectsAnalisisRecepcion();

 

        return;

 

    }

 

 

 

    catalogoAnalisisActivos = data || [];

 

    actualizarSelectsAnalisisRecepcion();

 

}

 

 

 

function llenarSelectAnalisisRecepcion(select) {

 

    if (!select) return;

 

 

 

    const valorActual = select.value;

 

 

 

    let opciones = `

 

        <option value="">

 

            Seleccionar análisis

 

        </option>

 

    `;

 

 

 

    if (catalogoAnalisisActivos.length === 0) {

 

        opciones += `

 

            <option value="" disabled>

 

                No hay análisis activos registrados

 

            </option>

 

        `;

 

    } else {

 

        opciones += catalogoAnalisisActivos

 

            .map((tipo) => {

 

                const precio =

 

                    tipo.precio_referencial === null ||

 

                    tipo.precio_referencial === undefined

 

                        ? ""

 

                        : String(tipo.precio_referencial);

 

 

 

                return `

 

                    <option

 

                        value="${tipo.id}"

 

                        data-precio="${escaparHTML(precio)}"

 

                    >

 

                        ${escaparHTML(tipo.nombre)}

 

                    </option>

 

                `;

 

            })

 

            .join("");

 

    }

 

 

 

    select.innerHTML = opciones;

 

 

 

    const existeValorAnterior =

 

        valorActual &&

 

        catalogoAnalisisActivos.some(

 

            (tipo) =>

 

                String(tipo.id) === String(valorActual)

 

        );

 

 

 

    if (existeValorAnterior) {

 

        select.value = valorActual;

 

    }

 

 

 

    select.dataset.catalogoCargado = "true";

 

}

 

 

 

function actualizarSelectsAnalisisRecepcion() {

 

    if (!listaMuestras) return;

 

 

 

    const selects =

 

        listaMuestras.querySelectorAll(".tipo-analisis");

 

 

 

    selects.forEach((select) => {

 

        llenarSelectAnalisisRecepcion(select);

 

    });

 

}

 

 

 

if (listaMuestras) {

 

    listaMuestras.addEventListener(

 

        "change",

 

        (evento) => {

 

            const select =

 

                evento.target.closest(".tipo-analisis");

 

 

 

            if (!select) return;

 

 

 

            const fila =

 

                select.closest(".fila-analisis");

 

 

 

            const muestra =

 

                select.closest(".muestra-formulario");

 

 

 

            if (!fila || !muestra) return;

 

 

 

            const valorSeleccionado = select.value;

 

 

 

            if (valorSeleccionado) {

 

                const otrosSelects =

 

                    muestra.querySelectorAll(".tipo-analisis");

 

 

 

                const repetido =

 

                    Array.from(otrosSelects).some(

 

                        (otroSelect) =>

 

                            otroSelect !== select &&

 

                            otroSelect.value === valorSeleccionado

 

                    );

 

 

 

                if (repetido) {

 

                    alert(

 

                        "Este análisis ya fue agregado a la muestra."

 

                    );

 

 

 

                    select.value = "";

 

 

 

                    const campoPrecio =

 

                        fila.querySelector(".precio-analisis");

 

 

 

                    if (campoPrecio) {

 

                        campoPrecio.value = "";

 

                    }

 

 

 

                    calcularTotalRecepcion();

 

                    return;

 

                }

 

            }

 

 

 

            const opcionSeleccionada =

 

                select.options[select.selectedIndex];

 

 

 

            const campoPrecio =

 

                fila.querySelector(".precio-analisis");

 

 

 

            if (campoPrecio) {

 

                const precio =

 

                    opcionSeleccionada?.dataset?.precio ?? "";

 

 

 

                campoPrecio.value = precio;

 

                calcularTotalRecepcion();

 

            }

 

        }

 

    );

 

}

 

 

 

if (listaMuestras) {

 

    const observadorAnalisisRecepcion =

 

        new MutationObserver(() => {

 

            const selects =

 

                listaMuestras.querySelectorAll(".tipo-analisis");

 

 

 

            selects.forEach((select) => {

 

                if (

 

                    select.dataset.catalogoCargado !== "true"

 

                ) {

 

                    llenarSelectAnalisisRecepcion(select);

 

                }

 

            });

 

        });

 

 

 

    observadorAnalisisRecepcion.observe(

 

        listaMuestras,

 

        {

 

            childList: true,

 

            subtree: true

 

        }

 

    );

 

}

 

// =====================================================

// CARGAR CERTIFICADOS

// =====================================================

 

async function cargarCertificados() {

    const contenedor = document.getElementById("listaCertificados");

 

    if (!contenedor) return;

 

    contenedor.innerHTML = `

        <div class="estado-vacio">

            <h3>Certificados de análisis</h3>

            <p>Cargando certificados...</p>

        </div>

    `;

 

    try {

        const { data, error } = await clienteSupabase

            .from("certificados")

            .select(`

                id,

                muestra_id,

                numero_certificado,

                fecha_emision,

                archivo_url,

                estado,

                muestras (

                    codigo_muestra

                )

            `)

            .order("id", { ascending: false });

 

        if (error) {

            console.error("Error al cargar certificados:", error);

 

            contenedor.innerHTML = `

                <div class="estado-vacio">

                    <h3>Error al cargar certificados</h3>

                    <p>No se pudieron cargar los certificados.</p>

                </div>

            `;

 

            return;

        }

 

        // Si no existen certificados

        if (!data || data.length === 0) {

            contenedor.innerHTML = `

                <div class="estado-vacio">

                    <h3>Certificados de análisis</h3>

                    <p>Aún no hay certificados generados.</p>

                </div>

            `;

 

            return;

        }

 

        // Mostrar certificados

        contenedor.innerHTML = data.map(certificado => {

 

            const codigoMuestra =

                certificado.muestras?.codigo_muestra || "-";

 

            const fecha = certificado.fecha_emision

                ? new Date(certificado.fecha_emision).toLocaleDateString("es-PE")

                : "-";

 

            return `

                <div class="certificado-item">

 

                    <div class="certificado-info">

                        <span class="certificado-label">

                            CERTIFICADO

                        </span>

 

                        <strong>

                            ${certificado.numero_certificado || "-"}

                        </strong>

                    </div>

 

                    <div class="certificado-info">

                        <span class="certificado-label">

                            MUESTRA

                        </span>

 

                        <strong>

                            ${codigoMuestra}

                        </strong>

                    </div>

 

                    <div class="certificado-info">

                        <span class="certificado-label">

                            FECHA

                        </span>

 

                        <strong>

                            ${fecha}

                        </strong>

                    </div>

 

                    <div class="certificado-info">

                        <span class="certificado-label">

                            ESTADO

                        </span>

 

                        <strong>

                            ${certificado.estado || "-"}

                        </strong>

                    </div>

 

                    <div class="certificado-acciones">

                        ${

                            certificado.archivo_url

                                ? `

                                    <a

                                        href="${certificado.archivo_url}"

                                        target="_blank"

                                        class="boton-tabla"

                                    >

                                        Ver PDF

                                    </a>

                                  `

                                : `

                                    <span class="sin-pdf">

                                        Sin PDF

                                    </span>

                                  `

                        }

                    </div>

 

                </div>

            `;

        }).join("");

 

    } catch (error) {

 

        console.error("Error inesperado:", error);

 

        contenedor.innerHTML = `

            <div class="estado-vacio">

                <h3>Error</h3>

                <p>Ocurrió un problema al cargar los certificados.</p>

            </div>

        `;

    }

}

 

document.addEventListener("DOMContentLoaded", () => {

    cargarCertificados();

});

 

// ======================================================

// GENERAR CERTIFICADO AUTOMÁTICAMENTE

// ======================================================

// ======================================================

// GENERAR CERTIFICADO DE ANÁLISIS - PDF

// ======================================================

 

async function generarCertificado(muestraId) {

 

    try {

 

        if (!muestraId) {

            alert("No se encontró la muestra.");

            return;

        }

 

        if (!window.PDFLib) {

            throw new Error(

                "PDFLib no está cargado. Verifica que pdf-lib esté incluido en panel.html."

            );

        }

 

        console.log(

            "Generando certificado para muestra:",

            muestraId

        );

 

        const { data: muestra, error: errorMuestra } =

            await clienteSupabase

                .from("muestras")

                .select(`

                    id,

                    codigo_muestra,

                    descripcion,

                    recepcion_id

                `)

                .eq("id", muestraId)

                .single();

 

        if (errorMuestra || !muestra) {

            console.error(errorMuestra);

            throw new Error(

                "No se pudo obtener la información de la muestra."

            );

        }

 

        const { data: recepcion, error: errorRecepcion } =

            await clienteSupabase

                .from("recepciones")

                .select(`

                    id,

                    numero_recepcion,

                    cliente_id,

                    fecha_recepcion

                `)

                .eq("id", muestra.recepcion_id)

                .single();

 

        if (errorRecepcion || !recepcion) {

            console.error(errorRecepcion);

            throw new Error("No se pudo obtener la recepción.");

        }

 

        const { data: cliente, error: errorCliente } =

            await clienteSupabase

                .from("clientes")

                .select(`

                    id,

                    razon_social,

                    ruc,

                    direccion,

                    correo,

                    telefono

                `)

                .eq("id", recepcion.cliente_id)

                .single();

 

        if (errorCliente || !cliente) {

            console.error(errorCliente);

            throw new Error("No se pudo obtener el cliente.");

        }

 

        const { data: analisis, error: errorAnalisis } =

            await clienteSupabase

                .from("analisis_solicitados")

                .select(`

                    id,

                    muestra_id,

                    tipo_analisis_id,

                    precio,

                    estado

                `)

                .eq("muestra_id", muestraId);

 

        if (errorAnalisis) {

            console.error(errorAnalisis);

            throw new Error("No se pudieron obtener los análisis.");

        }

 

        const idsAnalisis =

            (analisis || []).map((a) => a.id);

 

        let resultados = [];

 

        if (idsAnalisis.length > 0) {

 

            const { data, error } =

                await clienteSupabase

                    .from("resultados")

                    .select(`

                        id,

                        analisis_solicitado_id,

                        parametro,

                        resultado,

                        unidad,

                        observaciones

                    `)

                    .in(

                        "analisis_solicitado_id",

                        idsAnalisis

                    );

 

            if (error) {

                console.error(error);

                throw new Error(

                    "No se pudieron obtener los resultados."

                );

            }

 

            resultados = data || [];

        }

 

        const idsTipos =

            (analisis || [])

                .map((a) => a.tipo_analisis_id)

                .filter(Boolean);

 

        let tiposAnalisis = [];

 

        if (idsTipos.length > 0) {

 

            const { data, error } =

                await clienteSupabase

                    .from("tipos_analisis")

                    .select(`

                        id,

                        nombre

                    `)

                    .in("id", idsTipos);

 

            if (error) {

                console.warn(

                    "No se pudieron obtener los nombres de análisis:",

                    error

                );

            } else {

                tiposAnalisis = data || [];

            }

        }

 

        const obtenerNombreAnalisis = (tipoId) => {

 

            const tipo =

                tiposAnalisis.find(

                    (t) =>

                        Number(t.id) === Number(tipoId)

                );

 

            return tipo?.nombre || "ANÁLISIS";

        };

 

        const analisisCompletos =

            (analisis || []).map((a) => {

 

                const resultadosAnalisis =

                    resultados.filter(

                        (r) =>

                            Number(

                                r.analisis_solicitado_id

                            ) === Number(a.id)

                    );

 

                return {

                    ...a,

                    nombre:

                        obtenerNombreAnalisis(

                            a.tipo_analisis_id

                        ),

                    resultados:

                        resultadosAnalisis

                };

            });

 

        const fechaActual = new Date();

 

        const mes =

            String(

                fechaActual.getMonth() + 1

            ).padStart(2, "0");

 

        const numeroCertificado =

            `CJV-${mes}-${muestra.codigo_muestra}`;

 

        const ordenTrabajo =

            `CJV-OT-${muestra.codigo_muestra}`;

 

        const fechaRecepcion =

            recepcion.fecha_recepcion

                ? new Date(

                    `${recepcion.fecha_recepcion}T00:00:00`

                ).toLocaleDateString("es-PE")

                : "-";

 

        // ==================================================

        // PLANTILLA VISUAL

        // ==================================================

        // El PDF original se estaba volviendo blanco al

        // guardarlo nuevamente con pdf-lib. Por eso ahora

        // usamos una copia PNG de la plantilla como fondo.

        //

        // Debe existir en la raíz:

        // certificado-plantilla.png

        //

        // panel.html está dentro de /personal, por eso:

        // ../certificado-plantilla.png

        // ==================================================

 

        const respuestaPlantilla =

            await fetch(

                "../certificado-plantilla.png",

                {

                    cache: "no-store"

                }

            );

 

        if (!respuestaPlantilla.ok) {

            throw new Error(

                "No se encontró certificado-plantilla.png en la raíz del proyecto."

            );

        }

 

    

 

        const {

            PDFDocument,

            rgb,

            StandardFonts

        } = PDFLib;

 

        const pdfDoc =

            await PDFDocument.create();

 

        const pagina =

            pdfDoc.addPage([

                595.276,

                841.89

            ]);

 

        const anchoPagina =

            pagina.getWidth();

 

        const altoPagina =

            pagina.getHeight();

 

        // Convertir la plantilla a PNG real mediante Canvas
const blobPlantilla =
    await respuestaPlantilla.blob();

const imagenTemporal =
    new Image();

const urlPlantilla =
    URL.createObjectURL(blobPlantilla);

await new Promise((resolve, reject) => {

    imagenTemporal.onload = resolve;

    imagenTemporal.onerror = reject;

    imagenTemporal.src = urlPlantilla;

});

const canvas =
    document.createElement("canvas");

canvas.width =
    imagenTemporal.naturalWidth;

canvas.height =
    imagenTemporal.naturalHeight;

const contexto =
    canvas.getContext("2d");

contexto.drawImage(
    imagenTemporal,
    0,
    0
);

URL.revokeObjectURL(
    urlPlantilla
);

const pngDataURL =
    canvas.toDataURL("image/png");

const imagenPlantilla =
    await pdfDoc.embedPng(
        pngDataURL
    );

 

        pagina.drawImage(

            imagenPlantilla,

            {

                x: 0,

                y: 0,

                width: anchoPagina,

                height: altoPagina

            }

        );

 

        const fuente =

            await pdfDoc.embedFont(

                StandardFonts.Helvetica

            );

 

        const fuenteNegrita =

            await pdfDoc.embedFont(

                StandardFonts.HelveticaBold

            );

 

        const negro =

            rgb(0, 0, 0);

 

        function texto(

            valor,

            x,

            y,

            tamano = 9,

            negrita = false

        ) {

 

            pagina.drawText(

                String(valor ?? "-"),

                {

                    x,

                    y,

                    size: tamano,

                    font:

                        negrita

                            ? fuenteNegrita

                            : fuente,

                    color: negro

                }

            );

        }

 

        function textoAjustado(

            valor,

            x,

            y,

            tamano = 8,

            maxWidth = 350,

            negrita = false

        ) {

 

            const contenido =

                String(valor ?? "-");

 

            const fuenteUsada =

                negrita

                    ? fuenteNegrita

                    : fuente;

 

            let tamanoActual =

                tamano;

 

            while (

                tamanoActual > 5 &&

                fuenteUsada.widthOfTextAtSize(

                    contenido,

                    tamanoActual

                ) > maxWidth

            ) {

                tamanoActual -= 0.5;

            }

 

            pagina.drawText(

                contenido,

                {

                    x,

                    y,

                    size: tamanoActual,

                    font: fuenteUsada,

                    color: negro

                }

            );

        }

 

        // ==================================================

        // ENCABEZADO

        // ==================================================

 // ==================================================
// ENCABEZADO
// ==================================================

// IMPORTANTE:
// El título y el número de certificado YA están
// impresos en la plantilla PNG.
// NO los dibujamos nuevamente.


// ==================================================
// DATOS DEL CERTIFICADO
// ==================================================

const xDatos = 225;

// 1. CLIENTE
textoAjustado(
    cliente.razon_social || "-",
    xDatos,
    533,
    8.5,
    350,
    true
);

// 2. ORDEN DE TRABAJO
textoAjustado(
    ordenTrabajo || "-",
    xDatos,
    508,
    8.5,
    350,
    true
);

// 3. FECHA DE RECEPCIÓN
texto(
    fechaRecepcion || "-",
    xDatos,
    483,
    8.5,
    true
);

// 4. SOLICITUD DE ENSAYO
textoAjustado(
    muestra.solicitud_ensayo || "-",
    xDatos,
    458,
    8.5,
    350,
    true
);

// 5. DESCRIPCIÓN DE MUESTRA
textoAjustado(
    muestra.descripcion || "-",
    xDatos,
    433,
    8.5,
    350,
    true
);

// 6. PESO DE LA MUESTRA
textoAjustado(
    muestra.peso || "-",
    xDatos,
    408,
    8.5,
    350,
    true
);


// ==================================================
// RESULTADOS AU
// ==================================================

const resultadosAu =
    resultados.filter(
        (r) =>
            String(r.parametro || "")
                .trim()
                .toLowerCase() === "au"
    );

const filasAu = [
    357,
    335,
    313
];

resultadosAu
    .slice(0, 3)
    .forEach((r, indice) => {

        textoAjustado(
            r.resultado || "-",
            395,
            filasAu[indice],
            7.5,
            55,
            true
        );

        if (r.unidad) {
            textoAjustado(
                r.unidad,
                475,
                filasAu[indice],
                6.5,
                45
            );
        }

    });


// ==================================================
// RESULTADOS AG
// ==================================================

const resultadosAg =
    resultados.filter(
        (r) =>
            String(r.parametro || "")
                .trim()
                .toLowerCase() === "ag"
    );

const filasAg = [
    234,
    212,
    190
];

resultadosAg
    .slice(0, 3)
    .forEach((r, indice) => {

        textoAjustado(
            r.resultado || "-",
            395,
            filasAg[indice],
            7.5,
            55,
            true
        );

        if (r.unidad) {
            textoAjustado(
                r.unidad,
                475,
                filasAg[indice],
                6.5,
                45
            );
        }

    });


// ==================================================
// ==================================================
// FECHA DE EMISIÓN
// ==================================================

// Ocultar el "Lima, d/m/a" que viene impreso en la plantilla
pagina.drawRectangle({
    x: 465,
    y: 155,
    width: 125,
    height: 25,
    color: rgb(1, 1, 1)
});

const fechaEmision =
    `Lima, ${fechaActual.toLocaleDateString(
        "es-PE",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    )}`;

texto(
    fechaEmision,
    470,
    163,
    8
);


// ==================================================
// GENERAR PDF
// ==================================================


 

 

        const pdfFinal =

            await pdfDoc.save();

 

        const blob =

            new Blob(

                [pdfFinal],

                {

                    type:

                        "application/pdf"

                }

            );

 

        // ==================================================

        // SUBIR A STORAGE

        // ==================================================

 

        const nombreArchivo =

            `Certificado-${muestra.codigo_muestra}.pdf`;

 

        const rutaArchivo =

            `certificados/${nombreArchivo}`;

 

        const {

            error: errorStorage

        } =

            await clienteSupabase

                .storage

                .from("certificados")

                .upload(

                    rutaArchivo,

                    blob,

                    {

                        contentType:

                            "application/pdf",

                        upsert: true

                    }

                );

 

        if (errorStorage) {

            console.error(

                "Error al subir certificado a Storage:",

                errorStorage

            );

 

            throw new Error(

                "El PDF se generó, pero no se pudo guardar en Storage."

            );

        }

 

        // ==================================================

        // URL PÚBLICA

        // ==================================================

 

        const {

            data: datosURL

        } =

            clienteSupabase

                .storage

                .from("certificados")

                .getPublicUrl(

                    rutaArchivo

                );

 

        const archivoURL =

            datosURL?.publicUrl;

 

        if (!archivoURL) {

            throw new Error(

                "No se pudo obtener la URL pública del certificado."

            );

        }

 

        // ==================================================

        // REGISTRAR CERTIFICADO

        // ==================================================

 

        const {

            data: certificadoExistente,

            error:

                errorBusquedaCertificado

        } =

            await clienteSupabase

                .from("certificados")

                .select("id")

                .eq(

                    "muestra_id",

                    muestraId

                )

                .maybeSingle();

 

        if (errorBusquedaCertificado) {

            console.error(

                "Error buscando certificado:",

                errorBusquedaCertificado

            );

 

            throw new Error(

                "No se pudo comprobar el certificado existente."

            );

        }

 

        const datosCertificado = {

            muestra_id:

                muestraId,

            numero_certificado:

                numeroCertificado,

            fecha_emision:

                new Date().toISOString(),

            archivo_url:

                archivoURL,

            estado:

                "GENERADO"

        };

 

        let errorCertificado =

            null;

 

        if (certificadoExistente) {

 

            const resultado =

                await clienteSupabase

                    .from("certificados")

                    .update(

                        datosCertificado

                    )

                    .eq(

                        "id",

                        certificadoExistente.id

                    );

 

            errorCertificado =

                resultado.error;

 

        } else {

 

            const resultado =

                await clienteSupabase

                    .from("certificados")

                    .insert(

                        datosCertificado

                    );

 

            errorCertificado =

                resultado.error;

        }

 

        if (errorCertificado) {

            console.error(

                "Error al guardar certificado:",

                errorCertificado

            );

 

            throw new Error(

                "El PDF se guardó en Storage, pero no se pudo registrar en certificados."

            );

        }

 

        // ==================================================

        // ACTUALIZAR ESTADO

        // ==================================================

 

        const {

            error:

                errorEstadoCertificado

        } =

            await clienteSupabase

                .from("muestras")

                .update({

                    estado:

                        "CERTIFICADO GENERADO"

                })

                .eq(

                    "id",

                    muestraId

                );

 

        if (errorEstadoCertificado) {

            console.error(

                "Error al actualizar estado de muestra:",

                errorEstadoCertificado

            );

        }

 

        // ==================================================

        // DESCARGAR COPIA LOCAL

        // ==================================================

 

        const url =

            URL.createObjectURL(

                blob

            );

 

        const enlace =

            document.createElement(

                "a"

            );

 

        enlace.href =

            url;

 

        enlace.download =

            nombreArchivo;

 

        document.body.appendChild(

            enlace

        );

 

        enlace.click();

 

        document.body.removeChild(

            enlace

        );

 

        setTimeout(

            () =>

                URL.revokeObjectURL(

                    url

                ),

            1000

        );

 

        console.log(

            "Certificado guardado en Storage:",

            archivoURL

        );

 

        console.log(

            "Certificado generado correctamente."

        );

 

        alert(

            "Certificado generado correctamente."

        );

 

    } catch (error) {

 

        console.error(

            "Error al generar certificado:",

            error

        );

 

        alert(

            error?.message ||

            "No se pudo generar el certificado."

        );

    }

}

 

// ======================================================

// BOTÓN GENERAR CERTIFICADO

// ======================================================

// Solo responde a botones con la clase

// .boton-generar-certificado para no interferir

// con el botón "Ver" de las muestras.

 

document.addEventListener("click", (evento) => {

 

    const boton =

        evento.target.closest(

            ".boton-generar-certificado"

        );

 

    if (!boton) return;

 

    const muestraId =

        boton.dataset.muestraId;

 

    if (!muestraId) {

 

        alert(

            "No se encontró el ID de la muestra."

        );

 

        return;

    }

 

    generarCertificado(

        muestraId

    );

});