function processImage() {
    var imageUrl = getViewUrl();
    var subscriptionKey = "7c6641e5a26e488c9ae34ce4ad2fb34b";
    var uriBase = "https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze";
    var params = {
        "visualFeatures": "Description",
        "details": "",
        "language": "en",
    };

    // Perform the REST API call.
    $.ajax({
        url: uriBase + "?" + $.param(params),

        // Request headers.
        beforeSend: function(xhrObj){
            xhrObj.setRequestHeader("Content-Type","application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
        },

        type: "POST",

        // Request body.
        data: '{"url": ' + '"' + imageUrl + '"}',
    })

    .done(function(data) {
        var res = data["description"]["tags"];
        var str = "";
        var i;
        for(i in res){
            str = str + "<a class='btn btn-warning' href='#'>"+res[i]+"</a>";
        }
        var tagCell = document.getElementById("tags");
        tagCell.innerHTML = str;
        findMatch(res, imageUrl);
    })

    .fail(function(jqXHR, textStatus, errorThrown) {
        // Display error message.
        var errorString = (errorThrown === "") ? "Error. " : errorThrown + " (" + jqXHR.status + "): ";
        errorString += (jqXHR.responseText === "") ? "" : jQuery.parseJSON(jqXHR.responseText).message;
        alert(errorString);
    });
};