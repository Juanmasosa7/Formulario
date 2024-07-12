//document.addEventListener(evento,funcion)

document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('registrationForm').addEventListener('submit',function(event){
        //console.log(event)
        event.preventDefault()

        if(validarFormulario()){
            alert('Formulario enviado con exito')
        }
    })
})


function validarFormulario(){

let nombre=document.getElementById('name').value
let email=document.getElementById('email').value
let password=document.getElementById('password').value
let confirmPassword=document.getElementById('confirmPassword').value


let nameError=document.getElementById('nameError')
let emailError=document.getElementById('emailError')
let passwordError=document.getElementById('passwordError')
let confirmPasswordError=document.getElementById('confirmPasswordError')

let validar=true

console.log((nombre))


//validacion nombre
if(nombre.trim()==''){
    nameError.textContent='el nombre es obligatorio'
    nameError.style.display='block' 
    validar=false
} else{
    nameError.style.display='none'
}

//validacion email
if(email.trim()==''){
    emailError.textContent='el correo es obligatorio'
    emailError.style.display='block'
    validar=false
} else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    emailError.textContent='el correo no es valido'
    emailError.style.display='block'
    validar=false
} else{
    emailError.style.display='none'
}

//validacion contraseña
if(password.trim()==''){
    passwordError.textContent='la contraseña es obligatorio'
    passwordError.style.display='block'
    validar=false
} else if(password.length<6){
    passwordError.textContent='la contraseña debe tener 6 caracteres'
    passwordError.style.display='block'
    validar=false
}else{
    passwordError.style.display='none'
}

//validacion misma contraseña
if(confirmPassword.trim()==''){
    confirmPasswordError.textContent='confirmar contraseña'
    confirmPasswordError.style.display='block'
    validar=false
} else if(password !== confirmPassword){
    confirmPasswordError.textContent='las contraseñas no coinciden'
    confirmPasswordError.style.display='block' 
    validar=false
}else{
    confirmPasswordError.style.display='none'
}
return validar
}