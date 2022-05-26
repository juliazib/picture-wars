$("#ver").click(function() {
    let date = $("#date").val()
    $.ajax ({
        url: `https://api.nasa.gov/planetary/apod?api_key=l1wMSZ8t7d5yfFXWEQTAVuRjSfV3OJ3NuOvniUXv&date=${date}`,
        type: "GET",

        success: function(response) {
            $("#title").text(response.title)
            $("#image").attr("src", response.url)
            $("#explanation").text(response.explanation)

            if(response.media_type == "video") {
                $("#video").show()
                $("#video").attr("src", response.url)
            }
            else if (response.media_type == "image") {
                $("#video").hide()
            }
        },

        error: function() {
            alert("Data inválida. Insira uma data a partir de 16 de junho de 1995.")
        }
        
    })
})