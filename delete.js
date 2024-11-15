let btnDelete = document.getElementById("btn-delete");
let inpDelte = document.getElementById("inp-delete");


btnDelete.addEventListener('click', () => {
    // condition inputText == "delete"
    document.getElementById("tobedeleted").style.visibility = "hidden"
})

inpDelte.addEventListener('keyup', ()=>{
    let inputText = document.getElementById("inp-delete").value;
    console.log(inputText);
    if(inputText == "delete") {
        btnDelete.removeAttribute('disabled')
    }
    else {
        btnDelete.setAttribute('disabled', true);
    }
})





