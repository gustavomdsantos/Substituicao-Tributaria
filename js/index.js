/**
 * Processa as informações, gerando um novo HTML.
 */
function verResultados() {


var listaEstados = JSON.parse("");

  alert("Funcionou!\n\nPreço total do produto: " + precoTotal);
}

/**
 * Faz formatação automática das caixas de texto para dinheiro e porcentagem.
 * Fonte: https://igorescobar.github.io/jQuery-Mask-Plugin
 */
$(document).ready(function(){
  $('.money').mask("#.##0,00", {reverse: true});
  $('.percent').mask('##0,00%', {reverse: true});
});
