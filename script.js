var data;
var gender;

$.ajax({
    type: 'GET',
    url: 'data_filtered.json',
    dataType: 'json',
    success: function(d) { data = d; },
    async: false
});

$.ajax({
    type: 'GET',
    url: 'gender.json',
    dataType: 'json',
    success: function(d) { gender = d; },
    async: false
});

function getVerb() {
    var verb = data["verbo"][Math.floor(Math.random() * data["verbo"].length)];
    return verb[0].toUpperCase() + verb.slice(1) + " ";
}

function getNoun() {
    return data["substantivo"][Math.floor(Math.random() * data["substantivo"].length)];
}

function compareSubstring(str, subStr, begin) {
    if (str.length - begin < subStr.length)
        return false;

    for (var i = 0; i < subStr.length; i++) {
        if (str[begin + i] !== subStr[i])
            return false;
    }
    return true;
}

function getArticle(noun) {
    var out = " ";
    if (noun[noun.length - 1] === "s")
        out = "s" + out;

    out = (gender[noun] === 'm' ? 'o' : 'a') + out;
    return out;
}

$(document).ready(function() {
    $("#genPhrase").click(function() {
        $("#verb").hide();
        $("#art").hide();
        $("#noun").hide();

        var verb = getVerb();
        var noun = getNoun();
        var article = getArticle(noun);
        $("#verb").text(verb);
        $("#art").text(article);
        $("#noun").text(noun);

        $("#verb").fadeIn(400, function() {
            $("#art").fadeIn(400, function() {
                $("#noun").fadeIn(400);
            });
        });
    });
});