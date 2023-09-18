<?php
    $destino = "SV74151158@idat.edu.pe";
    $nombreCompleto = $_POST["nombreCompleto"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    $contenido = "Apellidos y Nombres: ".$nombreCompleto."\Correo ElectrÃ³nico: ".$email."\nMensaje: ".$mensaje;
    if (mail($destino, "Mensaje Nuevo - Lima Electromovilidad", $contenido));
    echo "<script>alert('Gracias por Enviar su Mensaje');</script>";
    echo "<script>window.location.href=('index.html')</script>";
?>
