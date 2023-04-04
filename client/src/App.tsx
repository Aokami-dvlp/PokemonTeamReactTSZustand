import SelectPage from "./pages/SelectPage"
import 'bootstrap/dist/css/bootstrap.min.css'
import ViewTeam from "./pages/ViewTeam"
import { useEffect, useState } from "react"
import { IPokemon } from "./components/PokemonSelect"
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"
import { Container, Nav, Navbar } from "react-bootstrap"

function App() {

  return (
    <div >
      <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Pokemon Team Generator</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Select Pokemon</Nav.Link>
            <Nav.Link as={Link} to='/view-team'>View Team</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

      

    <main>
      <Routes>
        <Route path='/' element={<SelectPage/>}/>
        <Route path='/view-team' element={<ViewTeam/>}/>
      </Routes>
    </main>
     </Router>
    </div>
  )
}

export default App
