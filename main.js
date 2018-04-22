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
    
    newTags.forEach(function(element) {
        var div = document.createElement("div");
        div.innerHTML += '<div class="card" id="tags"><span style="margin-left: 15px; font-size:30px;cursor:pointer" onclick="openTwo(this.id)" id="'+ element + '">' +
            '<h2 id="TagCard">&#9776; ' +
            element +
            '</h2></span></div>';
        $("#panelOne").append(div);
        
    });
    
    $("#Post").click(function() {
        newPost();
     
    });
}

function populateTags(matchingNodes) {
    matchingNodes.forEach(function(element) {
     div.innerHTML += '<div class="card"><span style="font-size:30px;cursor:pointer" onclick="openThree()"> <h1 class="title" id="PostCardTitle">'+ elementTitle +'</h1><p class="comment" id="PostCardMessage">'+ elementMessage +'</p><p class="time">Time: Sometime EST</p></span> </div>';
    $("#panelTwo").append(div);
    });
    
);