let input = document.getElementById('input');
let checkBtn = document.getElementById('checkBtn');
let resetBtn = document.getElementById('resetBtn');
let t1 = document.getElementById('t1');
let t2 = document.getElementById('t2');
let tries = 10;
t2.innerText = 'you have 10 tries'
let number = Math.floor(Math.random() * 10) + 1;

checkBtn.addEventListener('click', function (){
    let i= Number(input.value);
    if (i === number) {
        t1.innerText = 'Correct';
    } else {
        t1.innerText = 'Wrong';
        tries -= 1;
        t2.innerText = `you have ${tries} tries`;
        if (tries == 0) {
            checkBtn.disabled = true;
        }
    }   
})

resetBtn.addEventListener('click', function() {
    tries = 10;
    number = Math.floor(Math.random() * 10) + 1;
    input.value = ''; 
    t1.innerText = ''; 
    t2.innerText = 'you have 10 tries';
    checkBtn.disabled = false; 
})
