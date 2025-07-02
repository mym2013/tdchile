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
        4-. un leer mas que agregue yo */

      var posts=[
        { title:'Chilenos y sus Hábitos de navegación en la red ',
        date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
        content:"Chilenos y sus hábitos de navegación: 61% dice que “lo que está en internet es verdad” y el 74% acepta “cuentas de desconocidos en redes sociales”. "+
        
        
        '<img src="../img/Nav_Chile.jpg" alt="Habitos de navecación en la red de los chilenos" title="Hábitos de Navegación">'+
        '<a href="https://www.latercera.com/que-pasa/noticia/chilenos-y-sus-habitos-de-navegacion-61-dice-que-lo-que-esta-en-internet-es-verdad-y-el-74-acepta-cuentas-de-desconocidos-en-redes-sociales/4HYXECJYIVDWPKSQYMMO72O54I/" target="_blank"><img src="../img/laTercera.jpg" alt="La tercera"></a>',
        leermas:'paginas/sobre_tdchile.html',
       
        },
        { title:'Los cambios tecnológicos que debe enfrentar Chile en 2020',
        date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
        content:"Con un escenario impactado por el estallido social se prevé que durante este año no sólo se desarrollen en el país tecnologías que globalmente suenen fuerte, sino también que la preocupación sea cómo aprovechar al máximo el impacto positivo de estas sobre las personas. y los temas que marcaron la agenda 2019. "+
        
        
        '<img src="../img/chile_2020.jpg" alt="Chile Tecnologías 2020" title="desafio tecnologico chile 2020">'+
        '<a href="https://www.elmostrador.cl/agenda-pais/2020/01/06/los-cambios-tecnologicos-que-debe-enfrentar-chile-en-2020/" target="_blank"><img src="../img/mostrador.jpg" alt="BBC"></a>',
        leermas:'paginas/sobre_tdchile.html',
       
        },
        { title:'Huawei el mayor fabricante chino se convirtío en #1 en ventas de smartphones del mundo.',
        date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
        content:"cómo el fabricante chino se convirtió en el mayor vendedor de teléfonos inteligentes en el mundo a pesar del veto de Estados Unidos. y parece que nada los detendrá."+
        
        '<img src="../img/tienda_Huawei.jpg" alt="Huawei lider en ventas de smartphones" title="numero uno en ventas de smartphones">'+
        '<a href="https://www.bbc.com/mundo/noticias-53615276" target="_blank"><img src="../img/bbc_2.jpg" alt="BBC"></a>',
        leermas:'paginas/sobre_tdchile.html',
       
        },

        { title:'Corporaciones y emprendedores una nueva dupla para el éxito.',
        date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
        content:"Nuevo estudio revela cómo las corporaciones pueden aumentar su capacidad y eficiencia trabajando con emprendedores, la nueva estrategia que esta dándo buenos resultados."+
        "Y que está tonificando el mercado de una nueva forma."+
        '<img src="../img/corp_empre_2.jpg" alt="corporaciones_y_emprendedores" title="corporaciones mas emprendedores">'+
        '<a href="https://www.imnovation.com/es/noticias/2020/julio/estudio-revela-como-corporaciones-aumentan-capacidad-eficiencia-emprendedores" target="_blank"><img src="../img/sitioNews.jpg" alt="I´mnovation"></a>',
        leermas:'paginas/sobre_tdchile.html',
       
        },
        { title:' Que son los DeepFakes, los rostros hechos por computadoras y que parecen personas reales.',
          date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
          content:"Qué son y como se distinguen las <i>deepfakes</i>, las caras creadas por computadoras que presentan personas que no existen, y que están presentes en redes sociales,"+
          '<img src="../img/caras_fake.jpg" alt="caras_falsas" title="Caras hechas por computador">'+
          '<a href="https://www.emol.com/noticias/Tecnologia/2020/07/25/992990/que-son-deepfakes-como-distinguir.html" target="_blank"><img src="../img/emol.jpg" alt="emol"></a>',
          leermas:'paginas/sobre_tdchile.html',
         
        },
        { title:' Aprobado Retiro de Fondos de las AFP',
          date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
          content:"Se aprueba el retiro de fondos de las AFP, sepa cómo retirar su dinero"+
          '<img src="../img/retiroAFP3.jpg" alt="AFP" title="retiro afp">'+
          '<a href="https://www.t13.cl/noticia/nacional/retiro-pensiones-AFP-cuando-se-puede-cobrar-dinero-ley-24-07-2020" target="_blank"><img src="../img/canal13.jpg" alt="canal13"></a>',
          leermas:'paginas/sobre_tdchile.html',
         
        },
        { title:' Buenas noticias en la lucha contra el COVID 19',
          date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
          content:"posibles tratamientos, vacunas y hallazgos, dan esperanza para resolver dentro del 2020,  la obtención de una vacuna que permitiría volver a la normalidad "+
          '<img src="../img/vacuna3.jpg" alt="vacuna" title="vacuna covid">'+
          '<a href="https://cnnespanol.cnn.com/2020/07/20/buenas-noticias-en-la-lucha-contra-el-coronavirus-posibles-tratamientos-vacunas-y-hallazgos/" target="_blank"><img src="../img/cnn3.png" alt="vacuna"></a>',
          leermas:'paginas/sobre_tdchile.html',
        },
        { title:'Hackeo Masivo a las cuentas de  los super ricos y famosos',
          date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
          content:" Hackean las cuentas de los super famosos en Twitter para realizar etafas con bitcoin "+
          '<img src="../img/hakeo.jpg" alt="diagrama hackeo famosos">'+
          '<a href="https://www.abc.es/tecnologia/abci-hackean-cuentas-twitter-bill-gates-obama-y-otros-famosos-para-realizar-estafas-criptomonedas-202007160607_noticia.html" target="_blank"><img src="../img/abcnews.jpg" alt="sitio noticias"></a>',
          leermas:'pginas/clientes.html'
        },
        { title:'Las Babosas abren la puerta a una cicatrización mas eficientes de las heridas de los humanos',
          date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
          content:" El trabajo conjunto de dos prestigiosas Universidades para crear un pegamento médico revolucionario fuertemente adhesivo inspirado en las babosas"+
          '<img src="../img/babosas4.jpg" alt="babosas y medicina">'+
          '<a href="https://www.imnovation-hub.com/es/ciencia-y-tecnologia/babosas-abren-puerta-a-cicatrizacion-mas-eficiente/" target="_blank"> <img src="../img/sitioNews.jpg" alt="sitio noticias"></a>',
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
      <span class="date">${item.date}</span>
      <p>
        ${item.content}
      </p>
      <a href="../index.html" class="button-more">Inicio</a>
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
