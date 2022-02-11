$(document).ready(function () {
    $("#btn").on('click', () => {
        const cep = $("#cep").val();
        if (cep.length === 0) {
            $("#google-maps").html(`
            <h1>Não foi digitado nada...</h1>
            <h2>Digite o CEP para motrarmos onde fica.</h2>
            `);
            return false;
        }
        $("label").toggle();
        $("input").toggle();
        $("button").toggle();
        $("#form").trigger("reset");
        $.ajax({
            url: `https://cep.awesomeapi.com.br/json/${cep}`,
            success: function (response) {
                const maps = `https://www.google.com/maps?api=1&q=${response.lat}%2C${response.lng}&hl=es;z=14&output=embed`
                //const mapskey = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAKNBkET_-yYAPBrSJdRrJ9kBRsZ-ZG7GI&q=${response.lat},${response.lng}`
                GoogleMapsIframe(maps);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                if (XMLHttpRequest.responseJSON.status === 404) {
                    $("#google-maps").html(`
                    <h1>${XMLHttpRequest.responseJSON.message}</h1>
                    `);
                    console.error("Status: " + textStatus);
                    console.error("Code: " + XMLHttpRequest.responseJSON.code);
                    console.error("Error: " + errorThrown);
                    console.error("Error: " + XMLHttpRequest.responseJSON.message);
                    $("label").toggle();
                    $("input").toggle();
                    $("button").toggle();
                    $("#form").trigger("reset");
                }
            }
        })
    });
    $(".container").on('click', () => {
        $("label").toggle();
        $("input").toggle();
        $("button").toggle();
    })

});

function GoogleMapsIframe(url) {
    $("#google-maps").html("");
    $("#google-maps").append(`<iframe id="maps" width="100%" height="100%" style="border: 0"
    loading="lazy" allowfullscreen src="${url}"></iframe>`);
}