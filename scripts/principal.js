// =========================================================
// LABORATORIO CJV S.A.C.
// JAVASCRIPT PRINCIPAL
// =========================================================



// =========================================================
// ELEMENTOS PRINCIPALES
// =========================================================

const cabecera =
    document.getElementById("cabecera");

const botonMenu =
    document.getElementById("botonMenu");

const navegacion =
    document.getElementById("navegacion");



// =========================================================
// CABECERA CON SCROLL
// =========================================================

function actualizarCabecera() {

    if (window.scrollY > 35) {

        cabecera.classList.add("scrolled");

    } else {

        cabecera.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    actualizarCabecera
);


actualizarCabecera();



// =========================================================
// MENÚ MÓVIL
// =========================================================

botonMenu.addEventListener(
    "click",
    () => {

        navegacion.classList.toggle("activo");

        document.body.classList.toggle("menu-abierto");


        const lineas =
            botonMenu.querySelectorAll("span");


        if (
            navegacion.classList.contains("activo")
        ) {

            lineas[0].style.transform =
                "translateY(4.5px) rotate(45deg)";

            lineas[1].style.transform =
                "translateY(-4.5px) rotate(-45deg)";

        } else {

            lineas[0].style.transform =
                "none";

            lineas[1].style.transform =
                "none";

        }

    }
);



// =========================================================
// CERRAR MENÚ AL PULSAR ENLACE
// =========================================================

const enlacesNavegacion =
    document.querySelectorAll(
        ".navegacion a"
    );


enlacesNavegacion.forEach(
    enlace => {

        enlace.addEventListener(
            "click",
            () => {

                navegacion.classList.remove(
                    "activo"
                );

                document.body.classList.remove(
                    "menu-abierto"
                );


                const lineas =
                    botonMenu.querySelectorAll(
                        "span"
                    );


                lineas[0].style.transform =
                    "none";

                lineas[1].style.transform =
                    "none";

            }
        );

    }
);



// =========================================================
// CARRUSEL DEL HERO
// =========================================================

const slidesInicio =
    document.querySelectorAll(
        ".inicio-slide"
    );


const indicadoresInicio =
    document.querySelectorAll(
        ".indicador-inicio"
    );


let slideInicioActual = 0;

let intervaloInicio;



function mostrarSlideInicio(indice) {

    if (
        slidesInicio.length === 0
    ) {

        return;

    }


    slidesInicio.forEach(
        slide => {

            slide.classList.remove(
                "activo"
            );

        }
    );


    indicadoresInicio.forEach(
        indicador => {

            indicador.classList.remove(
                "activo"
            );

        }
    );


    slidesInicio[indice]
        .classList
        .add("activo");


    if (
        indicadoresInicio[indice]
    ) {

        indicadoresInicio[indice]
            .classList
            .add("activo");

    }


    slideInicioActual =
        indice;

}



function siguienteSlideInicio() {

    const siguiente =

        (
            slideInicioActual + 1
        )

        % slidesInicio.length;


    mostrarSlideInicio(
        siguiente
    );

}



function detenerCarruselInicio() {

    if (
        intervaloInicio
    ) {

        clearInterval(
            intervaloInicio
        );

    }

}



function iniciarCarruselInicio() {

    detenerCarruselInicio();


    intervaloInicio =
        setInterval(
            siguienteSlideInicio,
            2000
        );

}



indicadoresInicio.forEach(
    indicador => {

        indicador.addEventListener(
            "click",
            () => {

                const indice =
                    Number(
                        indicador.dataset.slide
                    );


                mostrarSlideInicio(
                    indice
                );


                iniciarCarruselInicio();

            }
        );

    }
);



if (
    slidesInicio.length
) {

    mostrarSlideInicio(0);

    iniciarCarruselInicio();

}



// =========================================================
// CARRUSEL DE SERVICIOS
// =========================================================

const fondosServicios =
    document.querySelectorAll(
        ".servicio-fondo"
    );


const itemsServicios =
    document.querySelectorAll(
        ".servicio-item"
    );


const servicioActualTexto =
    document.getElementById(
        "servicioActual"
    );


const barraServicio =
    document.getElementById(
        "barraServicio"
    );


let servicioActual = 0;

let intervaloServicios;



function mostrarServicio(indice) {

    if (
        fondosServicios.length === 0
        ||
        itemsServicios.length === 0
    ) {

        return;

    }


    fondosServicios.forEach(
        fondo => {

            fondo.classList.remove(
                "activo"
            );

        }
    );


    itemsServicios.forEach(
        item => {

            item.classList.remove(
                "activo"
            );

        }
    );


    fondosServicios[indice]
        .classList
        .add("activo");


    itemsServicios[indice]
        .classList
        .add("activo");


    servicioActual =
        indice;


    if (
        servicioActualTexto
    ) {

        servicioActualTexto.textContent =

            String(
                indice + 1
            ).padStart(
                2,
                "0"
            );

    }


    if (
        barraServicio
    ) {

        const porcentaje =

            (
                (indice + 1)
                /
                itemsServicios.length
            )

            * 100;


        barraServicio.style.width =
            porcentaje + "%";

    }

}



function siguienteServicio() {

    const siguiente =

        (
            servicioActual + 1
        )

        % itemsServicios.length;


    mostrarServicio(
        siguiente
    );

}



function detenerCarruselServicios() {

    if (
        intervaloServicios
    ) {

        clearInterval(
            intervaloServicios
        );

    }

}



function iniciarCarruselServicios() {

    detenerCarruselServicios();


    intervaloServicios =
        setInterval(
            siguienteServicio,
            2000
        );

}



itemsServicios.forEach(
    item => {

        const cambiarServicio = () => {

            const indice =
                Number(
                    item.dataset.servicio
                );


            mostrarServicio(
                indice
            );


            iniciarCarruselServicios();

        };


        item.addEventListener(
            "mouseenter",
            cambiarServicio
        );


        item.addEventListener(
            "click",
            cambiarServicio
        );

    }
);



if (
    itemsServicios.length
) {

    mostrarServicio(0);

    iniciarCarruselServicios();

}



// =========================================================
// PAUSAR AL CAMBIAR DE PESTAÑA
// =========================================================

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.hidden
        ) {

            detenerCarruselInicio();

            detenerCarruselServicios();

        } else {

            iniciarCarruselInicio();

            iniciarCarruselServicios();

        }

    }
);



