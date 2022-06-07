const links = document.querySelectorAll(".buttons a");

function showLink(val){
    hideLinks();
    val.style.left = 0;
}

function hideLinks(){
    for(let link of links){
        link.style.left = "-5%";
    }
}

for(let i = 0; i < links.length; i++){
    links[i].addEventListener("mouseout", hideLinks);
}