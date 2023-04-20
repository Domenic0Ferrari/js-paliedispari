/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// Inserire un prompt per chiedere all'utente di inserire una parola

let parolaUtente = prompt("Inserisci una parola");
console.log("La parola inserita è:" + " " + parolaUtente);

// scomponiamo la parola in lettera per lettera

let parolaDivisa = parolaUtente.split('');
console.log(parolaDivisa);

// scriviamo la parola al contrario

let parolaInvertita = parolaDivisa.reverse('');
console.log(parolaInvertita);

// riuniamo la parola scritta al contario

let parolaAlContrario = parolaInvertita.join('');
console.log(parolaAlContrario);

// confrontiamo le due parole

if (parolaUtente == parolaAlContrario){
    console.log("La tua parola è palindroma");
} else{
    console.log("La tua parola non è palindroma");
}