// =========================================================
// ANIMACIONES AL HACER SCROLL
// =========================================================

const elementosRevelar =
    document.querySelectorAll(
        ".revelar"
    );


const observadorRevelar =
    new IntersectionObserver(

        entradas => {

            entradas.forEach(
                entrada => {

                    if (
                        entrada.isIntersecting
                    ) {

                        entrada.target
                            .classList
                            .add(
                                "visible"
                            );


                        observadorRevelar
                            .unobserve(
                                entrada.target
                            );

                    }

                }
            );

        },

        {

            threshold: 0.08,

            rootMargin:
                "0px 0px -40px 0px"

        }

    );


elementosRevelar.forEach(
    elemento => {

        observadorRevelar
            .observe(
                elemento
            );

    }
);



// =========================================================
// ACORDEÓN
// =========================================================

const botonesAcordeon =
    document.querySelectorAll(
        ".acordeon-boton"
    );


botonesAcordeon.forEach(
    boton => {

        boton.addEventListener(
            "click",
            () => {

                const item =
                    boton.closest(
                        ".acordeon-item"
                    );


                const contenido =
                    item.querySelector(
                        ".acordeon-contenido"
                    );


                const abierto =
                    item.classList
                        .contains(
                            "activo"
                        );


                document
                    .querySelectorAll(
                        ".acordeon-item"
                    )
                    .forEach(
                        otroItem => {

                            otroItem.classList
                                .remove(
                                    "activo"
                                );


                            const otroContenido =
                                otroItem.querySelector(
                                    ".acordeon-contenido"
                                );


                            otroContenido.style.maxHeight =
                                null;

                        }
                    );


                if (
                    !abierto
                ) {

                    item.classList
                        .add(
                            "activo"
                        );


                    contenido.style.maxHeight =

                        contenido.scrollHeight
                        + "px";

                }

            }
        );

    }
);



