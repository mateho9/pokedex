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
        {
            name: 'Onix',
            height: 8.8,
            type: ['rock', 'ground']
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
    //added these into console just to see them work. 
    console.log(pokemon.name + ' is ' + pokemon.height + 'M tall and ' + pokemon.type + ' type.');
    if(pokemon.height>5) {
        console.log('Wow, thats one big Pokemon!');
    } 
    if(pokemon.height<0.5) {
        console.log('Look how small this Pokemon is')
    }

    document.write(pokemon.name + ' is ' + pokemon.height + 'M tall and ' + pokemon.type + ' type'); 
    if(pokemon.height>5) {
        document.write('Wow, thats one big Pokemon!');
    } 
    if(pokemon.height<0.5) {
        document.write('Look how small this Pokemon is.')
    }
    document.write('<br>');
});