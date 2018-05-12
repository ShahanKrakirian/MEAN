$(document).ready(function(){

    $('button').click(function(e) {
        $.get("https://api.github.com/users/shahankrakirian", displayName, 'json')

    })
    function displayName(data) {
        $('.pick-me').html("My name is " + data.name + "!");
    }
})