// =========================================================
// SEGUIMIENTO
// =========================================================

const inputSeguimiento =
    document.getElementById(
        "codigoSeguimiento"
    );


const botonSeguimiento =
    document.getElementById(
        "botonSeguimiento"
    );


const resultadoSeguimiento =
    document.getElementById(
        "resultadoSeguimiento"
    );



function consultarSeguimiento() {

    if (
        !inputSeguimiento
        ||
        !resultadoSeguimiento
    ) {

        return;

    }


    const codigo =
        inputSeguimiento.value
            .trim()
            .toUpperCase();


    if (
        codigo === ""
    ) {

        resultadoSeguimiento.innerHTML = `

            <strong>
                Ingresa tu código de seguimiento.
            </strong>

        `;

        return;

    }


    resultadoSeguimiento.innerHTML = `

        Código consultado:

        <strong>
            ${codigo}
        </strong>

        <br><br>

        <span>
            La consulta real del estado se habilitará
            cuando conectemos esta página con el sistema
            de Laboratorio CJV y la base de datos.
        </span>

    `;

}



if (
    botonSeguimiento
) {

    botonSeguimiento.addEventListener(
        "click",
        consultarSeguimiento
    );

}



if (
    inputSeguimiento
) {

    inputSeguimiento.addEventListener(
        "keydown",
        evento => {

            if (
                evento.key ===
                "Enter"
            ) {

                consultarSeguimiento();

            }

        }
    );

}



// =========================================================
// CONTADOR DE AÑOS
// =========================================================

const contadores =
    document.querySelectorAll(
        ".contador"
    );


const observadorContadores =
    new IntersectionObserver(

        entradas => {

            entradas.forEach(
                entrada => {

                    if (
                        entrada.isIntersecting
                    ) {

                        const elemento =
                            entrada.target;


                        const valorFinal =
                            Number(
                                elemento.dataset.valor
                            );


                        let valorActual =
                            0;


                        const duracion =
                            1100;


                        const pasos =
                            35;


                        const incremento =
                            valorFinal
                            /
                            pasos;


                        const tiempo =
                            duracion
                            /
                            pasos;


                        const intervalo =
                            setInterval(
                                () => {

                                    valorActual +=
                                        incremento;


                                    if (
                                        valorActual
                                        >=
                                        valorFinal
                                    ) {

                                        elemento.textContent =
                                            valorFinal;

                                        clearInterval(
                                            intervalo
                                        );

                                        return;

                                    }


                                    elemento.textContent =
                                        Math.floor(
                                            valorActual
                                        );

                                },

                                tiempo
                            );


                        observadorContadores
                            .unobserve(
                                elemento
                            );

                    }

                }
            );

        },

        {
            threshold: 0.6
        }

    );


contadores.forEach(
    contador => {

        observadorContadores
            .observe(
                contador
            );

    }
);



// =========================================================
// MENÚ ACTIVO SEGÚN SCROLL
// =========================================================

const secciones =
    document.querySelectorAll(
        "section[id]"
    );


const enlacesNav =
    document.querySelectorAll(
        ".enlace-nav"
    );


function actualizarMenuActivo() {

    let seccionActual =
        "inicio";


    secciones.forEach(
        seccion => {

            const inicioSeccion =

                seccion.offsetTop
                - 190;


            if (
                window.scrollY
                >=
                inicioSeccion
            ) {

                seccionActual =
                    seccion.id;

            }

        }
    );


    enlacesNav.forEach(
        enlace => {

            enlace.classList.remove(
                "activo"
            );


            if (
                enlace.getAttribute(
                    "href"
                )

                ===

                "#"
                +
                seccionActual
            ) {

                enlace.classList.add(
                    "activo"
                );

            }

        }
    );

}



