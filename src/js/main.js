// para deixar o link do menu de navegação em destaque 
var linkContainer = document.getElementById("navbar");
var links = linkContainer.getElementsByClassName("link");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active");
        this.className += " active";
    })  
}

