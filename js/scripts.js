//guardo display de html en una variable cada uno
let display = document.getElementById('display');

//covirtiendo la coleccion de html en un array que recorre todos los botones
let buttons = Array.from(document.getElementsByClassName('button'));

//debbuging
//console.log(buttons);

//get every button
buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = ''; 
                break;//limpia
            case '←':
                if(display.innerText){// me permite solo remover el ultimo caracter
                    display.innerText = display.innerText.slice(0, -1);
                }
                break; // evita que me escriba este signo (←) en la calc
            case '=':
                try{ //
                    display.innerText = eval(display.innerText);
                } catch{
                    display.innerText = 'Error!';
                } //en caso de datos erroneos   
                break; // me permite no presentar el signo = en la pantalla
            default:
                display.innerText += e.target.innerText;// display cada tecla presionada
        }
    });
    

});

