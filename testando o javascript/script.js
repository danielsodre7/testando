
/*
document.body.addEventListener('mouseover', (e)=>{
alterando(e.code);
});

function alterando(){
let alterar = document.querySelector('.roodape');

if(alterar) {
alterar.classList.add('active');
}
}
 */

let alteraDiv = document.querySelectorAll('.roodape');

for (e of alteraDiv){
    e.addEventListener('mouseover', (e)=>{
        e.target.classList.add('active');

        setTimeout(function(){
            e.target.classList.remove('active');
        }, 3000)
    }, false)
}


let menuSite = document.querySelectorAll('.div-menu');

for (e of menuSite){
    e.addEventListener('mouseover', (e)=>{
        e.target.style.color = "#e8b4fa";
        e.target.style.textsize = "20px"

        setTimeout(function(){
            e.target.style.color = "transparent";
        }, 3000)
    }, false)
}



let bodyPrincipal = document.querySelectorAll('.div-filho');

for (element of bodyPrincipal){
    element.addEventListener('mouseover', (e)=>{
    
        e.target.style.height = "90px";
        e.target.style.width = "200px";
        e.target.style.backgroundColor = "#e8b4fa";
        e.target.style.borderRadius = '15px 15px 15px 15px';

        setTimeout(function() {
            e.target.style.height = "90px";
            e.target.style.width = "90px";
            e.target.style.background = "#8cabde";            
        }, 2000)      

    }, false);

}


const items = document.querySelectorAll('.div-filho');

for (item of items) {
item.style.position ='absolute'

item.onmousemove = e => {
    const item = e.target
    item.style.cursor = 'move'
    if (e.buttons) {
        item.style.top = `${e.clientY - (item.clientHeight / 2)}px`
        item.style.left = `${e.clientX - (item.clientWidth / 2)}px`
    }
}
}































/*
let menuPrincipal = document.querySelectorAll('.div-filho');

for (element of menuPrincipal){
    element.addEventListener('mouseover', (e)=>{
    
        e.target.style.background = "url(../imagem/pata.svg)";
        e.target.style.backgroundRepeat = "repeat-y";
        e.target.style.backgroundPosition = "center center";
        //event.target.style.backgroundColor = "#c94444";
        
        setTimeout(function() {
            e.target.style.background = "";            
        }, 400)

        
    }, false);
}
*/