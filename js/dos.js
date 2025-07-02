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
        { title:' Nuestra Historia tdchile ingeniería',
          date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
          content:"Tdchile ingeniería nace en el año 2006, para entregar soluciones"+
          " en el ámbito de la industria de las telecomunicaciones abordando primeramente "+
          " los requerimientos específicos relacionados con el levantamiento de procesos y "+
          " procedimientos. Desde ese momento se instaló como un sólido apoyo a ENTEL para"+
          " muchas de sus áreas, logrando abordar problemas tradicionales con herramientas de"+
          " diagramas de procesos que, posteriormente derivarían en la ya conocida"+
          ' <a href="https://es.wikipedia.org/wiki/Business_Process_Model_and_Notation" target="_blank">BPMN</a>, en este camino,'+
          " surgieron nuevas formas de abordar los distintos problemas como la creación de videos de "+
          "capacitación tan normal hoy en día, pero por allá en el 2007, aun no se consideraba esta "+
          " práctica tan extendida, -recordar que youTube fue fundada en el 2005- Además de incorporar "+
          " en ese momento equipos multidisciplinarios, efectuando en ese entonces actividades muy"+
          " parecidas y las que hoy estan estandarizadas  a través de metodologías como AGILE, SCRUM, a través de la prestigiosa:  Project Management institute "+
          " (recordar  que hoy existe un completo estándar a través de   "+
          ' <a href="https://es.wikipedia.org/wiki/Project_Management_Institute)" target="_blank"> PMI</a>'+
          " (de sus siglas en inglés)  de esa forma tdchile fue " +
          " ganando terreno que le permitió crecer y lo mejor de todo, la satisfacción de poder brindar"+
          " soluciones de calidad  respetando los tiempos acordados con clientes. Hoy en día TDCHILE está"+
          " tratando como todas las empresas de mantenerse activa, y encarando tiempos difíciles como los"+
          " que vive el mundo y la sociedad ahora en este año 2020. Si le interesan nuestros productos o tiene"+
          " cualquier consulta, no  dude en enviarnos un correo a nuestra casilla electrónica de contacto.",
          leermas:'../index.html',
        },
        { title:' Nuestro Equipo',
        date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
        content:" Nuestro equipo de trabajo es multidisciplinario, contando con Ingnieros civiles industriales, Ingenieros Informáticos, tecnicos en soporte y redes, también contamos con un área audiovisual y de capacitación a distancia, y contamos con asesores experimentados como SCRUM MASTER, y expertos en charlas de capacitación y seguridad digital", 
        leermas:'../index.html',
      },
      { title:' Metodologías',
      date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
      content:"Nuestras metodologías para el ámbito del levantamiento de procesos y "+
      "procedimientos actualmente está basada en el estándar internacional"+
      " BPMN (Business Process Model and Notation, de sus siglas en inglés),"+
      " esta metodología es la piedra angular para desarrollar nuestros proyectos,"+
      " pues a través de los años nos hemos dado cuenta "+
      "que el tiempo invertido en un buen levantamiento  ahorra tiempos y dinero en"+ 
      " los desarrollos futuros, y aumenta considerablemente las posibilidades de "+
      "exito y conformidad de nuestros clientes. " +
   
      "También y de forma general utilizamos las metodologías asociadas al PMI "+
      "(El Project Management Institute)  que es una asociación estadounidense  sin fines de lucro que asocia profesionales"+
      " relacionados con la gestión de proyectos, para ello nosotros utilizamos como guía el "+
       '<a href="https://es.wikipedia.org/wiki/Gu%C3%ADa_de_los_fundamentos_para_la_direcci%C3%B3n_de_proyectos" target="_blank">PMBOK</a>'+
        " (Project Management Body of Knowledge, de sus siglas en ingles) el cual contiene  tiene TODAS " +
        "las fases de las áreas del conocimiento de proyectos desde su inicio, palnificación, ejecución, Monitoreo, control y cierre.",
      
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
