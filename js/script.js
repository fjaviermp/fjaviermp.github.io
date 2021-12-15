$(document).ready(function() {
    var width = $(window).width();
    if (width <= 400){
        $(".servicio").remove();
        var content = `
        <div class="carta_serv">
            <i class="icono_serv fa-brands fa-git-alt"></i>
            <h3 class="titulo_serv">Lorem Ipsum</h3>
            <p class="desc_serv">Lorem ipsum dolor sit amet por la gloria de mi madre jorl</p>
        </div>
        <div class="carta_serv">
            <i class="icono_serv fa-brands fa-git-alt"></i>
            <h3 class="titulo_serv">Lorem Ipsum</h3>
            <p class="desc_serv">Lorem ipsum dolor sit amet por la gloria de mi madre jorl</p>
        </div>
        `;
        $(".tarjetas_servicios").append(content);
    }
});