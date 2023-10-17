/*
Using the data.json you will create a list of pokemons.
We've created the necessary components for you, now it's
up to you to pass the props properly (😅) to these
components. Begin with the Pokemon's names, and continue on
with their types. Don't forget the key! Read more here:
https://reactjs.org/docs/lists-and-keys.html
*/
// Destructure pokemon props here :) (name and type)
import React from "react";
import ReactDOM from "react-dom/client";
import { Type } from "./Type";

export const Pokemon = ({ name, types }) => {
  // Build the the Pokemon component
  return (
    <p>
      Name: {name} Type: <Type types={types} />
    </p>
  );
};