window.addEventListener(
    "scroll",
    actualizarMenuActivo
);


actualizarMenuActivo();



// =========================================================
// EFECTO PARALLAX HERO
// =========================================================

const seccionInicio =
    document.querySelector(
        ".inicio"
    );


if (
    seccionInicio
    &&
    window.innerWidth > 900
) {

    seccionInicio.addEventListener(
        "mousemove",
        evento => {

            const rect =
                seccionInicio
                    .getBoundingClientRect();


            const x =
                evento.clientX
                -
                rect.left;


            const y =
                evento.clientY
                -
                rect.top;


            const movimientoX =

                (
                    x
                    /
                    rect.width
                    -
                    0.5
                )

                * 8;


            const movimientoY =

                (
                    y
                    /
                    rect.height
                    -
                    0.5
                )

                * 8;


            const slideActivo =
                document.querySelector(
                    ".inicio-slide.activo"
                );


            if (
                slideActivo
            ) {

                slideActivo.style.backgroundPosition =

                    `calc(50% + ${movimientoX}px)
                     calc(50% + ${movimientoY}px)`;

            }

        }
    );


    seccionInicio.addEventListener(
        "mouseleave",
        () => {

            slidesInicio.forEach(
                slide => {

                    slide.style.backgroundPosition =
                        "center";

                }
            );

        }
    );

}



// =========================================================
// LUZ DEL CURSOR
// =========================================================

const cursorLuz =
    document.getElementById(
        "cursorLuz"
    );


if (
    cursorLuz
    &&
    window.innerWidth > 900
) {

    document.addEventListener(
        "mousemove",
        evento => {

            cursorLuz.style.opacity =
                "1";


            cursorLuz.style.left =
                evento.clientX
                + "px";


            cursorLuz.style.top =
                evento.clientY
                + "px";

        }
    );


    document.addEventListener(
        "mouseleave",
        () => {

            cursorLuz.style.opacity =
                "0";

        }
    );

}



// =========================================================
// EFECTO MUY SUAVE EN TARJETAS
// =========================================================

const tarjetasMovimiento =
    document.querySelectorAll(
        ".paso, .calidad-item, .ventaja"
    );


tarjetasMovimiento.forEach(
    tarjeta => {

        tarjeta.addEventListener(
            "mousemove",
            evento => {

                if (
                    window.innerWidth
                    <=
                    900
                ) {

                    return;

                }


                const rect =
                    tarjeta
                        .getBoundingClientRect();


                const x =
                    evento.clientX
                    -
                    rect.left;


                const y =
                    evento.clientY
                    -
                    rect.top;


                const rotacionY =

                    (
                        x
                        /
                        rect.width
                        -
                        0.5
                    )

                    * 2;


                const rotacionX =

                    (
                        y
                        /
                        rect.height
                        -
                        0.5
                    )

                    * -2;


                tarjeta.style.transform =

                    `translateY(-10px)
                     rotateX(${rotacionX}deg)
                     rotateY(${rotacionY}deg)`;

            }
        );


        tarjeta.addEventListener(
            "mouseleave",
            () => {

                tarjeta.style.transform =
                    "";

            }
        );

    }
);



// =========================================================
// CORREGIR MENÚ AL REDIMENSIONAR
// =========================================================

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 900
        ) {

            navegacion.classList.remove(
                "activo"
            );


            document.body.classList.remove(
                "menu-abierto"
            );


            const lineas =
                botonMenu.querySelectorAll(
                    "span"
                );


            if (
                lineas.length >= 2
            ) {

                lineas[0].style.transform =
                    "none";

                lineas[1].style.transform =
                    "none";

            }

        }

    }
);



// =========================================================
// CARGA COMPLETA
// =========================================================

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "pagina-cargada"
        );


        console.log(
            "LABORATORIO CJV S.A.C. - Sitio cargado correctamente."
        );

    }
);