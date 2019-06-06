$(document).on("click", "#enviarPlanilha", function(){
  var conteudo = $("#planilha").html();
  conteudo += "<tr> <td>" + $("#descConta").val() +  " </td> <td class='valor'> " + $("#valorConta").val() + ",00</td> </tr>";
  $("#planilha").html(conteudo);
})

$(document).on("click", "#calcular", function(){
  var total = 0;
  var valorMedio = 0;
  var valorMaior = 0;
  var valorMenor = null;

  $(".valor").each(function(index,element){

      numero =  parseFloat($(element).text());
      total += parseFloat($(element).text());
      linhas =  $(".valor").length;
      valorMedio = total / linhas;
      if (valorMenor > numero || valorMenor == null) {
        valorMenor = numero;
      }
      if (valorMaior < numero) {
        valorMaior = numero;
      }

  })


  $("#resultadoTotal").text(total);
  $("#resultadoMedio").text(valorMedio);
  $("#resultadoMaior").text(valorMaior);
  $("#resultadoMenor").text(valorMenor);


})
