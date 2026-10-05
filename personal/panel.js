/* =========================================================


   LABORATORIO CJV S.A.C.


   PANEL INTERNO


========================================================= */




/* =========================================================


   SUPABASE


========================================================= */



const SUPABASE_URL =


    "https://xhyejqperbzrhrwikhfa.supabase.co";



const SUPABASE_PUBLISHABLE_KEY =


    "sb_publishable_gZVHUeFgv3yZIRxQ7FUJOQ_wyuI9s2x";



const clienteSupabase =


    window.supabase.createClient(


        SUPABASE_URL,


        SUPABASE_PUBLISHABLE_KEY


    );




/* =========================================================


   ELEMENTOS


========================================================= */



const menuItems =


    document.querySelectorAll(".menu-item");



const panelSecciones =


    document.querySelectorAll(".panel-seccion");



const tituloSeccion =


    document.getElementById("tituloSeccion");



const usuarioCorreo =


    document.getElementById("correoUsuario");



const botonCerrarSesion =


    document.getElementById("cerrarSesion");



const botonConfiguracion =


    document.getElementById("botonConfiguracion");



const botonPagosDashboard =


    document.getElementById("botonPagosDashboard");




/* =========================================================


   NOMBRES


========================================================= */



const nombresSecciones = {



    dashboard: "Dashboard",



    recepcion: "Recepción",



    laboratorio: "Laboratorio",



    reportes: "Reportes",



    pagos: "Pagos pendientes",



    configuracion: "Configuración"



};




/* =========================================================


   NAVEGACIÓN


========================================================= */



function cambiarSeccion(nombre) {



    panelSecciones.forEach(


        seccion => {



            seccion.classList.remove(


                "activa"


            );



        }


    );




    const seccion =


        document.getElementById(nombre);




    if (seccion) {



        seccion.classList.add(


            "activa"


        );



    }




    menuItems.forEach(


        item => {



            item.classList.remove(


                "activo"


            );




            if (


                item.dataset.seccion ===


                nombre


            ) {



                item.classList.add(


                    "activo"


                );



            }



        }


    );




    if (tituloSeccion) {



        tituloSeccion.textContent =


            nombresSecciones[nombre] ||


            "Dashboard";



    }




    if (


        nombre === "dashboard"


    ) {



        cargarDashboard();



    }




    if (


        nombre === "recepcion"


    ) {



        cargarRecepcion();



    }




    if (


        nombre === "laboratorio"


    ) {



        cargarLaboratorio();



    }




    if (


        nombre === "reportes"


    ) {



        cargarReportes();



    }




    if (


        nombre === "pagos"


    ) {



        cargarPagos();



    }




    if (


        nombre === "configuracion"


    ) {



        cargarConfiguracion();



    }



}




/* =========================================================


   MENÚ


========================================================= */



menuItems.forEach(


    item => {



        item.addEventListener(


            "click",


            () => {



                cambiarSeccion(


                    item.dataset.seccion


                );



            }


        );



    }


);




/* =========================================================


   SESIÓN


========================================================= */



async function comprobarSesion() {



    try {



        const {


            data,


            error


        } =


            await clienteSupabase


                .auth


                .getSession();




        if (error) {



            console.error(


                "Error de sesión:",


                error


            );



            return;



        }




        const session =


            data?.session;




        if (!session) {



            window.location.href =


                "login.html";



            return;



        }




        if (usuarioCorreo) {



            usuarioCorreo.textContent =


                session.user?.email ||


                "Personal autorizado";



        }



    } catch (error) {



        console.error(


            error


        );



    }



}




/* =========================================================


   CERRAR SESIÓN


========================================================= */



if (botonCerrarSesion) {



    botonCerrarSesion.addEventListener(


        "click",


        async () => {



            try {



                botonCerrarSesion.disabled =


                    true;




                const {


                    error


                } =


                    await clienteSupabase


                        .auth


                        .signOut();




                if (error) {



                    throw error;



                }




                window.location.href =


                    "login.html";



            } catch (error) {



                console.error(


                    error


                );




                botonCerrarSesion.disabled =


                    false;



                alert(


                    "No se pudo cerrar la sesión."


                );



            }



        }


    );



}




/* =========================================================


   UTILIDADES


========================================================= */



function escaparHTML(valor) {



    return String(


        valor ?? ""


    )


        .replaceAll(


            "&",


            "&amp;"


        )


        .replaceAll(


            "<",


            "&lt;"


        )


        .replaceAll(


            ">",


            "&gt;"


        )


        .replaceAll(


            '"',


            "&quot;"


        )


        .replaceAll(


            "'",


            "&#039;"


        );



}




function formatoFecha(valor) {



    if (!valor) {



        return "-";



    }




    const fecha =


        new Date(valor);




    if (


        Number.isNaN(


            fecha.getTime()


        )


    ) {



        return escaparHTML(


            valor


        );



    }




    return fecha.toLocaleDateString(


        "es-PE",


        {


            day: "2-digit",


            month: "2-digit",


            year: "numeric"


        }


    );



}




function formatoDinero(valor) {



    return (


        "S/ " +


        Number(


            valor || 0


        ).toFixed(2)


    );



}




function obtenerEstadoPago(


    recepcion


) {



    const estado = String(


        recepcion.estado_pago ||


        "PENDIENTE"


    )


        .trim()


        .toUpperCase();



    // La BD usa CANCELADO como estado de pago completado.


    // En la interfaz seguimos mostrando "PAGADO" al personal.


    if (estado === "CANCELADO") {


        return "PAGADO";


    }



    return estado;



}




function obtenerNombreCliente(


    cliente


) {



    if (!cliente) {



        return "Sin cliente";



    }




    return (


        cliente.nombre_completo ||


        cliente.razon_social ||


        cliente.nombre ||


        cliente.nombres ||


        cliente.nombre_cliente ||


        "Cliente"


    );



}




/* =========================================================


   CONSULTAS


========================================================= */



async function obtenerClientes() {



    const {


        data,


        error


    } =


        await clienteSupabase


            .from("clientes")


            .select("*");




    if (error) {



        throw error;



    }




    return data || [];



}




async function obtenerRecepciones() {



    const {


        data,


        error


    } =


        await clienteSupabase


            .from("recepciones")


            .select("*")


            .order(


                "id",


                {


                    ascending: false


                }


            );




    if (error) {



        throw error;



    }




    return data || [];



}




async function obtenerMuestras() {



    const {


        data,


        error


    } =


        await clienteSupabase


            .from("muestras")


            .select("*")


            .order(


                "id",


                {


                    ascending: true


                }


            );




    if (error) {



        throw error;



    }




    return data || [];



}




async function obtenerCertificados() {



    const {


        data,


        error


    } =


        await clienteSupabase


            .from("certificados")


            .select("*");




    if (error) {



        throw error;



    }




    return data || [];



}




/* =========================================================


   MAPA CLIENTES


========================================================= */



function crearMapaClientes(


    clientes


) {



    const mapa =


        new Map();




    clientes.forEach(


        cliente => {



            mapa.set(


                String(


                    cliente.id


                ),


                cliente


            );



        }


    );




    return mapa;



}




/* =========================================================


   MUESTRAS DE RECEPCIÓN


========================================================= */



function obtenerMuestrasRecepcion(


    recepcionId,


    muestras


) {



    return muestras.filter(


        muestra =>


            Number(


                muestra.recepcion_id


            ) ===


            Number(


                recepcionId


            )


    );



}




/* =========================================================


   ESTADO DEL ÁREA


========================================================= */



function obtenerAreaActual(


    recepcion,


    muestras,


    certificados


) {



    const lista =


        obtenerMuestrasRecepcion(


            recepcion.id,


            muestras


        );




    if (


        lista.length === 0


    ) {



        return {



            nombre: "Recepción",



            clase: "estado-recepcion"



        };



    }




    let laboratorio =


        false;



    let reportes =


        false;




    lista.forEach(


        muestra => {



            const estado =


                String(


                    muestra.estado || ""


                )


                    .trim()


                    .toUpperCase();




            const certificado =


                certificados.find(


                    cert =>


                        Number(


                            cert.muestra_id


                        ) ===


                        Number(


                            muestra.id


                        )


                );




            if (


                certificado &&


                certificado.archivo_url


            ) {



                return;



            }




            if (


                estado === "PENDIENTE" ||


                estado === "EN PROCESO" ||


                estado === "EN ANALISIS" ||


                estado === "EN ANÁLISIS"


            ) {



                laboratorio =


                    true;



            }




            if (


                estado === "FINALIZADO" ||


                estado === "ANALISIS FINALIZADO" ||


                estado === "ANÁLISIS FINALIZADO"


            ) {



                reportes =


                    true;



            }



        }


    );




    if (laboratorio) {



        return {



            nombre: "Laboratorio",



            clase: "estado-laboratorio"



        };



    }




    if (reportes) {



        return {



            nombre: "Reportes",



            clase: "estado-reportes"



        };



    }




    return {



        nombre: "Laboratorio",



        clase: "estado-laboratorio"



    };



}




/* =========================================================


   RECEPCIÓN ACTIVA


========================================================= */



function recepcionEstaActiva(


    recepcion,


    muestras,


    certificados


) {



    const lista =


        obtenerMuestrasRecepcion(


            recepcion.id,


            muestras


        );




    if (


        lista.length === 0


    ) {



        return true;



    }




    const terminada =


        lista.every(


            muestra => {



                const certificado =


                    certificados.find(


                        cert =>


                            Number(


                                cert.muestra_id


                            ) ===


                            Number(


                                muestra.id


                            )


                    );




                return Boolean(


                    certificado &&


                    certificado.archivo_url


                );



            }


        );




    return !terminada;



}




/* =========================================================


   CONTADORES


========================================================= */
/* =========================================================
   ANIMACIÓN DE NÚMEROS
========================================================= */

function animarNumero(
    elemento,
    valorFinal,
    duracion = 700
) {

    if (!elemento) {
        return;
    }

    const inicio = 0;

    const tiempoInicio =
        performance.now();


    function actualizar(tiempoActual) {

        const progreso =
            Math.min(
                (
                    tiempoActual -
                    tiempoInicio
                ) / duracion,
                1
            );


        const progresoSuave =
            1 -
            Math.pow(
                1 - progreso,
                3
            );


        const valorActual =
            Math.round(
                inicio +
                (
                    valorFinal -
                    inicio
                ) *
                progresoSuave
            );


        elemento.textContent =
            valorActual;


        if (progreso < 1) {

            requestAnimationFrame(
                actualizar
            );

        }

    }


    requestAnimationFrame(
        actualizar
    );

}

function animarDinero(
    elemento,
    valorFinal,
    duracion = 900
) {

    if (!elemento) {
        return;
    }

    const inicio = 0;

    const tiempoInicio =
        performance.now();


    function actualizar(tiempoActual) {

        const progreso =
            Math.min(
                (
                    tiempoActual -
                    tiempoInicio
                ) / duracion,
                1
            );


        const progresoSuave =
            1 -
            Math.pow(
                1 - progreso,
                3
            );


        const valorActual =
            inicio +
            (
                valorFinal -
                inicio
            ) *
            progresoSuave;


        elemento.textContent =
            "S/ " +
            valorActual.toFixed(2);


        if (progreso < 1) {

            requestAnimationFrame(
                actualizar
            );

        }

    }


    requestAnimationFrame(
        actualizar
    );

}


function actualizarContador(
    id,
    cantidad
) {

    const elemento =
        document.getElementById(id);

    if (!elemento) {
        return;
    }

    animarNumero(
        elemento,
        Number(cantidad || 0)
    );

}




function actualizarBadge(


    id,


    cantidad


) {



    const elemento =


        document.getElementById(id);




    if (!elemento) {



        return;



    }




    const numero =


        Number(


            cantidad || 0


        );




    elemento.textContent =


        numero;




    elemento.classList.toggle(


        "oculto",


        numero <= 0


    );



}




/* =========================================================


   DASHBOARD


========================================================= */



async function cargarDashboard() {



    const tabla =


        document.getElementById(


            "tablaDashboard"


        );




    if (!tabla) {



        return;



    }




    try {



        tabla.innerHTML = `


            <tr>


                <td


                    colspan="6"


                    class="tabla-vacia"


                >


                    Cargando...


                </td>


            </tr>


        `;




        const [


            clientes,


            recepciones,


            muestras,


            certificados


        ] =


            await Promise.all([



                obtenerClientes(),



                obtenerRecepciones(),



                obtenerMuestras(),



                obtenerCertificados()



            ]);




        const mapaClientes =


            crearMapaClientes(


                clientes


            );




        const activas =


            recepciones.filter(


                recepcion =>


                    recepcionEstaActiva(


                        recepcion,


                        muestras,


                        certificados


                    )


            );




        const laboratorio =
    muestras.filter(
        muestra => {

            const estado =
                String(
                    muestra.estado || ""
                )
                    .trim()
                    .toUpperCase();

            const area =
                String(
                    muestra.area_actual || ""
                )
                    .trim()
                    .toUpperCase();

            return (
                area === "LABORATORIO" &&
                (
                    estado === "MUESTRA RECIBIDA" ||
                    estado === "PENDIENTE" ||
                    estado === "EN PROCESO" ||
                    estado === "EN ANALISIS" ||
                    estado === "EN ANÁLISIS"
                )
            );

        }
    );




        const reportes =


            muestras.filter(


                muestra => {



                    const estado =


                        String(


                            muestra.estado || ""


                        )


                            .trim()


                            .toUpperCase();




                    const certificado =


                        certificados.find(


                            cert =>


                                Number(


                                    cert.muestra_id


                                ) ===


                                Number(


                                    muestra.id


                                )


                        );




                    return (


                        (


                            estado === "FINALIZADO" ||


                            estado === "ANALISIS FINALIZADO" ||


                            estado === "ANÁLISIS FINALIZADO"


                        )


                        &&


                        !certificado?.archivo_url


                    );



                }


            );




        const pagos =


            recepciones.filter(


                recepcion => {



                    const estado =


                        obtenerEstadoPago(


                            recepcion


                        );




                    return (


                        estado === "PENDIENTE" ||


                        estado === "PENDIENTE DE PAGO"


                    );



                }


            );




        actualizarContador(


            "dashRecepciones",


            activas.length


        );




        actualizarContador(


            "dashLaboratorio",


            laboratorio.length


        );




        actualizarContador(


            "dashReportes",


            reportes.length


        );




        actualizarContador(


            "dashPagos",


            pagos.length


        );




        actualizarContador(


            "contadorPagosDashboard",


            pagos.length


        );

actualizarContador(
    "dashClientes",
    clientes.length
);


        actualizarBadge(


            "badgeRecepcion",


            activas.length


        );




        actualizarBadge(


            "badgeLaboratorio",


            laboratorio.length


        );




        actualizarBadge(


            "badgeReportes",


            reportes.length


        );




        renderizarDashboard(


            recepciones,


            mapaClientes,


            muestras,


            certificados


        );

        


    } catch (error) {



        console.error(


            "Error Dashboard:",


            error


        );




        tabla.innerHTML = `


            <tr>


                <td


                    colspan="6"


                    class="tabla-vacia"


                >


                    No se pudo cargar la información.


                </td>


            </tr>


        `;



    }



}




/* =========================================================


   TABLA DASHBOARD


========================================================= */



