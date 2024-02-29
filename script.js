function contar(){
    var inicio = Number(document.getElementById('ini').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('pass').value)
    var resultado = document.getElementById('contando')

    if(passo == 0){
        window.alert('Passo zero é inválido, o minimo que você precisa colocar é 1')
    }

    for(var i = inicio; i <= fim; i += passo){
        resultado.innerHTML += `👉 ${i}`
    }
    resultado.innerHTML += ` 🏁`
}



