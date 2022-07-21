import { valid } from "./validacoes.js"

const inputs = document.querySelectorAll("input")

inputs.forEach(input=>{
    
    input.addEventListener("blur", (evt)=>{
        
        valid(evt) 
        
    })
})