function renderizarDashboard(


    recepciones,


    mapaClientes,


    muestras,


    certificados


) {



    const tabla =


        document.getElementById(


            "tablaDashboard"


        );




    if (!tabla) {



        return;



    }




    const mes =


        document.getElementById(


            "filtroMesDashboard"


        )?.value || "";




    const anio =


        document.getElementById(


            "filtroAnioDashboard"


        )?.value || "";




    let datos =


        [...recepciones];




    if (


        mes ||


        anio


    ) {



        datos =


            datos.filter(


                recepcion => {



                    const fecha =


                        new Date(


                            recepcion.fecha_recepcion ||


                            recepcion.created_at


                        );




                    if (


                        Number.isNaN(


                            fecha.getTime()


                        )


                    ) {



                        return false;



                    }




                    const coincideMes =


                        !mes ||


                        (


                            fecha.getMonth() + 1


                        ) ===


                        Number(mes);




                    const coincideAnio =


                        !anio ||


                        fecha.getFullYear() ===


                        Number(anio);




                    return (


                        coincideMes &&


                        coincideAnio


                    );



                }


            );



    }
/* =========================================================
   TOTAL CLIENTES DEL PERÍODO
========================================================= */

const clientesFiltrados = new Set(
    datos
        .map(recepcion => recepcion.cliente_id)
        .filter(clienteId => clienteId !== null && clienteId !== undefined)
);

const elementoClientes =
    document.getElementById(
        "dashClientes"
    );

if (elementoClientes) {

    animarNumero(
    elementoClientes,
    clientesFiltrados.size
);

}

const totalIngresos = datos.reduce(
    (acumulado, recepcion) => {

        const monto = Number(
            recepcion.total || 0
        );

        return acumulado + (
            Number.isNaN(monto)
                ? 0
                : monto
        );
    },
    0
);


const elementoIngresos =
    document.getElementById(
        "dashIngresos"
    );


if (elementoIngresos) {

    animarDinero(
        elementoIngresos,
        totalIngresos
    );

}

    if (


        datos.length === 0


    ) {



        tabla.innerHTML = `


            <tr>


                <td


                    colspan="6"


                    class="tabla-vacia"


                >


                    No existen registros.


                </td>


            </tr>


        `;



        return;



    }




    tabla.innerHTML =


        datos.map(


            recepcion => {



                const cliente =


                    mapaClientes.get(


                        String(


                            recepcion.cliente_id


                        )


                    );




                const area =


                    obtenerAreaActual(


                        recepcion,


                        muestras,


                        certificados


                    );




                const pago =


                    obtenerEstadoPago(


                        recepcion


                    );




                const clasePago =


                    pago === "PAGADO"


                        ? "pagado"


                        : "pendiente";




                return `



                    <tr>



                        <td>


                            <strong>


                                ${escaparHTML(


                                    recepcion.numero_recepcion ||


                                    recepcion.id


                                )}


                            </strong>


                        </td>



                        <td>


                            ${escaparHTML(


                                obtenerNombreCliente(


                                    cliente


                                )


                            )}


                        </td>



                        <td>


                            ${formatoFecha(


                                recepcion.fecha_recepcion ||


                                recepcion.created_at


                            )}


                        </td>



                        <td>



                            <span


                                class="


                                    estado-pago-dashboard


                                    ${clasePago}


                                "


                            >


                                ${escaparHTML(


                                    pago


                                )}


                            </span>



                        </td>



                        <td>



                            <span


                                class="


                                    area-dashboard


                                    ${area.clase}


                                "


                            >


                                ${escaparHTML(


                                    area.nombre


                                )}


                            </span>



                        </td>



                        <td>



                            <button


                                class="boton-tabla"


                                data-recepcion-id="${recepcion.id}"


                            >


                                Ver


                            </button>



                        </td>



                    </tr>



                `;



            }


        ).join("");



}




/* =========================================================


   FILTROS DASHBOARD


========================================================= */



async function actualizarTablaDashboard() {



    const [


        clientes,


        recepciones,


        muestras,


        certificados


    ] =


        await Promise.all([



            obtenerClientes(),



            obtenerRecepciones(),



            obtenerMuestras(),



            obtenerCertificados()



        ]);




    renderizarDashboard(


        recepciones,


        crearMapaClientes(


            clientes


        ),


        muestras,


        certificados


    );



}

const modalConfirmacionPago =
    document.getElementById(
        "modalConfirmacionPago"
    );

const textoConfirmacionPago =
    document.getElementById(
        "textoConfirmacionPago"
    );

const btnCancelarConfirmacionPago =
    document.getElementById(
        "btnCancelarConfirmacionPago"
    );

const btnAceptarConfirmacionPago =
    document.getElementById(
        "btnAceptarConfirmacionPago"
    );
    function abrirConfirmacionPago(
    mensaje = "¿Confirmar que esta recepción ya fue pagada?"
) {

    return new Promise(
        resolve => {

            if (
                !modalConfirmacionPago ||
                !textoConfirmacionPago ||
                !btnCancelarConfirmacionPago ||
                !btnAceptarConfirmacionPago
            ) {
                resolve(
                    confirm(mensaje)
                );
                return;
            }

            textoConfirmacionPago.textContent =
                mensaje;

            modalConfirmacionPago.classList.remove(
                "oculto"
            );

            const cerrarModal = (
                respuesta
            ) => {

                modalConfirmacionPago.classList.add(
                    "oculto"
                );

                btnAceptarConfirmacionPago.removeEventListener(
                    "click",
                    aceptar
                );

                btnCancelarConfirmacionPago.removeEventListener(
                    "click",
                    cancelar
                );

                modalConfirmacionPago.removeEventListener(
                    "click",
                    clickFondo
                );

                document.removeEventListener(
                    "keydown",
                    teclaEscape
                );

                resolve(respuesta);

            };

            const aceptar = () =>
                cerrarModal(true);

            const cancelar = () =>
                cerrarModal(false);

            const clickFondo = (
                evento
            ) => {

                if (
                    evento.target ===
                    modalConfirmacionPago
                ) {
                    cerrarModal(false);
                }

            };

            const teclaEscape = (
                evento
            ) => {

                if (
                    evento.key === "Escape"
                ) {
                    cerrarModal(false);
                }

            };

            btnAceptarConfirmacionPago.addEventListener(
                "click",
                aceptar
            );

            btnCancelarConfirmacionPago.addEventListener(
                "click",
                cancelar
            );

            modalConfirmacionPago.addEventListener(
                "click",
                clickFondo
            );

            document.addEventListener(
                "keydown",
                teclaEscape
            );

        }
    );

}


document


    .getElementById(


        "buscarDashboard"


    )


    ?.addEventListener(


        "click",


        actualizarTablaDashboard


    );




document


    .getElementById(


        "filtroMesDashboard"


    )


    ?.addEventListener(


        "change",


        actualizarTablaDashboard


    );




document


    .getElementById(


        "filtroAnioDashboard"


    )


    ?.addEventListener(


        "change",


        actualizarTablaDashboard


    );




/* =========================================================


   BOTÓN PAGOS DASHBOARD


========================================================= */



botonPagosDashboard?.addEventListener(


    "click",


    () => {



        cambiarSeccion(


            "pagos"


        );



    }


);




/* =========================================================


   BOTÓN CONFIGURACIÓN


========================================================= */



botonConfiguracion?.addEventListener(


    "click",


    () => {



        cambiarSeccion(


            "configuracion"


        );



    }


);




/* =========================================================


   BOTONES VOLVER


========================================================= */



document


    .getElementById(


        "volverDashboardPagos"


    )


    ?.addEventListener(


        "click",


        () => {



            cambiarSeccion(


                "dashboard"


            );



        }


    );




document


    .getElementById(


        "volverDashboardConfiguracion"


    )


    ?.addEventListener(


        "click",


        () => {



            cambiarSeccion(


                "dashboard"


            );



        }


    );




/* =========================================================


   PAGOS PENDIENTES


========================================================= */



async function cargarPagos(


    termino = ""


) {



    const tabla =


        document.getElementById(


            "tablaPagos"


        );




    if (!tabla) {



        return;



    }




    try {



        tabla.innerHTML = `


            <tr>


                <td


                    colspan="6"


                    class="tabla-vacia"


                >


                    Cargando...


                </td>


            </tr>


        `;




        const [


            clientes,


            recepciones,


            muestras


        ] =


            await Promise.all([



                obtenerClientes(),



                obtenerRecepciones(),



                obtenerMuestras()



            ]);




        const mapa =


            crearMapaClientes(


                clientes


            );




        let datos =


            recepciones.filter(


                recepcion => {



                    const estado =


                        obtenerEstadoPago(


                            recepcion


                        );




                    return (


                        estado === "PENDIENTE" ||


                        estado === "PENDIENTE DE PAGO"


                    );



                }


            );




        if (termino.trim()) {



            const busqueda =


                termino


                    .trim()


                    .toLowerCase();




            datos =


                datos.filter(


                    recepcion => {



                        const cliente =


                            mapa.get(


                                String(


                                    recepcion.cliente_id


                                )


                            );




                        const listaMuestras =


                            obtenerMuestrasRecepcion(


                                recepcion.id,


                                muestras


                            );




                        const texto =


                            [



                                recepcion.numero_recepcion,



                                recepcion.id,



                                obtenerNombreCliente(


                                    cliente


                                ),



                                cliente?.celular,



                                cliente?.telefono,



                                ...listaMuestras.map(


                                    muestra =>


                                        muestra.codigo_muestra


                                )



                            ]


                                .filter(Boolean)


                                .join(" ")


                                .toLowerCase();




                        return texto.includes(


                            busqueda


                        );



                    }


                );



        }




        if (


            datos.length === 0


        ) {



            tabla.innerHTML = `


                <tr>


                    <td


                        colspan="6"


                        class="tabla-vacia"


                    >


                        No hay pagos pendientes.


                    </td>


                </tr>


            `;



            return;



        }




        tabla.innerHTML =


            datos.map(


                recepcion => {



                    const cliente =


                        mapa.get(


                            String(


                                recepcion.cliente_id


                            )


                        );




                    const listaMuestras =


                        obtenerMuestrasRecepcion(


                            recepcion.id,


                            muestras


                        );




                    const codigoMuestra =


                        listaMuestras[0]


                            ?.codigo_muestra ||


                        "-";




                    return `



                        <tr>



                            <td>


                                <strong>


                                    ${escaparHTML(


                                        recepcion.numero_recepcion ||


                                        recepcion.id


                                    )}


                                </strong>


                            </td>



                            <td>


                                ${escaparHTML(


                                    obtenerNombreCliente(


                                        cliente


                                    )


                                )}


                            </td>



                            <td>


                                ${escaparHTML(


                                    cliente?.celular ||


                                    cliente?.telefono ||


                                    "-"


                                )}


                            </td>



                            <td>


                                ${escaparHTML(


                                    codigoMuestra


                                )}


                            </td>



                            <td>



                                <span


                                    class="


                                        estado-pago-dashboard


                                        pendiente


                                    "


                                >


                                    PENDIENTE


                                </span>



                            </td>



                            <td>



                                <button


                                    class="boton-tabla boton-marcar-pagado"


                                    data-pago-id="${recepcion.id}"


                                >


                                    Marcar pagado


                                </button>



                            </td>



                        </tr>



                    `;



                }


            ).join("");



    } catch (error) {



        console.error(


            "Error pagos:",


            error


        );



    }



}




/* =========================================================


   BUSCAR PAGOS


========================================================= */



document


    .getElementById(


        "btnBuscarPago"


    )


    ?.addEventListener(


        "click",


        () => {



            cargarPagos(


                document.getElementById(


                    "buscarPago"


                )?.value || ""


            );



        }


    );




document


    .getElementById(


        "buscarPago"


    )


    ?.addEventListener(


        "keydown",


        evento => {



            if (


                evento.key ===


                "Enter"


            ) {



                cargarPagos(


                    evento.target.value


                );



            }



        }


    );




/* ======================================================
   MARCAR PAGADO
====================================================== */

document.addEventListener("click", async function (evento) {

    const boton = evento.target.closest(".boton-marcar-pagado");

    // Si el clic no fue en "Marcar pagado", no hacemos nada
    if (!boton) {
        return;
    }

    // Obtener el ID directamente desde el atributo HTML
    const id = boton.getAttribute("data-pago-id");

    console.log("BOTÓN MARCAR PAGADO PRESIONADO");
    console.log("ID DE RECEPCIÓN:", id);

    // Verificar ID
    if (!id) {
        alert("No se pudo identificar la recepción.");
        return;
    }

    // Confirmación
    const confirmado =
    await abrirConfirmacionPago(
        "¿Confirmar que esta recepción ya fue pagada?"
    );

if (!confirmado) {
    return;
}

    try {

        // Desactivar botón
        boton.disabled = true;
        boton.textContent = "Actualizando...";

        console.log("Actualizando recepción:", id);

        // Actualizar Supabase
        const { data, error } = await clienteSupabase
            .from("recepciones")
            .update({
                estado_pago: "CANCELADO"
            })
            .eq("id", Number(id))
            .select();

        // Comprobar error
        if (error) {

            console.error("ERROR SUPABASE:", error);

            throw error;
        }

        console.log("PAGO ACTUALIZADO:", data);

        // Mostrar mensaje
        alert("El pago fue registrado correctamente.");

        // Recargar tabla de pagos
        await cargarPagos(
            document.getElementById("buscarPago")?.value || ""
        );

        // Actualizar dashboard
        await cargarDashboard();

    } catch (error) {

        console.error("ERROR AL MARCAR PAGO:", error);

        alert(
            "No se pudo actualizar el pago.\n\n" +
            "Error: " + (error.message || "Error desconocido")
        );

    } finally {

        // Reactivar botón
        boton.disabled = false;
        boton.textContent = "Marcar pagado";

    }

});




/* =========================================================


   RECEPCIÓN


========================================================= */



let tiposAnalisisRecepcion = [];


let contadorMuestrasFormulario = 0;



function fechaHoyInput() {



    const fecha = new Date();



    const year = fecha.getFullYear();


    const month = String(fecha.getMonth() + 1).padStart(2, "0");


    const day = String(fecha.getDate()).padStart(2, "0");



    return `${year}-${month}-${day}`;



}



function horaActual() {



    const fecha = new Date();



    const horas = String(fecha.getHours()).padStart(2, "0");


    const minutos = String(fecha.getMinutes()).padStart(2, "0");


    const segundos = String(fecha.getSeconds()).padStart(2, "0");



    return `${horas}:${minutos}:${segundos}`;



}



async function obtenerSiguienteNumeroRecepcion() {



    const { data, error } =


        await clienteSupabase


            .from("recepciones")


            .select("id, numero_recepcion")


            .order("id", { ascending: false })


            .limit(1)


            .maybeSingle();



    if (error) {


        throw error;


    }



    const ultimoId = Number(data?.id || 0);


    const siguiente = ultimoId + 1;



    return `R-${String(siguiente).padStart(5, "0")}`;



}



async function cargarTiposAnalisisRecepcion() {



    const { data, error } =


        await clienteSupabase


            .from("tipos_analisis")


            .select("id, nombre, descripcion, precio_referencial, activo")


            .eq("activo", true)


            .order("nombre", { ascending: true });



    if (error) {


        throw error;


    }



    tiposAnalisisRecepcion = data || [];



    return tiposAnalisisRecepcion;



}



function opcionesTiposAnalisis() {



    return `


        <option value="">Seleccionar análisis</option>


        ${tiposAnalisisRecepcion.map(tipo => `


            <option


                value="${escaparHTML(tipo.id)}"


                data-precio="${Number(tipo.precio_referencial || 0).toFixed(2)}"


            >


                ${escaparHTML(tipo.nombre)}


            </option>


        `).join("")}


    `;



}



function crearMuestraFormulario() {



    contadorMuestrasFormulario += 1;



    const numero = contadorMuestrasFormulario;



    const contenedor =


        document.getElementById("listaMuestrasRecepcion");



    if (!contenedor) {


        return;


    }



    const muestra = document.createElement("div");



    muestra.className = "muestra-formulario";


    muestra.dataset.muestraNumero = numero;



    muestra.innerHTML = `



        <div class="muestra-formulario-cabecera">



            <div>


                <span>MUESTRA ${String(numero).padStart(2, "0")}</span>


                <h3>Información de la muestra</h3>


            </div>



            <button


                type="button"


                class="boton-eliminar-muestra"


                title="Eliminar muestra"


            >


                Eliminar


            </button>



        </div>



        <div class="formulario-grid">



            <div class="campo-panel">


                <label>Código de muestra *</label>


                <input


                    type="text"


                    class="input-codigo-muestra"


                    maxlength="100"


                    required


                    placeholder="Código proporcionado por el cliente"


                >


                <small class="campo-ayuda">


                    Este código identifica la muestra y será utilizado por el cliente para el seguimiento.


                </small>


            </div>



            <div class="campo-panel campo-grande">


                <label>Descripción</label>


                <input


                    type="text"


                    class="input-descripcion-muestra"


                    maxlength="250"


                    placeholder="Descripción de la muestra"


                >


            </div>



        </div>



        <div class="analisis-formulario">



            <div class="analisis-formulario-cabecera">



                <div>


                    <strong>Análisis solicitados</strong>


                    <small>Puede agregar varios análisis para esta muestra.</small>


                </div>



                <button


                    type="button"


                    class="boton-secundario boton-agregar-analisis"


                >


                    + Agregar análisis


                </button>



            </div>



            <div class="lista-analisis"></div>



            <div class="subtotal-muestra">


                <span>Total de muestra</span>


                <strong class="subtotal-muestra-valor">S/ 0.00</strong>


            </div>



        </div>



    `;



    contenedor.appendChild(muestra);



    agregarAnalisisFormulario(muestra);



    actualizarNumeracionMuestras();


    actualizarTotalRecepcion();



}



