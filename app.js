$(document).ready(function()  {
  $("[name = 'searchbutton']").click(function(event)  {
    event.preventDefault();
    var $input = $("input");
    var pokemon = $input.val();
    $.get('http://pokeapi.co/api/v2/pokemon/' + pokemon, displayPokedata)
  })
})

function displayPokedata(pokemonData) {
  console.log(pokemonData)
  var $screen = $(".screen");
  var $img = $('<img src="' + pokemonData.sprites.front_default + '">');
  $screen.append($img);
}
