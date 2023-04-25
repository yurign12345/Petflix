var categorias = document.querySelector(".categorias").classList

function mostrarMenu(){
    if(checkCadeado()) toggleCadeado();
    toggleHabilitado()
}

function bloquearMenu(){
    if(checkHabilitado()) toggleHabilitado();
    toggleCadeado();
}

function trocarUrl(codigo){
    var iframe = document.querySelector('.video iframe');
    iframe.src = `https://www.youtube.com/embed/${codigo}?I?controls=0&autoplay=1&playsinline=1`
}
///////////////////////////////////////////////////////////////
function checkHabilitado(){
    return categorias.value.includes('habilitado');
}
function checkCadeado(){
    return categorias.value.includes('cadeado');
}
function toggleHabilitado(){
    categorias.toggle('habilitado');
}
function toggleCadeado(){
    categorias.toggle('cadeado')
}
