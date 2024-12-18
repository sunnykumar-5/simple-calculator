// let display = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');
// let buttonArray = Array.from(buttons);
// let string = '';
// buttonArray.forEach(btn => {
//     btn.addEventListener('click',(e)=>{
        
//         if(e.target.innerHTML == 'DEL'){
//             string = string.substring(0,string.length-1);
//             display.value = string;
//         }else if (e.target.innerHTML == 'AC') {
//             string = '';
//             display.value =string;

//         } else if(e.target.innerHTML == '='){
//             string = evel(string);
//             display.value = string;
//         }else{
//              string += e.target.innerHTML;
//              display.value =string;
//         }
//     });
// });



let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = '';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === 'DEL') {
            string = string.slice(0, -1);
            display.value = string || '0';
        } else if (e.target.innerHTML === 'AC') {
            string = '';
            display.value = '0';
        } else if (e.target.innerHTML === '=') {
            try {
                string = eval(string) || '0';
                display.value = string;
            } catch {
                display.value = 'Error';
                string = '';
            }
        } else {
            string += e.target.innerHTML;
            display.value = string;
        }
    });
});
