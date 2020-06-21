$(document).ready(function(mystring){

        
        $("#form_error_message_frontend + div > div:last-child label").addClass("last");



  var nameText = $("input[name*='nameText']").val();

  var first_numbersText = $("input[name*='first_numbersText']").val();
  var first_numbersFloat = parseFloat(first_numbersText);

  var last_numbersText = $("input[name*='last_numbersText']").val();
  var last_numbersFloat = parseFloat(last_numbersText);

  var rateText = $("input[name*='rateText']").val();
  var rateFloat = parseFloat(rateText);


  $("#cout").onclick(function (e){
    document.getElementById("out").value = "";
  })


  if(first_numbersFloat > 0 && last_numbersFloat > 0 && rateFloat > 0 ) {


      if (last_numbersFloat > first_numbersFloat) {

      }
      else {
          $('#out').append("Отрицатильные числа,исправьте");
      }
  }


    if (last_numbersFloat > first_numbersFloat) {


        last_numbersFloat = (last_numbersFloat - first_numbersFloat) * rateFloat;
        $('#out').append(last_numbersFloat);
    }
    
    else {
        $('#out').append("Отрицатильные числа,исправьте");
    }




})

