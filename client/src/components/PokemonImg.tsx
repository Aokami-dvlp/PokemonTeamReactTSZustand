import React, { useEffect, Dispatch } from 'react'
import axios from 'axios'
import { IPokemon } from './PokemonSelect'
import { Card } from 'react-bootstrap'

interface IProps {
    value:string,
    setPokePic: Dispatch<React.SetStateAction<IPokemon>>,
    pokePic: IPokemon
}

const PokemonImg = (props:IProps) => {

    const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RuDkgqHQMTa7733I-6iWt-vgZjrkL4JsgR8r8Y2mGQ&s";

    useEffect(() => {
      if(props.value){
      axios
      .get(props.value)
      .then((r) => props.setPokePic({name: r.data.name, 
                                      url:r.data.sprites.front_default}))
      .catch((err) => console.log(err));
      }
    }, [props.value])


  return (
    <>
    <Card style={{ width: '10rem', display: 'flex', flexDirection: 'column', alignItems:'center' }}>
    <Card.Title className='text-center'>{props.pokePic.name ? props.pokePic.name.toUpperCase() : 'A te la scelta!'}</Card.Title>
      <Card.Img variant="top" src={props.pokePic.url ? props.pokePic.url : defaultImage} />
    </Card>
    </>
  )
}

export default PokemonImg