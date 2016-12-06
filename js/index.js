/**
 * Remove elementos pelo nome da classe.
 * Não usa jQuery.
 *
 * Fonte: http://stackoverflow.com/a/14066534
 */
function removeElementsByClass(className){
  var elements = document.getElementsByClassName(className);
  while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
  }
}

/**
 * Processa as informações, gerando um novo HTML.
 */
function verResultados() {
  removeElementsByClass("form-group");
  alert("Funfou");
}

/**
 * Faz formatação automática das caixas de texto para dinheiro e porcentagem.
 * Fonte: https://igorescobar.github.io/jQuery-Mask-Plugin
 */
$(document).ready(function(){
  $('.money').mask("#.##0,00", {reverse: true});
  $('.percent').mask('##0,00%', {reverse: true});
});
