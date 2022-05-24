// When someone sends a date input, an image or video must show in the screen, followed by a title and description. 
// To make the video appear, I need to make and XML HTTP request and  use the NASA APOD API
// To make the elements appear, I will need to change the source of the image or video on my page and add text to the text elements on HTML.
// To do all that, I must use jQuery. 
// Dates are shown like this yyyy-mm-dd and they are strings

$("#ver").click(function() {
    let date = $("#date").val()
    
    $.ajax ({
        url: `https://api.nasa.gov/planetary/apod?api_key=l1wMSZ8t7d5yfFXWEQTAVuRjSfV3OJ3NuOvniUXv&date=${date}`,
        type: "GET",

        success: function(response) {
            console.log(response)
            $("#title").text(response.title)
            $("#image").attr("src", response.url)
            $("#explanation").text(response.explanation)

            if(response.media_type == "video") {
                $("#video").show()
                $("#video").attr("src", response.url)
            }

        },

        error: function() {
            alert("Data inválida. Insira uma data a partir de 16 de junho de 1995.")
        }
        
    })
})