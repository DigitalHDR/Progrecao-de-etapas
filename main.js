let circulos = document.querySelectorAll('.circulo')
let indicador = document.querySelector('.indicador')
let botoes = document.querySelectorAll('.botoes')

let anterior = document.querySelector('#anterior')
let proximo = document.querySelector('#proximo')

let etapa = 1

function atualizaEtapa(e) {
  etapa = e.target.id === 'proximo' ? ++etapa : --etapa

  circulos.forEach((circulo, index) => {
    circulo.classList[`${index < etapa ? 'add' : 'remove'}`]('ativo')
  })

  indicador.style.width = `${((etapa - 1) / (circulos.length - 1)) * 100}%`

  if (
    etapa === circulos.length
      ? proximo.setAttribute('disabled', 'disabled')
      : proximo.removeAttribute('disabled', 'disabled')
  ) {
    return
  } else if (
    etapa === 1
      ? anterior.setAttribute('disabled', 'disabled')
      : anterior.removeAttribute('disabled', 'disabled')
  ) {
    return
  }
}

botoes.forEach((botao) => {
  botao.addEventListener('click', atualizaEtapa)
})
