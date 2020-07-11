$(document).ready(function (mystring) {
    $("#form_error_message_frontend + div > div:last-child label").addClass("last");

    $("#cout").click(function (e) {

        $('#out').text(' ');

        var nameText = $("input[name*='nameText']").val();

        var first_numbersText = $("input[name*='first_numbersText']").val();
        var first_numbersFloat = parseFloat(first_numbersText);

        var last_numbersText = $("input[name*='last_numbersText']").val();
        var last_numbersFloat = parseFloat(last_numbersText);


        var rateText = $("input[name*='rateText']").val();
        var rateFloat = parseFloat(rateText);

        //console.log(rateFloat);

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
            var allOutResult = allOutResult.toFixed(1);

            $('#all_out').append(allOutResult);
            $('#employeesTable').append('<tr><td>' + nameText + '</td><td>'
                + first_numbersText + '</td><td>'
                + last_numbersText + '</td><td>'
                + rateText + '</td><td>'
                + result + '</td> + <td> <button class = "clear_this"> Удалить </button> </td> </tr>');

            $(".clear_this").click(function () {
                $(this).parent().parent().remove();
                $(this).parent().parent().find(result);
                console.log(result);
                $('#all_out').find(allOutResult);
                console.log(allOutResult);
                var allOutResult = allOutResult - result;
                var allOutResult = allOutResult.toFixed(1);
                console.log(allOutResult);
                $('#all_out').append(allOutResult);
            });


        } else {
            $('#out').append("Первое число больше второго,исправьте");

        }
    });
    $("#clear").click(function (e) {
        $('#employeesTable').empty();
        $('#all_out').empty();

    })


});