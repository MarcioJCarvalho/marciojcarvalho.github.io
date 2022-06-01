// verifica se o tema do usuario é dark
const temaUsuario = window.matchMedia('(prefers-color-scheme: dark)');
// pegando as variaveis de cores que foram definidas no root do style.css
const html = document.querySelector("html");

// pegando o style do css
const getStyle = (element, style) =>
  window
    .getComputedStyle(element)
    .getPropertyValue(style)

const initialColors = {
  bg: getStyle(html, "--bg"),
  bgCard: getStyle(html, "--bg-card")
}

const darkMode = {
  bg: "#1a1a1a",
  bgCard: "1d1d1d"
}

// pega as chaves e insere -- e depois verifica tudo que começa com maiúscula seta o - antes e transforma para lowercase
const transformKey = key => 
  "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeTheme = (colors) => {
  Object.keys(colors).map(key => 
    html.style.setProperty(transformKey(key), colors[key])
  )
}

// escuta a mudança do tema no sistema
temaUsuario.addEventListener("change", (event) => {
  event.matches ? changeTheme(darkMode) : changeTheme(initialColors)
})

