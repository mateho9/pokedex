let pokemonRepository = (function () {
    //pokemon array
    let modalContainer = document.querySelector('#modal-container');
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
        loadDetails(pokemon).then(function (updatedPokemon) {
            showModal(updatedPokemon.name, 'Height: ' + updatedPokemon.height, updatedPokemon.imageUrl);
        });
    }

    //function to show the modal and its details
    function showModal(title, text, img_src) {
      let modalCotainer = document.querySelector('#modal-container');

    //clear all previous content
    modalContainer.innerHTML = '';

    let modal = document.createElement('div');
    modal.classList.add('modal');

    //add the content
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';

    let modalTitle = document.createElement('h1');
    modalTitle.innerText = title;

    let modalText = document.createElement('p');
    modalText.innerText = text;

    let modalImg = document.createElement('img');
    modalImg.classList.add('modal-img');
    // setting `src` property to set the actual element's `src` attribute
    // this also works on <img> elements selected by querySelector() method, 
    // it is not specific for <img> elements created with createElement() methods
    modalImg.src = img_src;

    modal.appendChild(closeButtonElement);
    modal.appendChild(modalTitle);
    modal.appendChild(modalText);
    modal.appendChild(modalImg);
    modalContainer.appendChild(modal);

    //made modal visible
    modalContainer.classList.add('is-visible');

    //close modal with esc button
    closeButtonElement.addEventListener('click', hideModal);

    //close modal when you click outside the box
    modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if(target === modalContainer) {
        hideModal();
      }
    });
  }

    function hideModal() {
      modalContainer.classList.remove('is-visible');
    }

    // close modal with esc
    window.addEventListener('keydown', (e) => {
      let modalContainer = document.querySelector('#modal-container');
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')){
        hideModal();
      }
    });

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

    //event listener to show pokemon details when you click on the box
    function buttonEventListener(button, pokemon){
      button.addEventListener('click', function(){
        showDetails(pokemon);
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
          return item;
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