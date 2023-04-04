import React, { MouseEventHandler } from 'react'
import { IPokemon } from '../components/PokemonSelect'
import PokemonCard from '../components/PokemonCard'
import { Toast, ToastContainer } from 'react-bootstrap'
import useStore from '../store'

interface IProps {
  team:IPokemon[],
  setTeam:React.Dispatch<React.SetStateAction<IPokemon[]>>
}

const ViewTeam = () => {

  const store = useStore(state => state)

  const [showToast, setShowToast] = React.useState(false)
  const [nameOnToast, setNameOnToast] = React.useState('')

  const toastDeleted = (value:string) => {
    setNameOnToast(value)
    setShowToast(true)
  }

  return (
    <div className='container-fluid d-flex justify-content-evenly mt-5'>
      {store.team.map((pokemon, index) => {
       return <PokemonCard key={index} pokemon={pokemon} index={index} toastDeleted={toastDeleted}/>
      }
      )}

    <ToastContainer className="p-3" position={"top-end"}>
        <Toast onClose={() => setShowToast(false)} show={showToast} bg={'warning'} delay={3000} autohide>
          <Toast.Header>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RuDkgqHQMTa7733I-6iWt-vgZjrkL4JsgR8r8Y2mGQ&s"
              className="rounded me-2"
              style={{width: '20px', height: '20px'}}
            />
            <strong className="me-auto">Pokemon Team Generator</strong>
          </Toast.Header>
          <Toast.Body className='fw-bold'>{nameOnToast.toUpperCase()} RIMOSSO DALLA SQUADRA</Toast.Body>
        </Toast>
    </ToastContainer>
    </div>
  )
}

export default ViewTeam