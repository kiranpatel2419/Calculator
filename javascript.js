let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerText=='='){
            try{
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = "ERROR"
            }
        }
        else if(e.target.innerText=="C"){
            display.innerText="";
        }
        else
        {
            display.innerText += e.target.innerText;
        }
    });
});