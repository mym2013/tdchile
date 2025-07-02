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
          4-. leermas: link a las pg siguientes*/
  
        var posts=[
          { title:' Procesos y Procedimientos T.I.',
            date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
            content:" Uno de nuestros principales servicios es el levantamiento de procesos y procedimientos. Nuestra filosofía " +
            " es que un bue trabajo en el levantamiento de procesos nos ahorra tiempo, y hace más factible el resultado " +
            " exitoso del proyecto, es por esto que utlizamos metodologías estandarizadas para su notación como lo es el  BPMN (Business Process Model and Notation) y utilizamos "+
            "herramientas de manejo de proyectos basados en PMI ( Project Management Institute) y su herramienta principal el famoso libro PMBOK "+
            " (del inglés Project Management Body of Knowledge), tambien contamos con los ambientes de trabajo para desarrollar esta notación que son de acceso gratuito como el conocido y muy buena herramienta  BIZAGI",
            leermas:'../index.html', 
          },
          { title:' Desarrollo de aplicaciones',
          date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
          content:"En el desarrollo de aplicaciones, contamos con una experiencia que se fué dando por la interacción natural "+
          " entre los levantamientos de procesos y los requerimientos sistémicos, fué asi que el paso al desarrollo de aplicaciones"+
          " se concretó de la mano de lenguajes como PHP en un principio, y javaScript, este último considerado el lenguaje" +
          " más popular, sin embargo en el ámbito del desarrollo de android Kotlin es el que mas ha crecido. Teniendo esto en consideración "+
            " nuestra organización a adoptado estos lenguajes cómo  sus principales herramientas para desarrollar aplicaciones y soluciones"+
            " para nuestros clientes, tambien contamos con solidos conocimientos en bases de datos SQL, MySQL, Oracle, y otras herramientas que permiten la integración de datos entre plataformas",

          leermas:'../index.html',
        },
        { title:' Videos de capacitación',
        date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
        content:"El área Audiovisual, es otro resultado de nuestro compromiso por dar soluciones a nuestros clientes, "+
        " contamos con un excelente equipo de profesionales audivisuales, capaces de hacer producciones de calidad, que permiten"+
        " ser un complemento ideal a los documentos emanados de procesos y procedimientos, permitiendo la capacitación a distancia y masiva",
        leermas:'../index.html',
      },
      { title:' Integración de plataformas complejas',
      date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
      content:" La necesidad de cambios, actualizaciones,"+
      " y la busqueda de eficiencia en las empresas, traen consigo cambios en las organizaciones, y estos cambios "+
      " muchas veces son tan radicales, que obligan a integrar distintos sofwares y hardwares a través de una solución integral; "+
      "estos desafíos requieren de un exhaustivo levantamiento del proyecto y sus implicancias en costos  y tiempos," +
      " Nuestra empresa cuenta con los profesionales adecuados para hacer este levantamiento y llevarlo adelante en forma exitosa a través de nestra experiencia en las herramientas T.I.",
      leermas:'../index.html',
    },
  
          ];
  
  
  
  posts.forEach((item, index) => {
    var post = `
      <article class="post">
        <h2>${item.title}</h2>
      
        <p>
          ${item.content}
        </p>
        <a href="${item.leermas}" class="button-more">Inicio</a>
      </article>
    `;
  
    /* con este console log hago la verificación visual del contenido de la variable post desde el jason */
    /* console.log(post); */
  
    $("#posts").append(post);
  });
  
  // selector de temas
  
  
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
  