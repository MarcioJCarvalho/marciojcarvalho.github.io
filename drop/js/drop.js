// alterar tema de acordo com o tema padrão do usuario
const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
function changeTheme(event) {
  if( event.matches ) {
    // O tema é o dark
    darkMode();
    console.log(event.matches );
  } else {
    // O tema é o light
    console.log(event.matches );
  }
}

function darkMode(){
  document.body.style.backgroundColor = '#1a1a1a';
}

function lightMode(){
  document.body.style.backgroundColor = '#ebe8e8';
}

// Escuta a mudança de tema no sistema
//prefersColorScheme.addListener(changeTheme);

// Altera o tema conforme o tema do usuário
changeTheme(prefersColorScheme);


