let string = "";
let buttons = document.querySelectorAll('.button');
let screen = document.querySelector('input');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = string.replace('X', '*').replace('÷', '/');
            string = eval(string);
            screen.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            screen.value = string;
        }
        else if (e.target.innerHTML == '←') {
            string = string.slice(0, -1);
            screen.value = string;
        }
        else {

            string = string + e.target.innerHTML;
            screen.value = string;
        }
    })
})
