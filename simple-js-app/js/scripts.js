let pokemonRepository = (function () {
    //pokemon array
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    //function to add pokemon to the list
    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    //funtion to return the pokemon list
    function getAll() {
        return pokemonList;
    }
    //used to execute loadDetails inside the console
    function showDetails(pokemon) {
        console.log(pokemon.name);
        loadDetails(pokemon).then(function () {
            console.log(pokemon);
        });
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

    function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
      }

      function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // Now we add the details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
      }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
    };
})();

pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
});
