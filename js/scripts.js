$().ready(function() {

  $(".btn#showResult").click(function(){
    event.preventDefault();
    // var newFavs= [];
    // var color = $("input#color").val();
    // var food = $("input#food").val();
    // var place = $("input#place").val();
    // var animal = $("input#animal").val();
    var favorites = ["color", "food", "place", "animal"]
    console.log(favorites);

    favorites.forEach(function(favorite) {
        var userInput = $("input#" + favorite).val();
        $("#favorites" + favorite).text(userInput);
        alert("You love " + userInput + "!");
    });
    // newFavs.push(favoritesArr[1]);
    // newFavs.push(favoritesArr[0]);
    // newFavs.push(favoritesArr[2]);
    // newFavs.push(favoritesArr[3]);
    // console.log(newFavs);

    // $("#favorites").text("Your favorites are " + favoritesArr + "!");
    //
    // $(".newFav").append("<li>"+newFavs[0]+"</li>");
    // $(".newFav").append("<li>"+newFavs[1]+"</li>");
    // $(".newFav").append("<li>"+newFavs[2]+"</li>");
    // $(".newFav").append("<li>"+newFavs[3]+"</li>");


  });
});
