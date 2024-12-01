function sumar(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var n3 = parseInt(document.getElementById("n3").value);
    var suma = n1+n2+n3;
    document.getElementById("total").value = suma;
}

const lista = document.getElementById("lista");
const mostrar = document.getElementById("mostrar");
const imagen = document.getElementById("imagen");

// Añade un evento al botón "Mostrar"
mostrar.addEventListener("click", () => {
    const opcionSeleccionada = lista.value;

    // Cambia la imagen según la selección
    switch (opcionSeleccionada) {
        case "carro":
            imagen.src = "https://siempreauto.com/wp-content/uploads/sites/9/2020/11/Bugatti-Chiron-Super-Sport.jpg?quality=80&strip=all"; // Ruta de la imagen del carro
            imagen.alt = "Imagen de un carro";
            break;
        case "moto":
            imagen.src = "https://i0.wp.com/mundomotor.bike/wp-content/uploads/2024/02/1_D_edithoriz_1-1.jpg?resize=1024%2C769&ssl=1"; // Ruta de la imagen de la moto
            imagen.alt = "Imagen de una moto";
            break;
        case "bicicleta":
            imagen.src = "https://http2.mlstatic.com/D_NQ_NP_950084-MLU77740609937_072024-O.webp"; // Ruta de la imagen de la bicicleta
            imagen.alt = "Imagen de una bicicleta";
            break;
        default:
            imagen.src = "";
            break;
    }

    // Muestra la imagen si hay una selección válida
    if (imagen.src) {
        imagen.style.display = "block";
    } else {
        imagen.style.display = "none";
    }
});