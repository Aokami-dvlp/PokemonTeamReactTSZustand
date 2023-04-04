import React, { Dispatch } from 'react'
import { IPokemon } from './PokemonSelect'
import axios from 'axios';
import { Button } from 'react-bootstrap';
  

interface IProps {
    setPokePic: Dispatch<React.SetStateAction<IPokemon>>
    }

const AddRandomPokemon = (props:IProps) => {

    const getRandomPokemon = () => {
        axios
        .get("https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 1281) + "/")
        .then((r) => props.setPokePic({name: r.data.name, 
                                url:r.data.sprites.front_default}))
        .catch((err) => console.log(err)); 
    }


  return (
    <Button variant="success" className="fw-bold mt-2" onClick={getRandomPokemon}>RANDOM</Button>
  )
}

export default AddRandomPokemon