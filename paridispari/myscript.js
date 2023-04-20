/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto
*/

// Chiedere all'utente di scegliere pari o dispari
// Chiedere all'utente di inserire un numero compreso tra 1 e 5
// Generare un numero random compreso tra 1 e 5 per il computer
// Sommiamo il numero dell'utente e il numero del computer
// Vediamo se la somma dei due numeri è un numero pari o un numero dispari
// Stampiamo se l'utente ha vinto o perso

let oddOrEven = prompt("Scegli pari o dispari");
console.log("Hai scelto:" + " " + oddOrEven);

if(oddOrEven !== ("pari" || "dispari")){
    console.log("Inserire un valore valido")
} else{
    let userNumber = parseInt(prompt("Scegli un numero compreso tra 1 e 5"));
console.log("Il numero scelto è:" + " " + userNumber);

function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

let pcNumber = randomNumber(1, 5);
console.log("Il numero del computer è:" + " " + pcNumber);

let somma = userNumber + pcNumber;
console.log(somma);

function isEven (number1, number2){
    if ((number1 + number2) % 2 == 0){
        console.log("La somma è pari");
    } else{
        console.log("La somma è dispari");
    }
}

if (oddOrEven == "pari" && isEven(userNumber, pcNumber)){
    console.log("Hai vinto!");
} else if (oddOrEven == "dispari" && !isEven(userNumber, pcNumber)){
    console.log("Hai vinto!");
} else{
    console.log("Hai perso!");
}
}

// let userNumber = parseInt(prompt("Scegli un numero compreso tra 1 e 5"));
// console.log("Il numero scelto è:" + " " + userNumber);

// function randomNumber(min,max){
//     return Math.floor(Math.random()*(max-min+1)+min);
// }

// let pcNumber = randomNumber(1, 5);
// console.log("Il numero del computer è:" + " " + pcNumber);

// let somma = userNumber + pcNumber;
// console.log(somma);

// function isEven (number1, number2){
//     if ((number1 + number2) % 2 == 0){
//         console.log("La somma è pari");
//     } else{
//         console.log("La somma è dispari");
//     }
// }

// if (oddOrEven == "pari" && isEven(userNumber, pcNumber)){
//     console.log("Hai vinto!");
// } else if (oddOrEven == "dispari" && !isEven(userNumber, pcNumber)){
//     console.log("Hai vinto!");
// } else{
//     console.log("Hai perso!");
// }