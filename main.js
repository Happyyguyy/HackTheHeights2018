var database = firebase.database().ref();

function newPost() {
    var title = $("#title").val();
    var message = $("#message").val();
    var location = $("#LocTag").val();
    var tags = $("#tags").val().split(" ");
    
    database.push({
        'title': title,
        'message': message,
        'locTag': location,
        'tags': tags
    });
    
    $("#Post").click(function() {
        newPost();
    });
}