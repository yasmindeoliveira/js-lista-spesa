//Data una lista della spesa già compilata nel vostro codice, stampare in console gli elementi della lista individualmente, prima con un ciclo for, poi con un ciclo while. Quando le stampe in console sono corrette, stampare gli elementi in un elenco puntato in HTML, utilizzando uno dei due cicli scritti al punto precedente.

let listaSpesa = ["Latte", "Farina", "Zucchero", "Uova", "Vaniglia", "Limone", "Arancia"];

// Stampa in console elementi della lista individualmente ciclo: for

/* for (let i = 0; i<listaSpesa.length; i++){

    console.log(listaSpesa[i]);
} */

// Stampa in console elementi della lista individualmente ciclo: while

let i = 0;

while (i < listaSpesa.length) {

    console.log(listaSpesa[i]);
    document.getElementById("unorderedListSpesa").innerHTML += '<li id="eliminaButton' + i + '">' + listaSpesa[i] + '<button id="botono' + (i) + '" type="button" class="btn btn-light">Elimina</button></li>';
    i++;

};

// Aggiunta funzione di rimozione

for (let i = 0; i < listaSpesa.length; i++) {

    let botonoEliminatore = document.getElementById("botono" + i);

    botonoEliminatore.addEventListener('click', function () {
        document.getElementById("eliminaButton" + i).remove();
    });

};

// Input nuovi elementi

let buttonNuovoElemento = document.getElementById("buttonNuovoElemento");
buttonNuovoElemento.addEventListener('click', function () {

    let nuovoElemento = document.getElementById("nuovoElemento").value;
    listaSpesa.push(nuovoElemento);
    console.log(nuovoElemento);
    document.getElementById("unorderedListSpesa").innerHTML += '<li id="eliminaButton' + (listaSpesa.length - 1) + '">' + nuovoElemento + '<button id="botono' + (listaSpesa.length - 1) + '" type="button" class="btn btn-light">Elimina</button></li>';

    for (let i = 0; i < listaSpesa.length; i++) {

        let botonoEliminatore = document.getElementById("botono" + i);

        if (botonoEliminatore) {

            botonoEliminatore.addEventListener('click', function () {
                document.getElementById("eliminaButton" + i).remove();
            });
        };
    };



});



/* document.getElementById("nuovoElemento").innerHTML = listaSpesa.push */

