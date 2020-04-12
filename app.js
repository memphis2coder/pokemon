function fetchPokemon() {
    const query = document.getElementById('search').value;
    const url = `https://pokeapi.co/api/v2/pokemon/${query}`
    fetch(url)
        .then(response =>
            response.json())
        .then((data) => {
            console.log(data);
            const pokemon = {};
            pokemon['name'] = data.name;
            pokemon['id'] = data.id;
            pokemon['image'] = data.sprites['front_default']
            console.log(pokemon)
        })
        .catch((error) => {
            console.log('Error:', error)
        })
};

fetchPokemon();