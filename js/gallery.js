var gallery = document.getElementById("gallery");

function addToGallery(key, imageUrl){
    var str = gallery.innerHTML;
    var newImg = "<div class='col-2'><a href='"+imageUrl+"'><img class='img-thumbnail' src='"+imageUrl+"'><div class='caption'>"+key+"</div></a></div>";
    gallery.innerHTML = str + newImg;
}
