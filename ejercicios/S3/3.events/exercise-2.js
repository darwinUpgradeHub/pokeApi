const input = document.querySelector('input');
input.addEventListener('focus', recogerDatos)
//si uso input es diferente
function recogerDatos(event){
    console.log(event.target.value)
}