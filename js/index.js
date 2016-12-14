/**
 * Processa as informações, exibindo em uma caixa de diálogo do navegador (alert).
 */
function verResultados() {

  var precoTotal = jsyaml.load(readTextFile("./assets/data/carga-tributaria-brasil.yml"));
  /*A linha acima não funciona offline, só funciona se tiver no GitHub Pages ou,
  opcionalmente estiver sendo usada a opção "Permitir acesso às URLs do arquivo
  no Google Chrome."*/
  alert("Processado!\n\nMelhor rota alternativa para este produto é: " + precoTotal);
}

/**
 * Função que lê um arquivo e salva em uma variável String de forma otimizada.
 * Código reusado de: http://stackoverflow.com/a/14446538
 */
function readTextFile(file) {

  var rawFile = new XMLHttpRequest();
  rawFileText = ""; // variável GLOBAL, necessário pra que a subfunção funcione
  rawFile.open("GET", file, false);

  rawFile.onreadystatechange = function() {

    if (rawFile.readyState === 4) {

      if (rawFile.status === 200 || rawFile.status === 0) {

        window.rawFileText = rawFile.responseText;
        //alert(window.rawFileText);
      }
    }
  };
  rawFile.send(null);
  return window.rawFileText;
}

/**
 * Função que gera a rota que paga menos impostos, sempre com origem em Goiás.
 */
function geraMelhorRota() {

  var origem = "go";
  var destino = document.getElementById("estado-destino-produto").value;

  var melhorRota = [origem]; // i=0

  var i=1;
  var j=0;
  while (melhorRota[i] != destino) { // enquanto não tiver montado estado de destino

    var cargaTributariaEstadoAtual = Object.byString(dados, melhorRota[i-1]).carga_tributaria;
    var fronteirasEstadoAtual = Object.byString(dados, melhorRota[i-1]).vizinhos; // ver quais os estados que fazem fronteira com este

    for (j=0; i<fronteirasEstadoAtual.length; i++) { // verificar qual a menor carga tributaria dentre as fronteiras
      var cargaTributariaOutroEstado_tmp = Object.byString(dados, melhorRota[i]).carga_tributaria;

      if (cargaTributariaOutroEstado_tmp < cargaTributariaEstadoAtual) { // a carga tributaria é menor que a comparação anterior
        melhorRota[i] = Object.byString(dados.melhorRota[i]);
    }
    i++;
  }
}

/**
 * Faz formatação automática das caixas de texto para dinheiro e porcentagem.
 * Fonte: https://igorescobar.github.io/jQuery-Mask-Plugin
 */
$(document).ready(function(){
  $('.money').mask("#.##0,00", {reverse: true});
  $('.percent').mask('##0,00%', {reverse: true});
});
