const word = prompt('Inserisci una parola');

const div = document.querySelector(".container");

checkPalindrome(word);

function checkPalindrome(string) {

    const arrayValues = string.split('');

    const reverseArrayValues = arrayValues.reverse();

    const reverseString = reverseArrayValues.join('');

    let result;
    
    if(string == reverseString) {
        result = `La parola: ${word} è palindroma!`;
    }
    else {
        result = `La parola: ${word} non è palindroma, ricarica la pagina e riprova!`;
    }

    div.innerHTML = result;
}