function agregarAnalisisFormulario(muestra) {



    const lista =


        muestra.querySelector(".lista-analisis");



    if (!lista) {


        return;


    }



    const fila = document.createElement("div");



    fila.className = "analisis-fila";



    fila.innerHTML = `



        <div class="campo-panel analisis-select-contenedor">


            <label>Tipo de análisis *</label>


            <select class="select-tipo-analisis" required>


                ${opcionesTiposAnalisis()}


            </select>


        </div>



        <div class="campo-panel analisis-precio-contenedor">


            <label>Precio S/ *</label>


            <input


                type="number"


                class="input-precio-analisis"


                value="0.00"


                step="0.01"


                min="0"


                readonly


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



    lista.appendChild(fila);



    const select =


        fila.querySelector(".select-tipo-analisis");



    select?.addEventListener("change", () => {



        const opcion =


            select.options[select.selectedIndex];



        const precio =


            Number(opcion?.dataset.precio || 0);



        const inputPrecio =


            fila.querySelector(".input-precio-analisis");



        if (inputPrecio) {


            inputPrecio.value = precio.toFixed(2);


        }



        actualizarSubtotalMuestra(muestra);


        actualizarTotalRecepcion();



    });



    fila


        .querySelector(".boton-eliminar-analisis")


        ?.addEventListener("click", () => {



            const filas =


                lista.querySelectorAll(".analisis-fila");



            if (filas.length <= 1) {


                alert("Cada muestra debe tener al menos un análisis.");


                return;


            }



            fila.remove();



            actualizarSubtotalMuestra(muestra);


            actualizarTotalRecepcion();



        });



}



function actualizarSubtotalMuestra(muestra) {



    let total = 0;



    muestra


        .querySelectorAll(".input-precio-analisis")


        .forEach(input => {


            total += Number(input.value || 0);


        });



    const elemento =


        muestra.querySelector(".subtotal-muestra-valor");



    if (elemento) {


        elemento.textContent = formatoDinero(total);


    }



    return total;



}



function actualizarTotalRecepcion() {



    let total = 0;



    document


        .querySelectorAll(".muestra-formulario")


        .forEach(muestra => {


            total += actualizarSubtotalMuestra(muestra);


        });



    const elemento =


        document.getElementById("totalRecepcion");



    if (elemento) {


        elemento.textContent = formatoDinero(total);


    }



    return total;



}



function actualizarNumeracionMuestras() {



    document


        .querySelectorAll(".muestra-formulario")


        .forEach((muestra, indice) => {



            const numero = indice + 1;



            muestra.dataset.muestraNumero = numero;



            const etiqueta =


                muestra.querySelector(".muestra-formulario-cabecera span");



            if (etiqueta) {


                etiqueta.textContent =


                    `MUESTRA ${String(numero).padStart(2, "0")}`;


            }



        });



}



function limpiarFormularioRecepcion() {



    const formulario =


        document.getElementById("formRecepcion");



    formulario?.reset();



    const fecha =


        document.getElementById("fechaRecepcion");



    if (fecha) {


        fecha.value = fechaHoyInput();


    }



    const estadoPago =


        document.getElementById("estadoPago");



    if (estadoPago) {


        estadoPago.value = "PENDIENTE";


    }



    contadorMuestrasFormulario = 0;



    const lista =


        document.getElementById("listaMuestrasRecepcion");



    if (lista) {


        lista.innerHTML = "";


    }



}



async function prepararNuevaRecepcion() {



    try {



        await cargarTiposAnalisisRecepcion();



        limpiarFormularioRecepcion();



        const numero =


            await obtenerSiguienteNumeroRecepcion();



        const numeroInput =


            document.getElementById("numeroRecepcion");



        if (numeroInput) {


            numeroInput.value = numero;


        }



        crearMuestraFormulario();



        document


            .getElementById("formularioRecepcion")


            ?.classList.remove("oculto");



        document


            .getElementById("formularioRecepcion")


            ?.scrollIntoView({ behavior: "smooth", block: "start" });



    } catch (error) {



        console.error("Error preparando recepción:", error);



        alert(


            "No se pudo preparar la recepción. Verifica que existan análisis activos en Configuración."


        );



    }



}



function recopilarMuestrasFormulario() {



    const muestras = [];



    document


        .querySelectorAll(".muestra-formulario")


        .forEach((muestraElement, indice) => {



            const codigo =


                muestraElement


                    .querySelector(".input-codigo-muestra")


                    ?.value


                    .trim();



            const descripcion =


                muestraElement


                    .querySelector(".input-descripcion-muestra")


                    ?.value


                    .trim() || "";



            if (!codigo) {


                throw new Error(


                    `Debes ingresar el código de la muestra ${indice + 1}.`


                );


            }



            const analisis = [];



            muestraElement


                .querySelectorAll(".analisis-fila")


                .forEach((fila, indexAnalisis) => {



                    const tipoId =


                        fila.querySelector(".select-tipo-analisis")?.value;



                    const precio =


                        Number(


                            fila.querySelector(".input-precio-analisis")?.value || 0


                        );



                    if (!tipoId) {


                        throw new Error(


                            `Selecciona el análisis ${indexAnalisis + 1} de la muestra ${indice + 1}.`


                        );


                    }



                    analisis.push({


                        tipo_analisis_id: Number(tipoId),


                        precio


                    });



                });



            if (analisis.length === 0) {


                throw new Error(


                    `La muestra ${indice + 1} debe tener al menos un análisis.`


                );


            }



            const ids = analisis.map(item => item.tipo_analisis_id);


            const idsUnicos = new Set(ids);



            if (ids.length !== idsUnicos.size) {


                throw new Error(


                    `No puedes repetir el mismo análisis dentro de la muestra ${indice + 1}.`


                );


            }



            muestras.push({


                codigo_muestra: codigo,


                descripcion,


                analisis


            });



        });



    if (muestras.length === 0) {


        throw new Error("La recepción debe tener al menos una muestra.");


    }



    const codigos = muestras.map(item => item.codigo_muestra.toUpperCase());



    if (new Set(codigos).size !== codigos.length) {


        throw new Error("No puedes repetir el código de muestra dentro de la misma recepción.");


    }



    return muestras;



}



async function obtenerOCrearCliente() {



    const nombre =


        document.getElementById("clienteNombre")?.value.trim();



    const ruc =


        document.getElementById("clienteRuc")?.value.trim();



    const telefono =


        document.getElementById("clienteTelefono")?.value.trim();



    const correo =


        document.getElementById("clienteCorreo")?.value.trim();



    const direccion =


        document.getElementById("clienteDireccion")?.value.trim();



    if (!nombre) {


        throw new Error("Debes ingresar el cliente o razón social.");


    }



    let clienteExistente = null;



    if (ruc) {



        const resultado =


            await clienteSupabase


                .from("clientes")


                .select("*")


                .eq("ruc", ruc)


                .limit(1)


                .maybeSingle();



        if (resultado.error) {


            throw resultado.error;


        }



        clienteExistente = resultado.data;



    }



    const datos = {


        razon_social: nombre,


        ruc: ruc || null,


        direccion: direccion || null,


        correo: correo || null,


        telefono: telefono || null


    };



    if (clienteExistente) {



        const { data, error } =


            await clienteSupabase


                .from("clientes")


                .update(datos)


                .eq("id", clienteExistente.id)


                .select()


                .single();



        if (error) {


            throw error;


        }



        return data;



    }



    const { data, error } =


        await clienteSupabase


            .from("clientes")


            .insert(datos)


            .select()


            .single();



    if (error) {


        throw error;


    }



    return data;



}



async function guardarRecepcionCompleta() {



    const boton =


        document.getElementById("btnRegistrarImprimir");



    const muestrasFormulario =


        recopilarMuestrasFormulario();



    const cliente =


        await obtenerOCrearCliente();



    const numeroRecepcion =


        document.getElementById("numeroRecepcion")?.value.trim() ||


        await obtenerSiguienteNumeroRecepcion();



    const fechaRecepcion =


        document.getElementById("fechaRecepcion")?.value ||


        fechaHoyInput();



    const estadoPagoFormulario =


        document.getElementById("estadoPago")?.value || "PENDIENTE";



    // La interfaz muestra "Pagado", pero Supabase acepta CANCELADO.


    const estadoPago =


        estadoPagoFormulario === "PAGADO"


            ? "CANCELADO"


            : "PENDIENTE";



    const observaciones =


        document.getElementById("observacionesRecepcion")?.value.trim() || null;



    const total =


        muestrasFormulario.reduce(


            (acumulado, muestra) =>


                acumulado +


                muestra.analisis.reduce(


                    (subtotal, analisis) =>


                        subtotal + Number(analisis.precio || 0),


                    0


                ),


            0


        );



    let recepcionCreada = null;


    const muestrasCreadas = [];


    const analisisCreados = [];



    try {



        if (boton) {


            boton.disabled = true;


            boton.textContent = "Guardando...";


        }



        const { data: recepcion, error: errorRecepcion } =


            await clienteSupabase


                .from("recepciones")


                .insert({


                    numero_recepcion: numeroRecepcion,


                    cliente_id: cliente.id,


                    fecha_recepcion: fechaRecepcion,


                    hora_recepcion: horaActual(),


                    estado_pago: estadoPago,


                    total,


                    observaciones


                })


                .select()


                .single();



        if (errorRecepcion) {


            throw errorRecepcion;


        }



        recepcionCreada = recepcion;



        for (const muestraFormulario of muestrasFormulario) {



            const { data: muestra, error: errorMuestra } =


                await clienteSupabase


                   .from("muestras")
.insert({
    recepcion_id: recepcion.id,
    codigo_muestra: muestraFormulario.codigo_muestra,
    descripcion: muestraFormulario.descripcion || null,
    estado: "MUESTRA RECIBIDA",
    area_actual: "LABORATORIO"
})


                    .select()


                    .single();



            if (errorMuestra) {


                throw errorMuestra;


            }



            muestrasCreadas.push(muestra);



            const filasAnalisis =


                muestraFormulario.analisis.map(analisis => ({


                    muestra_id: muestra.id,


                    tipo_analisis_id: analisis.tipo_analisis_id,


                    precio: Number(analisis.precio || 0),


                    estado: "PENDIENTE"


                }));



            const { data: analisisCreadosLote, error: errorAnalisis } =


                await clienteSupabase


                    .from("analisis_solicitados")


                    .insert(filasAnalisis)


                    .select();



            if (errorAnalisis) {


                throw errorAnalisis;


            }



            analisisCreados.push(...(analisisCreadosLote || []));



        }



        return {


            recepcion: recepcionCreada,


            muestras: muestrasCreadas,


            analisis: analisisCreados,


            cliente,


            total


        };



    } catch (error) {



        console.error("Error guardando recepción:", error);



        try {



            if (analisisCreados.length) {


                await clienteSupabase


                    .from("analisis_solicitados")


                    .delete()


                    .in("id", analisisCreados.map(item => item.id));


            }



            if (muestrasCreadas.length) {


                await clienteSupabase


                    .from("muestras")


                    .delete()


                    .in("id", muestrasCreadas.map(item => item.id));


            }



            if (recepcionCreada?.id) {


                await clienteSupabase


                    .from("recepciones")


                    .delete()


                    .eq("id", recepcionCreada.id);


            }



        } catch (rollbackError) {


            console.error("Error revirtiendo recepción:", rollbackError);


        }



        throw error;



    } finally {



        if (boton) {


            boton.disabled = false;


            boton.textContent = "Registrar e imprimir";


        }



    }



}



function escaparAtributo(valor) {


    return escaparHTML(valor).replaceAll("`", "&#96;");


}



function abrirBoletaParaImpresion(datos) {



    const ventana = window.open("", "_blank", "width=900,height=900");



    if (!ventana) {


        alert("El navegador bloqueó la ventana de impresión. Permite ventanas emergentes para esta página.");


        return;


    }



    const { recepcion, muestras, cliente, total } = datos;



    const filasMuestras = muestras.map((muestra, indice) => `


        <div class="muestra">


            <div class="muestra-titulo">MUESTRA ${String(indice + 1).padStart(2, "0")}</div>


            <div><strong>Código de muestra:</strong> ${escaparHTML(muestra.codigo_muestra)}</div>


            ${muestra.descripcion ? `<div><strong>Descripción:</strong> ${escaparHTML(muestra.descripcion)}</div>` : ""}


            <table>


                <thead>


                    <tr>


                        <th>Análisis</th>


                        <th>Precio unitario</th>


                        <th>Total</th>


                    </tr>


                </thead>


                <tbody>


                    ${muestra.analisis.map(analisis => `


                        <tr>


                            <td>${escaparHTML(analisis.nombre)}</td>


                            <td>${formatoDinero(analisis.precio)}</td>


                            <td>${formatoDinero(analisis.precio)}</td>


                        </tr>


                    `).join("")}


                </tbody>


            </table>


        </div>


    `).join("");

const urlPublicaSeguimiento =
    new URL(
        "../index.html",
        window.location.href
    ).href;

const urlSeguimiento =
    `${urlPublicaSeguimiento}?recepcion=${encodeURIComponent(
        recepcion.numero_recepcion
    )}#seguimiento`;

const urlQrSeguimiento =
    `https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(
        urlSeguimiento
    )}`;

    ventana.document.write(`


        <!DOCTYPE html>


        <html lang="es">


        <head>


            <meta charset="UTF-8">


            <title>Recepción ${escaparHTML(recepcion.numero_recepcion)}</title>


            <style>

            


                @page { size: A4; margin: 12mm; }


                * { box-sizing: border-box; }


                body { font-family: Arial, Helvetica, sans-serif; color: #111; margin: 0; font-size: 12px; }


              .cabecera {
    border: 2px solid #111;
    padding: 8px 12px;
    margin-bottom: 12px;
}

                .cabecera-superior {
    display: grid;
    grid-template-columns: 150px 1fr 120px;
    align-items: center;
    gap: 10px;
}
.bloque-qr-seguimiento {
    margin-top: 12px;
    padding: 10px 12px;

    border: 1px solid #bbb;
    background: #fafafa;

    display: flex;
    align-items: center;
    gap: 12px;

    page-break-inside: avoid;
}

.qr-seguimiento {
    width: 80px;
    height: 80px;
    object-fit: contain;
    flex-shrink: 0;
}

.qr-texto {
    font-size: 10px;
    line-height: 1.5;
    color: #222;
}

.qr-texto strong {
    font-size: 11px;
    font-weight: 900;
}
.logo-boleta {
    width: 145px;
    height: 72px;
    object-fit: contain;
}

.cabecera-texto {
    text-align: center;
}

.cabecera-texto h1 {
    margin: 0 0 5px;
    font-size: 20px;
    font-weight: 800;
}

.cabecera-texto {
    text-align: center;
}

.titulo-documento {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 5px;
}

.linea-titulo {
    width: 28px;
    height: 2px;
    background: #111;
}

.titulo-principal {
    font-size: 18px;
    font-weight: 900;
    letter-spacing: 1.3px;
    text-align: center;
}

.subtitulo-documento {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 1.8px;
    color: #555;
}
.numero {
    text-align: right;
    font-weight: 700;
    margin-top: 0;
    align-self: center;
}


                h1 { margin: 0 0 5px; text-align: center; font-size: 20px; }


                .numero { text-align: right; font-weight: 700; margin-top: 8px; }


                .datos { display: grid; grid-template-columns: 1fr 1fr; gap: 7px 20px; border: 1px solid #222; padding: 10px; margin-bottom: 12px; }


                .datos div { padding: 2px 0; }


                .muestra { border: 1px solid #222; margin-bottom: 10px; padding: 8px; page-break-inside: avoid; }


                .muestra-titulo { font-weight: 800; margin-bottom: 6px; }


                table { width: 100%; border-collapse: collapse; margin-top: 8px; }


                th, td { border: 1px solid #555; padding: 6px; text-align: left; }


                th { background: #eee; }


                .total { text-align: right; font-size: 18px; font-weight: 800; margin-top: 12px; }


                .firmas { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 55px; text-align: center; }


                .firma { border-top: 1px solid #222; padding-top: 6px; }


                .estado { margin-top: 12px; font-weight: 700; }


                @media print { .no-print { display: none; } }


            </style>


        </head>


        <body>


            <div class="cabecera">

    <div class="cabecera-superior">

        <img
            src="../recursos/logo/logo-cjv.png"
            class="logo-boleta"
            alt="Laboratorio CJV"
        >

      <div class="cabecera-texto">

    <div class="titulo-principal">
        RECEPCIÓN DE MUESTRAS
    </div>

</div>

        <div class="numero">
            N.º ${escaparHTML(
                recepcion.numero_recepcion
            )}
        </div>

    </div>

</div>



            <div class="datos">


                <div><strong>CLIENTE:</strong> ${escaparHTML(cliente.razon_social || "")}</div>


                <div><strong>RUC:</strong> ${escaparHTML(cliente.ruc || "-")}</div>


                <div><strong>TELÉFONO:</strong> ${escaparHTML(cliente.telefono || "-")}</div>


                <div><strong>FECHA:</strong> ${escaparHTML(formatoFecha(recepcion.fecha_recepcion))}</div>


                <div><strong>CORREO:</strong> ${escaparHTML(cliente.correo || "-")}</div>


                <div><strong>ESTADO DE PAGO:</strong> ${escaparHTML(recepcion.estado_pago || "PENDIENTE")}</div>


            </div>



            ${filasMuestras}



            <div class="estado">ESTADO DE LA MUESTRA: PENDIENTE</div>


            <div class="total">TOTAL RECEPCIÓN: ${formatoDinero(total)}</div>
            

<div class="bloque-qr-seguimiento">

    <img
        src="${urlQrSeguimiento}"
        alt="QR de seguimiento"
        class="qr-seguimiento"
    >

    <div class="qr-texto">
        Escanee el código QR para consultar el estado de su muestra y descargar su certificado.
        También puede realizar la consulta en nuestra página web con su N.º de recepción:
        <strong>${escaparHTML(recepcion.numero_recepcion)}</strong>.
    </div>

</div>

</div>



            ${recepcion.observaciones ? `<div style="margin-top:12px;"><strong>NOTAS:</strong> ${escaparHTML(recepcion.observaciones)}</div>` : ""}



            <div class="firmas">


                <div class="firma">Firma del cliente</div>


                <div class="firma">Recepción</div>


            </div>



            <script>


                window.onload = function() {


                    window.focus();


                    setTimeout(function() { window.print(); }, 250);


                };


            <\/script>


        </body>


        </html>


    `);



    ventana.document.close();



}



async function cargarRecepcion() {



    const tabla =


        document.getElementById("tablaRecepcion");



    if (!tabla) {


        return;


    }



    try {



        tabla.innerHTML = `


            <tr>


                <td colspan="7" class="tabla-vacia">Cargando...</td>


            </tr>


        `;



        const [clientes, recepciones, muestras, certificados] =


            await Promise.all([


                obtenerClientes(),


                obtenerRecepciones(),


                obtenerMuestras(),


                obtenerCertificados()


            ]);



        const mapa = crearMapaClientes(clientes);



        const activas = recepciones.filter(recepcion =>


            recepcionEstaActiva(recepcion, muestras, certificados)


        );



        if (!activas.length) {


            tabla.innerHTML = `


                <tr>


                    <td colspan="7" class="tabla-vacia">


                        No hay recepciones activas.


                    </td>


                </tr>


            `;


            return;


        }



        tabla.innerHTML = activas.map(recepcion => {



            const cliente = mapa.get(String(recepcion.cliente_id));


            const area = obtenerAreaActual(recepcion, muestras, certificados);


            const pago = obtenerEstadoPago(recepcion);



            const muestrasRecepcion = obtenerMuestrasRecepcion(


                recepcion.id,


                muestras


            );



            const estados = muestrasRecepcion.map(m =>


                String(m.estado || "PENDIENTE").toUpperCase()


            );



            let estadoGeneral = "PENDIENTE";



            if (estados.some(e => e === "EN PROCESO" || e === "EN ANALISIS" || e === "EN ANÁLISIS")) {


                estadoGeneral = "EN PROCESO";


            }



            if (estados.length && estados.every(e =>


                e === "FINALIZADO" ||


                e === "ANALISIS FINALIZADO" ||


                e === "ANÁLISIS FINALIZADO"


            )) {


                estadoGeneral = "FINALIZADO";


            }



            const claseEstado =


                estadoGeneral === "FINALIZADO"


                    ? "verde"


                    : estadoGeneral === "EN PROCESO"


                        ? "amarillo"


                        : "rojo";



            return `


                <tr>


                    <td>


                        <strong>${escaparHTML(recepcion.numero_recepcion || recepcion.id)}</strong>


                    </td>


                    <td>${escaparHTML(obtenerNombreCliente(cliente))}</td>


                    <td>${formatoFecha(recepcion.fecha_recepcion || recepcion.created_at)}</td>


                    <td>


                        <span class="estado-pago ${pago === "PAGADO" ? "pagado" : "pendiente"}">


                            ${escaparHTML(pago)}


                        </span>


                    </td>


                    <td>${escaparHTML(area.nombre)}</td>


                    <td>


                        <span class="estado-pill ${claseEstado}">


                            ${escaparHTML(estadoGeneral)}


                        </span>


                    </td>


                    <td>


                        <button


                            class="boton-tabla"


                            data-recepcion-id="${recepcion.id}"


                        >


                            Ver


                        </button>


                    </td>


                </tr>


            `;



        }).join("");



    } catch (error) {



        console.error("Error recepción:", error);



        tabla.innerHTML = `


            <tr>


                <td colspan="7" class="tabla-vacia">


                    No se pudo cargar las recepciones.


                </td>


            </tr>


        `;



    }



}



/* =========================================================


   EVENTOS DEL FORMULARIO DE RECEPCIÓN


========================================================= */



document


    .getElementById("btnNuevaRecepcion")


    ?.addEventListener("click", prepararNuevaRecepcion);




document


    .getElementById("btnAgregarMuestra")


    ?.addEventListener("click", () => {



        if (!tiposAnalisisRecepcion.length) {


            alert("Primero debes tener análisis activos en Configuración.");


            return;


        }



        crearMuestraFormulario();



    });




document.addEventListener("click", evento => {



    const botonAgregar =


        evento.target.closest(".boton-agregar-analisis");



    if (botonAgregar) {



        const muestra =


            botonAgregar.closest(".muestra-formulario");



        if (muestra) {


            agregarAnalisisFormulario(muestra);


        }



        return;


    }



    const botonEliminar =


        evento.target.closest(".boton-eliminar-muestra");



    if (botonEliminar) {



        const muestras =


            document.querySelectorAll(".muestra-formulario");



        if (muestras.length <= 1) {


            alert("La recepción debe tener al menos una muestra.");


            return;


        }



        botonEliminar


            .closest(".muestra-formulario")


            ?.remove();



        actualizarNumeracionMuestras();


        actualizarTotalRecepcion();



    }



});




document


    .getElementById("cerrarFormRecepcion")


    ?.addEventListener("click", () => {



        document


            .getElementById("formularioRecepcion")


            ?.classList.add("oculto");



    });




document


    .getElementById("cancelarRecepcion")


    ?.addEventListener("click", () => {



        document


            .getElementById("formularioRecepcion")


            ?.classList.add("oculto");



        limpiarFormularioRecepcion();



    });




document


    .getElementById("formRecepcion")


    ?.addEventListener("submit", async evento => {



        evento.preventDefault();



        try {



            const datos =


                await guardarRecepcionCompleta();



            const muestrasParaImpresion = [];



            for (const muestra of datos.muestras) {



                const { data: analisis, error } =


                    await clienteSupabase


                        .from("analisis_solicitados")


                        .select("id, tipo_analisis_id, precio, estado")


                        .eq("muestra_id", muestra.id);



                if (error) {


                    throw error;


                }



                muestrasParaImpresion.push({


                    codigo_muestra: muestra.codigo_muestra,


                    descripcion: muestra.descripcion,


                    analisis: (analisis || []).map(item => {



                        const tipo =


                            tiposAnalisisRecepcion.find(


                                t => Number(t.id) === Number(item.tipo_analisis_id)


                            );



                        return {


                            nombre: tipo?.nombre || "Análisis",


                            precio: Number(item.precio || 0)


                        };



                    })


                });



            }



            abrirBoletaParaImpresion({


                recepcion: datos.recepcion,


                cliente: datos.cliente,


                muestras: muestrasParaImpresion,


                total: datos.total


            });



            limpiarFormularioRecepcion();



            document


                .getElementById("formularioRecepcion")


                ?.classList.add("oculto");



            await cargarRecepcion();


            await cargarDashboard();



            alert("Recepción registrada correctamente.");



        } catch (error) {



            console.error("Error al registrar recepción:", error);



            alert(


                error?.message ||


                "No se pudo registrar la recepción."


            );



        }



    });



/* =========================================================


   LABORATORIO


========================================================= */



async function cargarLaboratorio() {



    const tabla =


        document.getElementById(


            "tablaLaboratorio"


        );




    if (!tabla) {



        return;



    }




    try {



        const [


            clientes,


            recepciones,


            muestras


        ] =


            await Promise.all([



                obtenerClientes(),



                obtenerRecepciones(),



                obtenerMuestras()



            ]);




        const mapa =


            crearMapaClientes(


                clientes


            );




        const pendientes =


            muestras.filter(


                muestra => {



                    const estado =


                        String(


                            muestra.estado || ""


                        )


                            .trim()


                            .toUpperCase();




                   const area = String(
    muestra.area_actual || ""
)
    .trim()
    .toUpperCase();

return (
    area === "LABORATORIO" &&
    (
        estado === "PENDIENTE" ||
        estado === "MUESTRA RECIBIDA" ||
        estado === "EN PROCESO" ||
        estado === "EN ANALISIS" ||
        estado === "EN ANÁLISIS"
    )
);



                }


            );




        if (


            pendientes.length === 0


        ) {



            tabla.innerHTML = `


                <tr>


                    <td


                        colspan="6"


                        class="tabla-vacia"


                    >


                        No hay muestras pendientes.


                    </td>


                </tr>


            `;



            return;



        }




        tabla.innerHTML =


            pendientes.map(


                muestra => {



                    const recepcion =


                        recepciones.find(


                            item =>


                                Number(


                                    item.id


                                ) ===


                                Number(


                                    muestra.recepcion_id


                                )


                        );




                    const cliente =


                        mapa.get(


                            String(


                                recepcion?.cliente_id


                            )


                        );




                    const estado =


                        String(


                            muestra.estado ||


                            "PENDIENTE"


                        )


                            .toUpperCase();




                    let clase = "rojo";

if (
    estado === "EN PROCESO" ||
    estado === "EN ANALISIS" ||
    estado === "EN ANÁLISIS"
) {
    clase = "amarillo";
}

if (
    estado === "FINALIZADO" ||
    estado === "ANALISIS FINALIZADO" ||
    estado === "ANÁLISIS FINALIZADO"
) {
    clase = "verde";
}




                    return `



                        <tr>



                            <td>


                                ${escaparHTML(


                                    recepcion?.numero_recepcion ||


                                    recepcion?.id ||


                                    "-"


                                )}


                            </td>



                            <td>


                                ${escaparHTML(


                                    obtenerNombreCliente(


                                        cliente


                                    )


                                )}


                            </td>



                            <td>


                                ${escaparHTML(


                                    muestra.codigo_muestra ||


                                    muestra.id


                                )}


                            </td>



                            <td>



                                <span


                                    class="


                                        estado-laboratorio


                                        ${clase}


                                    "


                                >


                                    ${escaparHTML(


                                        estado


                                    )}


                                </span>



                            </td>



                            <td>


                                ${formatoFecha(


                                    muestra.created_at ||


                                    recepcion?.fecha_recepcion


                                )}


                            </td>



                            <td>



                                <button


                                    class="boton-tabla"


                                    data-muestra-id="${muestra.id}"


                                >


                                    Abrir


                                </button>



                            </td>



                        </tr>



                    `;



                }


            ).join("");



    } catch (error) {



        console.error(


            "Error laboratorio:",


            error


        );



    }



}

/* =========================================================
   ABRIR MUESTRA DEL LABORATORIO
========================================================= */

document.addEventListener("click", async evento => {

    const boton = evento.target.closest("[data-muestra-id]");

    if (!boton) {
        return;
    }

    const muestraId = boton.dataset.muestraId;

    if (!muestraId) {
        return;
    }

    await abrirMuestraLaboratorio(muestraId);

});


/* =========================================================
   DETALLE DE MUESTRA DEL LABORATORIO
========================================================= */

