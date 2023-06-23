
var form = document.querySelector("form")
var footer = document.querySelector("footer")
var submit = document.getElementById("boton-input");
var nombre = document.getElementById("nombre")
var boton = document.getElementById("liquidacion");
var eMail = document.getElementById("correo");
var telefono = document.getElementById("telefono");
var texto = document.getElementById("texto");
let dataArr = [];

submit.addEventListener('click', function () {
    nombreEmpresa = nombre.value
    sueldo = boton.value;
    correo = eMail.value;
    contacto = telefono.value;
    trabajo = texto.value;


    const ul = document.createElement("ul");
    const uli = document.getElementById("creado");
    ul.id = "creado";

    if (contacto == "" || correo == "") {
        alert("COMPLETE TODOS LOS DATOS");
    }

    if (sueldo > 100000) {

        footer.appendChild(ul);

        dataArr.push({
            nombre: nombreEmpresa,
            eMail: correo,
            boton: sueldo,
        });


        dataArr.sort((a, b) => a.boton - b.boton);
        dataArr.map((obj) => {
            const li = document.createElement("li");

            dolar = (obj.boton / 500).toFixed(2);
            ul.setAttribute('style', 'list-style:none;');

            ul.innerText = dataArr.indexOf(obj) + 1;

            let li1 = document.createElement('li');
            li1.innerHTML = "Empresa: " + nombreEmpresa;
            let li2 = document.createElement('li');
            li2.innerHTML = "Correo: " + correo;
            let li3 = document.createElement("li");
            li3.innerHTML = "Sueldo : " + sueldo;

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);

        });

        console.log(dataArr);


        if (document.body.contains(uli) == false) {
            ordenar();
        }

        form.reset();
    }

    else {
        console.log("Sueldo ingresado menor a $100.000 o datos invalidos.")
        form.reset();
    }

    function ordenar() {
        const button = document.createElement("button");
        button.innerHTML = "Ordenar";
        button.id = "ordena";
        button.className = "btn btn-warning";
        var boton = document.getElementById("ordena");
        form.appendChild(button);

        button.addEventListener('click', function () {
            
        });

    }

});

