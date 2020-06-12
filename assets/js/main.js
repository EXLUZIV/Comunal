$(document).ready(function(){

        
        $("#form_error_message_frontend + div > div:last-child label").addClass("last");


        $("#cout").click(function (e){
  document.getElementById('out').value = "";


  var nameText = ("input[name*='nameText]").val();
  var nameFloat = parseFloat(nameText);

  var first_numbersText = $("input[name*='first_numbersText']").val();
  var first_numbersText = parseFloat(first_numbersText);

  var last_numbersText = $("input[name*='last_numbersText']").val();
  var last_numbersFloat = parseFloat(last_numbersText);

  var rateText = $("input[name*='rateText']").val();
  var rateFloat = parseFloat(rateText);


  if(last_numbers_Float>first_numbersFloat){
    last_numbersFloat = (last_numbersFloat - first_numbersFloat)* rateFloat;
      $('#out').append(last_numbersFloat);
    }
       else{
    $('#out').append("Введите правильные числа");
  }
})
})