async function abrirMuestraLaboratorio(muestraId) {

    const modal = document.getElementById("modalDetalle");
    const contenido = document.getElementById("modalDetalleContenido");
    const titulo = document.getElementById("modalTitulo");

    if (!modal || !contenido || !titulo) {
        console.error("No se encontró el modal de detalle.");
        return;
    }

    modal.classList.remove("oculto");

    titulo.textContent = "Detalle de muestra";

    contenido.innerHTML = `
        <div class="estado-vacio">
            <p>Cargando información...</p>
        </div>
    `;

    try {

        /* =========================================
           OBTENER MUESTRA
        ========================================= */

        const { data: muestra, error: errorMuestra } =
            await clienteSupabase
                .from("muestras")
                .select("*")
                .eq("id", muestraId)
                .maybeSingle();

        if (errorMuestra) {
            throw errorMuestra;
        }

        if (!muestra) {
            contenido.innerHTML = `
                <div class="estado-vacio">
                    <p>No se encontró la muestra.</p>
                </div>
            `;
            return;
        }


        /* =========================================
           OBTENER RECEPCIÓN
        ========================================= */

        const { data: recepcion, error: errorRecepcion } =
            await clienteSupabase
                .from("recepciones")
                .select("*")
                .eq("id", muestra.recepcion_id)
                .maybeSingle();

        if (errorRecepcion) {
            throw errorRecepcion;
        }


        /* =========================================
           OBTENER CLIENTE
        ========================================= */

        let cliente = null;

        if (recepcion?.cliente_id) {

            const { data: clienteData, error: errorCliente } =
                await clienteSupabase
                    .from("clientes")
                    .select("*")
                    .eq("id", recepcion.cliente_id)
                    .maybeSingle();

            if (errorCliente) {
                throw errorCliente;
            }

            cliente = clienteData;
        }


        /* =========================================
           OBTENER ANÁLISIS SOLICITADOS
        ========================================= */

        const { data: analisis, error: errorAnalisis } =
            await clienteSupabase
                .from("analisis_solicitados")
                .select("id, tipo_analisis_id, precio, estado")
                .eq("muestra_id", muestra.id);

        if (errorAnalisis) {
            throw errorAnalisis;
        }


        /* =========================================
           OBTENER TIPOS DE ANÁLISIS
        ========================================= */

        const idsTipos = (analisis || [])
            .map(item => item.tipo_analisis_id)
            .filter(id => id != null);

        let tiposAnalisis = [];

        if (idsTipos.length) {

            const { data: tipos, error: errorTipos } =
                await clienteSupabase
                    .from("tipos_analisis")
                    .select("id, nombre")
                    .in("id", idsTipos);

            if (errorTipos) {
                throw errorTipos;
            }

            tiposAnalisis = tipos || [];
        }


        /* =========================================
           ESTADO
        ========================================= */

        const estado = String(
            muestra.estado || "PENDIENTE"
        )
            .trim()
            .toUpperCase();


        /* =========================================
           BOTÓN DE ACCIÓN
        ========================================= */

        let botonAccion = "";


        if (
            estado === "MUESTRA RECIBIDA" ||
            estado === "PENDIENTE"
        ) {

            botonAccion = `
                <button
                    type="button"
                    class="boton-principal"
                    data-iniciar-muestra="${muestra.id}"
                >
                    Iniciar análisis
                </button>
            `;

        }


        else if (
            estado === "EN ANÁLISIS" ||
            estado === "EN ANALISIS" ||
            estado === "EN PROCESO"
        ) {

            botonAccion = `
                <div class="detalle-acciones-laboratorio">

                    <button
                        type="button"
                        class="boton-principal"
                        data-subir-resultado="${muestra.id}"
                    >
                        Enviar resultados
                    </button>

                    <button
                        type="button"
                        class="boton-secundario"
                        data-finalizar-externo="${muestra.id}"
                    >
                        Resultado enviado por otro medio
                    </button>

                </div>
            `;

        }


        else if (
            estado === "FINALIZADO" ||
            estado === "ANÁLISIS FINALIZADO" ||
            estado === "ANALISIS FINALIZADO"
        ) {

            botonAccion = `
                <div class="estado-finalizado">
                    ✓ Análisis finalizado
                </div>
            `;

        }


        /* =========================================
           ANÁLISIS EN HTML
        ========================================= */

        const analisisHTML = (analisis || []).length
            ? analisis.map(item => {

                const tipo = tiposAnalisis.find(
                    t => Number(t.id) === Number(item.tipo_analisis_id)
                );

                return `
                    <div
                        style="
                            display:flex;
                            justify-content:space-between;
                            align-items:center;
                            gap:15px;
                            padding:12px 0;
                            border-bottom:1px solid #292929;
                        "
                    >

                        <div>
                            <strong style="color:#fff;">
                                ${escaparHTML(
                                    tipo?.nombre || "Análisis"
                                )}
                            </strong>

                            <div
                                style="
                                    color:#888;
                                    font-size:12px;
                                    margin-top:4px;
                                "
                            >
                                Estado:
                                ${escaparHTML(
                                    item.estado || "PENDIENTE"
                                )}
                            </div>
                        </div>

                        <strong style="color:#facc15;">
                            S/
                            ${Number(
                                item.precio || 0
                            ).toFixed(2)}
                        </strong>

                    </div>
                `;

            }).join("")
            : `
                <div class="estado-vacio">
                    <p>No hay análisis registrados.</p>
                </div>
            `;


        /* =========================================
           MOSTRAR TODO
        ========================================= */

        contenido.innerHTML = `

            <!-- CLIENTE -->

            <div style="margin-bottom:22px;">

                <div
                    style="
                        color:#facc15;
                        font-size:12px;
                        font-weight:700;
                        letter-spacing:1px;
                        margin-bottom:12px;
                    "
                >
                    DATOS DEL CLIENTE
                </div>

                <div class="detalle-grid">

                    <div>
                        <span>CLIENTE / RAZÓN SOCIAL</span>
                        <strong>
                            ${escaparHTML(
                                cliente?.razon_social ||
                                cliente?.nombre ||
                                "-"
                            )}
                        </strong>
                    </div>

                    <div>
                        <span>RUC</span>
                        <strong>
                            ${escaparHTML(
                                cliente?.ruc || "-"
                            )}
                        </strong>
                    </div>

                    <div>
                        <span>TELÉFONO</span>
                        <strong>
                            ${escaparHTML(
                                cliente?.telefono || "-"
                            )}
                        </strong>
                    </div>

                    <div>
                        <span>CORREO</span>
                        <strong>
                            ${escaparHTML(
                                cliente?.correo || "-"
                            )}
                        </strong>
                    </div>

                    <div style="grid-column:1/-1;">
                        <span>DIRECCIÓN</span>
                        <strong>
                            ${escaparHTML(
                                cliente?.direccion || "-"
                            )}
                        </strong>
                    </div>

                </div>

            </div>


            <!-- RECEPCIÓN -->

            <div style="margin-bottom:22px;">

                <div
                    style="
                        color:#facc15;
                        font-size:12px;
                        font-weight:700;
                        letter-spacing:1px;
                        margin-bottom:12px;
                    "
                >
                    DATOS DE LA RECEPCIÓN
                </div>

                <div class="detalle-grid">

                    <div>
                        <span>N.º DE RECEPCIÓN</span>
                        <strong>
                            ${escaparHTML(
                                recepcion?.numero_recepcion ||
                                recepcion?.id ||
                                "-"
                            )}
                        </strong>
                    </div>

                    <div>
                        <span>FECHA</span>
                        <strong>
                            ${escaparHTML(
                                formatoFecha(
                                    recepcion?.fecha_recepcion ||
                                    "-"
                                )
                            )}
                        </strong>
                    </div>

                    <div>
                        <span>ESTADO DE PAGO</span>
                        <strong>
                            ${escaparHTML(
                                recepcion?.estado_pago ||
                                "PENDIENTE"
                            )}
                        </strong>
                    </div>

                    <div>
                        <span>ESTADO DE LA MUESTRA</span>
                        <strong>
                            ${escaparHTML(estado)}
                        </strong>
                    </div>

                    <div style="grid-column:1/-1;">
                        <span>OBSERVACIONES</span>
                        <strong>
                            ${escaparHTML(
                                recepcion?.observaciones ||
                                "Sin observaciones"
                            )}
                        </strong>
                    </div>

                </div>

            </div>


            <!-- MUESTRA -->

            <div style="margin-bottom:22px;">

                <div
                    style="
                        color:#facc15;
                        font-size:12px;
                        font-weight:700;
                        letter-spacing:1px;
                        margin-bottom:12px;
                    "
                >
                    DATOS DE LA MUESTRA
                </div>

                <div class="detalle-grid">

                    <div>
                        <span>CÓDIGO DE MUESTRA</span>
                        <strong>
                            ${escaparHTML(
                                muestra.codigo_muestra || "-"
                            )}
                        </strong>
                    </div>

                    <div>
                        <span>DESCRIPCIÓN</span>
                        <strong>
                            ${escaparHTML(
                                muestra.descripcion ||
                                "Sin descripción"
                            )}
                        </strong>
                    </div>

                </div>

            </div>


            <!-- ANÁLISIS -->

            <div style="margin-bottom:22px;">

                <div
                    style="
                        color:#facc15;
                        font-size:12px;
                        font-weight:700;
                        letter-spacing:1px;
                        margin-bottom:12px;
                    "
                >
                    ANÁLISIS SOLICITADOS
                </div>

                <div
                    style="
                        background:#151515;
                        border:1px solid #292929;
                        border-radius:12px;
                        padding:0 15px;
                    "
                >
                    ${analisisHTML}
                </div>

            </div>


            <!-- TOTAL -->

            <div
                style="
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    padding:15px;
                    margin-bottom:20px;
                    background:#171717;
                    border:1px solid #333;
                    border-radius:12px;
                "
            >

                <strong>
                    TOTAL DE LA RECEPCIÓN
                </strong>

                <strong
                    style="
                        color:#facc15;
                        font-size:20px;
                    "
                >
                    S/
                    ${Number(
                        recepcion?.total || 0
                    ).toFixed(2)}
                </strong>

            </div>


            <!-- ACCIÓN -->

            <div class="detalle-acciones-laboratorio">

                ${botonAccion}

            </div>

        `;

    } catch (error) {

        console.error(
            "Error al abrir muestra:",
            error
        );

        contenido.innerHTML = `
            <div class="estado-vacio">
                <p>
                    No se pudo cargar la información
                    de la muestra.
                </p>
            </div>
        `;

    }

}

/* =========================================================
   INICIAR ANÁLISIS DE MUESTRA
========================================================= */

document.addEventListener("click", async evento => {

    const boton = evento.target.closest(
        "[data-iniciar-muestra]"
    );

    if (!boton) {
        return;
    }

    const muestraId =
        boton.dataset.iniciarMuestra;

    if (!muestraId) {
        return;
    }

    try {

        boton.disabled = true;
        boton.textContent = "Iniciando...";

        const { error } =
            await clienteSupabase
                .from("muestras")
                .update({
                    estado: "EN ANÁLISIS",
                    area_actual: "LABORATORIO"
                })
                .eq("id", muestraId);

        if (error) {
            throw error;
        }

        alert(
            "El análisis se inició correctamente."
        );

        document
            .getElementById("modalDetalle")
            ?.classList.add("oculto");

        await cargarLaboratorio();

        if (
            typeof cargarDashboard ===
            "function"
        ) {
            await cargarDashboard();
        }

    } catch (error) {

        console.error(
            "Error al iniciar análisis:",
            error
        );

        alert(
            "No se pudo iniciar el análisis.\n\n" +
            (
                error.message ||
                "Error desconocido."
            )
        );

        boton.disabled = false;

        boton.textContent =
            "Iniciar análisis";
    }

});

/* =========================================================
   RESULTADOS DEL LABORATORIO
========================================================= */

// ======================================================
// ENVIAR RESULTADOS - FOTO O ARCHIVO
// ======================================================

