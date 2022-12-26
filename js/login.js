let userEmail = 'mehedihasan@gmail.com'
let userPassword = '12345678'
let logIn = document.getElementById('logIn')
let wronguser = document.createElement('div')
    wronguser.style.color = 'red'
    wronguser.style.position = 'absolute'
    wronguser.style.bottom = '50px'
    wronguser.style.left = '10px'
    wronguser.innerHTML = ''
    document.getElementById('form_side').appendChild(wronguser)

logIn.addEventListener('click', function(){
    let inputEmail = document.getElementById('inputEmail').value
    let inputPassword = document.getElementById('inputPassword').value
    if(userEmail == inputEmail && userPassword == inputPassword){
        window.location.href = 'home.html'
    }else if(userEmail != inputEmail){
        wronguser.innerHTML = 'your email is incorrect'
    }else if(userPassword != inputPassword){
        wronguser.innerHTML = 'your password is incorrect'
    }else if(userEmail != inputEmail && userPassword != inputPassword){
        wronguser.innerHTML = 'your email & password is incorrect'
    }
})
document.getElementById('inputEmail').addEventListener('keyup',function(){
    wronguser.innerHTML = ''
})
document.getElementById('inputPassword').addEventListener('keyup',function(){
    wronguser.innerHTML = ''
})