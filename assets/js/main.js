$(document).ready(function (mystring) {
    $("#form_error_message_frontend + div > div:last-child label").addClass("last");

    $("#cout").click(function (e) {

        $('#out').text(' ');

        var nameText = $("input[name*='nameText']").val();
        var first_numbersFloat = parseFloat($("input[name*='first_numbersText']").val());
        var last_numbersFloat = parseFloat($("input[name*='last_numbersText']").val());
        var rateFloat = parseFloat($("input[name*='rateText']").val());
        var allOutText = $('#all_out').text();
        var allOutFloat = 0;

        if (allOutText.length > 0) {
            allOutFloat = parseFloat(allOutText);
        }

        if (first_numbersFloat > 0 && last_numbersFloat > 0 && rateFloat > 0) {
            if (last_numbersFloat > first_numbersFloat) {

            } else {
                $('#out').append("Отрицатильные числа,исправьте");
            }
        }

        if (last_numbersFloat > first_numbersFloat) {
            var result = (last_numbersFloat - first_numbersFloat) * rateFloat;
            $('#all_out').text(' ');
            var allOutResult = allOutFloat + result;
            allOutResult = allOutResult.toFixed(1);

            $('#all_out').append(allOutResult);
            $('#employeesTable > tbody').append('<tr class = ".dname"><td>' + nameText + '</td><td>'
                + first_numbersFloat + '</td><td>'
                + last_numbersFloat + '</td><td>'
                + rateFloat + '</td><td>'
                + result + '</td> + <td> <button class = "clear_this"> Удалить </button> </td> </tr>');


        } else {
            $('#out').append("Первое число больше второго,исправьте");

        }
    });



    $("#clear").click(function (e) {
        $("#employeesTable > tbody tr").remove();
        // var tr = $(".dname").find("td");
        // console.log(td);
        // $(tr).remove();
        //$("tr").removeClass(#.dname);
        //console.log(#.dname);
    })

    });
    


    $(document).on('click', '.clear_this', function () {
        var td = $(this).parent().parent();
        var thisOut = parseFloat($('#all_out').text());
        td = parseFloat(td[0].childNodes[4].firstChild.data);
        var allOutResult = thisOut - td;
        allOutResult = allOutResult.toFixed(1);
        $('#all_out').text('');
        $('#all_out').append(allOutResult);
        $(this).parent().parent().remove();
    });

