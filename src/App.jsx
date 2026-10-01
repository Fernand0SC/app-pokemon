import { useState, useEffect } from 'react'
import './App.css'
import { Card } from 'react-bootstrap'
//https://pokeapi.co/api/v2/pokemon/pikachu


function App() {

  const [pokemon, setPokemon] = useState({})

  const buscarPokemon = async () =>{

    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/pikachu"
    )
   
    
    
    const data = await response.json()
    setPokemon(data)
    console.log(data)

  }

  useEffect(() =>{
    buscarPokemon()

},[])

  return (
    <>

      <Card>
        <Card.Body>
          <Card.Img src={pokemon.sprites?.front_default} />

          <Card.Title>
            Nombre: {pokemon.name}
          </Card.Title>

          <Card.Text>
            ID: {pokemon.id}
          </Card.Text>

          <Card.Text>
            Peso: {pokemon.height}
          </Card.Text>


        </Card.Body>


      </Card>

  
    </>
  )
}

export default App