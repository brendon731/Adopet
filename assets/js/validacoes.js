export function valid({ target }){
    const inputType = target.dataset.type

    if(validators[inputType]){
        validators[inputType](target)
    }

    
    if(target.validity.valid){
        // target.parentNode.classList.remove("invalid-field") 
        target.parentNode.querySelector(".invalid-field").innerHTML = ""
        
    }else{
        // target.parentNode.classList.add("invalid-field")
        target.parentNode.querySelector(".invalid-field").innerHTML = errorMessage(inputType, target)

    }
}

const validators = {
    nascimento: (data) => birth.validate(data),
    cpf: (data) => CPF.validate(data),
    cep: (input) => CEP.validate(input),
    confirmPassword:(input) => password.validate(input)

}

function errorMessage(inputType, input){
    let message = ""

    errorTypes.forEach(error=>{
        if(input.validity[error]){
            message = errorMessages[inputType][error]
        }
    })
    return message
}

const errorTypes = [
    "valueMissing", 
    "patternMismatch",
    "typeMismatch",
    "customError"
]

const errorMessages = {
    name:{
        valueMissing:"O campo nome não pode estar vazio."
    },
    email:{
        valueMissing:"O campo de email não pode estar vazio.",
        typeMismatch:"O email digitado não é valido."
    },
    password:{
        valueMissing:"O campo de senha não pode estar vazio.",
        patternMismatch:`A senha deve conter de 8 a 12 caracteres,
        uma letra maiúscula, uma minúscula, um caractere especial ($*&@#), e não deve conter símbolos.`

    },
    confirmPassword:{
        customError:"As senhas precisam ser iguais.",
        valueMissing:"O campo de senha não pode estar vazio.",
        patternMismatch:`A senha deve conter de 8 a 12 caracteres,
        uma letra maiúscula, uma minúscula, um caractere especial ($*&@#), e não deve conter símbolos.`
    },
    descrição:{
        valueMissing:"O campo Descrição não pode estar vazio."
    }
}
const password = {
    validate(input){
        let message = ""
        let password = document.querySelector("[data-type='password']").value
        let secondPassword = document.querySelector("[data-type='confirmPassword']").value
        console.log(password === secondPassword)

        if(password !== secondPassword){
            message = "As senhas precisam ser iguais."
        }
        input.setCustomValidity(message)

        
    }
}


