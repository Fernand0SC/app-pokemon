import { useState, useEffect } from 'react'
import './App.css'
import { Button, Container } from 'react-bootstrap'

function App() {
  const [pokemones, setPokemones] = useState([])
  const [pokemon, setPokemon] = useState(null)





  const getAllPokemon = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=200&limit=150"
    )
    const data = await response.json()
    setPokemones(data.results)
    console.log(data.results)
  }




  const getPokemon = async (pokemon) => {
    const response = await fetch(
      pokemon.url
    )
    const data = await response.json()
    setPokemon(data)
    console.log(data)
  }

  useEffect(() => {
    getAllPokemon()
  }, [])






  return (
    <>
      <Container>
        <h2>Pokemon</h2>
        {
          pokemones.map((poke) => (
            <Button
              key={poke.name}
              className="m-2"
              onClick={() => getPokemon(poke)}
            >
              {poke.name}
            </Button>
          ))
        }
        {pokemon && (
          <div className="mt-4 text-center">
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Peso: {pokemon.weight}</p>
          </div>
        )}
      </Container>
    </>
  )
}

export default App