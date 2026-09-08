// Fetch
// ////////////////////////////////////////

document.getElementById("code").onclick = () =>
  window.location = "/javascript/advanced/green/fetch.js";

// ////////////////////////////////////////

document.getElementById("1").addEventListener("click", event => {
  getPokemon1();
})

document.getElementById("2").addEventListener("click", event => {
  getPokemon2();
})

document.getElementById("3").addEventListener("click", event => {
  getPokemon3();
})

// ////////////////////////////////////////

function getPokemon1(){
  fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(response => {
    if(!response.ok){
      throw new Error("Could not fetch resource");
    }

    console.log(response);

    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error))
};

async function getPokemon2(){
  try{

    const response = await fetch("https://pokeapi.co/api/v2/pokemon/typhlosion");

    console.log(response);

    if(!response.ok){
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    console.log(data);

  }

  catch(error){

    console.error(error);

  }

}

async function getPokemon3(){

  try{
    
    const pokemonName = document.getElementById("pokemonName").value.toLocaleLowerCase();
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    console.log(response);

    if(!response.ok){
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    console.log(data);

    const pokemonSpriteSource = data.sprites.front_default;
    const pokemonSprite = document.getElementById("pokemonSprite");

    pokemonSprite.src = pokemonSpriteSource;
    pokemonSprite.style.display = "block";

  }

  catch(error){

    console.error(error);

  }

}