document.addEventListener("click", async (evento) => {

    const boton = evento.target.closest(
        "[data-subir-resultado]"
    );

    if (!boton) return;

    const muestraId = boton.dataset.subirResultado;

    if (!muestraId) return;

    // ==================================================
    // MODAL PARA ELEGIR MÉTODO
    // ==================================================

    const modal = document.createElement("div");

    modal.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,.75);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99999;
        padding: 20px;
    `;

    modal.innerHTML = `
        <div style="
            width:100%;
            max-width:520px;
            background:#151515;
            border:1px solid #333;
            border-radius:18px;
            padding:28px;
            box-shadow:0 20px 60px rgba(0,0,0,.6);
        ">

            <div style="
                color:#facc15;
                font-size:12px;
                font-weight:700;
                letter-spacing:2px;
                margin-bottom:8px;
            ">
                RESULTADOS
            </div>

            <h2 style="
                color:white;
                margin:0 0 8px;
                font-size:24px;
            ">
                Enviar resultados
            </h2>

            <p style="
                color:#999;
                margin-bottom:25px;
                font-size:14px;
            ">
                Seleccione cómo desea cargar el resultado de la muestra.
            </p>

            <div style="
                display:grid;
                grid-template-columns:1fr 1fr;
                gap:12px;
            ">

                <button
                    type="button"
                    id="btnTomarFoto"
                    style="
                        padding:18px 12px;
                        border-radius:12px;
                        border:1px solid #facc15;
                        background:#facc15;
                        color:#111;
                        font-weight:700;
                        cursor:pointer;
                    "
                >
                    
                    Tomar foto
                </button>

                <button
                    type="button"
                    id="btnSubirArchivo"
                    style="
                        padding:18px 12px;
                        border-radius:12px;
                        border:1px solid #444;
                        background:#202020;
                        color:white;
                        font-weight:700;
                        cursor:pointer;
                    "
                >
                    
                    Subir archivo
                </button>

            </div>

            <button
                type="button"
                id="btnCancelarEnvio"
                style="
                    width:100%;
                    margin-top:18px;
                    padding:12px;
                    border-radius:10px;
                    border:1px solid #333;
                    background:transparent;
                    color:#aaa;
                    cursor:pointer;
                "
            >
                Cancelar
            </button>

        </div>
    `;

    document.body.appendChild(modal);

    const btnTomarFoto =
        modal.querySelector("#btnTomarFoto");

    const btnSubirArchivo =
        modal.querySelector("#btnSubirArchivo");

    const btnCancelar =
        modal.querySelector("#btnCancelarEnvio");

    // ==================================================
    // CANCELAR
    // ==================================================

    btnCancelar.addEventListener("click", () => {
        modal.remove();
    });

    // ==================================================
    // SUBIR ARCHIVO
    // ==================================================

    btnSubirArchivo.addEventListener("click", () => {

        const input = document.createElement("input");

        input.type = "file";
        input.accept = "image/*,.pdf";

        input.addEventListener("change", async () => {

            const archivo = input.files?.[0];

            if (!archivo) return;

            modal.remove();

            await procesarResultado(
                archivo,
                boton,
                muestraId
            );

        });

        document.body.appendChild(input);

        input.click();

        setTimeout(() => {
            input.remove();
        }, 1000);

    });

    // ==================================================
    // TOMAR FOTO
    // ==================================================

    btnTomarFoto.addEventListener("click", async () => {

        modal.innerHTML = `
            <div style="
                width:100%;
                max-width:650px;
                background:#151515;
                border:1px solid #333;
                border-radius:18px;
                padding:20px;
            ">

                <h2 style="
                    color:white;
                    margin-top:0;
                ">
                    Tomar foto
                </h2>

                <video
                    id="videoCamara"
                    autoplay
                    playsinline
                    style="
                        width:100%;
                        max-height:420px;
                        object-fit:cover;
                        background:#000;
                        border-radius:12px;
                    "
                ></video>

                <div style="
                    display:flex;
                    gap:10px;
                    margin-top:15px;
                ">

                    <button
                        id="btnCapturarFoto"
                        type="button"
                        style="
                            flex:1;
                            padding:14px;
                            border:none;
                            border-radius:10px;
                            background:#facc15;
                            color:#111;
                            font-weight:700;
                            cursor:pointer;
                        "
                    >
                        Capturar
                    </button>

                    <button
                        id="btnCancelarCamara"
                        type="button"
                        style="
                            flex:1;
                            padding:14px;
                            border:1px solid #444;
                            border-radius:10px;
                            background:#202020;
                            color:white;
                            cursor:pointer;
                        "
                    >
                        Cancelar
                    </button>

                </div>

            </div>
        `;

        const video =
            modal.querySelector("#videoCamara");

        const btnCapturar =
            modal.querySelector("#btnCapturarFoto");

        const btnCancelarCamara =
            modal.querySelector("#btnCancelarCamara");

        let stream = null;

        try {

            stream =
                await navigator.mediaDevices.getUserMedia({
                    video: {
                        facingMode: {
                            ideal: "environment"
                        }
                    },
                    audio: false
                });

            video.srcObject = stream;

        } catch (error) {

            console.error(
                "Error al acceder a la cámara:",
                error
            );

            alert(
                "No se pudo acceder a la cámara. " +
                "Verifique los permisos del navegador."
            );

            modal.remove();

            return;
        }

        // CANCELAR CÁMARA

        btnCancelarCamara.addEventListener("click", () => {

            stream?.getTracks().forEach(
                track => track.stop()
            );

            modal.remove();

        });

        // CAPTURAR FOTO

        btnCapturar.addEventListener("click", async () => {

            const canvas =
                document.createElement("canvas");

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            const contexto =
                canvas.getContext("2d");

            contexto.drawImage(
                video,
                0,
                0,
                canvas.width,
                canvas.height
            );

            canvas.toBlob(
                async (blob) => {

                    if (!blob) {

                        alert(
                            "No se pudo capturar la fotografía."
                        );

                        return;
                    }

                    const archivo =
                        new File(
                            [blob],
                            `resultado-${muestraId}-${Date.now()}.jpg`,
                            {
                                type: "image/jpeg"
                            }
                        );

                    stream?.getTracks().forEach(
                        track => track.stop()
                    );

                    modal.remove();

                    await procesarResultado(
                        archivo,
                        boton,
                        muestraId
                    );

                },
                "image/jpeg",
                0.90
            );

        });

    });

});


// ======================================================
// PROCESAR Y GUARDAR RESULTADO
// ======================================================

async function procesarResultado(
    archivo,
    boton,
    muestraId
) {

    try {

        boton.disabled = true;
        boton.textContent = "Subiendo...";

        const extension =
            archivo.name
                .split(".")
                .pop()
                ?.toLowerCase() || "jpg";

        const nombreArchivo =
            `resultado-${muestraId}-${Date.now()}.${extension}`;

        const rutaArchivo =
            `resultados/${nombreArchivo}`;

        // ==================================================
        // SUBIR ARCHIVO A SUPABASE STORAGE
        // ==================================================

        const subida =
            await clienteSupabase
                .storage
                .from("cjv-documentos")
                .upload(
                    rutaArchivo,
                    archivo,
                    {
                        cacheControl: "3600",
                        upsert: false
                    }
                );

        if (subida.error) {
            throw subida.error;
        }

        // ==================================================
        // OBTENER URL
        // ==================================================

        const {
            data: urlData
        } =
            clienteSupabase
                .storage
                .from("cjv-documentos")
                .getPublicUrl(
                    rutaArchivo
                );

        const urlResultado =
            urlData.publicUrl;

        if (!urlResultado) {

            throw new Error(
                "No se pudo obtener la URL del archivo."
            );

        }

        // ==================================================
        // ACTUALIZAR MUESTRA
        // ==================================================

        const {
            error: errorEstado
        } =
            await clienteSupabase
                .from("muestras")
                .update({
                    resultados_enviados: true,
                    medio_envio_resultado: "ARCHIVO",
                    fecha_envio_resultado:
                        new Date().toISOString(),
                    evidencia_url: urlResultado,
                    area_actual: "REPORTES"
                })
                .eq(
                    "id",
                    muestraId
                );

        if (errorEstado) {
            throw errorEstado;
        }

        // ==================================================
        // ÉXITO
        // ==================================================

        alert(
            "Los resultados fueron enviados correctamente."
        );

        document
            .getElementById("modalDetalle")
            ?.classList.add("oculto");

        // Actualizar laboratorio

        if (
            typeof cargarLaboratorio ===
            "function"
        ) {

            await cargarLaboratorio();

        }

        // Actualizar dashboard

        if (
            typeof cargarDashboard ===
            "function"
        ) {

            await cargarDashboard();

        }

    } catch (error) {

        console.error(
            "Error al enviar resultados:",
            error
        );

        alert(
            "No se pudo enviar el resultado.\n\n" +
            (
                error.message ||
                "Error desconocido."
            )
        );

    } finally {

        boton.disabled = false;

        boton.textContent =
            "Enviar resultados";

    }

}


// RESULTADO ENVIADO POR OTRO MEDIO
document.addEventListener("click", async evento => {

    const boton =
        evento.target.closest(
            "[data-finalizar-externo]"
        );

    if (!boton) {
        return;
    }

    const muestraId =
        boton.dataset.finalizarExterno;

    if (!muestraId) {
        return;
    }

    const confirmar =
        confirm(
            "¿Confirmas que los resultados ya fueron enviados por otro medio, como WhatsApp?"
        );

    if (!confirmar) {
        return;
    }

    try {

        boton.disabled = true;
        boton.textContent =
            "Procesando...";

        const {
            error
        } =
            await clienteSupabase
                .from("muestras")
                .update({
    resultados_enviados: true,
    medio_envio_resultado: "OTRO MEDIO",
    fecha_envio_resultado: new Date().toISOString(),
    area_actual: "REPORTES"
})
                .eq(
                    "id",
                    muestraId
                );

        if (error) {
            throw error;
        }

        alert(
            "La muestra fue finalizada correctamente."
        );

        // Cerrar modal
        document
            .getElementById("modalDetalle")
            ?.classList.add("oculto");

        // Actualizar laboratorio
        await cargarLaboratorio();

        // Actualizar dashboard
        if (
            typeof cargarDashboard ===
            "function"
        ) {
            await cargarDashboard();
        }

    } catch (error) {

        console.error(
            "Error al finalizar muestra:",
            error
        );

        alert(
            "No se pudo finalizar la muestra.\n\n" +
            (error.message ||
                "Error desconocido.")
        );

        boton.disabled = false;
        boton.textContent =
            "Resultado enviado por otro medio";

    }

});

/* =========================================================


   REPORTES


========================================================= */



/* =========================================================
   REPORTES
========================================================= */

async function cargarReportes() {

    const tabla =
        document.getElementById(
            "tablaReportes"
        );

    if (!tabla) {
        return;
    }

    try {

        tabla.innerHTML = `
            <tr>
                <td
                    colspan="6"
                    class="tabla-vacia"
                >
                    Cargando reportes...
                </td>
            </tr>
        `;

        const [
            clientes,
            recepciones,
            muestras,
            certificados
        ] = await Promise.all([

            obtenerClientes(),

            obtenerRecepciones(),

            obtenerMuestras(),

            obtenerCertificados()

        ]);

        const mapa =
            crearMapaClientes(
                clientes
            );

        /*
        =====================================================
        MUESTRAS QUE YA PASARON A REPORTES
        =====================================================

        El paso a Reportes NO depende del pago.

        Se utiliza area_actual = REPORTES.

        Esto permite que:
        - haya sido pagado
        - haya sido cancelado
        - haya sido enviado por otro medio

        y aun así pueda llegar a Reportes.
        */

        const pendientes =
    muestras.filter(
        muestra => {

            const estado =
                String(
                    muestra.estado || ""
                )
                .trim()
                .toUpperCase();

            const area =
                String(
                    muestra.area_actual || ""
                )
                .trim()
                .toUpperCase();

            /*
             * Muestras que deben aparecer
             * en el área de REPORTES.
             */
            const estadosReportes = [
                "FINALIZADO",
                "ANALISIS FINALIZADO",
                "ANÁLISIS FINALIZADO",
                "ENVIADO POR OTRO MEDIO"
            ];

            return (
                area === "REPORTES" ||
                estadosReportes.includes(estado)
            );
        }
    );

        /*
        =====================================================
        SI NO HAY REPORTES
        =====================================================
        */

        if (
            pendientes.length === 0
        ) {

            tabla.innerHTML = `
                <tr>
                    <td
                        colspan="6"
                        class="tabla-vacia"
                    >
                        No hay reportes pendientes.
                    </td>
                </tr>
            `;

            return;

        }


        /*
        =====================================================
        MOSTRAR REPORTES
        =====================================================
        */

        tabla.innerHTML =
            pendientes.map(
                muestra => {

                    const recepcion =
                        recepciones.find(
                            item =>
                                Number(
                                    item.id
                                ) ===
                                Number(
                                    muestra.recepcion_id
                                )
                        );


                    const cliente =
                        mapa.get(
                            String(
                                recepcion?.cliente_id
                            )
                        );


                    /*
                    -----------------------------------------
                    BUSCAR CERTIFICADO
                    -----------------------------------------
                    */

                    const certificado =
                        certificados.find(
                            cert =>
                                Number(
                                    cert.muestra_id
                                ) ===
                                Number(
                                    muestra.id
                                )
                        );


                    /*
                    -----------------------------------------
                    ESTADO DEL RESULTADO
                    -----------------------------------------
                    */

                    const medioResultado =
                        String(
                            muestra.medio_envio_resultado || ""
                        )
                            .trim()
                            .toUpperCase();


                    let textoEstado =
                        "PENDIENTE";

                    let claseEstado =
                        "rojo";


                    /*
                    Resultado enviado desde laboratorio
                    */

                    if (
                        muestra.resultados_enviados === true
                    ) {

                        textoEstado =
                            "RESULTADO RECIBIDO";

                        claseEstado =
                            "amarillo";

                    }


                    /*
                    Resultado enviado por otro medio
                    */

                    if (
                        medioResultado.includes(
                            "OTRO"
                        )
                    ) {

                        textoEstado =
                            "ENVIADO POR OTRO MEDIO";

                        claseEstado =
                            "amarillo";

                    }


                    /*
                    Certificado ya cargado
                    */

                    if (
                        certificado &&
                        certificado.archivo_url
                    ) {

                        textoEstado =
                            "CERTIFICADO CARGADO";

                        claseEstado =
                            "verde";

                    }


                    /*
                    -----------------------------------------
                    EVIDENCIA DEL LABORATORIO
                    -----------------------------------------
                    */

                    let evidenciaHTML =
                        `<span>Sin archivo</span>`;


                    if (
                        muestra.evidencia_url
                    ) {

                        evidenciaHTML = `
                            <a
                                href="${escaparHTML(
                                    muestra.evidencia_url
                                )}"
                                target="_blank"
                                class="boton-tabla"
                            >
                                Ver evidencia
                            </a>
                        `;

                    }


                    /*
                    -----------------------------------------
                    CERTIFICADO
                    -----------------------------------------
                    */

                    let certificadoHTML =
                        `<span>Pendiente</span>`;


                    if (
                        certificado &&
                        certificado.archivo_url
                    ) {

                        certificadoHTML = `
                            <a
                                href="${escaparHTML(
                                    certificado.archivo_url
                                )}"
                                target="_blank"
                                class="boton-tabla"
                            >
                                Ver certificado
                            </a>
                        `;

                    }

                    


                    /*
                    -----------------------------------------
                    ACCIÓN
                    -----------------------------------------
                    */

                    let accionHTML = `
    <button
        type="button"
        class="boton-tabla"
        data-ver-reporte-id="${muestra.id}"
        onclick="abrirReporte('${muestra.id}')"
    >
        Ver
    </button>
`;


if (
    !certificado ||
    !certificado.archivo_url
) {

    accionHTML = `
        <div
            style="
                display:flex;
                gap:10px;
                align-items:center;
                flex-wrap:wrap;
            "
        >

            <button
                type="button"
                class="boton-tabla"
                data-reporte-id="${muestra.id}"
            >
                Ver
            </button>

            <button
                type="button"
                class="boton-principal"
                data-subir-certificado="${muestra.id}"
            >
                Subir certificado
            </button>

        </div>
    `;

} else {

    accionHTML = `
        <div
            data-cronometro-reporte
            data-fecha-inicio="${certificado.created_at}"
            style="
                display:flex;
                gap:10px;
                align-items:center;
                flex-wrap:wrap;
            "
        >

            <button
                type="button"
                class="boton-tabla"
                data-reporte-id="${muestra.id}"
            >
                Ver
            </button>

            <strong
                data-cronometro
                style="min-width:75px;"
            >
                01:00:00
            </strong>

        </div>
    `;








                    }


                    return `

                        <tr>

                            <td>

                                ${escaparHTML(
                                    recepcion?.numero_recepcion ||
                                    recepcion?.id ||
                                    "-"
                                )}

                            </td>


                            <td>

                                ${escaparHTML(
                                    obtenerNombreCliente(
                                        cliente
                                    )
                                )}

                            </td>


                            <td>

                                ${escaparHTML(
                                    muestra.codigo_muestra ||
                                    muestra.id
                                )}

                            </td>


                            <td>

                                <span
                                    class="
                                        estado-reportes
                                        ${claseEstado}
                                    "
                                >
                                    ${escaparHTML(
                                        textoEstado
                                    )}
                                </span>

                            </td>


                            <td>

                                ${certificadoHTML}

                            </td>


                            <td>

                                ${accionHTML}

                            </td>

                        </tr>

                    `;

                }
            ).join("");

            iniciarCronometrosReportes();

    } catch (error) {

        console.error(
            "Error reportes:",
            error
        );


        tabla.innerHTML = `
            <tr>
                <td
                    colspan="6"
                    class="tabla-vacia"
                >
                    No se pudo cargar la información
                    de reportes.
                </td>
            </tr>
        `;

    }

}




/* =========================================================


   CONFIGURACIÓN


========================================================= */



async function cargarConfiguracion() {

    const tabla = document.getElementById("tablaTiposAnalisis");
    if (!tabla) return;

    tabla.innerHTML = `<tr><td colspan="5" class="tabla-vacia">Cargando tipos de análisis...</td></tr>`;

    try {
        const { data, error } = await clienteSupabase
            .from("tipos_analisis")
            .select("id,nombre,descripcion,precio_referencial,activo")
            .order("id", { ascending: true });

        if (error) throw error;

        if (!data || data.length === 0) {
            tabla.innerHTML = `<tr><td colspan="5" class="tabla-vacia">No hay tipos de análisis registrados.</td></tr>`;
            return;
        }

        tabla.innerHTML = data.map(tipo => {
            const precio = tipo.precio_referencial === null || tipo.precio_referencial === undefined
                ? "S/ 0.00"
                : `S/ ${Number(tipo.precio_referencial).toFixed(2)}`;
            const estado = tipo.activo ? "ACTIVO" : "INACTIVO";

            return `
                <tr>
                    <td><strong>${escaparHTML(tipo.nombre || "-")}</strong></td>
                    <td>${escaparHTML(tipo.descripcion || "-")}</td>
                    <td>${precio}</td>
                    <td>${estado}</td>
                    <td>
                        <button type="button" class="boton-tabla" data-tipo-id="${tipo.id}">Ver</button>
                    </td>
                </tr>
            `;
        }).join("");

    } catch (error) {
        console.error("Error configuración:", error);
        tabla.innerHTML = `<tr><td colspan="5" class="tabla-vacia">No se pudo cargar el catálogo de análisis.</td></tr>`;
    }
}

/* =========================================================
   VER DETALLE DE TIPO DE ANÁLISIS
========================================================= */

document.addEventListener("click", async evento => {

    const boton = evento.target.closest("[data-tipo-id]");

    if (!boton) {
        return;
    }

    const tipoId = boton.dataset.tipoId;

    const modal = document.getElementById("modalDetalle");
    const titulo = document.getElementById("modalTitulo");
    const contenido = document.getElementById("modalDetalleContenido");

    if (!modal || !titulo || !contenido) {
        return;
    }

    modal.classList.remove("oculto");

    titulo.textContent = "Detalle del análisis";

    contenido.innerHTML = `
        <div class="estado-vacio">
            <p>Cargando información...</p>
        </div>
    `;

    try {

        const { data: tipo, error } = await clienteSupabase
            .from("tipos_analisis")
            .select("id,nombre,descripcion,precio_referencial,activo")
            .eq("id", tipoId)
            .maybeSingle();

        if (error) {
            throw error;
        }

        if (!tipo) {

            contenido.innerHTML = `
                <div class="estado-vacio">
                    <p>No se encontró el tipo de análisis.</p>
                </div>
            `;

            return;
        }

        const precio =
            tipo.precio_referencial === null ||
            tipo.precio_referencial === undefined
                ? "S/ 0.00"
                : `S/ ${Number(tipo.precio_referencial).toFixed(2)}`;

        const estado = tipo.activo
            ? "ACTIVO"
            : "INACTIVO";

        contenido.innerHTML = `

            <div class="detalle-grid">

                <div>
                    <span>NOMBRE</span>
                    <strong>
                        ${escaparHTML(tipo.nombre || "-")}
                    </strong>
                </div>

                <div>
                    <span>PRECIO REFERENCIAL</span>
                    <strong>
                        ${precio}
                    </strong>
                </div>

                <div>
                    <span>ESTADO</span>
                    <strong>
                        ${estado}
                    </strong>
                </div>

                <div>
                    <span>ID</span>
                    <strong>
                        #${escaparHTML(tipo.id)}
                    </strong>
                </div>

            </div>

            <div class="detalle-muestras">

                <span>DESCRIPCIÓN</span>

                <div>
                    <small>
                        ${escaparHTML(
                            tipo.descripcion ||
                            "Sin descripción"
                        )}
                    </small>
                </div>

            </div>

            <div class="detalle-acciones-analisis">

    <button
        type="button"
        class="boton-editar-analisis-config"
        data-editar-tipo-id="${tipo.id}"
    >
        Editar análisis
    </button>

    <button
        type="button"
        class="boton-estado-analisis-config ${tipo.activo ? "deshabilitar" : "habilitar"}"
        data-cambiar-estado-tipo-id="${tipo.id}"
        data-estado-actual="${tipo.activo ? "true" : "false"}"
    >
        ${
            tipo.activo
                ? "Deshabilitar análisis"
                : "Habilitar análisis"
        }
    </button>

