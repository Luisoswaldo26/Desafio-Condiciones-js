const btn = document.querySelector('button')
const mensaje = document.querySelector('.mensaje')

btn.addEventListener("click", () => {
    const [{ value: a },{ value: b },{value: c }] = document.querySelectorAll('select')
    const password = a + b + c
    console.log(password)
    if (password == "911") mensaje.innerHTML = "password 1 correcto"
    else if (password == "714") mensaje.innerHTML = "password 2 correcto"
    else mensaje.innerHTML = "password incorrecto"
})