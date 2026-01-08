console.log("Teste")

const agora = new Date();

//Código para resolver o fuso horário
function atualizarRelogio() {
    const agora = new Date();

    const dataHora = agora.toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const relogio = document.getElementById("relogio");
    relogio.innerText = dataHora;
}

// atualiza a cada 1 segundo
setInterval(atualizarRelogio, 1000);

// executa imediatamente ao carregar a página
atualizarRelogio();


//Código para montar a data
const dia = doisDigitos(agora.getDate());
const mes = doisDigitos(agora.getMonth() + 1);
const ano = agora.getFullYear();


function doisDigitos(numero) {
    return numero < 10 ? "0" + numero : numero;
}

const dataFormatada = `${dia}/${mes}/${ano}`;

//Código para montar a hora
const horas = doisDigitos(agora.getHours());
const minutos = doisDigitos(agora.getMinutes());
const segundos = doisDigitos(agora.getSeconds());

const horaFormatada = `${horas}:${minutos}:${segundos}`;