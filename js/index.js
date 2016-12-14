/**
 * Processa as informações, exibindo em uma caixa de diálogo do navegador (alert).
 */
function verResultados() {

  var precoTotal = jsyaml.load(readTextFile("./assets/data/carga-tributaria-brasil.yml"));
  /*A linha acima não funciona offline, só funciona se tiver no GitHub Pages ou,
  opcionalmente estiver sendo usada a opção "Permitir acesso às URLs do arquivo
  no Google Chrome."*/
  alert("Funcionou!\n\nPreço total do produto: " + precoTotal);
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
 * Faz formatação automática das caixas de texto para dinheiro e porcentagem.
 * Fonte: https://igorescobar.github.io/jQuery-Mask-Plugin
 */
$(document).ready(function(){
  $('.money').mask("#.##0,00", {reverse: true});
  $('.percent').mask('##0,00%', {reverse: true});
});
