document.addEventListener('DOMContentLoaded', function(){
    const menu = document.getElementById('burguer');
    const aba = document.querySelector('.aba__lateral');
    const dataEvento = new Date('Jul 4, 2024 7:00:00');
    const timesTampDoEvento = dataEvento.getTime();
    const cronometroEvento = document.getElementById('momento');

    menu.addEventListener('click', function(){
        aba.classList.toggle('drop');
    })



const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaDoEvento = timesTampDoEvento - timeStampAtual;

    const diasEmMs = 24*60*60*1000;
    const horasEmMs = 1000*60*60; 
    const minutosEmMs = 1000*60;
    const segundosEmMs = 1000; 
    
    const diasDoEvento = Math.floor(distanciaDoEvento/diasEmMs);
    const horasAteEvento = Math.floor(distanciaDoEvento % diasEmMs/horasEmMs);
    const minutosAteEvento = Math.floor((distanciaDoEvento % horasEmMs) / minutosEmMs)
    const segundosAteEvento = Math.floor((distanciaDoEvento% minutosEmMs)/segundosEmMs)
    
    if(distanciaDoEvento<0) {
        clearInterval(contaAsHoras);
        cronometroEvento.innerText = 'já terminou! Agora aguarde a próxima oportunidade.'
        
    }
    else {
        cronometroEvento.innerText = 
            `Vai começa em ${diasDoEvento} dias, ${horasAteEvento} horas, 
            ${minutosAteEvento} minutos e ${segundosAteEvento} segundos`;
    }
    
    

},1000)


})