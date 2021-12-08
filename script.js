function contar() {

    let start = document.getElementById('txtinicio')
    let end = document.getElementById('txtfim')
    let qtde = document.getElementById('passos')
    let res = document.getElementById('res')


    if (start.value.length == 0 || end.value.length == 0 || qtde.value.length == 0) {
        res.innerHTML = `Impossível contar`
    } else {

        res.innerHTML = 'Contando... <br>'
        let inicio = Number(start.value)
        let final = Number(end.value)
        let qtdePassos = Number(qtde.value)

        if (qtdePassos <= 0) {
            window.alert('Passo invalido! Considerando passo 1')
            qtdePassos = 1
        }

        // Contagem crescente
        if (inicio < final) {
            for (let i = inicio; i <= final; i += qtdePassos) {
                res.innerHTML += `${i} \u{1F449}`
            }
        } else {
            // Contagem decrescente
            for (let i = inicio; i >= final; i -= qtdePassos) {
                res.innerHTML += `${i} \u{1F449}`
            }
        }

        res.innerHTML += `\u{1F3C1}`

    }



}