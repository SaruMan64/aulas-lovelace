$(document).ready(function () {
    $("#btn").on('click', () => {
        const cep = $("#cep").val();
        $.ajax({
            url: `https://cep.awesomeapi.com.br/json/${cep}`,
            success: function (response) {
                const maps = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAKNBkET_-yYAPBrSJdRrJ9kBRsZ-ZG7GI&q=${response.lat},${response.lng}`
                GoogleMapsIframe(maps);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.error("Status: " + textStatus);
                console.error("Error: " + errorThrown);
                $("#google-maps").html(`
                <h2>${"Status: " + textStatus}</h2>
                <h2>${"Error: " + errorThrown}</h2>
                    `);
            }
        })
    });

});

function GoogleMapsIframe(url) {
    $("#google-maps").html("");
    $("#google-maps").append(`<iframe id="maps" width="100%" height="100%" style="border: 0"
    loading="lazy" allowfullscreen src="${url}"></iframe>`);
}