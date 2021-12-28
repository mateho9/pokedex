let pokemonList = [
    {name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison']},
    {name: 'Nidoran', height: 0.4, type: ['poison']},
    {name: 'Magikarp', height: 1, type: ['water']},
    {name: 'Evee', height: 0.3, type: ['normal']},
]
//remember to use PEMDAS on math expressions

for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + " " + "(height: "
    + pokemonList[i].height + ", type: " + pokemonList[i].type + ") ");
    if(pokemonList[i].height >0.9){
        //this will display a certain message for big pokemon
        document.write("Wow, thats one big Pokemon!");
    }
    document.write('<br>');
}
// condition is i < pokemonList.length
// action is i++