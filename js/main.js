$(document).ready(function() {
    //Slider
    if(window.location.href.indexOf('index')>-1){

        $(function() {
            $('.bxslider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 1425,
                responsive: true
            });
        });
    }

    //posts
    if(window.location.href.indexOf('index')>-1){
    var posts = [

        {
            Title: "Prueba de titulo 1",
            date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id risus nunc. Sed sit amet hendrerit tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam sit amet dictum felis, ut interdum",
        },
        {
            Title: "Prueba de titulo 2",
            date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id risus nunc. Sed sit amet hendrerit tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam sit amet dictum felis, ut interdum",
        },
        {
            Title: "Prueba de titulo 3",
            date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id risus nunc. Sed sit amet hendrerit tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam sit amet dictum felis, ut interdum",
        },
        {
            Title: "Prueba de titulo 4",
            date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id risus nunc. Sed sit amet hendrerit tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam sit amet dictum felis, ut interdum",
        },
        {
            Title: "Prueba de titulo 5",
            date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id risus nunc. Sed sit amet hendrerit tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam sit amet dictum felis, ut interdum",
        }

    ]

    posts.forEach((item, index) => {
        var post =  `
        <article class = "post" >
        <h2 > ${item.Title} </h2>    
        <span class = "date"> ${item.date} </span>   
        <p> ${item.content} </p> 
        <a href = "#"class = "button-more" > Leer más </a> 
         </article > 
         ` ;

        $("#posts").append(post);
    });
    }
 // Selector de tema
 
    var theme=$("#theme");

    $("#to-green").click(function(){
        theme.attr("href","css/green.css");
    });
    
    $("#to-red").click(function(){
        theme.attr("href","css/red.css");
    });
    $("#to-blue").click(function(){
        theme.attr("href","css/blue.css");
    }); 

// Scroll arriba de la web
    $(".subir").click(function(e){
        e.preventDefault(); // esto es para que el link no haga la funcion principal que es llevarnos a otro enlace.
        $("html, body").animate({
            scrollTop:0 // esto es para que vaya a la posicion mas arriba de la pagina
        }, 500);

        return false;
    });
//login falso
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);

    });
    var form_name=localStorage.getItem("form_name");
    if(form_name!=null && form_name!="undefined"){
        var about_parrafo=$("#about p");
        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
        about_parrafo.append("<a href='#' id='logout'> Cerrar Sesion </a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }
    //acordeon

    if(window.location.href.indexOf('about')>-1){
        $( function() {
            var icons = {
              header: "ui-icon-circle-arrow-e",
              activeHeader: "ui-icon-circle-arrow-s"
            };
            $( "#acordeon" ).accordion({
              icons: icons
            });
            $( "#toggle" ).button().on( "click", function() {
              if ( $( "#acordeon" ).accordion( "option", "icons" ) ) {
                $( "#acordeon" ).accordion( "option", "icons", null );
              } else {
                $( "#acordeon" ).accordion( "option", "icons", icons );
              }
            });
          } );
    }
    // reloj
    if(window.location.href.indexOf('reloj')>-1){
        setInterval(function(){
            var reloj=moment().format("h:mm:ss");
         $("#reloj").html(reloj);

        },1000);  
    }

    //validacion
    if(window.location.href.indexOf('contacto')>-1){
     
        $("form input[name='date']").datepicker({
            dateFormat:'dd-mm-yy'
        });
        $.validate({
          lang:'es',
          errorMessagePosition:'top',
          scrollToTopOnError:true
      });
    }

});