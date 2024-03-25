console.log('Pali&dispari')


/* 
// << CONESGNA >>

// << Palidroma >>

// Chiedere all’utente di inserire una parola
const parola = prompt('inserire una parola')
console.log(parola)


// creo una variabile per inizializzare la funzione

const risultato = isPalindrome(parola)


// Creare una funzione per capire se la parola inserita è palindroma.

function isPalindrome(parola) {

    // Variabile per il testo invertito
    let invertedText = ''

    for (let i = parola.length -1; i >= 0 ; i--) {
        const cicloParola = parola[i];
        console.log(cicloParola)

        invertedText += cicloParola
    }

    console.log(invertedText)

    if (parola === invertedText) {
        return true
    } else {
        return false
    }
}


// Questa funzione deve ricevere come input la parola inserita dall’utente e ritornare true se la parola è palindroma e false se la parola non è palindroma

if (risultato === true) {
    console.log('la parola ' + parola + ' è palindroma')
    
} else {
    console.log('La parola ' + parola + ' non è palindroma')
}

*/




// << Pari e Dispari >>

// L’utente sceglie pari o dispari (tramite prompt)
const pariOdispari = prompt('digitare pari o diaspari')


if (pariOdispari === 'pari' || pariOdispari === 'dispari') {
 
    // E inserisce un numero da 1 a 5.
const number = parseInt(prompt('inserire un numero da 1 a 5'))
    

//VERIFICO il numero inserito dall'utente

if (number >= 1 && number <= 5) {
    
    // SE valido inizio il calcolo

    // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione provate a scrivervela voi altrimenti copiatevela da mdn).
    const pcNum = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

    console.log(pcNum);

    // Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    const somma = number + pcNum
    console.log(somma)

    const risultato = isPari(somma)

    function isPari(somma) {
     if (somma % 2 === 0) {
        console.log('il numero è pari') 
     } else {
        console.log('il numero è dispari')
     }
    }

} else {
    alert('inserire un numero da 1 a 5')
}


} else {
    alert('digitare "pari" o "dispari"')
}




// Dichiariamo chi ha vinto. ??????

// << Consigli del giorno >>
// Scriviamo sempre in italiano i passaggi che vogliamo fare
// Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
// Buon lavoro e buon divertimento! :slightly_smiling_face:


