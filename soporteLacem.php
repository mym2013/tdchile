<?php

define('USER', 'cto62190_consultasoporte');
define('PASSWORD', 'lacem123456');
define('HOST', 'localhost');
define('DATABASE', 'cto62190_soporte');


//Crear conexi���n con la base de datos.
//$conn = new mysqli(HOST, USER, PASSWORD, DATABASE);
$conn = mysqli_connect("localhost", "cto62190_consultasoporte", "lacem123456", "cto62190_soporte");


if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  exit();
}

if (isset($_POST['email']) and isset($_POST['password'])) {
 
    $email = $_POST['email'];
    $password = $_POST['password'];
    $password = md5($password);
    $cliente = "LACEM";
    $resultado = 0;
   
   
    //Consulta segura para evitar inyecciones SQL.
    $sql="SELECT * FROM clientes WHERE usuario='$email' AND clave='$password' AND cliente='LACEM'";

    // Perform query
    if ($resultado = mysqli_query($conn, $sql)) {
      echo "Usuario encontrado: " . mysqli_num_rows($resultado);
      $num=mysqli_num_rows($resultado);
      
      // Free result set
      mysqli_free_result($resultado);
    }

    mysqli_close($resultado);

    if($num==1){
        echo "<script>window.location='https://app.flokzu.com/public/0286fLASI';</script>";
    }

}

?>




<html>
<head><meta charset="euc-jp">
    <title>Soporte Lacem - SYSMA SpA</title>
    
    <meta name="author" content="Sysma Spa" />
    <style>
                
        /* ---------- FONTAWESOME ---------- */
        /* ---------- https://fortawesome.github.com/Font-Awesome/ ---------- */
        /* ---------- http://weloveiconfonts.com/ ---------- */
        @import url(http://weloveiconfonts.com/api/?family=fontawesome);
        /* ---------- ERIC MEYER'S RESET CSS ---------- */
        /* ---------- https://meyerweb.com/eric/tools/css/reset/ ---------- */
        @import url(https://meyerweb.com/eric/tools/css/reset/reset.css);
        /* ---------- FONTAWESOME ---------- */
        [class*="fontawesome-"]:before {
        font-family: 'FontAwesome', sans-serif;
        }

        /* ---------- GENERAL ---------- */
        * {
        box-sizing: inherit;
        }

        html {
        box-sizing: border-box;
        height: 100%;
        }

        body {
        background: #eee;
        color: #000;
        font-family: 'Varela Round', sans-serif;
        line-height: 1.5;
        margin: 0;
        min-height: 100%;
        }

        input {
        background-image: none;
        border: none;
        font: inherit;
        margin: 0;
        padding: 0;
        -webkit-transition: all .3s;
        transition: all .3s;
        }

        /* ---------- ALIGN ---------- */
        .align {
        -webkit-box-align: center;
                align-items: center;
        display: -webkit-box;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
                flex-direction: column;
        -webkit-box-pack: center;
                justify-content: center;
        }

        /* ---------- GRID ---------- */
        .grid {
        margin-left: auto;
        margin-right: auto;
        max-width: 90%;
        width: 400px;
        }

        /* ---------- LOGIN ---------- */
        #login h2 {
        background: #f95252;
        border-radius: 20px 20px 0 0;
        color: #fff;
        font-size: 28px;
        padding: 20px 26px;
        }

        #login h2 span[class*="fontawesome-"] {
        margin-right: 14px;
        }

        #login fieldset {
        background: #fff;
        border-radius: 0 0 20px 20px;
        padding: 20px 26px;
        }

        #login fieldset p {
        color: #777;
        margin-bottom: 14px;
        }

        #login fieldset p:last-child {
        margin-bottom: 0;
        }

        #login fieldset input {
        border-radius: 3px;
        }

        #login fieldset input[type="email"], #login fieldset input[type="password"] {
        background: #eee;
        color: #777;
        padding: 4px 10px;
        width: 100%;
        }

        #login fieldset input[type="submit"] {
        background: #aaaaaa;
        color: #fff;
        display: block;
        margin: 0 auto;
        padding: 4px 0;
        width: 100px;
        }

        #login fieldset input[type="submit"]:hover {
        background: #28ad63;
        }


    </style>
</head>

<body class="align">

  <div class="grid">
    <IMG SRC="https://lacem.cl/wp-content/uploads/2020/01/3.png" ALT="Lacem">

    <div id="login">

      <h2><span class="fontawesome-lock"></span>Portal de Soporte</h2>

      <form action="" method="POST">
        <fieldset>
          <p><label for="email">Usuario</label></p>
          <p><input type="email" id="email" name="email" placeholder="Usuario Autorizado por tdchile"></p>
          <p><label for="password">Password</label></p>
          <p><input type="password" id="password" name="password" placeholder="contraseña"></p>
          <p><input type="submit" value="Entrar"></p>
        </fieldset>
      </form>
    </div>

  </div>
  

</body>	
</html>