</div>

              

        `;

    } catch (error) {

        console.error(
            "Error al consultar tipo de análisis:",
            error
        );

        contenido.innerHTML = `
            <div class="estado-vacio">
                <p>
                    No se pudo cargar la información.
                </p>
            </div>
        `;

    }

});

/* =========================================================
   MENSAJES MODERNOS
========================================================= */

function mostrarMensajeSistema(
    tipo,
    titulo,
    mensaje
) {

    return new Promise(resolve => {

        const overlay =
            document.createElement("div");

        overlay.className =
            "mensaje-sistema-overlay";

        let icono = "✓";

        if (tipo === "error") {
            icono = "×";
        }

        if (tipo === "confirmacion") {
            icono = "?";
        }

        overlay.innerHTML = `

            <div class="mensaje-sistema ${tipo}">

                <div class="mensaje-icono">
                    ${icono}
                </div>

                <div class="mensaje-titulo">
                    ${titulo}
                </div>

                <p class="mensaje-texto">
                    ${mensaje}
                </p>

                <div class="mensaje-acciones">

                    <button
                        type="button"
                        class="mensaje-boton mensaje-boton-principal"
                        data-mensaje-aceptar
                    >
                        Aceptar
                    </button>

                </div>

            </div>

        `;

        document.body.appendChild(overlay);

        overlay
            .querySelector("[data-mensaje-aceptar]")
            .addEventListener("click", () => {

                overlay.remove();

                resolve(true);

            });

    });

}


function mostrarConfirmacionSistema(
    titulo,
    mensaje
) {

    return new Promise(resolve => {

        const overlay =
            document.createElement("div");

        overlay.className =
            "mensaje-sistema-overlay";

        overlay.innerHTML = `

            <div class="mensaje-sistema confirmacion">

                <div class="mensaje-icono">
                    ?
                </div>

                <div class="mensaje-titulo">
                    ${titulo}
                </div>

                <p class="mensaje-texto">
                    ${mensaje}
                </p>

                <div class="mensaje-acciones">

                    <button
                        type="button"
                        class="mensaje-boton mensaje-boton-secundario"
                        data-mensaje-cancelar
                    >
                        Cancelar
                    </button>

                    <button
                        type="button"
                        class="mensaje-boton mensaje-boton-principal"
                        data-mensaje-confirmar
                    >
                        Aceptar
                    </button>

                </div>

            </div>

        `;

        document.body.appendChild(overlay);


        overlay
            .querySelector("[data-mensaje-cancelar]")
            .addEventListener("click", () => {

                overlay.remove();

                resolve(false);

            });


        overlay
            .querySelector("[data-mensaje-confirmar]")
            .addEventListener("click", () => {

                overlay.remove();

                resolve(true);

            });

    });

}

/* =========================================================
   HABILITAR / DESHABILITAR TIPO DE ANÁLISIS
========================================================= */

document.addEventListener("click", async evento => {

    const boton =
        evento.target.closest(
            "[data-cambiar-estado-tipo-id]"
        );

    if (!boton) {
        return;
    }

    const tipoId =
        boton.dataset.cambiarEstadoTipoId;

    const estadoActual =
        boton.dataset.estadoActual === "true";

    const nuevoEstado =
        !estadoActual;

    const accion =
        nuevoEstado
            ? "habilitar"
            : "deshabilitar";


    const mensajeConfirmacion =
        nuevoEstado
            ? "¿Deseas habilitar este tipo de análisis?"
            : "¿Deseas deshabilitar este tipo de análisis?";


    const confirmar = await mostrarConfirmacionSistema(
    "Confirmar acción",
    mensajeConfirmacion
);

if (!confirmar) {
    return;
}


    boton.disabled = true;

    boton.textContent =
        nuevoEstado
            ? "Habilitando..."
            : "Deshabilitando...";


    try {

        const { error } = await clienteSupabase

            .from("tipos_analisis")

            .update({
                activo: nuevoEstado
            })

            .eq(
                "id",
                tipoId
            );


        if (error) {
            throw error;
        }


        /* -----------------------------------------
           ACTUALIZAR TABLA DE CONFIGURACIÓN
        ----------------------------------------- */

        await cargarConfiguracion();


        /* -----------------------------------------
           CERRAR MODAL
        ----------------------------------------- */

        document
            .getElementById("modalDetalle")
            ?.classList.add("oculto");


        /* -----------------------------------------
           MENSAJE
        ----------------------------------------- */

       await mostrarMensajeSistema(
    "exito",
    nuevoEstado
        ? "Análisis habilitado"
        : "Análisis deshabilitado",
    nuevoEstado
        ? "El análisis volverá a aparecer en nuevas recepciones."
        : "El análisis ya no aparecerá en nuevas recepciones."
);


    } catch (error) {

        console.error(
            `Error al ${accion} tipo de análisis:`,
            error
        );

        await mostrarMensajeSistema(
    "error",
    "No se pudo completar",
    `No se pudo ${accion} el tipo de análisis.`
);

        boton.disabled = false;

        boton.textContent =
            nuevoEstado
                ? "Habilitar análisis"
                : "Deshabilitar análisis";

    }

});


/* =========================================================


   FORMULARIO DE CONFIGURACIÓN


========================================================= */



document


    .getElementById(


        "btnNuevoAnalisis"


    )


    ?.addEventListener(


        "click",


        () => {



            document


                .getElementById(


                    "formTipoAnalisis"


                )


                ?.classList.remove(


                    "oculto"


                );



        }


    );

    /* =========================================================
   GUARDAR NUEVO TIPO DE ANÁLISIS
========================================================= */

document.addEventListener("click", async evento => {

    const boton = evento.target.closest("#guardarTipoAnalisis");

    if (!boton) {
        return;
    }

    const nombre = document
        .getElementById("tipoNombre")
        ?.value
        .trim();

    const descripcion = document
        .getElementById("tipoDescripcion")
        ?.value
        .trim();

    const precio = document
        .getElementById("tipoPrecio")
        ?.value;


    if (!nombre) {
        alert("Ingresa el nombre del análisis.");
        return;
    }

    if (!precio || Number(precio) < 0) {
        alert("Ingresa un precio válido.");
        return;
    }


    boton.disabled = true;
    boton.textContent = "Guardando...";


    try {

        const { error } = await clienteSupabase
            .from("tipos_analisis")
            .insert({
                nombre: nombre,
                descripcion: descripcion || null,
                precio_referencial: Number(precio),
                activo: true
            });


        if (error) {
            throw error;
        }


        await mostrarMensajeSistema(
    "exito",
    "Análisis creado",
    "El tipo de análisis se creó correctamente."
);


        /* Limpiar formulario */

        const nombreInput =
            document.getElementById("nombreTipoAnalisis");

        const descripcionInput =
            document.getElementById("descripcionTipoAnalisis");

        const precioInput =
            document.getElementById("precioTipoAnalisis");


        if (nombreInput) {
            nombreInput.value = "";
        }

        if (descripcionInput) {
            descripcionInput.value = "";
        }

        if (precioInput) {
            precioInput.value = "";
        }


        /* Ocultar formulario */

        document
            .getElementById("formTipoAnalisis")
            ?.classList.add("oculto");


        /* Recargar tabla */

        await cargarConfiguracion();


    } catch (error) {

        console.error(
            "Error al guardar tipo de análisis:",
            error
        );

        await mostrarMensajeSistema(
    "error",
    "No se pudo guardar",
    "Ocurrió un problema al guardar el tipo de análisis."
);

    } finally {

        boton.disabled = false;
        boton.textContent = "Guardar";

    }

});




document


    .getElementById(


        "cancelarTipoAnalisis"


    )


    ?.addEventListener(


        "click",


        () => {



            document


                .getElementById(


                    "formTipoAnalisis"


                )


                ?.classList.add(


                    "oculto"


                );



        }


    );




/* =========================================================


   FORMULARIO RECEPCIÓN


========================================================= */



document


    .getElementById(


        "btnNuevaRecepcion"


    )


    ?.addEventListener(


        "click",


        () => {



            document


                .getElementById(


                    "formularioRecepcion"


                )


                ?.classList.remove(


                    "oculto"


                );



        }


    );




document


    .getElementById(


        "cerrarFormRecepcion"


    )


    ?.addEventListener(


        "click",


        () => {



            document


                .getElementById(


                    "formularioRecepcion"


                )


                ?.classList.add(


                    "oculto"


                );



        }


    );




document


    .getElementById(


        "cancelarRecepcion"


    )


    ?.addEventListener(


        "click",


        () => {



            document


                .getElementById(


                    "formularioRecepcion"


                )


                ?.classList.add(


                    "oculto"


                );



        }


    );




/* =========================================================


   VER DETALLE


========================================================= */



document.addEventListener(


    "click",


    evento => {



        const boton =


            evento.target.closest(


                "[data-recepcion-id]"


            );




        if (!boton) {



            return;



        }




        abrirDetalle(


            boton.dataset.recepcionId


        );



    }


);




async function abrirDetalle(


    id


) {



    const modal =


        document.getElementById(


            "modalDetalle"


        );




    const contenido =


        document.getElementById(


            "modalDetalleContenido"


        );




    const titulo =


        document.getElementById(


            "modalTitulo"


        );




    if (


        !modal ||


        !contenido ||


        !titulo


    ) {



        return;



    }




    modal.classList.remove(


        "oculto"


    );




    titulo.textContent =


        "Detalle de recepción";




    contenido.innerHTML = `


        <div class="estado-vacio">


            <p>


                Cargando información...


            </p>


        </div>


    `;




    try {



        const [
    recepcionResult,
    clientes,
    muestras,
    certificados
] =
    await Promise.all([

        clienteSupabase
            .from("recepciones")
            .select("*")
            .eq(
                "id",
                id
            )
            .maybeSingle(),

        obtenerClientes(),

        obtenerMuestras(),

        obtenerCertificados()

    ]);




        if (


            recepcionResult.error


        ) {



            throw recepcionResult.error;



        }




        const recepcion =


            recepcionResult.data;




        if (!recepcion) {



            contenido.innerHTML = `


                <div class="estado-vacio">


                    <p>


                        No se encontró la recepción.


                    </p>


                </div>


            `;



            return;



        }




        const cliente =


            crearMapaClientes(


                clientes


            ).get(


                String(


                    recepcion.cliente_id


                )


            );




        const lista =


            obtenerMuestrasRecepcion(


                recepcion.id,


                muestras


            );
            


const certificadosRecepcion =
    certificados.filter(
        certificado =>
            lista.some(
                muestra =>
                    Number(muestra.id) ===
                    Number(certificado.muestra_id)
            )
    );


       contenido.innerHTML = `

    <div class="detalle-grid">

        <div>
            <span>RECEPCIÓN</span>

            <strong>
                ${escaparHTML(
                    recepcion.numero_recepcion ||
                    recepcion.id
                )}
            </strong>
        </div>


        <div>
            <span>FECHA</span>

            <strong>
                ${formatoFecha(
                    recepcion.fecha_recepcion ||
                    recepcion.created_at
                )}
            </strong>
        </div>


        <div>
            <span>CLIENTE</span>

            <strong>
                ${escaparHTML(
                    obtenerNombreCliente(cliente)
                )}
            </strong>
        </div>


        <div>
            <span>RUC</span>

            <strong>
                ${escaparHTML(
                    cliente?.ruc || "-"
                )}
            </strong>
        </div>


        <div>
            <span>TELÉFONO</span>

            <strong>
                ${escaparHTML(
                    cliente?.telefono ||
                    cliente?.celular ||
                    "-"
                )}
            </strong>
        </div>


        <div>
            <span>CORREO</span>

            <strong>
                ${escaparHTML(
                    cliente?.correo || "-"
                )}
            </strong>
        </div>


        <div>
            <span>DIRECCIÓN</span>

            <strong>
                ${escaparHTML(
                    cliente?.direccion || "-"
                )}
            </strong>
        </div>


        <div>
            <span>PAGO</span>

            <strong>
                ${escaparHTML(
                    obtenerEstadoPago(
                        recepcion
                    )
                )}
            </strong>
        </div>


        <div>
            <span>TOTAL</span>

            <strong>
                ${formatoDinero(
                    recepcion.total
                )}
            </strong>
        </div>


        <div>
            <span>OBSERVACIONES</span>

            <strong>
                ${escaparHTML(
                    recepcion.observaciones ||
                    "Sin observaciones"
                )}
            </strong>
        </div>

    </div>


    <div class="detalle-muestras">

        <span>
            MUESTRAS
        </span>

        ${
            lista.length
                ? lista
                    .map(
                        muestra => {

                            const certificado =
                                certificadosRecepcion.find(
                                    cert =>
                                        Number(cert.muestra_id) ===
                                        Number(muestra.id)
                                );

                            return `

                                <div class="detalle-muestra-completa">

                                    <div class="detalle-muestra-info">

                                        <strong>
                                            ${escaparHTML(
                                                muestra.codigo_muestra ||
                                                muestra.id
                                            )}
                                        </strong>

                                        <small>
                                            Estado:
                                            ${escaparHTML(
                                                muestra.estado ||
                                                "PENDIENTE"
                                            )}
                                        </small>

                                        <small>
                                            Descripción:
                                            ${escaparHTML(
                                                muestra.descripcion ||
                                                "Sin descripción"
                                            )}
                                        </small>

                                    </div>


                                    <div class="detalle-muestra-acciones">

                                        ${
                                            certificado?.archivo_url

                                                ? `

                                                    <a
                                                        href="${escaparHTML(
                                                            certificado.archivo_url
                                                        )}"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        class="boton-ver-certificado"
                                                    >
                                                        Ver certificado
                                                    </a>

                                                `

                                                : `

                                                    <span class="certificado-no-disponible">
                                                        Certificado no disponible
                                                    </span>

                                                `
                                        }

                                    </div>

                                </div>

                            `;

                        }
                    )
                    .join("")

                : `

                    <p>
                        No hay muestras registradas.
                    </p>

                `
        }

    </div>

