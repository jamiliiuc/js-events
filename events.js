function changeBgToCoral(){
    document.getElementsByTagName("body")[0].style.backgroundColor='coral';
}

document.getElementById("btn-bg-ash").onclick = changeBgToAsh;
function changeBgToAsh(){
    document.getElementsByTagName("body")[0].style.backgroundColor='grey';
}


let btnBgLime = document.getElementById("btn-bg-lime");
btnBgLime.addEventListener('click', ()=>{
        document.getElementsByTagName("body")[0].style.backgroundColor='lime';
})
btnBgLime.addEventListener('click', ()=>{
    document.getElementsByTagName("body")[0].style.fontSize = "30px";
})

document.getElementById("title").addEventListener('click', ()=>{
    document.getElementsByTagName("body")[0].style.backgroundColor='red';
})


// changeBgToAsh();