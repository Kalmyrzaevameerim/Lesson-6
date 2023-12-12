const h1Tag = document.querySelector(".test") 
const button = document.querySelector("button") // null 
 const h4 = document.querySelector("#h1-4") 
 const h3 = document.querySelector("#h1-3") 
 
 
console.log(h4); 
 
 
let curs = 16 
 
 
if(curs > 14){ 
    h4.style.color = 'green' 
} else { 
    h4.style.color = 'red' 
} 
 
 
h4.innerHTML = "Hello World 1" 
h4.innerText = "Hello World 2" 
h4.textContent = "Hello World 3 " 
h4.innerHTML = "Hello World 4 <span>------</span> " 
 
button.remove() 
h3.remove() 
 
 
 
 
 
const inputs = document.querySelectorAll("input") 
 
const buttonSend = document.querySelector("button") 
 
 
//dom events (onclick, onchange, onkeydown, onkeypress, onblur) 
 
const userData ={ 
    name:"meerim", 
    email:'rain', 
    ps:"meerim900" 
} 
 
buttonSend.onclick = () => { 
    if (inputs[1].value === userData.email && inputs[2].value ===userData.ps){ 
        alert("Hello" + userData.name) 
        inputs[1].value.border ='' 
        inputs[2].style.border = '' 
    } else{ 
        inputs[1].style.border = '1px solid red' 
        inputs[2].style.border = '1px solid red' 
    } 
 
}