`;



    } catch (error) {



        console.error(


            error


        );




        contenido.innerHTML = `


            <div class="estado-vacio">


                <p>


                    No se pudo cargar el detalle.


                </p>


            </div>


        `;



    }



}




/* =========================================================


   CERRAR MODAL


========================================================= */



document


    .getElementById(


        "cerrarModal"


    )


    ?.addEventListener(


        "click",


        () => {



            document


                .getElementById(


                    "modalDetalle"


                )


                ?.classList.add(


                    "oculto"


                );



        }


    );




document


    .getElementById(


        "modalDetalle"


    )


    ?.addEventListener(


        "click",


        evento => {



            if (


                evento.target.id ===


                "modalDetalle"


            ) {



                evento.currentTarget


                    .classList.add(


                        "oculto"


                    );



            }



        }


    );




/* =========================================================


   ACTUALIZACIÓN


========================================================= */



setInterval(


    () => {



        const dashboard =


            document.getElementById(


                "dashboard"


            );




        if (


            dashboard &&


            dashboard.classList.contains(


                "activa"


            )


        ) {



            cargarDashboard();



        }



    },


    30000


);




/* =========================================================


   INICIO


========================================================= */



document.addEventListener(


    "DOMContentLoaded",


    async () => {



        await comprobarSesion();



        await cargarDashboard();



    }


);

/* =========================================================
   EDITAR TIPO DE ANÁLISIS
========================================================= */

document.addEventListener("click", async evento => {

    const boton = evento.target.closest(
        "[data-editar-tipo-id]"
    );

    if (!boton) {
        return;
    }

    const tipoId = boton.dataset.editarTipoId;

    const contenido =
        document.getElementById("modalDetalleContenido");

    if (!contenido) {
        return;
    }

    try {

        const { data: tipo, error } =
            await clienteSupabase
                .from("tipos_analisis")
                .select(
                    "id,nombre,descripcion,precio_referencial,activo"
                )
                .eq("id", tipoId)
                .maybeSingle();

        if (error) {
            throw error;
        }

        if (!tipo) {
            await mostrarMensajeSistema(
                "error",
                "No encontrado",
                "No se encontró el tipo de análisis."
            );
            return;
        }

        contenido.innerHTML = `

            <div class="formulario-editar-analisis">

                <div class="campo-editar-analisis">

                    <label>
                        NOMBRE DEL ANÁLISIS
                    </label>

                    <input
                        id="editarTipoNombre"
                        type="text"
                        value="${escaparHTML(tipo.nombre || "")}"
                    >

                </div>


                <div class="campo-editar-analisis">

                    <label>
                        DESCRIPCIÓN
                    </label>

                    <input
                        id="editarTipoDescripcion"
                        type="text"
                        value="${escaparHTML(tipo.descripcion || "")}"
                    >

                </div>


                <div class="campo-editar-analisis">

                    <label>
                        PRECIO REFERENCIAL
                    </label>

                    <input
                        id="editarTipoPrecio"
                        type="number"
                        min="0"
                        step="0.01"
                        value="${tipo.precio_referencial ?? 0}"
                    >

                </div>


                <div class="acciones-editar-analisis">

                    <button
                        type="button"
                        class="boton-secundario"
                        id="cancelarEdicionAnalisis"
                    >
                        Cancelar
                    </button>

                    <button
                        type="button"
                        class="boton-principal"
                        id="guardarEdicionAnalisis"
                        data-tipo-editar-id="${tipo.id}"
                    >
                        Guardar cambios
                    </button>

                </div>

            </div>

        `;

    } catch (error) {

        console.error(
            "Error al cargar edición:",
            error
        );

        await mostrarMensajeSistema(
            "error",
            "Error",
            "No se pudo cargar la información para editar."
        );

    }

});


/* =========================================================
   CANCELAR EDICIÓN
========================================================= */

document.addEventListener("click", evento => {

    if (
        !evento.target.closest(
            "#cancelarEdicionAnalisis"
        )
    ) {
        return;
    }

    document
        .getElementById("modalDetalle")
        ?.classList.add("oculto");

});


/* =========================================================
   GUARDAR EDICIÓN
========================================================= */

document.addEventListener("click", async evento => {

    const boton = evento.target.closest(
        "#guardarEdicionAnalisis"
    );

    if (!boton) {
        return;
    }

    const tipoId =
        boton.dataset.tipoEditarId;

    const nombre =
        document
            .getElementById("editarTipoNombre")
            ?.value
            .trim();

    const descripcion =
        document
            .getElementById("editarTipoDescripcion")
            ?.value
            .trim();

    const precio =
        Number(
            document
                .getElementById("editarTipoPrecio")
                ?.value
        );


    if (!nombre) {

        await mostrarMensajeSistema(
            "error",
            "Datos incompletos",
            "Ingresa el nombre del análisis."
        );

        return;
    }


    if (
        isNaN(precio) ||
        precio < 0
    ) {

        await mostrarMensajeSistema(
            "error",
            "Precio inválido",
            "Ingresa un precio válido."
        );

        return;
    }


    boton.disabled = true;
    boton.textContent = "Guardando...";


    try {

        const { error } =
            await clienteSupabase
                .from("tipos_analisis")
                .update({
                    nombre: nombre,
                    descripcion:
                        descripcion || null,
                    precio_referencial: precio
                })
                .eq("id", tipoId);


        if (error) {
            throw error;
        }


        await cargarConfiguracion();


        document
            .getElementById("modalDetalle")
            ?.classList.add("oculto");


        await mostrarMensajeSistema(
            "exito",
            "Cambios guardados",
            "El tipo de análisis se actualizó correctamente."
        );


    } catch (error) {

        console.error(
            "Error al editar análisis:",
            error
        );


        await mostrarMensajeSistema(
            "error",
            "No se pudo guardar",
            "Ocurrió un error al actualizar el análisis."
        );


        boton.disabled = false;
        boton.textContent = "Guardar cambios";

    }

});

/* ======================================================
   ABRIR MUESTRA - LABORATORIO
====================================================== */





document.addEventListener("click", async function (evento) {

    const boton = evento.target.closest(
        '#tablaReportes button[data-reporte-id]'
    );

    if (!boton) return;

    evento.preventDefault();

    const reporteId = boton.getAttribute("data-reporte-id");

    console.log("VER REPORTE - ID:", reporteId);

    if (!reporteId) {
        console.error("El botón Ver no tiene data-reporte-id");
        return;
    }

    await abrirReporte(reporteId);
});


/* =====================================================
   /* =====================================================
  /* =====================================================
   /* =====================================================
  
   
   
/* =========================================
   DETALLE DE REPORTE
========================================= */

async function abrirReporte(muestraId) {

    const modal =
        document.getElementById("modalDetalle");

    const contenido =
        document.getElementById("modalDetalleContenido");

    const titulo =
        document.getElementById("modalTitulo");

    if (!modal || !contenido || !titulo) {
        console.error("No se encontró el modal de Reportes.");
        return;
    }

    modal.classList.remove("oculto");

    titulo.textContent = "Detalle de reporte";

    contenido.innerHTML = `
        <div class="estado-vacio">
            <p>Cargando información...</p>
        </div>
    `;

    try {

        const {
            data: muestra,
            error: errorMuestra
        } = await clienteSupabase
            .from("muestras")
            .select("*")
            .eq("id", muestraId)
            .maybeSingle();

        if (errorMuestra) {
            throw errorMuestra;
        }

        if (!muestra) {
            contenido.innerHTML = `
                <div class="estado-vacio">
                    <p>No se encontró la muestra.</p>
                </div>
            `;
            return;
        }

        const {
            data: recepcion,
            error: errorRecepcion
        } = await clienteSupabase
            .from("recepciones")
            .select("*")
            .eq("id", muestra.recepcion_id)
            .maybeSingle();

        if (errorRecepcion) {
            throw errorRecepcion;
        }

        let cliente = null;

        if (recepcion?.cliente_id) {

            const {
                data,
                error
            } = await clienteSupabase
                .from("clientes")
                .select("*")
                .eq("id", recepcion.cliente_id)
                .maybeSingle();

            if (error) {
                throw error;
            }

            cliente = data;
        }

        /*
        =====================================================
        RESULTADO ENVIADO POR LABORATORIO
        =====================================================
        */

        const evidencia =
            muestra.evidencia_url || null;

        const medio =
            String(
                muestra.medio_envio_resultado || ""
            )
            .trim()
            .toUpperCase();

        let resultadoHTML = "";

        /*
        -----------------------------------------------------
        CASO 1: LABORATORIO SUBIÓ ARCHIVO
        -----------------------------------------------------
        */

        if (
            evidencia &&
            medio === "ARCHIVO"
        ) {

            const extension =
                evidencia
                    .split("?")[0]
                    .split(".")
                    .pop()
                    ?.toLowerCase();

            const esImagen =
                ["jpg", "jpeg", "png", "webp", "gif"]
                    .includes(extension);

            const esPDF =
                extension === "pdf";

            resultadoHTML = `
                <div class="detalle-muestras">

                    <span>
                        RESULTADO ENVIADO POR LABORATORIO
                    </span>

                    <div
                        style="
                            margin-top:10px;
                            display:flex;
                            flex-direction:column;
                            gap:12px;
                        "
                    >

                        ${
                            esImagen
                                ? `
                                    <img
                                        src="${escaparHTML(evidencia)}"
                                        alt="Resultado de laboratorio"
                                        style="
                                            width:100%;
                                            max-height:500px;
                                            object-fit:contain;
                                            border:1px solid #333;
                                            border-radius:8px;
                                            background:#111;
                                        "
                                    >
                                `
                                : esPDF
                                ? `
                                    <iframe
                                        src="${escaparHTML(evidencia)}"
                                        style="
                                            width:100%;
                                            height:550px;
                                            border:1px solid #333;
                                            border-radius:8px;
                                        "
                                    ></iframe>
                                `
                                : `
                                    <p>
                                        El archivo está disponible.
                                    </p>
                                `
                        }

                        <div
                            style="
                                display:flex;
                                gap:10px;
                                flex-wrap:wrap;
                            "
                        >

                            <a
                                href="${escaparHTML(evidencia)}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="boton-secundario"
                            >
                                Abrir archivo
                            </a>

                            <a
                                href="${escaparHTML(evidencia)}"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                class="boton-principal"
                            >
                                Descargar archivo
                            </a>

                        </div>

                    </div>

                </div>
            `;

        }

        /*
        -----------------------------------------------------
        CASO 2: LABORATORIO ENVIÓ POR OTRO MEDIO
        -----------------------------------------------------
        */

        else if (
            medio === "OTRO MEDIO"
        ) {

            resultadoHTML = `
                <div class="detalle-muestras">

                    <span>
                        INFORMACIÓN DEL RESULTADO
                    </span>

                    <div
                        style="
                            margin-top:10px;
                            padding:18px;
                            border:1px solid #444;
                            border-radius:8px;
                        "
                    >
                        <strong>
                            La información fue enviada por otro medio.
                        </strong>

                        <p style="margin-top:8px;">
                            Laboratorio indicó que el resultado
                            no fue adjuntado al sistema.
                        </p>
                    </div>

                </div>
            `;

        }

        /*
        -----------------------------------------------------
        CASO 3: NO HAY INFORMACIÓN
        -----------------------------------------------------
        */

        else {

            resultadoHTML = `
                <div class="detalle-muestras">

                    <span>
                        RESULTADO DE LABORATORIO
                    </span>

                    <div
                        style="
                            margin-top:10px;
                            padding:18px;
                            border:1px solid #444;
                            border-radius:8px;
                        "
                    >
                        <p>
                            Laboratorio todavía no ha enviado
                            información del resultado.
                        </p>
                    </div>

                </div>
            `;

        }

        /*
        =====================================================
        MOSTRAR DETALLE
        =====================================================
        */

        contenido.innerHTML = `

            <div class="detalle-grid">

                <div>
                    <span>RECEPCIÓN</span>

                    <strong>
                        #${escaparHTML(
                            recepcion?.numero_recepcion ||
                            recepcion?.id ||
                            "-"
                        )}
                    </strong>
                </div>

                <div>
                    <span>CÓDIGO DE MUESTRA</span>

                    <strong>
                        ${escaparHTML(
                            muestra.codigo_muestra || "-"
                        )}
                    </strong>
                </div>

                <div>
                    <span>CLIENTE</span>

                    <strong>
                        ${escaparHTML(
                            cliente?.nombre ||
                            cliente?.razon_social ||
                            cliente?.nombre_completo ||
                            "-"
                        )}
                    </strong>
                </div>

                <div>
                    <span>ESTADO</span>

                    <strong>
                        ${escaparHTML(
                            muestra.estado || "-"
                        )}
                    </strong>
                </div>

            </div>

            <div class="detalle-muestras">

                <span>
                    DESCRIPCIÓN DE LA MUESTRA
                </span>

                <div>
                    <small>
                        ${escaparHTML(
                            muestra.descripcion ||
                            "Sin descripción"
                        )}
                    </small>
                </div>

            </div>

            <div class="detalle-muestras">

                <span>
                    OBSERVACIONES DE RECEPCIÓN
                </span>

                <div>
                    <small>
                        ${escaparHTML(
                            recepcion?.observaciones ||
                            "Sin observaciones"
                        )}
                    </small>
                </div>

            </div>

            ${resultadoHTML}

            <div class="detalle-acciones-reportes">

                <button
                    type="button"
                    class="boton-principal"
                    data-subir-certificado-reporte="${muestra.id}"
                >
                    Subir certificado final
                </button>

            </div>

        `;

    } catch (error) {

        console.error(
            "Error al abrir reporte:",
            error
        );

        contenido.innerHTML = `
            <div class="estado-vacio">
                <p>
                    No se pudo cargar la información
                    del reporte.
                </p>
            </div>
        `;
    }
}
window.abrirReporte = abrirReporte;

/* =========================================================
   SUBIR CERTIFICADO - ÁREA DE REPORTES
========================================================= */

document.addEventListener("click", async (evento) => {

    const boton = evento.target.closest(
        "[data-subir-certificado-reporte], [data-subir-certificado]"
    );

    if (!boton) {
        return;
    }

    const muestraId =
        boton.dataset.subirCertificadoReporte ||
        boton.dataset.subirCertificado;

    if (!muestraId) {
        return;
    }

    const input =
        document.createElement("input");

    input.type = "file";

    input.accept = ".pdf";

    input.style.display = "none";

    document.body.appendChild(input);

    input.click();

    input.addEventListener(
        "change",
        async () => {

            const archivo =
                input.files?.[0];

            if (!archivo) {
                input.remove();
                return;
            }

            try {

                boton.disabled = true;
                boton.textContent = "Subiendo...";

                /*
                =================================================
                SUBIR PDF AL STORAGE
                =================================================
                */

                const extension =
                    archivo.name
                        .split(".")
                        .pop()
                        ?.toLowerCase() || "pdf";

                const nombreArchivo =
                    `certificado-${muestraId}-${Date.now()}.${extension}`;

                const rutaArchivo =
                    `certificados/${nombreArchivo}`;

                const subida =
                    await clienteSupabase
                        .storage
                        .from("certificados")
                        .upload(
                            rutaArchivo,
                            archivo,
                            {
                                cacheControl: "3600",
                                upsert: false
                            }
                        );

                if (subida.error) {
                    throw subida.error;
                }

                /*
                =================================================
                OBTENER URL
                =================================================
                */

                const {
                    data: urlData
                } =
                    clienteSupabase
                        .storage
                        .from("certificados")
                        .getPublicUrl(
                            rutaArchivo
                        );

                const urlCertificado =
                    urlData?.publicUrl;

                if (!urlCertificado) {

                    throw new Error(
                        "No se pudo obtener la URL del certificado."
                    );

                }

                /*
                =================================================
                GUARDAR CERTIFICADO
                =================================================
                */

                // =====================================================
// GUARDAR / ACTUALIZAR CERTIFICADO
// =====================================================

const muestraIdNumero = Number(muestraId);

if (!muestraIdNumero) {
    throw new Error("ID de muestra inválido.");
}

// Primero verificamos si ya existe un certificado
const {
    data: certificadoExistente,
    error: errorBusquedaCertificado
} = await clienteSupabase
    .from("certificados")
    .select("id, numero_certificado")
    .eq("muestra_id", muestraIdNumero)
    .maybeSingle();

if (errorBusquedaCertificado) {
    throw errorBusquedaCertificado;
}


// =====================================================
// SI YA EXISTE → ACTUALIZAR
// =====================================================

if (certificadoExistente) {

    const {
        error: errorActualizarCertificado
    } = await clienteSupabase
        .from("certificados")
        .update({
    archivo_url: urlCertificado,
    fecha_emision: new Date().toISOString()
})
        .eq(
            "id",
            certificadoExistente.id
        );

    if (errorActualizarCertificado) {
        throw errorActualizarCertificado;
    }


// =====================================================
// SI NO EXISTE → CREAR
// =====================================================

} else {

    const numeroCertificado =
        `CJV-${new Date().getFullYear()}-${muestraIdNumero}`;

    const {
        error: errorInsertarCertificado
    } = await clienteSupabase
        .from("certificados")
        .insert({
    muestra_id: muestraIdNumero,
    numero_certificado: numeroCertificado,
    archivo_url: urlCertificado,
    fecha_emision: new Date().toISOString()
})

    if (errorInsertarCertificado) {
        throw errorInsertarCertificado;
    }
}

                /*
                =================================================
                FINALIZAR MUESTRA
                =================================================
                */

                const {
                    error: errorMuestra
                } =
                    await clienteSupabase
                        .from("muestras")
                        .update({
                            estado:
                                "ANÁLISIS FINALIZADO",

                            area_actual:
                                "FINALIZADO"
                        })
                        .eq(
                            "id",
                            muestraId
                        );

                if (errorMuestra) {
                    throw errorMuestra;
                }

                await mostrarExito(
    "Certificado subido correctamente.",
    "Certificado generado"
);

                /*
                =================================================
                CERRAR MODAL
                =================================================
                */

                document
                    .getElementById("modalDetalle")
                    ?.classList.add("oculto");

                /*
                =================================================
                ACTUALIZAR REPORTES
                =================================================
                */

                await cargarReportes();

                /*
                =================================================
                ACTUALIZAR DASHBOARD
                =================================================
                */

                if (
                    typeof cargarDashboard ===
                    "function"
                ) {
                    await cargarDashboard();
                }

            } catch (error) {

                console.error(
                    "Error al subir certificado:",
                    error
                );

                await mostrarError(
    "No se pudo subir el certificado.\n\n" +
    (
        error.message ||
        "Error desconocido."
    ),
    "Error al subir certificado"
);

            } finally {

                boton.disabled = false;

                boton.textContent =
                    "Subir certificado final";

                input.remove();

            }

        }
    );

});

/* =====================================================
   CRONÓMETRO DE 1 HORA - REPORTES
===================================================== */

function iniciarCronometrosReportes() {

    document
        .querySelectorAll("[data-cronometro-reporte]")
        .forEach(elemento => {

            if (elemento.dataset.iniciado === "true") {
                return;
            }

            elemento.dataset.iniciado = "true";

            const contador =
                elemento.querySelector("[data-cronometro]");

            const fechaInicio =
                new Date(
                    elemento.dataset.fechaInicio
                ).getTime();

            if (isNaN(fechaInicio)) {
                console.error(
                    "Fecha de inicio inválida:",
                    elemento.dataset.fechaInicio
                );
                return;
            }

            const actualizar = () => {

                const ahora = Date.now();

                const transcurrido =
                    Math.floor(
                        (ahora - fechaInicio) / 1000
                    );

                const restante = 3600 - transcurrido;

                if (restante <= 0) {

                    elemento.closest("tr")?.remove();

                    return;
                }

                const horas =
                    Math.floor(restante / 3600);

                const minutos =
                    Math.floor(
                        (restante % 3600) / 60
                    );

                const segundos =
                    restante % 60;

                if (contador) {
                    contador.textContent =
                        `${String(horas).padStart(2, "0")}:` +
                        `${String(minutos).padStart(2, "0")}:` +
                        `${String(segundos).padStart(2, "0")}`;
                }

                setTimeout(actualizar, 1000);
            };

            actualizar();
        });
}

