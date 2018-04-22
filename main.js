var database = firebase.database().ref();

function newPost() {    
    var newTags = []
    var title = $("#title").val();
    var message = $("#message").val();
    var location = $("#LocTag").val();
    var tagsText = $("#tagTag").val();
    var tagsArr = tagsText.split(" ");
    
    tagsArr.forEach(function(element) {
        if (!masterTags.includes(element)) {
            masterTags.push(element);
            newTags.push(element);
            }
    });
    
    database.push({
        'title': title,
        'message': message,
        'locTag': location,
        'tagTag': tagsArr
    });
    
<<<<<<< HEAD
    newTags.forEach(function(element) {
        var div = document.createElement("div");
        div.innerHTML += '<span style="margin-left: 15px; font-size:30px;cursor:pointer" onclick="openTwo()" >' +
            '<h2 id="TagCard">' +
            element +
            '</h2></span>';
        $("#tags").append(div);
        
    });
    
=======
  
>>>>>>> c837e352f59042594b6f97d4640fd34a6b190b86
    $("#Post").click(function() {
        newPost();
     
    });
}