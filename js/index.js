/**
 * Faz formatação automática das caixas de texto para dinheiro (em reais).
 */
$(document).ready(function(){
      $("input.real").maskMoney({showSymbol:true, symbol:"R$", decimal:",", thousands:"."});
});
