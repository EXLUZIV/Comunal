$(document).ready(function(mystring){

        
        $("#form_error_message_frontend + div > div:last-child label").addClass("last");



 $("#cout").click(function (e){ 

 $('#out').text(' ');


  var nameText = $("input[name*='nameText']").val();

  var first_numbersText = $("input[name*='first_numbersText']").val();
  var first_numbersFloat = parseFloat(first_numbersText);

  var last_numbersText = $("input[name*='last_numbersText']").val();
  var last_numbersFloat = parseFloat(last_numbersText);

  var rateText = $("input[name*='rateText']").val();
  var rateFloat = parseFloat(rateText);

  var all_out = 0;


  if(first_numbersFloat > 0 && last_numbersFloat > 0 && rateFloat > 0) {


      if (last_numbersFloat > first_numbersFloat) {

      }
      else {
          $('#out').append("Отрицатильные числа,исправьте");
      }
  }     


    if (last_numbersFloat > first_numbersFloat) {


        last_numbersFloat = (last_numbersFloat - first_numbersFloat) * rateFloat;
        $('#out').append(last_numbersFloat);

        $('#all_out').append("Итоговая сумма оплаты :" && last_numbersFloat)

    }
    
    else {
        $('#out').append("Первое число больше второго,исправьте");
    }



    //$('#myTable tr:last').after('<tr> <td></td> <td></td> <td></td> <td></td> <td></td> </tr>');\
    $('#employeesTable').append('<tr> <td id = "name_table"></td"> <td id = "first_numbers_table></td> <td  id last_numbers_table></td> <td id = "rate_table"></td> <td id = "out_table"></td> </tr>');



    $('#name_table').append(nameText);
    $('#first_numbers_table').append(first_numbersText);
    $('#last_numbers_table').append(last_numbersText);
    $('#rate_table').append(rateText);
    $('#out_table').append(out);




})

 $("#clear").click(function(e){


    $('#name_table').text('');
    $('#first_numbers_table').text('');
    $('#last_numbers_table').text('');
    $('#rate_table').text('');
    $('#out_table').text('');
    $('#all_out').text('');


 })
})

