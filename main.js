var database = firebase.database().ref();

function newPost() {
    var title = $("#title").val();
    var message = $("#message").val();
    var location = $("#LocTag").val();
    var tagsText = $("#tagTag").val();
    var tagsArr = tagsText.split();
    
    database.push({
        'title': title,
        'message': message,
        'locTag': location,
        'tagTag': tagsArr
    });
    
    $("#Post").click(function() {
        newPost();
    });
}