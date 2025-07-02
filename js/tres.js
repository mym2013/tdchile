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
            1.2 pictures logo
          2-. una fecha
          3-. el cuerpo del post q es un texto
          4-. un leer mas que agregue yo ( lo sacamos para clientes quedando un json nuevo) */
  
        var posts=[
          { id:0,
            title:' Clientes destacados:',
            picture_logo:' <img src="../img/entel.png" alt="logo cliente entel">',
            date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
            content:'<a href="https://es.wikipedia.org/wiki/Entel_Chile" target="_blank">ENTEL</a> es ampliamente conocida en la industria de las telcomunicaciones,'+
            "fué fundada en 1964 como empresa estatal hasta su completa privatización en 1992, hoy en día es una"+
            " de las empresas más grandes de la insdustría de las telecomunicaciones en Chile, con una fuerte presencia en soluciones"+
            " tecnológicas, y telefonía celular, esta empresa es controlada por Inversores Chilenos como el grupo almendral y el grupo Matte" ,
            
          },
          { id:1,
            title:'',
            picture_logo:'<img src="../img/vtr.png" alt="logo cliente VTR">',
            date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
            content:'<a href="https://es.wikipedia.org/wiki/VTR_(empresa)" target="_blank">VTR</a> es una empresa de  telcomunicaciones, chilena '+
            "fundada en 1928 bajo el nombre Vía Trans Radio Chilena Compañía de Radiotelegrafía y que fué muy conocida por liderar "+
            " a comienzos de la primera decada del siglo XXI el crecimiento de las empresas de la insdustría, innovando por esos años"+
            " con su producto triple pack en el que ofrecía telefonía fija, internet y TV cable, durante este fuerte periodo de expansión "+ 
            "incorporó a Metropolis intercom haciendose mas fuerte en este sector; ya en el 2010 ingresa a la televisión digital,ga tele "+
            " no sin polémica, tema que le costaría un pleito judicial con TVN,(televión nacional de chile) que finalmente lograron resolver " +
            " VTR, estuvo en manos de capitales estadounidenses, en un 100% a través de Liberty Global, pero hoy en día comparte un 20% con el empresario nacional Alvaro Saieh",
            
          },
          { id:2,
            title:'',
            picture_logo:'<img src="../img/omega3.png" alt="logo cliente OMEGA">',
            date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
            content:'<a href="http://www2.omegatelecom.cl/" target="_blank">OMEGA TELECOM</a> es una empresa del rubro de las telecomunicaciones que presta '+
            " servicios a las grandes compañías telco en chile, tiene gran impacto en tres grandes productos: el primero es la de "+
            "apoyar toda la cadena de provisión y retiro de servicios, el segundo es el de remozamiento de equipos, y el tercero es"+
            " aportar con todos los elementos de ferretería para la instalación de servicios, actualmente cuenta con mas de 400 empleados, "+
            " esta ubicada en la comuna de Cerrillos en la región metropolitana y es controlada en un 100% por capitales nacionales",
          },
          { id:3,
            title:'',
            picture_logo:' <img src="../img/inalco.jpg" alt="logo cliente miura autos">',
            date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
            content:' <a href="https://chevroletinalco.cl/" target="_blank">INALCO</a> es un importante concesionario de General Motors para las marcas Chevrolet;'+
           " Opel e IZUZU,  actualmente controlados por los capitales de Grass & Arueste, que también maneja otras marcas como Kia. "+
           " a partir del 2016 comenzó una alianza estratégica para comercializar las marcas Voskswagen y Porshe, ya que Inalco está dentro" +
           " de los cuatro más grandes de Chevrolet, fué elgida para ser un socio estratégico en chile para las marcas europeas antes citadas  "+
           " ",
           
         
        },
        { id:4,
          title:'',
        picture_logo:' <img src="../img/previser.png" alt="logo cliente previser">',
        date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
        content:'<a href="http://www.previser.cl/" target="_blank">PREVISER</a>'+
        " Previser es una empresa chilena, especialista en la externalización de procesos relacionados con la recuperación, "+
        " de licencias médicas, cálculos de subsidios por incapacidad laboral, recuperación de pagos en exceso a Isapres"+
        " AFP, mutuales y cajas de compensación actualmente posee grandes clientes como bancos y corporaciones con muchos empleados"+
        " dónde el manejo de estos conceptos requiere la participación de elementos expertos en la materia, es considerada una empresa mediana con alrededor de 45 empleados y de capitales nacionales",
        
      },
      { id:5,
        title:'',
      picture_logo:' <img src="../img/tecno.png" alt="logo cliente tecnoimagen">',
      date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
      content:'<a href="https://www.tecnoimagen.cl/" target="_blank">TECNOIMAGEN</a>'+
        " Es una empresa nacional del rubro de la salud fundada en 1997,que brinda servicios en el ámbito de la imageneología, actualmente " +
        ' cuenta con la representación en chile de <a href="https://global.medical.canon/" target="_blank">Canon Medical System</a> y '+
        " dentro de sus productos destacados cuentan con Tomografías computarizadas, Resonancias Nuclear Magnéticas"+
        " equipos de ultrasonido y equipamientos radiológicos. Desde el año 2005 cuenta con otra marca importante de la industria"+
        ' como la estadounidense <a href="https://www.hologic.com/" target="_blank">Hologic inc</a>. la cual se especializa en el cuidado de la mujer, con productos como mamografías digitales'+
        " Sistemas de biopsias estereotoráxica entre otros.",
      
    },
    { id:6,
      title:'',
    picture_logo:' <img src="https://lacem.cl/wp-content/uploads/2020/01/3.png" alt="logo cliente lacem" width="200">',
    date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
    content:'<a href="https://lacem.cl/" target="_blank">LACEM</a>'+
      " Laboratorio número 1 de Chile en ensayos de construcción, con más de 25 años de trayectoria.",
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
        <span> ${item.picture_logo} </span>
        <p>
          ${item.content}
        </p>`;

        if(item.id==6){
          post = post +`<a href="../index.html" class="button-more">inicio</a>` + `<a href="../soporteLacem.php" class="button-more">Soporte</a>`;
        }
        else{
          post = post +`<a href="../index.html" class="button-more">inicio</a>`;
        }

        post = post + `</article>`;
  
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
  