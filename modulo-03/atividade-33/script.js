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
        toggleMenu();
        $.ajax({
            url: `https://cep.awesomeapi.com.br/json/${cep}`,
            success: function (response) {
                const maps = `https://www.google.com/maps?api=1&q=${response.lat}%2C${response.lng}&hl=es;z=14&output=embed`
                GoogleMapsIframe(maps);
                const info = `
                <h1>Informações:</h1>
                <p><strong>CEP: </strong><span>${response.cep}</span></p>
                <p><strong>Endereço: </strong><span>${response.address}, ${response.district}</span></p>
                <p><strong>Cidade: </strong><span>${response.city}</span></p>
                <p><strong>Latitude: </strong><span>${response.lat}º</span></p>
                <p><strong>Longitude: </strong><span>${response.lng}º</span></p>
                <p><strong>Cidade IBGE: </strong><span>${response.city_ibge}</span></p>
                <p><strong>DDD: </strong><span>${response.ddd}</span></p>
                `;
                $("#info").html("");
                $("#info").html(info);
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
                    toggleMenu();
                }
            }
        })
    });
    $(".container").on('click', () => {
        toggleMenu();
    })

});

function GoogleMapsIframe(url) {
    $("#google-maps").html("");
    $("#google-maps").append(`<iframe id="maps" width="100%" height="100%" style="border: 0"
    loading="lazy" allowfullscreen src="${url}"></iframe>`);
}

function toggleMenu() {
    $("#toggle").toggle();
    $("#info").toggle();
    $("#form").trigger("reset");
}