'use strict';

const formatarDigito = (numero) => numero = numero > 9 ? numero : `0${numero}` 

const atualizar = (time) => {
    const horas = document.querySelector("#horas");
    const minutos = document.querySelector("#minutos");
    const segundos = document.querySelector("#segundos");
    const dias = document.querySelector("#dias");

    const qtdDias = Math.floor(time / (60 * 60 * 24));
    const qtdHoras = Math.floor((time % (60 * 60 * 24))/(60 * 60));
    const qtdMinutos =  Math.floor((time % (60 * 60))/60); 
    const qtdSegundos = time % 60;

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);
}

const pararContagem = (interval) => clearInterval(interval);
const contagemRegressiva = (time) => {
    const contar = () => {
        atualizar(time);
        time > 0 ? time-- : pararContagem(interval);
    }
    const interval = setInterval( contar,1000) 
}
const tempoTotal = () => {
    const dataEvento = new Date ('2027-06-18 1:00:00')
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje)/1000)
}
contagemRegressiva(tempoTotal());