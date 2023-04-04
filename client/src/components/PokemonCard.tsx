import React from 'react'
import { IPokemon } from './PokemonSelect'
import { Button, Card } from 'react-bootstrap'
import useStore from '../store'

interface IProps {
    pokemon:IPokemon,
    index:number,
    toastDeleted: (value:string) => void
}

const PokemonCard = (props:IProps) => {
    const {pokemon, index, toastDeleted} = props

    const store = useStore(state => state)

  return (
    <>
    <Card style={{ width: '15rem', display: 'flex', flexDirection: 'column', alignItems:'center' }}>
      <Card.Img variant="top" src={pokemon.url} />
      <Card.Body>
        <Card.Title className='text-center'>{pokemon.name}</Card.Title>
        <Button variant="danger" className='fw-bold' value={pokemon.name} onClick={(e) => {store.removePokemon(index)
                                                                                            toastDeleted(e.currentTarget.value)}}>
                                                                                              Rimuovi dalla squadra
                                                                                            </Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default PokemonCard