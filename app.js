let sign = document.getElementById("sign")
let login = document.getElementById("login")

let signbtn = document.getElementById("signbtn")
let loginbtn = document.getElementById("loginbtn")

loginbtn.addEventListener("click",() =>{
    sign.classList.add("hide")
    login.classList.add("show")
})

signbtn.addEventListener("click",() =>{
    console.log('hel');
    
    sign.classList.remove("hide")
    login.classList.remove("show")
})

