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
    //function to add pokemon to the list
    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    //funtion to return the pokemon list
    function getAll() {
        return pokemonList;
    }
    //found this solution online but dont quite understand it
    function showDetails(pokemon) {
        console.log(pokemon.name)
    }

    //added spacing so its easier to read for now
    function addListItem(pokemon) {
        let list = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerHTML = pokemon.name;
        button.classList.add('pressme');
        
        //Need to come up with a diff variable name?
        listItem.appendChild(button);
        list.appendChild(listItem)
        
        //adding eventhandler to show the pokemon logged on each press
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
            console.log(event);
        });
    }   

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
    };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});
