function ocultarTodo() {
    let contenidos = document.querySelectorAll('.contenido');
    contenidos.forEach(function(opt) {
        opt.classList.add("ocultar");
    });
}

var menu = document.querySelectorAll('.opcion');

menu.forEach(function(opt) {
    opt.addEventListener('click', function (e) {
        ocultarTodo();
        menu.forEach(function(opt) {
            opt.classList.remove("is-active");
        });
        let el = e.target;    
        let url = new URL(el.href);
        
        el.classList.add('is-active');
        document.querySelector(url.hash).classList.remove('ocultar');

        document.getElementById('navbarButton').click();
    });
});