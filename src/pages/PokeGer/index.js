import axios from 'axios'
import { useEffect } from 'react'

const PokeGer = () => {

  const gens = [1,2,3,4,5,6,7,8]

  const name = 'teka'
  const getPokemons = async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    console.log(res.data)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <div>
      <h1>Gerações</h1>
      <div>
        {gens.map((elem, idx) => (
          <div><p>Gen {elem}</p></div>
        ))}
      </div>
    </div>
  )
}

export default PokeGer;