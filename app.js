const pokedex = document.getElementById('pokedex');
const query = document.getElementById('search').value;

function fetchPokemon() {
    const promises = [];
    for (let i = 1; i <= 15; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((response) => response.json()));
    }

    Promise.all(promises).then((results) => {
        const pokemon = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            type: data.types.map(type => type.type.name).join(', ')
        }));
        displayPokemon(pokemon)
    });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon.map(pokeman => `
    <li class=card>
        <img src = "${pokeman.image}" />
        <div class=container>
            <h2>${pokeman.id}. ${pokeman.name}</h2>
            <p>Type : ${pokeman.type}</p>
        </div>
    </li>
    `).join("");

    pokedex.innerHTML = pokemonHTMLString;
}

fetchPokemon();