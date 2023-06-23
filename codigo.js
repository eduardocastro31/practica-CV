
var form = document.querySelector("form")
var footer = document.querySelector("footer")
var submit = document.getElementById("boton-input");
var nombre = document.getElementById("nombre")
var liqui = document.getElementById("liquidacion");
var eMail = document.getElementById("correo");
var telefono = document.getElementById("telefono");
var texto = document.getElementById("texto");

let dataArr = [];
const div = document.createElement("div");
div.id = "di"

submit.addEventListener('click', function () {

    nombreEmpresa = nombre.value
    sueldo = liqui.value;
    correo = eMail.value;
    contacto = telefono.value;
    trabajo = texto.value;

    const button = document.createElement("button");
    button.innerHTML = "Ordenar";
    button.id = "ordena";
    button.className = "btn btn-warning";
    var boton = document.getElementById("ordena");

    const ul = document.createElement("ul");
    const uli = document.getElementsByClassName("creado");
    const dir = document.getElementById("di")
    ul.className = "creado";

    var valido = true;
    ul.setAttribute('style', 'list-style:none;');
    div.remove();
    if (contacto == "" || correo == "") {
        alert("COMPLETE TODOS LOS DATOS");
        valido = false;
    }

    if (sueldo > 100000 && valido == true) {
        footer.appendChild(div);

        div.appendChild(ul);
        dataArr.push({
            nombre: nombreEmpresa,
            eMail: correo,
            liqui: sueldo,
        });


        dataArr.map((obj) => {

            ul.innerText = dataArr.indexOf(obj) + 1;
            let li1 = document.createElement('li');
            li1.innerHTML = "Empresa: " + obj.nombre;
            let li2 = document.createElement('li');
            li2.innerHTML = "Correo: " + obj.eMail;
            let li3 = document.createElement("li");
            li3.innerHTML = "Sueldo : " + obj.liqui;
            let li4 = document.createElement("li")
            li4.innerHTML = "Dolar : USSD " + (obj.liqui / 500);
            let li5 = document.createElement("li");
            li5.innerHTML = "Euro : e " + (obj.liqui / 520);

            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.appendChild(li5);

            form.reset();
        });

        console.log(dataArr);


        if (document.body.contains(dir) == false) {
            form.appendChild(button);
            ordenar();
        }
    }

    else {
        console.log("Sueldo ingresado menor a $100.000 o datos invalidos.")
        form.reset();
    }




    function ordenar() {


        button.addEventListener('click', function () {
            ascender = true;
            button.remove();
            div.remove();

            dataArr.sort((a, b) => b.liqui - a.liqui);

            if (ascender == true) {
                footer.appendChild(div);

                div.appendChild(ul);

                console.log(dataArr);

                dataArr.map((obj) => {
                    ul.innerText = dataArr.indexOf(obj) + 1;
                    let li1 = document.createElement('li');
                    li1.innerHTML = "Empresa: " + obj.nombre;
                    let li2 = document.createElement('li');
                    li2.innerHTML = "Correo: " + obj.eMail;
                    let li3 = document.createElement("li");
                    li3.innerHTML = "Sueldo : " + obj.liqui;
                    li4.innerHTML = "Dolar : USSD " + (obj.liqui / 500);
                    let li5 = document.createElement("li");
                    li5.innerHTML = "Euro : e " + (obj.liqui / 520);

                    ul.appendChild(li1);
                    ul.appendChild(li2);
                    ul.appendChild(li3);
                    ul.appendChild(li4);
                    ul.appendChild(li5);
                    form.reset();

                });
            }

        });

    }

});

