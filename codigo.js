var searchBtn = document.getElementById("boton-input");
var nombre = document.getElementById("nombre")
var boton = document.getElementById("liquidacion");
var eMail = document.getElementById("correo");
var telefono = document.getElementById("telefono");
var texto = document.getElementById("texto");
var sueldo;

searchBtn.addEventListener('click', function () {
    nombreEmpresa = nombre.value
    sueldo = boton.value;
    correo = eMail.value;
    contacto = telefono.value;
    trabajo = texto.value;

    const footer = document.querySelector("footer");
    const ul = document.createElement("ul");
    footer.appendChild(ul);

    if (sueldo > 100000 && contacto!= 0) {

        decorreo.push(correo);
        deCuenta.push(sueldo);

        const li = document.createElement("li");
        li.innerHTML = "<li>Empresa: " + nombreEmpresa + "</li>" + "<li>Correo:" + correo + "</li>"+"<li>Trabajo : "+trabajo+"</li>"+ "<li> Sueldo: $" + sueldo + "</li>";
        ul.appendChild(li)
    }

    else {
        console.log("Sueldo Es menor a 100 mil")
    }

    document.getElementById("correo").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("liquidacion").value = "";

});
