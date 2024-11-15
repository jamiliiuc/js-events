let btnAdd = document.getElementById("btn-1");
let btnMult = document.getElementById("btn-2");
let result = document.getElementById("result");
function getvalue(inputFieldId) {
    return document.getElementById(inputFieldId).value;
}
function reset(inputFieldId) {
    return document.getElementById(inputFieldId).value = "";
}

btnAdd.addEventListener('click', ()=>{
    let a = parseFloat(getvalue('inp1'));
    let b = parseFloat(getvalue('inp2'));
    console.log(a, b);
    result.innerHTML = a + b;

    reset("inp1");
    reset("inp2");
})

btnMult.addEventListener('click', ()=>{
    let a = parseInt(getvalue('inp1'));
    let b = parseInt(getvalue('inp2'));
    console.log(a, b);
    result.innerHTML = a * b;

    reset("inp1");
    reset("inp2");
})