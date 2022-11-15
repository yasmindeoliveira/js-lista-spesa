//Data una lista della spesa già compilata nel vostro codice, stampare in console gli elementi della lista individualmente, prima con un ciclo for, poi con un ciclo while. Quando le stampe in console sono corrette, stampare gli elementi in un elenco puntato in HTML, utilizzando uno dei due cicli scritti al punto precedente.

let listaSpesa = ["Latte", "Farina", "Zucchero", "Uova", "Vaniglia", "Limone", "Arancia"];

// Stampa in console elementi della lista individualmente ciclo: for

/* for (let i = 0; i<listaSpesa.length; i++){

    console.log(listaSpesa[i]);
} */

// Stampa in console elementi della lista individualmente ciclo: while

let i = 0;

while (i<listaSpesa.length) {

    console.log(listaSpesa[i]);
    document.getElementById("unorderedListSpesa").innerHTML += "<li>" + listaSpesa[i] + "</li>";
    i++;

};

