const buttonContainer = document.querySelector("div.buttons");

for(let i = 0; i < buttonContainer.children.length; i++){
    buttonContainer.children[i].addEventListener("mouseover", function(){
        buttonContainer.style.left = 0;
    })
}
