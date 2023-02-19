const skills = {
    "html" : "El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos. Por ejemplo, sus contenidos podrían ser párrafos, una lista con viñetas, o imágenes y tablas de datos. ",
    "css" : "Las hojas de estilo en cascada (CSS, cascading style sheets) permiten crear páginas web atractivas. Es lo que le da el toque a tu sitio web.",
    "js" : "JavaScript es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web, cada vez que una página web hace algo más que sentarse allí y mostrar información estática para que la veas, muestra oportunas actualizaciones de contenido, mapas interactivos, animación de Gráficos 2D/3D, desplazamiento de máquinas reproductoras de vídeo, etc., puedes apostar que probablemente JavaScript está involucrado. Es la tercera capa del pastel de las tecnologías web estándar, dos de las cuales (HTML y CSS) hemos cubierto con mucho más detalle en otras partes del Área de aprendizaje.",
    "ts" : "TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases. ",
    "php" : "PHP es un lenguaje de programación para desarrollar aplicaciones y crear sitios web que conquista cada día más seguidores. Fácil de usar y en constante perfeccionamiento es una opción segura para aquellos que desean trabajar en proyectos calificados y sin complicaciones.",
    "python" : "Es un lenguaje de programación, multiparadigma y multinivel, con soporte en programación orientada a objetos, imperativa y funcional. Con este tipo de lenguaje se pueden crear aplicaciones nativas e híbridas, y cuenta con una sintaxis accesible para las personas con un nivel de 'alfabetización' básico en lenguajes de programación. ",
    "node" : "Se trata de un entorno de código abierto (open source) multiplataforma que ejecuta el código JavaScript fuera de un navegador. Este entorno de ejecución de JavaScript se orienta a eventos asíncronos (los eventos no dependen de que otros se hayan ejecutado previamente) y permite construir aplicaciones en red escalables, es decir, tiene la capacidad de realizar muchas conexiones de manera simultánea sin que tenga que leer el código línea a línea, ni abrir múltiples procesos.",
    "mysql" : "MySQL es un sistema de gestión de bases de datos relacionales (RDBMS) de código abierto respaldado por Oracle y basado en el lenguaje de consulta estructurado (SQL). MySQL funciona prácticamente en todas las plataformas, incluyendo Linux, UNIX y Windows. Aunque puede utilizarse en una amplia gama de aplicaciones, MySQL se asocia más a menudo con las aplicaciones web y la publicación en línea.",
    "docker" : "Docker es una plataforma de software que le permite crear, probar e implementar aplicaciones rápidamente. Docker empaqueta software en unidades estandarizadas llamadas contenedores que incluyen todo lo necesario para que el software se ejecute, incluidas bibliotecas, herramientas de sistema, código y tiempo de ejecución. Con Docker, puede implementar y ajustar la escala de aplicaciones rápidamente en cualquier entorno con la certeza de saber que su código se ejecutará.",
    "linux" : "Linux es el nombre que reciben una serie de sistemas operativos de tipo Unix bajo la licencia GNU GPL (General Public License o Licencia Pública General de GNU) que son su mayoría gratuitos y con todo lo necesario para hacer funcionar un PC, con la peculiaridad de que podemos instalar un sistema muy ligero e ir añadiendo todo lo necesario posteriormente o según lo vayamos necesitando. Linux es multiusuario, multitarea y multiplataforma, además puede funcionar en modo consola para un consumo mínimo de recursos, pero que también podemos hacer funcionar con entorno gráfico, instalando uno mediante comandos de terminal o adquiriendo un paquete en el que venga uno incluido. Si quieres probarlo puedes usar una máquina virtual antes de instalarlo en tu PC. Al ser código libre podemos utilizarlo, copiarlo, modificarlo y redistribuirlo libremente para cualquier uso que queramos darle, pero siempre bajo los términos de la licencia GPL de GNU. Un ejemplo es el caso de Android, que usa el núcleo Linux pero que en este caso no tiene componentes GNU sino que está personalizado para los teléfonos móviles o tablets que lo usan.",
    "cli" : "La consola de Linux es una consola del sistema interno del kernel de Linux. La consola de Linux proporciona una manera para que el kernel y otros procesos envíen resultados de texto al usuario y reciban entradas de texto del usuario",
    "vpn" : "Una red privada virtual (VPN) es una tecnología de red de ordenadores que permite una extensión segura de la red de área local sobre una red pública o no controlada como Internet."
}

document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add('is-active');
    }

    function closeModal($el) {
        $el.classList.remove('is-active');
    }

    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const skill = $trigger.dataset.skill;
        const $target = document.getElementById(modal);

        
        $trigger.addEventListener('click', () => {
            document.getElementById('contenido').innerHTML = "<p>"+skills[skill]+"</p>";
            openModal($target);
        });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.delete-modal') || []).forEach(($close) => {
        const $target = $close.closest('.modal');

        $close.addEventListener('click', () => {
            closeModal($target);
        });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        const e = event || window.event;

        if (e.keyCode === 27) { // Escape key
            closeAllModals();
        }
    });
});