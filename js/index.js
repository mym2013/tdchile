$(document).ready(function(){

    /* slider */
      $(".galeria").bxSlider({
          mode: "fade",
          captions: true,
          slideWidth: 1200
        });
  
  
        //post
  
  
     /*      propiedades de los jason de los post
          1-. van a tener un titulo
          2-. una fecha
          3-. el cuerpo del post q es un texto
          4-. un leer mas que agregue yo 
          5-. agregando logo pequeño tdhchile*/
  
        var posts=[
          { title:' Sobre TDCHILE ingeniería',
            
            
            date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
            content:"Tdchile ingeniería nace en el año 2006, para entregar soluciones en el ámbito de la industria de las telecomunicaciones abordando primeramente los requerimientos específicos   de procesos y procedimientos. Desde ese momento se instaló como un sólido apoyo a ENTEL para muchas de sus áreas logrando abordar problemas tradicionales con herramientas de diagramas de procesos, que posteriormente derivarían en la ya conocida BPMB.... " ,
         
            
            leermas:'paginas/sobre_tdchile.html',
          },
          { title:'Nuestros Servicios',
          date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
          content:"Nuestros servicios tienen un  contexto tecnológico, dónde somos muy fuertes en el ámbito del levantamiento de procesos y procedimientos, lo cual es clave para todo tipo de mejoras continuas, modificaciones de procesos sistémicos, e incluso administrativos, detección de fallas, diseño de medidores de desempeño, y automatizaciones de tareas complejas...",
          leermas:'paginas/nuestros_servicios.html'
        },
          { title:'Nuestros Clientes',
            date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
            content:"A lo largo de los años hemos tenido una gran cantidad de clientes de distintas industrias, pero nuestro mayor desempeño ha sido  en el ambito de las telecomunicaciones, con al menos un 75% de nuestros proyectos, en esta línea luego siguen otras industrias destacadas, como la minería, y la industria de compra y venta de automóviles. Sí desea saber de nuestros principales clientes puede visitar la sección nuestros clientes en el link abajo (leer más)",
            leermas:'paginas/clientes.html'
          },
          { title:'Noticias',
            date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
            content:"En nuestra sección noticias podrás encontrar información de tecnologías, contingencia, y otras actividades, presiona leer mas abajo, y encuentra novedades interesantes.",
            leermas:'paginas/noticias.html'
          },
  
  
          ];
  
  
  /* console.log(posts); */
  
  /* posts.forEach((item, index) => {
  var post =
         <article class="post">
                  <h2>${item.title}</h2>
                  <span class="fecha"> ${item.date}<span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    felis lorem, luctus in ex id, faucibus dignissim lorem.
                    Etiam ut urna in tellus tempus ultricies. Nulla est lectus,
                    dictum nec mi quis, aliquam interdum sapien. Suspendisse eget
                    sapien a magna ultricies tincidunt at viverra diam. Sed eu nisi
                    semper, varius orci non, viverra nulla. Nulla laoreet ac massa e
                    t sodales. Vivamus mollis tincidunt lacinia. Sed pulvinar arcu
                    orci, et ultricies ligula interdum eget. Proin lectus odio,
                    tempor nec pellentesque non, porta vitae lectus.
                  </p>
                  <a href="#" class="button-more">Leer más</a>
              </article>
  
  
  
  
  }); */
  
  posts.forEach((item, index) => {
    var post = `
      <article class="post">
        <h2>${item.title}</h2>
        
        <p>
          ${item.content}
        </p>
        <a href="${item.leermas}" class="button-more">Leer más</a>
      </article>
    `;
  
    /* con este console log hago la verificación visual del contenido de la variable post desde el jason */
    /* console.log(post); */
  
    $("#posts").append(post);
  });
  
  // selector de temas  son los fondes de pantalla que apoyan la pagina
  
  
      var theme = $("#theme");
  
      $("#to-green").click(function(){
          theme.attr("href", "css/green.css");
      });
  
      $("#to-red").click(function(){
          theme.attr("href", "css/red.css");
      });
  
      $("#to-blue").click(function(){
          theme.attr("href", "css/blue.css");
      });

      $("#to-gray").click(function(){
        theme.attr("href", "css/gris.css");
    });

  
  
  //scroll arriba de la web
  $(".subir").click(function(e){
    e.preventDefault();
  $("html, body").animate({
    scrollTop: 0
  },500);
  
  return false;
  });
  
  // login falso
  
  $("#login form").submit(function(){
    var form_name = $("#form_name").val();
  
    localStorage.setItem("form_name", form_name);
  
  });
  
  var form_name = localStorage.getItem("form_name");
  
  if(form_name != null && form_name != "undefined"){
    var about_parrafo = $("#about p");
  
    about_parrafo.html("<br><strong>Bienvenido, "+ form_name +"</strong>");
    about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");
  
    $("#login").hide();
  
    $("#logout").click(function(){
      localStorage.clear();
      location.reload(true);
    });
  
  
  }
  
  
  
  });
  