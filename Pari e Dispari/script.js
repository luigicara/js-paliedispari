const button = document.querySelector("button");

const div = document.querySelector(".risultato");

const inputNumber = document.querySelector("input");

const inputSelect = document.querySelector("select");

button.addEventListener('click',
    function(event) {
        event.preventDefault();

        let pcNumber = generateNumber(1, 5);

        let risultato = sumNumber(parseInt(inputNumber.value), pcNumber);

        let esito;

        if (risultato === inputSelect.value) {
            esito = "Complimenti, hai vinto!";
        } else {
            esito = "Mi dispiace, hai perso!";
        }

        div.innerHTML = `${esito} Hai scelto ${inputNumber.value} e il PC ha scelto ${pcNumber}, la cui somma è ${risultato} e tu hai scommesso: ${inputSelect.value}.`;
    }
)


function generateNumber(min, max) {

    let output = Math.floor(Math.random()* (max - min + 1)) + min;

    return output;
}

function sumNumber(num1, num2) {

    let sum = num1 + num2;

    if (sum % 2 === 0) {
        return "pari"
    } else {
        return "dispari"
    }

}

