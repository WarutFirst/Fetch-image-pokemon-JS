async function fetchData() {
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const respone = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!respone.ok){
            throw new Error("could not fetch resource");
        }

        const data = await respone.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite")

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block"; 

        console.log(data)
    }
    catch(error){
        console.log(error);
    }
}