document.addEventListener('DOMContentLoaded', function(){
    const menu = document.getElementById('burguer');
    const aba = document.querySelector('.aba__lateral');

    const link_organiz = document.getElementById('link_organizacao');
    const link_local = document.getElementById('link_local');

    const aba_organi = document.getElementById('aba_organizacao');
    const aba_local = document.getElementById('aba_local');


    const dataEvento = new Date('Jul 4, 2024 7:00:00');
    const timesTampDoEvento = dataEvento.getTime();
    const cronometroEvento = document.getElementById('momento');

    window.addEventListener('scroll', function(){
        const posicao = window.scrollY; 
        if(posicao != '0') {
            aba.classList.add('drop');
        }
    })

    menu.addEventListener('click', function(){
        aba.classList.toggle('drop');
    })

    link_organiz.addEventListener('click', function(){
        const sec_organizacao = document.getElementById('sec_organizacao');
        var organiz_position = sec_organizacao.offsetTop;

        window.scrollTo({
            top:organiz_position,
            behavior:'smooth'
        });
    })

    link_local.addEventListener('click', function(){
        const sec_local = document.getElementById('sec_local');
        var local_position = sec_local.offsetTop;

        window.scrollTo({
            top:local_position,
            behavior:'smooth'
        });
    })

    aba_organi.addEventListener('click', function(){
        const sec_organizacao = document.getElementById('sec_organizacao');
        var org_position = sec_organizacao.offsetTop;

        window.scrollTo({
            top:org_position,
            behavior:'smooth'
        });
    })

    aba_local.addEventListener('click', function(){
        const sec_local = document.getElementById('sec_local');
        var local_position = sec_local.offsetTop;

        window.scrollTo({
            top:local_position,
            behavior:'smooth'
        });
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