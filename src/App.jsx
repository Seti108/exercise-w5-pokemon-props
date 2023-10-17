/*
Using the data.json you will create a list of pokemons.
We've created the necessary components for you, now it's
up to you to pass the props properly (😅) to these
components. Begin with the Pokemon's names, and continue on
with their types. Don't forget the key! Read more here:
https://reactjs.org/docs/lists-and-keys.html
*/

/*Extra!
Feel free to create more components, such as header/footer,
or why not include some more data from the array? */
import React from "react";
import ReactDOM from "react-dom/client";
import { Pokemon } from "./components/Pokemon";
import data from "./data.json";

//Map the data with a function expression
const pokemonArray = data.pokemons;

const renderPokemons = () => {
  return pokemonArray.map(({ id, name, types }) => (
    <Pokemon name={name} key={id} types={types + " "} />
  ));
};
const renderContent = renderPokemons();

// App component
export const App = () => {
  return <div className="App">{renderContent}</div>;
};
