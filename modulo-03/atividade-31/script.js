$(document).ready(function () {
    dataJSON();
    changeDateIn();
    $("#btn-submit").on('click', function () {
        const formObj = {
            amount: Number.MAX_SAFE_INTEGER,
            moneyIn: $('#moneyin').val(),
            moneyOut: $('#moneyout').val(),
            dateIn: $('#datein').val().replace(/-/g, ""),
            dateOut: $('#dateout').val().replace(/-/g, "")
        }
        console.log(formObj);
        $.ajax({
            url: `https://economia.awesomeapi.com.br/${formObj.moneyIn}-${formObj.moneyOut}/${formObj.amount}?start_date=${formObj.dateIn}&end_date=${formObj.dateOut}`,
            success: function (response) {
                //console.log(response)
                const inf = response[0];
                $("tbody").html("");
                const data = response.map(el => {
                    el.timestamp = new Date(Number(el.timestamp * 1000)).toLocaleDateString('pt-br', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });
                    return el;
                });
                data.forEach((el) => {
                    $("tbody").append(`
                    <tr>
                    <th scope="row">${$('#moneyout').val()}</th>
                    <td>${el.timestamp}</td>
                    <td>${el.low}</td>
                    <td>${el.high}</td>
                    <td>${el.ask}</td>
                  </tr>
                    `);
                })
            }
        });
    });
});

/*
new Date(Date(Number("1644385036"))).toLocaleDateString('pt-br', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})
*/

function dataJSON() {
    $.getJSON("./dataset.json", function (result) {
        const moneyin = new Set();
        const moneyout = new Set();
        $.each(result, (key, value) => {
            const _key = key.split("-");
            moneyin.add(_key[0]);
            moneyout.add(_key[1]);
        });
        moneyin.forEach(el => {
            $("#moneyin").append(`<option value="${el}">${el}</option>`);
        });
        moneyout.forEach(el => {
            $("#moneyout").append(`<option value="${el}">${el}</option>`);
        });
    });
}

function changeDateIn() {
    $("#datein").on('change', function () {
        const date = {
            min: $(this).val(),
            max: `${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${(new Date().getDate()).toString().padStart(2, '0')}`
        }
        $("#dateout").attr({ "min": date.min }).attr({ "max": date.max }).attr("disabled", false);
    });
}
