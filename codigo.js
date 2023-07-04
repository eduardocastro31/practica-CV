
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
const div2 = document.createElement("div");
div.id = "di"
div2.id = "id"
let ascender = false
const ul2 = document.createElement("ul");
ul2.className = "creado2";
ul2.setAttribute('style', 'list-style:none;');
const button = document.createElement("button");
button.innerHTML = "Ordenar Descendiente";
button.id = "ordena";
button.className = "btn btn-warning";

submit.addEventListener('click', function () {

    nombreEmpresa = nombre.value
    sueldo = liqui.value;
    correo = eMail.value;
    contacto = telefono.value;
    trabajo = texto.value;

    var boton = document.getElementById("ordena");

    const ul = document.createElement("ul");
    const uli = document.getElementsByClassName("creado");
    const dir = document.getElementById("di")
    ul.className = "creado";

    var valido = true;
    ul.setAttribute('style', 'list-style:none;');
    //div.remove();
    dataArr.sort((a, b,) => a.liqui - b.liqui);

    if (contacto == "" && correo == ""||sueldo == 0) {
        alert("COMPLETE TODOS LOS DATOS");
        valido = false;
    }

    if (sueldo > 100000 && valido == true) {
        
        dataArr.push({
            nombre: nombreEmpresa,
            eMail: correo,
            liqui: sueldo,
            texto: trabajo
        });

        footer.appendChild(div);
        div.appendChild(ul);
        let li1 = document.createElement('li');
        li1.innerHTML = "Empresa: " + nombreEmpresa;
        let li2 = document.createElement('li');
        li2.innerHTML = "Correo: " + correo;
        let li3 = document.createElement("li");
        li3.innerHTML = "Sueldo : " + sueldo;
        let li4 = document.createElement("li")
        li4.innerHTML = "Dolar : USSD " + (sueldo / 500).toFixed(2);
        let li5 = document.createElement("li");
        li5.innerHTML = "Euro : e " + (sueldo / 520).toFixed(2);
        let li6 = document.createElement('li');
        li6.innerHTML = "Trabajo: " + trabajo;
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);
        ul.appendChild(li5);
        ul.appendChild(li6);

  /*      dataArr.map((obj) => {

            dolar = (obj.boton / 500).toFixed(2);
            ul.innerText = dataArr.indexOf(obj) + 1;
            let li1 = document.createElement('li');
            li1.innerHTML = "Empresa: " + obj.nombre;
            let li2 = document.createElement('li');
            li2.innerHTML = "Correo: " + obj.eMail;
            let li3 = document.createElement("li");
            li3.innerHTML = "Sueldo : " + obj.liqui;
            let li4 = document.createElement("li")
            li4.innerHTML = "Dolar : USSD " + (obj.liqui / 500).toFixed(2);
            let li5 = document.createElement("li");
            li5.innerHTML = "Euro : e " + (obj.liqui / 520).toFixed(2);
            let li6 = document.createElement('li');
            li6.innerHTML = "Trabajo: " + obj.texto;
            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.appendChild(li5);
            ul.appendChild(li6);
            
        });*/
        form.reset();
        console.log(dataArr);

        if (document.body.contains(dir) == false) {
            form.appendChild(button);
            ordenar();
        }
    }

    else if (sueldo < 100000 && valido == true) {
        console.log("Sueldo ingresado menor a $100.000")
        form.reset();
    }


    function ordenar() {

        button.addEventListener('click', function () {
            ascender = !ascender;
            //  div2.remove();
            //button.remove();
            console.log(dataArr);
    footer.appendChild(div2);
            //dataArr.sort((a, b,) => b.liqui - a.liqui );
            if (ascender == true) {
                let n=0;
                div.style= "display: flex;";
                //div.style= "display: none;";
                dataArr.sort((a, b,) => b.liqui - a.liqui);
               // div2.appendChild(ul2);
                 //div2.remove();

                button.innerHTML = "Ordenar Ascendiente";
            }
            else {
                div2.remove();
                dataArr.sort((a, b,) => a.liqui - b.liqui);
                footer.appendChild(div2);
                //div2.remove();
                //console.log(dataArr);
                button.innerHTML = "Ordenar Descendiente";

            }

            console.log(dataArr);
            ul2.remove().textContent;
            dataArr.forEach(function (e) { 
        //ul2.innerText = dataArr.indexOf(e) + 1;
        let li1 = document.createElement('li');
        li1.innerHTML = "Empresa: " + e.nombre;
        let li2 = document.createElement('li');
        li2.innerHTML = "Correo: " + e.eMail;
        let li3 = document.createElement("li");
        li3.innerHTML = "Sueldo : " + e.liqui;
        let li4 = document.createElement("li")
        li4.innerHTML = "Dolar : USSD " + (e.liqui / 500).toFixed(2);
        let li5 = document.createElement("li");
        li5.innerHTML = "Euro : e " + (e.liqui / 520).toFixed(2);
        let li6 = document.createElement('li');
        li6.innerHTML = "Trabajo: " + e.texto;
        ul2.appendChild(li1);
        ul2.appendChild(li2);
        ul2.appendChild(li3);
        ul2.appendChild(li4);
        ul2.appendChild(li5);
        ul2.appendChild(li6);
        div2.appendChild(ul2);            
                    console.log("Sueldo : ", e.liqui);
                });

        });

    }

});
