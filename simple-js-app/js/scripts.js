let pokemonRepository = (function () {
    //pokemon array
    let pokemonList = [
        {
            name: 'Bulbasaur',
            height: 0.7,
            type: ['grass', 'poison']
        },
        {
            name: 'Nidoran', 
            height: 0.4, 
            type: ['poison']
        },
        {
            name: 'Magikarp', 
            height: 1, 
            type: ['water']
        },
        {
            name: 'Evee', 
            height: 0.3, 
            type: ['normal']
        },
    ];
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        getAll: getAll,
        add: add,
    };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
    console.log(pokemon.name + ' is ' + pokemon.height + 'M tall and ' + pokemon.type + ' type.');
});